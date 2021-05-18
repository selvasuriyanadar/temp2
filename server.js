import express from 'express';
import dotenv from 'dotenv';
import installHandler from './api_handler.js';

dotenv.config();
const app = express();

installHandler(app);

const port = process.env.API_PORT || 8000;

app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});
