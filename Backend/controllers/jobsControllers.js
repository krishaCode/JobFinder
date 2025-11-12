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

// data Insert
const insertJob = async (req, res, next) => {
  const { title, description, company, location, salary, postedDate, phoneNo } = req.body;

  let newJob;
  try {
    newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
      postedDate,
      phoneNo,
    });
    await newJob.save();
  } catch (err) {
    console.error('ERROR inserting job:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

  if (!newJob) {
    return res.status(500).json({ message: 'Unable to insert job' });
  }
  return res.status(201).json({ job: newJob });
};

// Get job by ID
const getByID = async (req, res, next) => {
  const id = req.params.id;
  let job;
  try {
    job = await Job.findById(id);
  } catch (err) {
    console.error('ERROR getting job by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  return res.status(200).json({ job });
};

// Update job by ID
const updateJobs = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, company, location, salary, postedDate, phoneNo } = req.body;

  let job;
  try {
    // findByIdAndUpdate with { new: true } returns the updated document
    job = await Job.findByIdAndUpdate(
      id,
      {
        title,
        description,
        company,
        location,
        salary,
        postedDate,
        phoneNo,
      },
      { new: true }
    );
  } catch (err) {
    console.error('ERROR updating job by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

  if (!job) {
    return res.status(404).json({ message: 'Unable to update job' });
  }

  return res.status(200).json({ job });
};

//delete job Details

const deleteJob = async (req, res, next) => {
const id = req.params.id;
let job;

try {
  job = await Job.findByIdAndDelete(id);
}
catch (err) {
  console.error('ERROR deleting job by ID:', err);
}

if (!job) {
    return res.status(404).json({ message: 'Unable to delete job' });
  }

  return res.status(200).json({ job });
}


exports.getAllJobs = getAllJobs;
exports.insertJob = insertJob;
exports.getByID = getByID;
exports.updateJobs = updateJobs;
exports.deleteJob = deleteJob;