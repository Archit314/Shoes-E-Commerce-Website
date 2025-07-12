const db = await import('../../../models/index.js')
const {Brand} = db.default

export default class BrandAdminService {

    async addBrand(name){

        try {
            const newBrand = new Brand({
                name: name
            })

            await newBrand.save()

            if(!newBrand){
                return { status: 422, message: 'Failed to create brand' };
            }

            return { status: 200, message: 'Brand created successfully', data: newBrand };
        } catch (error) {
            console.error('[BrandAdminService]: Error in addBrand:', error);
            return { status: 500, message: 'Internal Server Error' };
        }
    }
}