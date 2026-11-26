import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import connectCloudinary from './config/cloudinary.js';
import { ensureSchema } from './config/db.js';
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

await connectCloudinary();
await ensureSchema();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Quick.ai Server is Live!'));

app.use(requireAuth());

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
