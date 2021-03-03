const { User } = require("../models");

const UserAuthorization = (req, res, next) => {
  User.findByPk(req.userData.id)
    .then((data) => {
      if (!data) {
        next({ name: "Not Found" });
      } else if (req.userData.role !== "Admin") {
        next({ message: "Access Denied" });
      } else {
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = UserAuthorization;
