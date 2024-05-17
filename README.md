# Customer Delivery App Documentation

## Introduction

The Customer Delivery App is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.The application ensures data integrity by preventing duplicate entries based on the user's email address.Users can register, provide their email, favorite number, and opt-in for alerts.The application provides feedback to users through toasts or alerts, informing them about successful data addition or duplicate entry prevention.

## Features

1. **User Registration**: Users can register by providing their email, a favorite number, and opting in for alerts.

2. **Duplicate Entry Prevention**: The application prevents duplicate entries in the database by checking for existing records with the same email address.

3. **Feedback Mechanism**: Users receive feedback via toasts or alerts upon successful data addition or when a duplicate entry is prevented.

4. **View Website**: Users can view the website by accessing the URL `http://localhost:3000/`.

5. **Data Retrieval**: Users can view full database details by accessing the URL `http://localhost:3000/fetch`.

## Technology Stack

- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js and Express.js for server-side logic and API development.
- **Database**: MongoDB for storing user data as documents.
- **Communication**: Axios for handling HTTP requests between frontend and backend.
## Workflow

### Frontend (React)

1. **Form Creation:** Create a form with fields for email, Boolean preference (alert box or toast notification), and favorite number.
2. **Form Validation:** Implement basic form validation to ensure all fields are filled correctly.
3. **Submission:** Use Axios to send the form data to the backend API.

### Backend (Node.js & Express)

1. **API Endpoint:** Set up an API endpoint to receive form submissions.
2. **Data Validation:** Validate the incoming data.
3. **Duplicate Check:** Use Mongoose to check if the email already exists in the database. If it does, return an error response.
4. **Data Storage:** If the email is unique, store the data in the MongoDB database.

### Database (MongoDB)

1. **Schema Design:** Design a schema using Mongoose that includes fields for email, Boolean value, and favorite number.

## Detailed Steps

### React Component

1. Create a form component with state variables for email, Boolean preference, and favorite number.
2. Implement onChange handlers to update state variables based on user input.
3. Implement an onSubmit handler to send data to the backend API using Axios.

### Express API

1. Set up an Express server with a POST endpoint for form submissions.
2. Use Mongoose to define a schema and model for the user data.
3. In the POST endpoint handler, validate the request body and check for the existence of the email in the database.
4. If the email is found, respond with a 200 status and an error message.
5. If the email is not found, save the new user data to the database and respond with a success message.

## Database Schema

### `users` Collection

- **email**: String (required, unique)
- **favoriteNumber**: Number (required)
- **alert**: Boolean (required)

## Frontend Components

1. **Registration Form Component**: Allows users to input their email, favorite number, and checkbox for alerts.

2. **Feedback Component**: Displays toasts or alerts to provide feedback to users.

## Backend Routes

1. **POST `/api/user/add`**: Endpoint for adding a new user. Checks for duplicate entries and adds the user data to the database.

2. **POST `/api/user/fetch`**: Endpoint for fetching all user data from the database.

## Installation and Deployment

1. Clone the project repository from GitHub.
2. Install dependencies using `npm install` in both the client and server directories.
3. Start the backend server using `npm start` in the server directory.
4. Start the frontend development server using `npm start` in the client directory.
5. Access the application in your web browser at `http://localhost:3000`.
