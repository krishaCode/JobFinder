const Worker = require('../models/workersModels');

const getAllWorkers = async (req, res) => {
  console.log('DEBUG: GET /api/workers called');
  try {
    const workers = await Worker.find();
    console.log('DEBUG: Worker.find() returned', Array.isArray(workers) ? workers.length : typeof workers);
    return res.status(200).json({ workers: workers || [] });
  } catch (err) {
    console.error('ERROR getting workers:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const insertWorker = async (req, res) => {
  const { image, name, jobRole, location, salary, postedDate, description, phoneNo } = req.body;
  try {
    const newWorker = await Worker.create({ image, name, jobRole, location, salary, postedDate, description, phoneNo });
    return res.status(201).json({ worker: newWorker });
  } catch (err) {
    console.error('ERROR inserting worker:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getByID = async (req, res) => {
  const id = req.params.id;
  try {
    const worker = await Worker.findById(id);
    if (!worker) return res.status(404).json({ message: 'Worker not found' });
    return res.status(200).json({ worker });
  } catch (err) {
    console.error('ERROR getting worker by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateWorkers = async (req, res) => {
  const id = req.params.id;
  const { image, name, jobRole, location, salary, postedDate, description, phoneNo } = req.body;
  try {
    const worker = await Worker.findByIdAndUpdate(
      id,
      { image, name, jobRole, location, salary, postedDate, description, phoneNo },
      { new: true }
    );
    if (!worker) return res.status(404).json({ message: 'Unable to update worker' });
    return res.status(200).json({ worker });
  } catch (err) {
    console.error('ERROR updating worker by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteWorker = async (req, res) => {
  const id = req.params.id;
  try {
    const worker = await Worker.findByIdAndDelete(id);
    if (!worker) return res.status(404).json({ message: 'Unable to delete worker' });
    return res.status(200).json({ worker });
  } catch (err) {
    console.error('ERROR deleting worker by ID:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllWorkers,
  insertWorker,
  getByID,
  updateWorkers,
  deleteWorker,
};