import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get('http://localhost:5000/api/jobs')
      .then((res) => {
        if (!mounted) return;
        setJobs(res.data.jobs || []);
      })
      .catch((err) => {
        console.error('Error loading jobs:', err);
        setError('Failed to load jobs');
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="jobs-list">
      {jobs.length === 0 ? (
        <div>No jobs found</div>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id || job.id}>
              <strong>{job.title}</strong> — {job.company} ({job.location})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayJobs;