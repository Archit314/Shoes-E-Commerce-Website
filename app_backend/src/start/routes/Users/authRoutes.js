import express from 'express';
const authRoutes = express.Router();

import { logout, removeAccount, signIn, signUp } from '../../../app/controllers/Users/UserController.js';

authRoutes.post('/sign-up', signUp);
authRoutes.post('/sign-in', signIn);
authRoutes.get('/logout', logout);
authRoutes.get('/account/:id/remove', removeAccount)

export default authRoutes