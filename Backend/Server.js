const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const jobsRoutes = require('./routes/jobsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/jobs", jobsRoutes);
mongoose.connect(process.env.MongoDB_URI, ).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});