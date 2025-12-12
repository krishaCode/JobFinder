const mongoose = require('mongoose');
const { Schema } = mongoose;

const workerSchema = new Schema({
  image: { type: Buffer },
  name: { type: String, required: true },
  jobRole: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  postedDate: { type: Date, default: Date.now },
  description: { type: String, required: true },
  phoneNo: { type: String, required: true }
});

module.exports = mongoose.model('Worker', workerSchema);
