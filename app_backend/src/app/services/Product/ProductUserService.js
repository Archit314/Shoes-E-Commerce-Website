const db = await import('../../../models/index.js')
const {Product} = db.default

export default class ProductUserService {

    async getAllProducts(){

        const products = await Product.findAll()

        if(products.length == 0){
            return {status: 422, message: `Product not found`}
        }

        return {status: 200, message: `Products fetched successfully`, data: products}
    }
}