import CartUserService from "../../services/Cart/CartUserService.js";

export const addItemToCart = async (req, res) => {
    
    try {
        
        const userId  = req.user.id; // Replace with req.user.id if using authentication
        const { productVariantId, quantity } = req.body;

        // // Validate input
        if (!userId || !productVariantId || !quantity || quantity <= 0) {
            return res.status(422).json({status: 422, message: 'Product variant and quantity is required.' });
        }

        const cartUserService = new CartUserService()
        const addedVariant = await cartUserService.addItemToCart(userId, productVariantId, quantity)

       
        return res.status(addedVariant.status).json({status: addedVariant.status, message: addedVariant.message})

    } catch (error) {
        console.error('[CartUserController]: addItemToCart error', error);
        return res.status(500).json({status: 500, message: 'Internal server error' });
    }
};

export const removeItemFromCart = async (req, res) => {

    try {
        const userId = req.user.id;
        const { productVariantId } = req.params;

        if (!productVariantId) {
            return res.status(422).json({status: 422, message: 'Product variant ID is required.' });
        }

        const cartUserService = new CartUserService()
        const removedItem = await cartUserService.removeItem(productVariantId, userId)

        return res.status(removedItem.status).json({status: removedItem.status, message: removedItem.message})

    } catch (error) {
        console.error('[CartUserController]: removeItemFromCart error', error);
        return res.status(500).json({status: 500, message: 'Internal server error' });
    }
};