const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsControllers');

// GET /api/jobs/ -> list all jobs
router.get('/', jobsController.getAllJobs);

module.exports = router;