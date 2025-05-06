// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import questionRouter from './routes/questionRouter.js'
import submissionRouter from './routes/submissionRouter.js';
import executeCodeRouter from './routes/executeCodeRouter.js';

// Initialize Express app
const app = express();



// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend origin
  credentials: true, // Allow credentials (cookies, auth headers)
})); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routes
app.use('/api/auth', authRouter); // Authentication routes
app.use('/api/questions', questionRouter); // Question-related routes
app.use('/api/submissions', submissionRouter);
// app.use('/api/code', submissionRoutes); // Submission-related routes
app.use('/api', executeCodeRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;
