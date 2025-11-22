// models file is `jobsModels.js` in /models
const Job = require('../models/workersModels');

const getAllJobs = async (req, res, next) => {
  console.log('DEBUG: GET /api/workers called');
  try {
    const workers = await Worker.find();
    console.log('DEBUG: Workers.find() returned', Array.isArray(workers) ? workers.length : typeof workers);

    // Return 200 and an empty array when no docs exist
    if (!workers || workers.length === 0) {
      return res.status(200).json({ workers: [] });
    }

    return res.status(200).json({ workers });
  } catch (err) {
    console.error('ERROR getting workers:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// data Insert
const insertJob = async (req, res, next) => {
  const { image, name, jobRole, location, salary, postedDate, description, phoneNo } = req.body;

  let newJob;
  try {
    newJob = new Job({
      image,
      name,
      jobRole,
      location,
      salary,
      postedDate,
      description,
      phoneNo,
    });
    await newJob.save();
  } catch (err) {
    console.error('ERROR inserting worker:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

  if (!newJob) {
    return res.status(500).json({ message: 'Unable to insert worker' });
  }
  return res.status(201).json({ worker: newJob });
};

// Get worker by ID
const getByID = async (req, res, next) => {
  const id = req.params.id;
  let worker;
  try {
    worker = await Worker.findById(id);
  } catch (err) {
    console.error('ERROR getting worker by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
  if (!worker) {
    return res.status(404).json({ message: 'Worker not found' });
  }
  return res.status(200).json({ worker });
};

// Update worker by ID
const updateWorkers = async (req, res, next) => {
  const id = req.params.id;
  const { image, name, jobRole, location, salary, postedDate, description, phoneNo } = req.body;

  let worker;
  try {
    // findByIdAndUpdate with { new: true } returns the updated document
    worker = await Worker.findByIdAndUpdate(
      id,
      {
        image,
        name,
        jobRole,
        location,
        salary,
        postedDate,
        description,
        phoneNo,
      },
      { new: true }
    );
  } catch (err) {
    console.error('ERROR updating worker by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }

  if (!worker) {
    return res.status(404).json({ message: 'Unable to update worker' });
  }

  return res.status(200).json({ worker });
};

//delete worker Details

const deleteWorker = async (req, res, next) => {
const id = req.params.id;
let worker;

try {
  worker = await Worker.findByIdAndDelete(id);
}
catch (err) {
  console.error('ERROR deleting worker by ID:', err);
}

if (!worker) {
    return res.status(404).json({ message: 'Unable to delete worker' });
  }

  return res.status(200).json({ worker });
}


exports.getAllWorkers = getAllWorkers;
exports.insertWorker = insertWorker;
exports.getByID = getByID;
exports.updateWorkers = updateWorkers;
exports.deleteWorker = deleteWorker;