require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// 미들웨어
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
