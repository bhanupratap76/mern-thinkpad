import express from 'express'
import cors from 'cors';
import dotenv from "dotenv";

import noteRoutes from './routes/noteRoutes.js'
import { connectDB } from '../config/db.js';
import rateLimiter from './middleware/rateLimiter.js'


dotenv.config();


const app = express();
const PORT  = process.env.PORT || 5001

//middleware
app.use(cors({
  origin:"http://localhost:5173"
}));
app.use(express.json());// this middleware will parse json bodies
app.use(rateLimiter);



app.use("/api/notes",noteRoutes)



connectDB().then(()=>{
  app.listen(PORT,()=>{
  console.log("Server is running on the port :",PORT);
})
})






