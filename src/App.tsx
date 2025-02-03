import { useState } from 'react'
import './App.css'
import heroBg from './assets/hero-bg.jpg'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import SetmoreBooking from './components/SetmoreBooking'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="logo">Cleaning With Meaning</div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#tenancy" onClick={() => setIsMenuOpen(false)}>Tenancy</a>
            <a href="#home-help" onClick={() => setIsMenuOpen(false)}>Home Help</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <SetmoreBooking isButton />
            <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home" style={{backgroundImage: `linear-gradient(rgba(26, 77, 46, 0.9), rgba(26, 77, 46, 0.8)), url(${heroBg})`}}>
        <div className="hero-content container">
          <div className="tag">Professional Cleaning Services</div>
          <h1>We provide residential and commercial housekeeping services tailored to your needs.</h1>
          <div className="hero-buttons">
            <SetmoreBooking isButton />
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="section features-section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="tag">Our Services</div>
            <h2>Building Better Cleaning Solutions</h2>
            <p>Comprehensive cleaning services for homes and businesses</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Regular Cleaning</h3>
              <p>Spend more time doing the things you love, and we can take care of the chores indoors!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧹</div>
              <h3>Deep Cleaning</h3>
              <p>Thorough cleaning of all areas, including hard-to-reach spaces and detailed attention to fixtures.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Commercial Cleaning</h3>
              <p>Professional cleaning services for offices, retail spaces, and commercial properties.</p>
            </div>
          </div>
          <div className="image-grid">
            <div className="image-card">
              <img src={img5} alt="Residential Cleaning" />
              <div className="image-overlay">
                <h3>Residential Cleaning</h3>
                <p>Comprehensive home cleaning services</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img2} alt="Commercial Cleaning" />
              <div className="image-overlay">
                <h3>Commercial Cleaning</h3>
                <p>Professional office and business cleaning</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img3} alt="Deep Cleaning" />
              <div className="image-overlay">
                <h3>Deep Cleaning</h3>
                <p>Thorough deep cleaning services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tenancy">
        <div className="container">
          <div className="section-header">
            <div className="tag">Tenancy Services</div>
            <h2>Pre/End of Tenancy Cleaning & Deep Cleans</h2>
            <p>Our pre and end-of-tenancy cleans, and deep cleaning services, will allow you to maximise your returns on rental property investments and reduce void periods.</p>
          </div>
          <div className="image-grid">
            <div className="image-card">
              <img src={img2} alt="Pre-Tenancy Cleaning" />
              <div className="image-overlay">
                <h3>Pre-Tenancy Cleaning</h3>
                <p>Prepare your rental property for new tenants</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img5} alt="End of Tenancy Cleaning" />
              <div className="image-overlay">
                <h3>End of Tenancy Cleaning</h3>
                <p>Restore your rental property to its original condition</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img3} alt="Deep Cleaning" />
              <div className="image-overlay">
                <h3>Deep Cleaning</h3>
                <p>Thorough deep cleaning services for rental properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-bg" id="home-help">
        <div className="container">
          <div className="section-header">
            <div className="tag">Home Help</div>
            <h2>Non-medical Home Help</h2>
            <p>If you, or a loved one, require a helping hand with non-medical tasks, we offer a range of services to support your lifestyle.</p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <div className="tag">About Us</div>
            <h2>Experience & Expertise</h2>
            <p>Our team collectively has over 30 years experience in an array of residential and commercial cleaning environments, including care home clinical cleaning which is why we offer a variety of services such as disinfectant treatments and home help.</p>
          </div>
          <div className="image-grid">
            <div className="image-card">
              <img src={img4} alt="Professional Team" />
              <div className="image-overlay">
                <h3>Professional Team</h3>
                <p>Experienced and trusted cleaners</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img5} alt="Quality Equipment" />
              <div className="image-overlay">
                <h3>Quality Equipment</h3>
                <p>Professional-grade cleaning supplies</p>
              </div>
            </div>
            <div className="image-card">
              <img src={img2} alt="Satisfaction Guaranteed" />
              <div className="image-overlay">
                <h3>Satisfaction Guaranteed</h3>
                <p>100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container">
          <div className="section-header">
            <div className="tag">Book Online</div>
            <h2>Schedule Your Cleaning</h2>
            <p>Book your cleaning service in just a few clicks. We offer flexible scheduling to accommodate your needs.</p>
          </div>
          <div className="booking-container">
            <div className="booking-features">
              <div className="booking-feature">
                <div className="booking-feature-header">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.75 2.5A4.25 4.25 0 002.5 6.75v10.5A4.25 4.25 0 006.75 21.5h10.5a4.25 4.25 0 004.25-4.25V6.75A4.25 4.25 0 0017.25 2.5H6.75zM11 8a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 0111 8zm0 4a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 0111 12zm0 4a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 0111 16zm-4-8a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 8zm0 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 12zm0 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 16z" />
                  </svg>
                  <h3>Easy Booking</h3>
                </div>
                <p>Schedule your cleaning service online in minutes</p>
              </div>
              <div className="booking-feature">
                <div className="booking-feature-header">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                  <h3>Flexible Times</h3>
                </div>
                <p>Choose from a range of available time slots</p>
              </div>
              <div className="booking-feature">
                <div className="booking-feature-header">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <h3>Instant Confirmation</h3>
                </div>
                <p>Receive immediate confirmation of your booking</p>
              </div>
            </div>
            <SetmoreBooking />
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
              Need help booking? Contact us at <a href="tel:+441234567890" style={{ color: 'var(--primary-color)' }}>123-456-7890</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="section" id="contact">
        <div className="container">
          <div className="contact-form">
            <div className="section-header">
              <div className="tag">Get In Touch</div>
              <h2>Contact Us</h2>
              <p>Let us know how we can help you maintain a clean and healthy environment.</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message! We will get back to you soon.')
            }}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows={4} required />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </footer>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            &copy; {new Date().getFullYear()} Cleaning With Meaning. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
