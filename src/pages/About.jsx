import React from 'react'
import './style.css';
const About = () => {
  return (
    
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <img src="https://via.placeholder.com/150" alt="About Us" className="about-image" />
        <div className="about-text">
          <p>
            Welcome to our company! We are dedicated to providing the best service in the industry. Our team of experts works tirelessly to ensure that you receive top-notch solutions tailored to your needs.
          </p>
          <p>
            Our mission is to innovate and lead the market with our cutting-edge technologies and unmatched customer support. We believe in the power of collaboration and strive to build long-lasting relationships with our clients.
          </p>
          <p>
            Our core values include:
          </p>
          <ul>
            <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
            <li><strong>Quality:</strong> We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
            <li><strong>Teamwork:</strong> We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
            <li><strong>Respect for People:</strong> We value our people, encourage their development, and reward their performance.</li>
            <li><strong>Good Citizenship:</strong> We are good citizens in the communities in which we live and work.</li>
            <li><strong>A Will to Win:</strong> We exhibit a strong will to win in the marketplace and in every aspect of our business.</li>
          </ul>
          <p>
            Thank you for choosing us as your trusted partner. We look forward to achieving great success together!
          </p>
        </div>
      </div>
    </div>  

  )
}

export default About
