import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/user.routes.js';
import productRoutes from './src/routes/product.routes.js';
import orderRoutes from './src/routes/order.routes.js';
import cartRoutes from './src/routes/cart.routes.js';
import paymentRoutes from './src/routes/payment.routes.js';
import reviewRoutes from './src/routes/review.routes.js';
dotenv.config()

//ititialization
const app = express()

//database connection
connectDB();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/order',orderRoutes)
app.use('.api/v1/cart',cartRoutes)
app.use('.api/v1/payment',paymentRoutes)
app.use('/api/v1/product',reviewRoutes)



//start the server
const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})