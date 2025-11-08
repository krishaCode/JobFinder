// models file is `jobsModels.js` in /models
const Jobs = require('../models/jobsModels');

const getAllJobs = async (req, res, next) => {
let jobs;
try {
  jobs = await Job.find();
} catch (err) {
    console.log(err);
}

if (!job) {
  return res.status(404).json({ message: 'No jobs found' });
}

return res.status(200).json({ jobs });
};

module.exports = {
  getAllJobs
};