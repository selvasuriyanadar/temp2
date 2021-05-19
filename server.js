import express from 'express';
import dotenv from 'dotenv';
import installHandler from './view/api_handler.js';
dotenv.config();
const app = express();

const ui_origin = process.env.UI_ORIGIN || 'http://localhost:3000';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ui_origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

installHandler(app);

const port = process.env.API_PORT || 8000;

app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});
