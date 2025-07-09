import CategoryUserService from "../../services/Category/CategoryUserService.js";

export const list = async (req, res) => {

    try {
        
        const categoryUserService = new CategoryUserService();
        const getAllCategories = await categoryUserService.getAllCategories()
        if(getAllCategories.status !== 200){
            return res.status(getAllCategories.status).json({status: getAllCategories.status, message: getAllCategories.message})
        }

        return res.status(getAllCategories.status).json({status: getAllCategories.status, message: getAllCategories.message, data: getAllCategories.data});
    } catch (error) {
        console.error('Error in User Category Controller: List', error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
}