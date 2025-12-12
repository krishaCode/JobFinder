import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../jobs/card.css'

// WorkerCard component: renders a single worker inside the advertiser-style card layout
function WorkerCard({ worker, onDelete }) {
  const { _id, name, jobRole, location, salary, postedDate, description, phoneNo } = worker || {}
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!_id) return
    if (!window.confirm('Are you sure you want to delete this worker?')) return
    try {
      await axios.delete(`http://localhost:5000/api/workers/${_id}`)
      if (typeof onDelete === 'function') onDelete(_id)
      else navigate('/workers')
    } catch (err) {
      console.error('Failed to delete worker', err)
    }
  }

  const handleUpdate = () => {
    if (!_id) return
    navigate(`/updateworkers/${_id}`, { state: { worker } })
  }

  return (
    <div className="col">
      <div className="service-card">
        <div className="icon-wrapper">
          <i className="fa-solid fa-user"></i>
        </div>
        <h3>{name}</h3>
        <p><strong>Job Role:</strong> {jobRole}</p>
        <p>{description}</p>
        <p><strong>Phone No:</strong> {phoneNo}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Salary:</strong> {salary}</p>
        <p><strong>Posted:</strong> {postedDate}</p>
        <div style={{ marginTop: 12 }}>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate} style={{ marginLeft: 8 }}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default WorkerCard
