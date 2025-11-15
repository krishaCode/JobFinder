import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function PostJob() {
    const navigate = useNavigate();
    const [input, setInput] = React.useState({
        title: '',
        description: '',
        location: '',
        company: '',
        salary: '',
        postedDate: '',
        phoneNo: ''
    });

    const handleChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const sendRequest = async () => {
        const payload = {
            title: String(input.title),
            description: String(input.description),
            location: String(input.location),
            company: String(input.company),
            salary: input.salary === '' ? undefined : Number(input.salary),
            postedDate: input.postedDate || undefined,
            phoneNo: String(input.phoneNo)
        }

        const res = await axios.post('http://localhost:5000/api/jobs', payload)
        return res.data
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting job', input)
            await sendRequest()
            navigate('/jobs')
        } catch (err) {
            console.error('Failed to post job', err)
            // you can set error state here to show to user
        }
    }

    return (
        <>
            <div>PostJob</div>
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

export default PostJob