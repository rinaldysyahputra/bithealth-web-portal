const { User } = require("../models/index");
const { verifyToken } = require("../helpers/jwt");

const userAuthentication = (req, res, next) => {
  const { access_token } = req.headers;
  if (access_token) {
    let decode = verifyToken(access_token);
    req.userData = decode;
    User.findByPk(req.userData.id)
      .then((user) => {
        if (!user) {
          next({ name: "Unauthenticated" });
        }
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next({ name: "Not Authorized", message: "Invalid access!" });
  }
};

module.exports = userAuthentication;
