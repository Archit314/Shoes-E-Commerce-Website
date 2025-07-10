import 'dotenv/config';
import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();

import { connectDb } from './app/provider/aiven database/databaseConnection.js';
import authRoutes from './start/routes/Users/authRoutes.js';
import { startPingScheduler } from './app/schedulers/pingScheduler.js';
import categoryUserRoutes from './start/routes/Categories/categoryUserRoutes.js';
import categoryAdminRoutes from './start/routes/Categories/categoryAdminRoutes.js';
import mediaAdminRoutes from './start/routes/Media/mediaAdminRoutes.js';

app.use(express.json())
app.use(cookieParser())

app.get('/ping', (req, res) => {
  console.log('[Server]: Ping route hit');
  res.status(200).json({ message: 'Pong, your server is Alive!' });
})

app.use('/v1/api/user', authRoutes)
app.use('/v1/api/category', categoryUserRoutes)
app.use('/v1/api/admin/category', categoryAdminRoutes)
app.use('/v1/api/admin/media', mediaAdminRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  connectDb()
  startPingScheduler()
});