import express from 'express';
const brandAdminRoutes = express.Router()

import { addBrand } from '../../../app/controllers/Brand/BrandAdminController.js';

brandAdminRoutes.post('/add', addBrand)

export default brandAdminRoutes