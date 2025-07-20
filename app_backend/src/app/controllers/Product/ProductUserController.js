import ProductUserService from "../../services/Product/ProductUserService.js";

export const productList = async (req, res) => {

    try {
        
        const productUserService = new ProductUserService()
        const getAllProducts = await productUserService.getAllProducts()

        return res.status(getAllProducts.status).json({status: getAllProducts.status, message: getAllProducts.message, data: getAllProducts.data})
    } catch (error) {
        console.error('Error in User product Controller: productList', error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
}