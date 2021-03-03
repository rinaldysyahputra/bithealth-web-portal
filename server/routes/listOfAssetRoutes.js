const express = require('express')
const router = express.Router()
const ListOfAssetController = require("../controllers/listOfAssetController")
const UserAuthorization = require('../middlewares/userAuthorization')

router.get("/", ListOfAssetController.listOfAssetFindAll)
router.get("/:id", ListOfAssetController.listOfAssetFindOne)
router.post("/", UserAuthorization, ListOfAssetController.listOfAssetCreate)
router.put("/:id", UserAuthorization, ListOfAssetController.listOfAssetEdit)
router.delete("/:id", UserAuthorization, ListOfAssetController.listOfAssetDelete)

module.exports = router