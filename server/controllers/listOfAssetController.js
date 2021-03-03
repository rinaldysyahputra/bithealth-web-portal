const { Asset, List_of_Asset, Methodology_Detail } = require("../models");

class ListOfAssetController {
  static listOfAssetFindAll(req, res, next) {
    List_of_Asset.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static listOfAssetFindOne(req, res, next) {
    List_of_Asset.findOne({
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

  static listOfAssetCreate(req, res, next) {
    List_of_Asset.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static listOfAssetEdit(req, res, next) {
    List_of_Asset.update(req.body, {
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
  static listOfAssetDelete(req, res, next) {
    List_of_Asset.destroy({
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

module.exports = ListOfAssetController;
