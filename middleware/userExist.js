const mysql = require("mysql2");

const db = require("../connection");

exports.userExist = (req, res, next) => {
  try {
    const mobile = req.body.mobile;
    console.log(mobile);
    db.query(`SELECT * FROM persons WHERE mobile = "${mobile}"`, (err, row) => {
      if (err) {
        console.log(err);
      } else {
        if (row.length >= 1) {
          res.send("USER ALREADY EXIST!!!!");
        } else {
          return next();
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
