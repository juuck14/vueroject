const express2 = require("express");
const router = express2.Router();

const ctrl = require("./home.ctrl")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", ctrl.output.index)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/login", ctrl.output.login)
router.post("/login", ctrl.process.login)

module.exports = router