const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// ✅ Load env
dotenv.config();

// ✅ Create app FIRST
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes import (AFTER app created)
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ✅ PRODUCTS (existing)
const products = [
  {
    id: 1,
    name: "Sneakers",
    price: 3000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 2,
    name: "Watch",
    price: 5000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Shirt",
    price: 1500,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
  }
];

// ✅ Product Route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Protected Route
const authMiddleware = require("./middleware/auth");

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Protected data", user: req.user });
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
