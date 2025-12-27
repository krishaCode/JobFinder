import React from 'react';
import './aboutUs.css';

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
      </div>
    </div>
  );
}

export default AboutUs;
