const db = await import('../../../models/index.js')
const {Category} = db.default

export default class CategoryAdminService {

    async createCategory(name) {

        const newCategory = new Category({
            name: name
        })

        await newCategory.save()

        if(!newCategory){
            return {status: 422, message: 'Category creation failed'};
        }

        return {status: 200, message: 'Category created successfully', date: newCategory};
    }

    async updateCategory(id, name) {

        const category = await Category.findByPk(id);
        if (!category) {
            return { status: 422, message: 'Category not found' };
        }

        category.name = name;
        await category.save();

        return { status: 200, message: 'Category updated successfully', data: category };
    }
}