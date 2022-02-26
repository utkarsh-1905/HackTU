require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const morgan = require("morgan");
const paymentRoutes = require("./routes/paymentRoutes");

const dbUrl = process.env.DB_URL;
// || "mongodb://localhost:27017/HackTU"
const connectDB = async () => {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connectDB()
  .then(() => console.log("Connected to Database"))
  .catch((e) => new ExpressError(e));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/payment", paymentRoutes);

app.listen(3005, () => console.log("Server is running on port 3005"));
