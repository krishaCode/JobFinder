const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsControllers');

// GET /api/jobs/ -> list all jobs
router.get('/', jobsController.getAllJobs);
router.post('/', jobsController.insertJob);
router.get('/:id', jobsController.getByID);
router.put('/:id', jobsController.updateJobs);

module.exports = router;