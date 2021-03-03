const express = require('express')
const router = express.Router()
const MethodologyDetailController = require("../controllers/methodologyDetailController")
const UserAuthorization = require('../middlewares/userAuthorization')

router.get("/", MethodologyDetailController.methodologyDetailFindAll)
router.get("/:id", MethodologyDetailController.methodologyDetailFindOne)
router.post("/", UserAuthorization, MethodologyDetailController.methodologyDetailCreate)
router.put("/:id", UserAuthorization, MethodologyDetailController.methodologyDetailEdit)
router.delete("/:id", UserAuthorization, MethodologyDetailController.methodologyDetailDelete)

module.exports = router