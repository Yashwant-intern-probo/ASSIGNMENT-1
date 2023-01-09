const mysql = require("mysql2");

const jwt = require("jsonwebtoken");

const db = require("../connection");

const { promisify } = require("util");

exports.preCookie = async (req, res, next) => {
  const obj = req.cookies;

  const keys = Object.keys(obj);

  const token = obj[keys[0]];
  try {
    if (req.cookies.jwt) {
      const decode = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      console.log("Phone No.", decode);
      res.send(
        `TOKEN ALREADY EXISTS ON PHONE NUMBER :- ${JSON.stringify(decode)}`
      );
      return;
    } else {
      return next();
    }
  } catch (error) {
    console.log(error);
  }
};
