function errorHandler(err, req, res, next) {
  let msg = "";
  let code = "";
  console.log(err, "err from err Handler", err.name);
  let errors = [];
  switch (err.name) {
    case "SequelizeValidationError":
      err.errors.forEach((el) => {
        errors.push(el.message);
      });
      code = 400;
      msg = `${err.errors[0].message}`;
      break;

    case "SequelizeUniqueConstraintError":
      code = 400;
      msg = `${err.errors[0].message}`;
      if (err.errors[0].message === "email must be unique") {
        msg = "Email is already registered!";
      }
      break;

    case "Wrong Email or Password":
      code = 404;
      msg = "Wrong Email or Password";
      break;

    case "Not Found":
      code = 404;
      msg = "Data not found";
      break;

    case "Unauthenticated":
      code = 401;
      msg = "Unauthenticated. You need to login first";
      break;

    case "Not Authorized":
      code = 403;
      msg = "You are not Authorized";
      break;

    case "Bad Request":
      code = 400;
      msg = "Please input email and/or password";
      break;
      
    default:
      code = 500;
      msg = "Internal Server Error";
      break;
  }

  return res.status(code).json({ msg });
}

module.exports = errorHandler