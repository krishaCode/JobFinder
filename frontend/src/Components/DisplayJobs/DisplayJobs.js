import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import Card from '../jobs/card'
import { Link, useLocation } from 'react-router-dom'
import '../Footer.css'

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
        <section className="advertisers-service-sec py-5">
          <div className="container" style={{ minHeight: '60vh' }}>
            <div className="row section-header text-center">
              <div className="col">
                <h2>Available Jobs</h2>
              </div>
            </div>

            <div className="row mt-4 row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-start">
              {(!jobs || jobs.length === 0) && (
                <div className="col-12 text-center">No jobs found</div>
              )}
              {jobs && jobs.map((job, i) => (
                <Card
                  key={job._id ?? i}
                  job={job}
                  onDelete={(deletedId) => setJobs((prev) => prev.filter((j) => j._id !== deletedId))}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <section className="final-cta">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Job Finder</h3>
              <p>Search and find your dream job now easier than ever. You just need to browse and find it and apply.</p>
              <p className="copyright">© 2025 Jofin. All right reserved</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/contact">Contact</Link>
              </div>

              <div className="footer-column">
                <h4>Subscribe to our newsletter</h4>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button><i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DisplayJobs