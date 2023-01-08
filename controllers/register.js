const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

exports.register = async (req, res) => {
  try {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    const url = req.body.url;
    console.log(fname, lname, email, mobile);
    db.query(
      `INSERT INTO persons (fname,lastname,email,mobile,u_image) VALUES ("${fname}","${lname}","${email}","${mobile}","${url}")`,
      (err) => {
        if (err) {
          console.log(err);
          res.send("ERROR IN INSERT!!!!");
        } else {
          console.log("INSERT SUCCESSFUL");
          res.send("INSERTED!!!!");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
