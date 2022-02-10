const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/user");

const path = require("path");
app.use(express.static("./build/"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT ||"5000", () => {
  console.log("Backend is running");
});
