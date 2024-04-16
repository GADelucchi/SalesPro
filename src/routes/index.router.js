// Imports
const { Router } = require("express");
const ViewRouter = require("./view.routerGeneric");

// Declaration
const router = Router()
const viewsRouter = new ViewRouter()

// Code
router.use(`/`, viewsRouter.getRouter())

// Exports
module.exports = router