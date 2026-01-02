import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import '../Footer.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="main-grid">
          {/* Left Side - Hero Content */}
          <div className="hero-content">
            <span className="hero-tag">How It Started</span>
            <h1 className="hero-title">Our Dream is Global Learning Transformation</h1>
            <p className="hero-description">
              Kaaruj was founded by Robert Anderson, a passionate filmmaker, 
              and Mana Sanchez, a visionary educator. Their shared dream was to 
              create a digital haven of knowledge on the internet, where anyone can 
              learn about anything, engage with a global network of teachers, and 
              embark on a journey to both 'Karoch'. With relentless dedication, they garnered a 
              diverse and expert pool connected to this innovative platform, creating a global 
              community of eager learners, all connected by the desire to explore, 
              learn, and grow.
            </p>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="right-section">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=350&fit=crop" alt="Team collaboration" />
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <div className="stat-card">
                <h2 className="stat-number">3.5</h2>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card">
                <h2 className="stat-number">23</h2>
                <p className="stat-label">Project Challenge</p>
              </div>
              <div className="stat-card">
                <h2 className="stat-number">830+</h2>
                <p className="stat-label">Positive Reviews</p>
              </div>
              <div className="stat-card">
                <h2 className="stat-number">100K</h2>
                <p className="stat-label">Trusted Students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <span className="team-tag">Meet the Team</span>
          <h2 className="team-title">Meet Our Dedicated Team of Educators and Innovators</h2>
          
          <div className="team-grid">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Team member" />
            </div>
            <div className="team-card featured">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" alt="Maria Sanchez" />
              <div className="team-info">
                <h3>Maria Sanchez</h3>
                <p>Cofounder/Chief Officer</p>
                <a href="#" className="linkedin-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" alt="Team member" />
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" alt="Team member" />
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" alt="Team member" />
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" alt="Team member" />
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="vision-mission-section">
          <div className="vision-card">
            <span className="vm-tag">Our Vision</span>
            <h2 className="vm-title">Empowering Lives Through Education</h2>
            <p className="vm-description">
              Our unwavering vision is to empower lives through accessible, high-quality education. By fostering a global community of lifelong learners, we aim to unlock the full potential of individuals and communities, creating a future for all.
            </p>
          </div>
          <div className="mission-card">
            <span className="vm-tag">Our Mission</span>
            <h2 className="vm-title">Learning for All, Everywhere</h2>
            <p className="vm-description">
              Our unwavering vision is to empower lives through accessible, high-quality education. By fostering a global community of lifelong learners, we aim to unlock the full potential of individuals and communities, creating a future for all.
            </p>
          </div>
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
      </section>
    </div>
  );
}

export default AboutUs;
