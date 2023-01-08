const express = require("express");

const authController = require("../controllers/auth");

const registerController = require("../controllers/register");

const usersController = require("../controllers/users");

const updateController = require("../controllers/update");

const deleteController = require("../controllers/delete");

const userExistMiddleware = require("../middleware/userExist");

const cookieMiddleware = require("../middleware/preCookie");

const router = express.Router();

router.post(
  "/register",
  userExistMiddleware.userExist,
  registerController.register
);

router.get("/", usersController.users);

router.post("/update", updateController.update);

router.delete("/delete", deleteController.delete);

router.post("/auth", cookieMiddleware.preCookie, authController.auth);

module.exports = router;
