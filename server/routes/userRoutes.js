const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const UserAuthorization = require('../middlewares/userAuthorization')
const userAuthentication = require('../middlewares/userAuthentication')

router.post("/login", userController.userLogin)

router.use(userAuthentication)
router.post("/register", UserAuthorization, userController.userCreate)
router.get("/", UserAuthorization, userController.userFindAll)
router.get("/:id", UserAuthorization, userController.userFindOne)
router.put("/:id", UserAuthorization, userController.userEdit)
router.delete("/:id", UserAuthorization, userController.userDelete)

module.exports = router