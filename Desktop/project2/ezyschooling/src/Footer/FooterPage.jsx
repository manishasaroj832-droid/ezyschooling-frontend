import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-col brand-col">
          <div className="logo-box">
            <img src="/src/assets/logo.webp" alt="Ezyschooling Logo" />
          </div>
          <p className="tagline">
            Your trusted partner in finding the perfect school for your child's bright future.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">O</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li>📍 A-67, 100 ft Road, Hardevpuri, Shahadra, New Delhi-110093</li>
            <li>✉️ <a href="mailto:query@ezyschooling.com">query@ezyschooling.com</a></li>
            <li>📞 <a href="tel:+918766340464">+91-8766340464</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#">Search Schools</a></li>
            <li><a href="#">Compare Schools</a></li>
            <li><a href="#">Ranking Methodology</a></li>
            <li><a href="#">Parenting</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* For Schools */}
        <div className="footer-col">
          <h3 className="footer-heading">For Schools</h3>
          <ul className="footer-list">
            <li><a href="#">Claim your School</a></li>
            <li><a href="#">Add your School</a></li>
            <li><a href="#">Manage Applications</a></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-col">
          <h3 className="footer-heading">About</h3>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

      </div>
    </footer>
      
    </div>
  )
}

export default Footer
