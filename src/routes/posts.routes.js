// src/routes/posts.routes.js

const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");

// Get all posts
router.get("/", postController.getAllPosts);

// Get single post by ID (dynamic route)
router.get("/:postId", postController.getPostById);

module.exports = router;
