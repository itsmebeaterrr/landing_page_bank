import React from 'react';
import './App.css'
import { Navbar } from '../components/navbar';

function App() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <Navbar/>
          </a>
        </div>
      </header>

      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Your Trusted Bank</h1>
          <p>Secure and reliable financial solutions for your needs.</p>
          <a href="#signup" className="cta-button" >Get Started</a>
        </section>

        
        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Personal Banking</h3>
            <p>Manage your personal accounts with ease and flexibility.</p>
          </div>
          <div className="service">
            <h3>Business Banking</h3>
            <p>Tailored solutions to support your business growth.</p>
          </div>
          <div className="service">
            <h3>Investment Services</h3>
            <p>Grow your wealth with our expert investment options.</p>
          </div>
        </section>


        <section id="about" className="about">
          <h2>Contact Us</h2>
          <h2>Sign Up for an Account</h2>
        </section>

      
        <section id="contact" className="contact">
          <p>Email: support@yourbank.com</p>
          <p>Phone: +62-123-456-789</p>
        </section>

  
        <section id="signup" className="signup">
          <p>Ready to experience the best in banking? Sign up today!</p>
          <a href="#" className="cta-button">Sign Up</a>
        </section>
      </main>
<br />
<br />
     
      <footer className="footer">
        <p>&copy; 2024 Your Bank. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
