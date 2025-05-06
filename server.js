// server.js
import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Database connection
connectDB();

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});