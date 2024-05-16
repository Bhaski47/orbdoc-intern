# Customer Discovery App Documentation

## Introduction

The Customer Discovery App is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.The application ensures data integrity by preventing duplicate entries based on the user's email address.Users can register, provide their email, favorite number, and opt-in for alerts.The application provides feedback to users through toasts or alerts, informing them about successful data addition or duplicate entry prevention.

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
