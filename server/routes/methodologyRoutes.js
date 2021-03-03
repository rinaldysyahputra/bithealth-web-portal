const express = require('express')
const router = express.Router()
const MethodologyController = require("../controllers/methodologyController")
const UserAuthorization = require('../middlewares/userAuthorization')

router.get("/", MethodologyController.methodologyFindAll)
router.get("/:id", MethodologyController.methodologyFindOne)
router.post("/", UserAuthorization, MethodologyController.methodologyCreate)
router.put("/:id", UserAuthorization, MethodologyController.methodologyEdit)
router.delete("/:id", UserAuthorization, MethodologyController.methodologyDelete)

module.exports = router