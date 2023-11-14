import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import dbConnect from './config/db.js';
import productsRoute from './routes/productsRoute.js';
import clientRoute from './routes/clientRoute.js';
import corsOptions from './config/corsOptions.js';
const port = process.env.PORT || 5000;

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
  origin: corsOptions,
  // origin: 'http://localhost:3000',
  optionsSuccessStatus:200,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['X-PINGOTHER', 'Content-Type',"Authorization","Origin", 'HEAD', 'OPTIONS',"Accept","Cache-Control",'Cookie','X-Requested-With'],
  credentials: true
}))

app.use('/api/users', userRoutes);
app.use("/api/product", productsRoute);
app.use("/api/client", clientRoute);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
