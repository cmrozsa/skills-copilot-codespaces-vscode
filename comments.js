// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/comments');

// Route: /api/posts/:id/comments
// Method: GET
// Desc: Get all comments for a post
router.route('/posts/:id/comments')
    .get(helpers.getComments);

// Route: /api/posts/:id/comments
// Method: POST
// Desc: Create a new comment for a post
router.route('/posts/:id/comments')
    .post(helpers.createComment);

// Route: /api/posts/:id/comments/:comment_id
// Method: GET
// Desc: Get a comment for a post
router.route('/posts/:id/comments/:comment_id')
    .get(helpers.getComment);

// Route: /api/posts/:id/comments/:comment_id
// Method: PUT
// Desc: Update a comment for a post
router.route('/posts/:id/comments/:comment_id')
    .put(helpers.updateComment);

// Route: /api/posts/:id/comments/:comment_id
// Method: DELETE
// Desc: Delete a comment for a post
router.route('/posts/:id/comments/:comment_id')
    .delete(helpers.deleteComment);

// Export module
module.exports = router;

