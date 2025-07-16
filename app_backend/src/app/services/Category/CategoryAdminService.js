const db = await import('../../../models/index.js')
const {Category, Brand, sequelize} = db.default

export default class CategoryAdminService {

    async createCategory(name, brandIds = []) {

        const transaction = await sequelize.transaction()

        try {

            const newCategory = await Category.create({
                name: name
            }, { transaction })

            if(brandIds && brandIds.length > 0){
                const brands = await Brand.findAll({
                    where: {
                        id: brandIds
                    },
                    transaction
                })

                if(brands.length !== brandIds.length){
                    const foundIds = brands.map((brand) => brand.id)
                    const missingIds = brandIds.filter((id) => !foundIds.includes(id))

                    await transaction.rollback()
                    return {status: 422, message: `Invalid brand IDs: ${missingIds.join(', ')}`}
                }

                await newCategory.addBrands(brands, { transaction })
            }

            await transaction.commit()

            return {status: 200, message: `Category created successfully`, data: newCategory}
            
        } catch (error) {
            console.error('Error in CategoryAdminService: createCategory', error);
            await transaction.rollback();
            
            console.error('Rollback transaction due to error:', error);
            return {status: 500, message: 'Internal Server Error'};
        }
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