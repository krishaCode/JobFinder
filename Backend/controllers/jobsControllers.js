// models file is `jobsModels.js` in /models
const Job = require('../models/jobsModels');

const getAllJobs = async (req, res, next) => {
  console.log('DEBUG: GET /api/jobs called');
  try {
    const jobs = await Job.find();
    console.log('DEBUG: Jobs.find() returned', Array.isArray(jobs) ? jobs.length : typeof jobs);

    // Return 200 and an empty array when no docs exist
    if (!jobs || jobs.length === 0) {
      return res.status(200).json({ jobs: [] });
    }

    return res.status(200).json({ jobs });
  } catch (err) {
    console.error('ERROR getting jobs:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllJobs = getAllJobs;