import UserService from "../../services/user/UserService.js";

export const signUp = async (req, res) => {

    try {
        
        const {fullName, email, password, confirmPassword} = req.body;

        if(!fullName || !email || !password || !confirmPassword) {
            return res.status(422).json({status: 422, message: "All fields are required"});
        }

        if(password.length < 6) {
            return res.status(422).json({status: 422, message: "Password must be at least 6 characters long"});
        }

        if(password !== confirmPassword) {
            return res.status(422).json({status: 422, message: "Passwords do not match"});
        }

        const userService = new UserService()
        const createdUser = await userService.userSignUp(fullName, email, password, confirmPassword, res)
        
        if(createdUser.status != 200){
            return res.status(422).json({status: createdUser.status, message: createdUser.message})
        }

        return res.status(200).json({status: 200, message: 'User signed up successfully', data: {fullName, email}});
    } catch (error) {
        console.log('Error in UserController signUp:', error.message);
        return res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

export const signIn = async (req, res) => {

    try {

        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(422).json({status: 422, message: "Email and password are required"});
        }

        return res.status(200).json({status: 200, message: 'User signed in successfully', data: {email}});
        
    } catch (error) {
        console.log('Error in UserController signIn:', error.message);
        return res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}