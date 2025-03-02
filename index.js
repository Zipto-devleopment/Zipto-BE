// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const internshipRoutes = require("./routes/internshipRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" })); // Handle large signature data

app.use("/api/internships", internshipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

