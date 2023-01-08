const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

exports.users = async (req, res) => {
  try {
    db.query(`SELECT * FROM PERSONS`, (err, rows) => {
      rows.forEach((row) => {
        console.log(
          row.fname,
          " | ",
          row.lastname,
          " | ",
          row.email,
          " | ",
          row.mobile
        );
      });
      res.send(rows);
    });
  } catch (error) {
    console.log(error);
  }
};
