const { Asset, List_of_Asset, Methodology_Detail } = require("../models");

class ListOfAssetController {
  static assetFindAll(req, res, next) {
    Asset.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static assetFindOne(req, res, next) {
    Asset.findOne({
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

  static assetCreate(req, res, next) {
    Asset.create(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static assetEdit(req, res, next) {
    Asset.update(req.body, {
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
  static assetDelete(req, res, next) {
    Asset.destroy({
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
