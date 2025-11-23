const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/workersControllers');

// GET /api/workers/ -> list all workers
router.get('/', workersController.getAllWorkers);
router.post('/', workersController.insertWorker);
router.get('/:id', workersController.getByID);
router.put('/:id', workersController.updateWorkers);
router.delete('/:id', workersController.deleteWorker);
module.exports = router;