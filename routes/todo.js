const express = require("express");
const router = express.Router();
const {
  TaskCreate,
  TaskFind,
  TaskDetail,
  TaskDelete,
  TaskUpdate,
} = require("../controllers/ListControllers");

router.get("/", TaskFind);

router.post("/", TaskCreate);

router.get("/:taskID", TaskDetail);

router.delete("/:taskID", TaskDelete);

router.put("/:taskID", TaskUpdate);

module.exports = router;
