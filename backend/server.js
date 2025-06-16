import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import router from './routes/product.routes.js';

dotenv.config();

const app = express(); //creates an express application - web framework
const port = process.env.PORT || 5000;

app.use(express.json()) //allows us to accept json data in the request body

app.use("/api/products", router);

app.listen(port, () =>{
  connectDB();
  console.log(`Server started at http://localhost:${port}`); 
}) //listen(callback?: (error?: Error) => void): Server<typeof IncomingMessage, typeof ServerResponse> 


