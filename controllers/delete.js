const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

exports.delete = async (req, res) => {
  const mobile = req.body.delete_number;
  console.log(mobile);
  db.query(`DELETE FROM persons WHERE mobile = "${mobile}"`, (err) => {
    if (err) {
      console.log(err);
      res.send("ERROR IN DELETION");
    } else {
      console.log("DELETED!!!!");
      res.send("DELETED");
    }
  });
};
