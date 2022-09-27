const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

router.get("/", postCtrl.index); //all posts
router.get("/:id", postCtrl.show); //one post
router.get("/", postCtrl.create);
router.get("/:id", postCtrl.update);
router.get("/:id", postCtrl.destroy);

module.exports = router;