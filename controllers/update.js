const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

exports.update = async (req, res) => {
  try {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const url = req.body.url;
    console.log(fname, lname, email, mobile);
    db.query(
      `UPDATE persons SET fname = "${fname}", lastname = "${lname}", email = "${email}", u_image = "${url}" WHERE mobile = "${mobile}"`,
      (err) => {
        if (err) {
          console.log(err);
          res.send("ERROR IN UPDATION");
        } else {
          console.log("UPDATED SUCCESSFULLY!!!");
          res.send("UPDATED");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
