import bcrypt from 'bcryptjs' // Importing bcrypt for hashing passwords
import jwt from 'jsonwebtoken' // Importing jsonwebtoken for creating JWT tokens

export default class UserService{

    async generateHashPassword(password){

        try {
            const salt = await bcrypt.genSalt(10)   // This method is to generate a random string called a "salt" which is added to a password before hashing, making the resulting hash unique and more secure against rainbow table attacks
            const encryptedPassword = await bcrypt.hash(password, salt)

            console.log('Password hashed successfully');
            return encryptedPassword
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async generateJwtToken(tokenPayload, res){

        // Creating JWT token:
        const jwtToken = await jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        })

        // Setting jwt token in user cookies:
        await res.cookie("jwt_token", jwtToken, {
            maxAge: 3600000, // 1 hour (60 * 60 * 1000)
            httpOnly: true, // Prevent xss attacks cross-site scripting attacks
            sameSite: process.env.NODE_ENV !== "development"? "none": "lax", // CSRF attacks cross-site request forgery attacks or // Allows cross-site requests
            secure: process.env.NODE_ENV !== "development" // Ensures cookie is only sent over HTTPS
        })

        console.log('Token generated successfully');
        return jwtToken
    }

    async userSignUp(fullName, email, password, confirmPassword, res){

        // Safety checks it user already exist with email or mobile number
        const existUserWithEmail = await User.findOne({email})
        if(existUserWithEmail){
            return {status: 422, message: `Usre already exist with email: ${email}`}
        }

        const encryptedPassword = await this.generateHashPassword(password)
        if(!encryptedPassword){
            return {status: 500, message: `User signup process failed`}
        }

        // Creating new user on mongo DB cluster:
        const newUser = new User({
            fullName: fullName,
            email: email,
            password: encryptedPassword,
            confirmPassword: confirmPassword
        })

        if(newUser){
            // Generating new JWT token:
            const generatedJwtToken = await this.generateJwtToken({userId: newUser._id, email: newUser.email}, res)
            if(!generatedJwtToken){
                return {status: 422, message: `User registration failed`}
            }
            // Saving new user on mongoDB cluster:
            await newUser.save()
            console.log('user generated successfully');

            // Generating response for frontend:
            const response = {
                userId: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                accessToken: generatedJwtToken
            }
            return {status: 200, message: `User signup successfully`, data: response}
        }
        else{
            return {status: 422, message: `Failed to signup user into our system`}
        }
    }
}