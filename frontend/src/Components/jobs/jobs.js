import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Jobs(props) {
  const { _id, title, description, company, location, salary, postedDate, phoneNo } = props.job || {}

  const navigate = useNavigate()

  const DeleteHandler = async () => {
    if (!_id) return
    if (!window.confirm('Are you sure you want to delete this job?')) return
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${_id}`)
      if (typeof props.onDelete === 'function') {
        props.onDelete(_id)
      } else {
        navigate('/jobs')
      }
    } catch (err) {
      console.error('Failed to delete job', err)
    }
  }

  const UpdateHandler = () => {
    if (!_id) return
    navigate(`/updatejobs/${_id}`, { state: { job: props.job } })
  }

  return (
    <div className="job-item">
      <h1>Jobs</h1>
      <br />
      <h2>Title: {title}</h2>
      <h3>Company: {company}</h3>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>Posted Date: {postedDate}</p>
      <p>Contact: {phoneNo}</p>
      <button onClick={DeleteHandler}>Delete</button>
      <button onClick={UpdateHandler}>Update</button>
      <hr />
    </div>
  )
}

export default Jobs