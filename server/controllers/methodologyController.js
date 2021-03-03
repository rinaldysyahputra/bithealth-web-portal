const { Methodology, Methodology_Detail } = require("../models");

class MethodologyController {
  static methodologyFindAll(req, res, next) {
    Methodology.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static methodologyFindOne(req, res, next) {
    Methodology.findOne({
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
  static methodologyCreate(req, res, next) {
    Methodology.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static methodologyEdit(req, res, next) {
    Methodology.update(req.body, {
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
  static methodologyDelete(req, res, next) {
    Methodology.destroy({
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

module.exports = MethodologyController;
