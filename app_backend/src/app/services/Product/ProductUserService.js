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

    async getProductDetail(productId) {
        try {
            const product = await Product.findByPk(productId, {
                include: [
                    {
                        association: 'media',
                        attributes: ['id', 'url', 'tag', 'meta'],
                    },
                    {
                        association: 'productVariants',
                        include: [
                            {
                                association: 'media',
                                attributes: ['id', 'url', 'tag', 'meta'],
                            }
                        ],
                        attributes: ['id', 'color', 'size', 'price', 'is_active'],
                    }
                ],
            });

            if (!product) {
                return { status: 422, message: 'Product not found' };
            }

            return {status: 200, message: 'Product details fetched successfully', data: product};

        } catch (error) {
            console.error('Error in getProductDetail:', error.message);
            return { status: 500, message: 'Internal Server Error' };
        }
    }
}