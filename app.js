const express = require("express");

const app = express();

const path = require("path");

const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });

const mysql = require("mysql2");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

const db = require("./connection");

db.connect((error) => {
  if (error) console.log(error);
  else console.log("MYSQL connected........!!!");
});

app.use("/user", require("./routes/users"));

app.listen(5000, () => {
  console.log("Server started on port 5000......!!!!!");
});
