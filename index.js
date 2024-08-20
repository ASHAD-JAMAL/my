require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dbConnection } = require("./config/dbConfig");
const contactRoutes = require("./routes/contactRoutes");

const { MONGO_URL, PORT } = process.env;
const app = express();

// Middleware
app.use(cors({
  origin: 'https://my-portfolio-rho-ochre-90.vercel.app', // frontend URL
  methods: ['GET', 'POST'], // Allowed methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

app.use(bodyParser.json());

// MongoDB Connection
dbConnection(MONGO_URL);

// Routes
app.use("/", contactRoutes);

const port = PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
