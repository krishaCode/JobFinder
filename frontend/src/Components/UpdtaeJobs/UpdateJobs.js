import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateJobs() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [input, setInput] = useState({})

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${id}`)
        const data = res.data
        // backend may return the job directly or wrapped ({ job: { ... } })
        const job = data?.job ?? data
        setInput(job || {})
      } catch (err) {
        console.error('Failed to fetch job', err)
      }
    }

    if (id) fetchHandler()
  }, [id])

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/api/jobs/${id}`, {
            title: String(input.title),
            description: String(input.description),
            location: String(input.location),
            company: String(input.company),
            salary: input.salary === '' ? undefined : Number(input.salary),
            postedDate: input.postedDate || undefined,
            phoneNo: String(input.phoneNo)
    })
    .then(res => res.data)
  };

  const handleChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting job', input)
            sendRequest().then(() =>
            navigate('/jobs'));
        } catch (err) {
            console.error('Failed to post job', err)
            // you can set error state here to show to user
        }
    };

  return (
    <>
            <div>UpdateUser</div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' onChange={handleChange} required value={input.title} placeholder='Title' />
                <input type='text' name='description' onChange={handleChange} required value={input.description} placeholder='Description' />
                <input type='text' name='location' onChange={handleChange} required value={input.location} placeholder='Location' />
                <input type='text' name='company' onChange={handleChange} required value={input.company} placeholder='Company' />
                <input type='number' name='salary' onChange={handleChange} value={input.salary} placeholder='Salary' />
                <input type='date' name='postedDate' onChange={handleChange} value={input.postedDate} />
                <input type='text' name='phoneNo' onChange={handleChange} required value={input.phoneNo} placeholder='Phone' />
                <button type='submit'>Post Job</button>
            </form>
        </>
  )
}

export default UpdateJobs