const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/user");
const cors = require("cors");

const path = require("path");
app.use(express.static("./build/"));

const MONGO_URL = "mongodb+srv://meenakshi:qazWSX123@cluster0.llhoa.mongodb.net/blog?retryWrites=true&w=majority"
dotenv.config();
app.use(express.json());
app.use(cors())
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
});



app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/user", userRoute);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running");
});
