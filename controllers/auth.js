const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

exports.auth = async (req, res) => {
  console.log("PRESENT COOKIE", req.cookies);
  try {
    const mb = req.body.mobile;
    const token = jwt.sign({ mb }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    console.log("THE TOKEN IS : ", token);

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.cookie("jwt", token, cookieOptions);
    return res.status(200).send({ token });
  } catch (error) {
    console.log(error);
  }
};
