const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmark.controller');

router.get('/:user', bookmarkController.getByUser);
router.post('/add/:userId/:videoId', bookmarkController.set);
router.delete('/:userId/:videoId', bookmarkController.deleteMark);

module.exports = router;