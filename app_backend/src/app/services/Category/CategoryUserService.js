const db = await import('../../../models/index.js')
const {Category} = db.default

export default class CategoryUserService {

    async getAllCategories() {

        const categories = await Category.findAll()
        if(categories.length === 0){
            return {status: 422, message: 'No categories found'}
        }

        return {status: 200, message: 'Categories fetched successfully', data: categories}
    }
}