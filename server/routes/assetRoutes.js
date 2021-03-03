const express = require('express')
const router = express.Router()
const ListOfAssetController = require("../controllers/assetController")
const UserAuthorization = require('../middlewares/userAuthorization')

router.get("/", ListOfAssetController.assetFindAll)
router.get("/:id", ListOfAssetController.assetFindOne)
router.post("/", UserAuthorization, ListOfAssetController.assetCreate)
router.put("/:id", UserAuthorization, ListOfAssetController.assetEdit)
router.delete("/:id", UserAuthorization, ListOfAssetController.assetDelete)

module.exports = router