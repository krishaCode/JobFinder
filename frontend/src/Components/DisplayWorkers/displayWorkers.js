import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import WorkerCard from '../workers/WorkerCard'
import { Link, useLocation } from 'react-router-dom'

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
      
    </>
  )
}

export default DisplayWorkers