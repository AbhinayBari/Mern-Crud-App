# MERN CRUD App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) CRUD application that allows users to create, read, update, and delete user data.

## Features

* Create new users
* View all users
* Update user details
* Delete users
* Responsive React frontend
* RESTful API backend
* MongoDB database integration

## Tech Stack

### Frontend:

* React.js
* Axios
* React Router DOM
* Tailwind CSS / CSS

### Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```
## API Endpoints

### User Routes:

* POST `/api/users` - Create user
* GET `/api/users` - Get all users
* GET `/api/users/:id` - Get single user
* PUT `/api/users/:id` - Update user
* DELETE `/api/users/:id` - Delete user

## Project Structure

```bash
mern-crud-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

## Deployment

* Frontend: Vercel 
* Backend: Render 
* Database: MongoDB Atlas

## Future Improvements

* Search & filtering
* Pagination
* Better UI/UX enhancements

## Author

Developed by Abhinay Bari

## License

This project is licensed under the MIT License.
