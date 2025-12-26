import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a leading platform connecting talented workers with employers 
            seeking skilled professionals. Our mission is to bridge the gap between 
            job seekers and opportunities, making the hiring process seamless and efficient.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To create a transparent and accessible marketplace where workers can 
            showcase their skills and employers can find the perfect match for their 
            needs. We believe in empowering both workers and businesses to achieve 
            their goals.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>For Job Seekers</h3>
              <ul>
                <li>Browse diverse job opportunities</li>
                <li>Create and showcase your profile</li>
                <li>Connect directly with employers</li>
                <li>Free registration and listing</li>
              </ul>
            </div>
            <div className="feature-card">
              <h3>For Employers</h3>
              <ul>
                <li>Post job openings easily</li>
                <li>Access skilled worker profiles</li>
                <li>Filter by skills and experience</li>
                <li>Quick and efficient hiring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <p>
            With our user-friendly platform, comprehensive profiles, and dedicated 
            support, we make finding the right job or the right candidate easier 
            than ever. Join thousands of satisfied users who have found success 
            through our platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
