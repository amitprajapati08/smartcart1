SmartCart – Practical 8 (Authentication & Testing)
1. Introduction

SmartCart is a full-stack e-commerce application developed using the MERN stack. This practical extends the existing project by implementing authentication, database integration, and API testing.

2. Objectives
Implement user authentication using JWT
Integrate MongoDB Atlas as a cloud database
Secure API routes using middleware
Perform API testing using Postman
Enhance backend structure with models and routes
3. Features
3.1 Authentication
User registration and login
Password hashing using bcrypt
JWT token generation
Protected routes using middleware
3.2 Database Integration
MongoDB Atlas for data storage
Mongoose for schema and model management
3.3 API Testing
Tested all APIs using Postman
Verified authentication and protected routes
3.4 Existing Features (Practical 7)
Product listing
Cart management
Checkout functionality
React frontend with routing
4. Technology Stack
Frontend
React.js
Axios
React Router
Context API
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JSON Web Token (JWT)
bcryptjs
Tools
Postman
GitHub
5. Project Structure
smartcart/
│
├── client/                 # React frontend
│
├── server/                 # Backend
│   ├── models/             # Database models
│   │   └── User.js
│   ├── routes/             # API routes
│   │   └── auth.js
│   ├── middleware/         # Middleware functions
│   │   └── auth.js
│   ├── .env                # Environment variables
│   └── server.js           # Main server file
6. API Endpoints
Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/profile	Protected route
7. Setup Instructions
Step 1: Clone Repository
git clone https://github.com/amitprajapati08/smartcart1.git
Step 2: Install Dependencies
cd server
npm install
Step 3: Configure Environment Variables

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
Step 4: Run Server
node server.js
8. Testing

APIs were tested using Postman:

Register endpoint
Login endpoint
Protected route using JWT token
9. Deployment

The project can be deployed using:

Backend: Render
Frontend: Vercel
10. Challenges Faced
MongoDB connection and authentication errors
Handling JWT tokens securely
Debugging API requests in Postman
11. Conclusion

The SmartCart application was successfully enhanced with authentication and backend improvements. This practical helped in understanding secure API design, database integration, and full-stack development concepts.

12. Author

Amit Prajapat
