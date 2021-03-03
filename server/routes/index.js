const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes') 
const methodologyRoutes = require('./methodologyRoutes')
const methodologyDetailRoutes = require('./methodologyDetailRoutes')
const assetRoutes = require('./assetRoutes')
const listOfAssetRoutes = require('./listOfAssetRoutes')
const userAuthentication = require('../middlewares/userAuthentication')

router.use("/user", userRoutes)

router.use(userAuthentication)
router.use("/list-method",methodologyRoutes)
router.use("/methodology", methodologyDetailRoutes)
router.use("/asset", assetRoutes)
router.use("/list-asset",listOfAssetRoutes)


module.exports = router