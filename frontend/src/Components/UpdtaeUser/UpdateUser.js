import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateUser() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [input, setInputs] = useState({})

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${id}`)
        const data = res.data
        // backend may return the job directly or wrapped ({ job: { ... } })
        const job = data?.job ?? data
        setInputs(job || {})
      } catch (err) {
        console.error('Failed to fetch job', err)
      }
    }

    if (id) fetchHandler()
  }, [id])

  return (
    <div>UpdateUser</div>
  )
}

export default UpdateUser