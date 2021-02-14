const express = require("express");
const router = express.Router();
const { TaskCreate, TaskFind } = require("../controllers/ListControllers");

router.post("/", TaskCreate);
router.get("/", TaskFind);

module.exports = router;
