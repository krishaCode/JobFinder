import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './card.css'

// Card component: renders a single job inside the advertiser-style card layout
function Card({ job, onDelete }) {
  const { _id, title, description, company, location, salary, postedDate, phoneNo } = job || {}
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!_id) return
    if (!window.confirm('Are you sure you want to delete this job?')) return
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${_id}`)
      if (typeof onDelete === 'function') onDelete(_id)
      else navigate('/jobs')
    } catch (err) {
      console.error('Failed to delete job', err)
    }
  }

  const handleUpdate = () => {
    if (!_id) return
    navigate(`/updatejobs/${_id}`, { state: { job } })
  }

  return (
    <div className="col">
      <div className="service-card">
        <h3>{company}</h3>
        <h3>{title}</h3>
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

export default Card