const db = await import('../../../models/index.js')
const {Product} = db.default

export default class ProductUserService {

    async getAllProducts(){

        const products = await Product.findAll({
            include: [
                {
                    association: 'media',
                    attributes: ['id', 'url', 'tag', 'meta'] // pick only necessary fields
                }
            ]
        })

        if(products.length == 0){
            return {status: 422, message: `Product not found`}
        }

        return {status: 200, message: `Products fetched successfully`, data: products}
    }
}