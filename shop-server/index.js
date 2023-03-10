require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// 데이터베이스 커넥션
connection();

// 미들웨어
app.use(express.json());
app.use(cors());

//routes
// app.use("/routes", express.static(userRoutes));
// app.use("/routes", express.static(authRoutes));
// app.use('/example', express.static(path.join(__dirname, 'public')));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
