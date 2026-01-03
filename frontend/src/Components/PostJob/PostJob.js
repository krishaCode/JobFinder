import axios from 'axios';
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './PostJob.css'
import { validatePhone, initPostJobForm } from './script'
import { useEffect } from 'react'
import '../Footer.css'
import '../GlobalStyles.css'

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
        // normalize created job (support both { job: {...} } and direct object)
        const created = res.data?.job ?? res.data
        return created
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // basic client-side validation
            if (!validatePhone(input.phoneNo)) {
                alert('Please enter a valid phone number')
                return
            }
            console.log('Submitting job', input)
            const created = await sendRequest()
            // navigate to /jobs and pass the created job so the list can update immediately
            navigate('/jobs', { state: { newJob: created } })
        } catch (err) {
            console.error('Failed to post job', err)
            // you can set error state here to show to user
        }
    }

        useEffect(() => {
            // initialize optional DOM behaviors (non-invasive)
            initPostJobForm()
        }, [])

    return (
        <>

            <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
    </div>

    <div className="container">
        <div className="header">
            <h1>Let's Connect</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="form-container">
            <div className="success-message" id="successMessage">
                <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
            </div>

            <form className="form-grid" id="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="form-row two-cols">
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">
                            Job Title <span className="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            className="form-input" 
                            placeholder="Job Title"
                            required
                            value={input.title}
                            onChange={handleChange}
                        />
                        <div className="error-message">Please enter the job title</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNo" className="form-label">
                            Phone Number <span className="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="phoneNo" 
                            name="phoneNo" 
                            className="form-input" 
                            placeholder="Phone Number"
                            required
                            value={input.phoneNo}
                            onChange={handleChange}
                        /> 
                        <div className="error-message">Please enter a valid phone number</div>
                    </div>
                </div>

                <div className="form-row two-cols">
                    <div className="form-group">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input 
                            type="text" 
                            id="location" 
                            name="location" 
                            className="form-input" 
                            placeholder="Location"
                            value={input.location}
                            onChange={handleChange}
                        />
                        <div className="error-message">Please enter a valid location</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company" className="form-label">
                            Company
                        </label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company" 
                            className="form-input" 
                            placeholder="Company"
                            value={input.company}
                            onChange={handleChange}
                        />
                        <div className="error-message">Please enter a valid company</div>
                    </div>
                </div>

                <div className="form-row two-cols">
                    <div className="form-group">
                        <label htmlFor="salary" className="form-label">
                            Salary
                        </label>
                        <input 
                            type="number" 
                            id="salary" 
                            name="salary" 
                            className="form-input" 
                            placeholder="Salary"
                            value={input.salary}
                            onChange={handleChange}
                        />
                        <div className="error-message">Please enter a valid salary</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postedDate" className="form-label">
                            Post Date
                        </label>
                        <input 
                            type="date" 
                            id="postedDate" 
                            name="postedDate" 
                            className="form-input"
                            value={input.postedDate}
                            onChange={handleChange}
                        />
                        <div className="error-message">Please enter a valid post date</div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description <span className="required">*</span>
                    </label>
                    <textarea 
                        id="description" 
                        name="description" 
                        className="form-textarea" 
                        placeholder="Enter job description here..."
                        required
                        value={input.description}
                        onChange={handleChange}
                    ></textarea>
                    <div className="error-message">Please enter a description</div>
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                </button>

                <div className="privacy-notice">
                    <strong>Privacy Notice:</strong> We respect your privacy and will never share your personal information. 
                    Your data is used solely to respond to your inquiry and improve our services.
                </div>
            </form>
        </div>
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
        <div className="decorative-circle circle-yellow-lg"></div>
        <div className="decorative-circle circle-blue-lg"></div>
      </div>
    </section>
        </>
    )
}

export default PostJob