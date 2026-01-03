import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../PostJob/PostJob.css'
import { validatePhone, initPostJobForm } from '../PostJob/script'
import '../Footer.css'
import '../GlobalStyles.css'

function PostWorkers() {
    const navigate = useNavigate();
    const [input, setInput] = React.useState({
        name: '',
        jobRole: '',
        location: '',
        salary: '',
        postedDate: '',
        description: '',
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
            name: String(input.name),
            jobRole: String(input.jobRole),
            location: String(input.location),
            salary: input.salary === '' ? undefined : Number(input.salary),
            postedDate: input.postedDate || undefined,
            description: String(input.description),
            phoneNo: String(input.phoneNo)
        }

        const res = await axios.post('http://localhost:5000/api/workers', payload)
        const created = res.data?.worker ?? res.data
        return created
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!validatePhone(input.phoneNo)) {
                alert('Please enter a valid phone number')
                return
            }
            const created = await sendRequest()
            navigate('/workers', { state: { newWorker: created } })
        } catch (err) {
            console.error('Failed to post worker', err)
        }
    }

    useEffect(() => {
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
                    <h1>Add Worker</h1>
                    <p>Post a new worker profile so employers can find them.</p>
                </div>

                <div className="form-container">
                    <div className="success-message" id="successMessage">
                        <strong>Thank you!</strong> Your submission has been received.
                    </div>

                    <form className="form-grid" id="contactForm" noValidate onSubmit={handleSubmit}>
                        <div className="form-row two-cols">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
                                <input type="text" id="name" name="name" className="form-input" placeholder="Full name" required value={input.name} onChange={handleChange} />
                                <div className="error-message">Please enter the name</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNo" className="form-label">Phone Number <span className="required">*</span></label>
                                <input type="text" id="phoneNo" name="phoneNo" className="form-input" placeholder="Phone Number" required value={input.phoneNo} onChange={handleChange} />
                                <div className="error-message">Please enter a valid phone number</div>
                            </div>
                        </div>

                        <div className="form-row two-cols">
                            <div className="form-group">
                                <label htmlFor="jobRole" className="form-label">Job Role</label>
                                <input type="text" id="jobRole" name="jobRole" className="form-input" placeholder="Job Role" value={input.jobRole} onChange={handleChange} />
                                <div className="error-message">Please enter a valid job role</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" id="location" name="location" className="form-input" placeholder="Location" value={input.location} onChange={handleChange} />
                                <div className="error-message">Please enter a valid location</div>
                            </div>
                        </div>

                        <div className="form-row two-cols">
                            <div className="form-group">
                                <label htmlFor="salary" className="form-label">Salary</label>
                                <input type="number" id="salary" name="salary" className="form-input" placeholder="Salary" value={input.salary} onChange={handleChange} />
                                <div className="error-message">Please enter a valid salary</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="postedDate" className="form-label">Post Date</label>
                                <input type="date" id="postedDate" name="postedDate" className="form-input" value={input.postedDate} onChange={handleChange} />
                                <div className="error-message">Please enter a valid post date</div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className="form-label">Description <span className="required">*</span></label>
                            <textarea id="description" name="description" className="form-textarea" placeholder="Enter description..." required value={input.description} onChange={handleChange}></textarea>
                            <div className="error-message">Please enter a description</div>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>

                        <div className="privacy-notice">
                            <strong>Privacy Notice:</strong> We respect your privacy and will never share your personal information.
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
              </div>
            <div className="decorative-circle circle-yellow-lg"></div>
            <div className="decorative-circle circle-blue-lg"></div>
          </section>
        </>
    )
}

export default PostWorkers

