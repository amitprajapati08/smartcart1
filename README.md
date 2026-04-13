SmartCart – Practical 8 (Authentication & Testing)
📌 Project Overview

SmartCart is a full-stack e-commerce application. In this practical, the project is enhanced by adding authentication, database integration, and API testing features.

🎯 Features Implemented
🔐 Authentication
User Registration
User Login
Password hashing using bcrypt
JWT token generation
Protected routes
🗄️ Database
MongoDB Atlas used as cloud database
Mongoose used for schema and models
🧪 API Testing
APIs tested using Postman
Register and Login endpoints verified
Protected route tested with JWT token
🛒 Existing Features (Practical 7)
Product listing
Cart management
Checkout page
React frontend with routing and context API
🛠️ Tech Stack
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
JWT (jsonwebtoken)
bcryptjs
📁 Project Structure
smartcart/
│
├── client/        # React frontend
├── server/        # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/products	Fetch products
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/profile	Protected route
▶️ How to Run
1. Clone Repository
git clone https://github.com/amitprajapati08/smartcart1.git
2. Install Dependencies
cd server
npm install
3. Create .env File
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
4. Run Server
node server.js
🧪 Testing

Use Postman to test:

Register API
Login API
Protected route with JWT token
🚀 Deployment

The project can be deployed using:

Backend: Render
Frontend: Vercel
📚 Learning Outcomes
Implemented secure authentication using JWT
Integrated MongoDB Atlas
Learned API testing using Postman
Understood backend structure and middleware
📌 Author

Amit Prajapat
