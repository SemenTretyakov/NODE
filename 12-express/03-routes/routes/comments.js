const express = require('express');

const router = express.Router();
const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
} = require('../controllers/comments');

router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteSingleCommentHandler);

module.exports = router;
