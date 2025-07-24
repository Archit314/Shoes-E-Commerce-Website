import express from "express"
const cartUserRoutes = express.Router()

import { addItemToCart } from "../../../app/controllers/Cart/CartUserController.js"
import { userAuthMiddleware } from "../../../app/middleware/UserAuth/UserAuthMiddleware.js"

cartUserRoutes.post('/', userAuthMiddleware, addItemToCart)

export default cartUserRoutes