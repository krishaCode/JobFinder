import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import WorkerCard from '../workers/WorkerCard'
import { Link, useLocation } from 'react-router-dom'
import '../Footer.css'

const API_URL = 'http://localhost:5000/api/workers'

const fetchHandler = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

function DisplayWorkers() {
  const location = useLocation()
  const [workers, setWorkers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true

    fetchHandler()
      .then((data) => {
        if (!mounted) return
        // backend might return { workers: [...] } or an array directly
        const list = data?.workers ?? data
        const base = Array.isArray(list) ? list : []
        // if a newWorker was passed via navigation state, prepend it (avoid duplicate by _id or by fields)
        const newWorker = location?.state?.newWorker
        if (newWorker) {
          const exists = base.find((w) => {
            if (newWorker._id && w._id) return w._id === newWorker._id
            return w.name === newWorker.name && w.jobRole === newWorker.jobRole && w.postedDate === newWorker.postedDate
          })
          setWorkers(exists ? base : [newWorker, ...base])
        } else {
          setWorkers(base)
        }
      })
      .catch((err) => {
        console.error('Error fetching workers', err)
        setError(err.message || 'Error fetching workers')
      })
      .finally(() => setLoading(false))

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return (
    <>
      <div>Loading workers...</div>
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
                <h2>Available Workers</h2>
              </div>
            </div>

            <div className="row mt-4 row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-start">
              {(!workers || workers.length === 0) && (
                <div className="col-12 text-center">No workers found</div>
              )}
              {workers && workers.map((worker, i) => (
                <WorkerCard
                  key={worker._id ?? i}
                  worker={worker}
                  onDelete={(deletedId) => setWorkers((prev) => prev.filter((w) => w._id !== deletedId))}
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

export default DisplayWorkers