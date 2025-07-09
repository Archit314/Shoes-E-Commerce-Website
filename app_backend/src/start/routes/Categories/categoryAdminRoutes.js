import express from 'express';
import { createCategory, updateCategory } from '../../../app/controllers/Category/CategoryAdminController.js';
const categoryAdminRoutes = express.Router();

categoryAdminRoutes.post('/', createCategory)
categoryAdminRoutes.put('/:id', updateCategory)

export default categoryAdminRoutes