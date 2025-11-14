import React from 'react'

function Jobs(props) {
  const { title, description, company, location, salary, postedDate, phoneNo } = props.job;

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
      <hr />
    </div>
  )
}

export default Jobs