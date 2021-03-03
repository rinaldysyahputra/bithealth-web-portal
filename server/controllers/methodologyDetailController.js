const { Methodology_Detail, Methodology, List_of_Asset, Asset } = require("../models");

class MethodologyDetailController {
  static methodologyDetailFindAll(req, res, next) {
    Methodology_Detail.findAll({
      include: [Methodology, List_of_Asset],
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static methodologyDetailFindOne(req, res, next) {
    Methodology_Detail.findOne({
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

  static methodologyDetailCreate(req, res, next) {
    Methodology_Detail.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static methodologyDetailEdit(req, res, next) {
    Methodology_Detail.update(req.body, {
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
  static methodologyDetailDelete(req, res, next) {
    Methodology_Detail.destroy({
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

module.exports = MethodologyDetailController;
