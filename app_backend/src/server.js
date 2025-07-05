import 'dotenv/config';

import express from 'express';
const app = express();

import { connectDb } from './app/provider/aiven database/databaseConnection.js';

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  connectDb()
});