const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const PORT = process.env.PORT || 5000;
require("dotenv").config();


// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});