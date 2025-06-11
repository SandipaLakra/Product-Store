import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import router from './routes/product.routes.js';

dotenv.config();

const app = express(); //creates an express application - web framework

app.use(express.json()) //allows us to accept json data in the request body
console.log("hi");
app.use("/api/products", router);
console.log("hii");
app.listen(5000, () =>{
  connectDB();
  console.log("Server started at http://localhost:5000"); 
}) //listen(callback?: (error?: Error) => void): Server<typeof IncomingMessage, typeof ServerResponse> 


