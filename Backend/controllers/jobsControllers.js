const Jobs = require('../models/Jobs');

const getAllJobs = async (req, res, next) => {
let jobs;
try {
  jobs = await Jobs.find();
} catch (err) {
    console.log(err);
}

if (!jobs) {
  return res.status(404).json({ message: 'No jobs found' });
}