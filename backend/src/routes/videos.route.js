const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videos.controller');

router.get('/', videoController.getAll );
router.get('/:id', videoController.getById );
router.patch('/:id', videoController.updateById );
router.delete('/:id', videoController.deleteById );
router.post('/', videoController.insertNewVideo );

module.exports = router;
