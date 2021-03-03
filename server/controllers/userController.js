const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  static userLogin(req, res, next) {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      next({ name: "Bad Request" });
    }
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (!user) {
          next({ name: "Wrong email or Password" });
        } else if (!comparePassword(password, user.password)) {
          next({ name: "Wrong email or Password" });
        } else {
          const access_token = signToken({
            id: user.id,
            email: user.email,
            role: user.role,
          });
          res.status(200).json({ access_token, message: "Successfully login" });
        }
      })
      .catch((err) => {
        next({ name: "Internal Server Error" });
      });
  }

  static userCreate(req, res, next) {
    const { email, password } = req.body;
    User.create({
      email,
      password,
      role: "User",
    })
      .then((user) => {
        res.status(201).json({
          id: user.id,
          email: user.email,
        });
      })
      .catch((err) => {
        console.log(err, "<<<<< error register controller");
        next(err);
      });
  }

  static userFindAll(req, res, next) {
    User.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static userFindOne(req, res, next) {
    User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static userEdit(req, res, next) {
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (data[0] === 1) {
          res.status(201).json({ message: "Edit Successfully" });
        } else {
          res.status(404).json({ message: "Invalid Data" });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static userDelete(req, res, next) {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (data === 1) {
          res.status(200).json({ message: "Delete Successfully" });
        } else {
          res.status(404).json({ message: "Invalid Data" });
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
