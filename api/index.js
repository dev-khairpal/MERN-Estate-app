import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json())
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongodDB');
}).catch((err)=>{
    console.log(err);
    
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter)

// middleware for error handle :
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.get('/', (req, res)=>{
    res.json({"message": "Hello"})
    console.log('Hello');
    
})



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    
})
