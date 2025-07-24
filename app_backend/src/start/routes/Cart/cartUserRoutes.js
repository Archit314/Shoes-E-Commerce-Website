import express from "express"
const cartUserRoutes = express.Router()

import { addItemToCart, removeItemFromCart } from "../../../app/controllers/Cart/CartUserController.js"
import { userAuthMiddleware } from "../../../app/middleware/UserAuth/UserAuthMiddleware.js"

cartUserRoutes.post('/', userAuthMiddleware, addItemToCart)
cartUserRoutes.delete('/:productVariantId', userAuthMiddleware, removeItemFromCart)

export default cartUserRoutes