import CategoryAdminService from "../../services/Category/CategoryAdminService.js";

export const createCategory = async (req, res) => {

    try {
        const {name} = req.body

        if(!name){
            return res.status(422).json({status: 422, message: 'Category name is required'});
        }

        const categoryAdminService = new CategoryAdminService()
        const createCategory = await categoryAdminService.createCategory(name)
        if(createCategory.status != 200){
            return res.status(createCategory.status).json({status: createCategory.status, message: createCategory.message});
        }

        return res.status(createCategory.status).json({status: createCategory.status, message: createCategory.message, data: createCategory.date});
    } catch (error) {
        console.error('Error in Update Category Controller: createCategory', error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(422).json({ status: 422, message: 'Category name is required' });
        }

        const categoryAdminService = new CategoryAdminService();
        const result = await categoryAdminService.updateCategory(id, name);

        return res.status(result.status).json({status: result.status, message: result.message, data: result.data});

    } catch (error) {
        console.error('Error in Update Category Controller: updateCategory', error)
        return res.status(500).json({ status: 500, message: 'Internal Server Error' })
    }
}