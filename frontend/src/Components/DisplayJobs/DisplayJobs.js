import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import Jobs from '../jobs/jobs'
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:5000/api/jobs'

const fetchHandler = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

function DisplayJobs() {
  const [jobs, setJobs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    fetchHandler()
      .then((data) => {
        if (!mounted) return
        // backend might return { jobs: [...] } or an array directly
        const list = data?.jobs ?? data
        setJobs(Array.isArray(list) ? list : [])
      })
      .catch((err) => {
        console.error('Error fetching jobs', err)
        setError(err.message || 'Error fetching jobs')
      })
      .finally(() => setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return (
    <>
      <div>Loading jobs...</div>
    </>
  )

  if (error) return (
    <>
      <div>Error: {error}</div>
    </>
  )

  return (
    <>
      <div>
        {(!jobs || jobs.length === 0) && (
          <div>No jobs found</div>
        )}
        {jobs && jobs.map((job, i) => (
          <div key={job._id ?? i}>
            <Jobs job={job} />
            <Link to={`/updateuser/${job._id ?? i}`}>update</Link>
      <button>Delete</button>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default DisplayJobs