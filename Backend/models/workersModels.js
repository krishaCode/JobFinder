const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  Image:{ type: Buffer},
  name: { type: String, required: true },
  jobRole: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  postedDate: { type: Date, default: Date.now },
  description: { type: String, required: true },
  phoneNo: { type: Number, required: true }
});

module.exports = mongoose.model('workersModels', jobSchema);
