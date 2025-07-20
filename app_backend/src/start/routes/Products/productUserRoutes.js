import express from 'express';
import { productList } from '../../../app/controllers/Product/ProductUserController.js';
const productUserRoutes = express.Router()

productUserRoutes.get('/list', productList)

export default productUserRoutes