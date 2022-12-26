require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// 데이터베이스 커넥션
connection();

// 미들웨어
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", userRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
