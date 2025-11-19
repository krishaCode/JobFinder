import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import Jobs from '../jobs/jobs'
import { Link, useLocation } from 'react-router-dom'

const API_URL = 'http://localhost:5000/api/jobs'

const fetchHandler = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

function DisplayJobs() {
  const location = useLocation()
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
        const base = Array.isArray(list) ? list : []
        // if a newJob was passed via navigation state, prepend it (avoid duplicate by _id or by fields)
        const newJob = location?.state?.newJob
        if (newJob) {
          const exists = base.find((j) => {
            if (newJob._id && j._id) return j._id === newJob._id
            return j.title === newJob.title && j.company === newJob.company && j.postedDate === newJob.postedDate
          })
          setJobs(exists ? base : [newJob, ...base])
        } else {
          setJobs(base)
        }
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
            <Jobs
              job={job}
              onDelete={(deletedId) => setJobs((prev) => prev.filter((j) => j._id !== deletedId))}
            />
          </div>
        ))}
      </div>
      
    </>
  )
}

export default DisplayJobs