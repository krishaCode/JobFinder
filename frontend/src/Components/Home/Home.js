import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.css'

export default function Home() {
  const [activeTab, setActiveTab] = useState('job')
  const [activeFilter, setActiveFilter] = useState('New')
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs')
        setJobs(response.data.jobs?.slice(0, 6) || [])
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }
    fetchJobs()
  }, [])

  const filters = ['New', 'Design', 'Development', 'Software Engineer', 'Marketing', 'Finance']

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Platform to <span className="text-blue">find work</span> and also to find <span className="text-yellow">great talent.</span>
            </h1>
          </div>

          <div className="hero-visual">
            <div className="get-started-badge">
              <Link to="/jobs" className="badge-btn">
                Get Started
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-image">
              <i className="fa-solid fa-user-tie hero-icon"></i>
            </div>
            <div className="info-box">
              <p>Search and find your dream job now easier than ever, you just need to browse and find it and apply.</p>
            </div>
            <div className="circle-yellow"></div>
            <div className="circle-blue"></div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="company-logos">
          <div className="logo-item"><i className="fa-brands fa-adobe"></i> <span>Adobe</span></div>
          <div className="logo-item"><i className="fa-brands fa-figma"></i> <span>Figma</span></div>
          <div className="logo-item"><i className="fa-brands fa-dribbble"></i> <span>Dribbble</span></div>
          <div className="logo-item"><i className="fa-brands fa-dropbox"></i> <span>Dropbox</span></div>
          <div className="logo-item"><i className="fa-brands fa-bitcoin"></i> <span>Coinbase</span></div>
        </div>
      </section>

      {/* Job Search Cards Section */}
      <section className="search-cards-section">
        <div className="container">
          <div className="cards-wrapper">
            {/* Left column stacked cards */}
            <div className="left-stack">
              <div className="headline-card">
                <h2>Appear in front of <span className="text-yellow">100+</span></h2>
                <h2><span className="text-yellow">companies</span> that open job</h2>
                <h2>vacancies every month</h2>
              </div>

              <div className="search-card form-card">
                <div className="search-form">
                  <div className="tab-buttons">
                    <button 
                      className={activeTab === 'job' ? 'active' : ''} 
                      onClick={() => setActiveTab('job')}
                    >
                      Find Job
                    </button>
                    <span className="toggle-pill" aria-hidden="true"></span>
                    <button 
                      className={activeTab === 'talent' ? 'active' : ''} 
                      onClick={() => setActiveTab('talent')}
                    >
                      Find Talent
                    </button>
                  </div>

                  <input type="text" placeholder="Enter your dream job" className="search-input" />
                  
                  <select className="location-select">
                    <option>Select Your Location</option>
                    <option>New York</option>
                    <option>San Francisco</option>
                    <option>London</option>
                    <option>Remote</option>
                  </select>

                  <Link to="/jobs" className="find-job-btn">Find Job</Link>
                </div>
              </div>
            </div>

            {/* Right tall info card */}
            <div className="search-card dark">
              <p>The most updated platform about jobs that are currently open, and you can easily get your dream job here</p>
              <Link to="/jobs" className="learn-more-btn">Learn More</Link>
              <div className="decorative-arc arc-yellow"></div>
              <div className="decorative-arc arc-blue"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <h2>
              Get your <span className="text-blue">dream job</span> easily
              <br /> with just your gadget
            </h2>
            <p className="process-desc">
              Follow these steps to get the job you want. We will help you to find a job
              that suits your passion
            </p>
          </div>

          <div className="steps-surface">
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-arc-yellow"></div>
                <h3>Completed your Profile</h3>
                <p>Complete your profile so that recruiters can see information of you</p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-arc-yellow"></div>
                <h3>Directly CV Upload</h3>
                <p>You can upload your resume or CV, and Recruiters will review</p>
              </div>

              <div className="step-card featured floating-card">
                <div className="step-number">03</div>
                <div className="step-arc-yellow"></div>
                <h3>Scheduling Interview</h3>
                <p>You can schedule your interview with the Recruiters</p>
              </div>

              <div className="step-card">
                <div className="step-number">04</div>
                <div className="step-arc-yellow"></div>
                <h3>Selected Candidate</h3>
                <p>Selected candidate can enter the company for interview with recruiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="jobs-section">
        <div className="container">
          <h2>Most <span className="text-blue">popular</span> jobs for you</h2>
          <p className="jobs-subtitle">JobFin present for help candidate for work in dream company</p>

          <div className="filter-buttons">
            {filters.map(filter => (
              <button 
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <div key={job._id} className="job-card">
                <div className="job-header">
                  <div className="company-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div className="company-info">
                    <h4>{job.company}</h4>
                    <span className="time-ago">Recently posted</span>
                  </div>
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-description">{job.description?.substring(0, 80)}...</p>
                <Link to={`/jobs`} className="apply-btn">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Get Your Dream Jobs Here</h2>
            <Link to="/postjob" className="signup-btn">Sign Up Now</Link>
          </div>
          <div className="decorative-circle circle-yellow-lg"></div>
          <div className="decorative-circle circle-blue-lg"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Jofin</h3>
              <p>Search and find your dream job now easier than ever. You just need to browse and find it and apply.</p>
              <p className="copyright">© 2025 Jofin. All right reserved</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/jobs">About Us</Link>
                <Link to="/workers">Service</Link>
                <Link to="/postjob">Offers</Link>
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
      </footer>
    </div>
  )
}
