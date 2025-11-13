const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const jobsRoutes = require('./routes/jobsRoutes');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`REQ: ${req.method} ${req.url}`);
    next();
});

// Mount routes at /api/jobs (keep this as requested)
app.use(express.json());
app.use('/api/jobs', jobsRoutes);


// Validate required env
if (!process.env.MongoDB_URI) {
    console.error('ERROR: process.env.MongoDB_URI is not defined. Make sure you start the server from the Backend folder so .env is loaded or set the env var.');
    process.exit(1);
}

// Connect to MongoDB, then start server. Handle common server errors (EADDRINUSE) gracefully.
mongoose.connect(process.env.MongoDB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        server.on('error', (err) => {
            if (err && err.code === 'EADDRINUSE') {
                console.error(`ERROR: Port ${PORT} is already in use. Kill the process using that port or set PORT to a different value.`);
                console.error('On Windows you can run: netstat -aon | findstr :' + PORT + '  then taskkill /PID <pid> /F');
                process.exit(1);
            }
            console.error('Server error:', err);
            process.exit(1);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

