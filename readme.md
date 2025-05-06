# CodeSense

CodeSense is a web application designed to help students and teachers with coding assignments and assessments. The platform allows students to submit their code, receive feedback, and take quizzes to test their understanding of the code they have written. Teachers can create assignments, evaluate submissions, and provide feedback.

## Features

- **User Authentication**: Sign up and log in as a student or teacher.
- **Code Submission**: Submit code for assignments and receive feedback.
- **Quiz Generation**: Automatically generate quizzes based on submitted code to test understanding.
- **AI Feedback**: Receive AI-generated feedback on code submissions.
- **Dashboard**: Separate dashboards for teachers and students to manage assignments and submissions.
- **Real-time Updates**: Get real-time updates on submission status and feedback.

## Technologies Used

- **Frontend**: React, Axios, Monaco Editor
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Google Generative AI

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/CodeSense.git
   cd CodeSense


# Install dependencies
cd backend
npm install

cd ../frontend
npm install

# Set up environment variables

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_API_KEY=your_google_api_key



# Run the backend server
cd backend
npm start

# Run the frontend server
cd ../frontend
npm run dev

Access the application: Open your browser and go to http://localhost:5173 to access the application.

