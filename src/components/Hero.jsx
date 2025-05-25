import React, { useEffect, useState, useRef } from 'react';
import '../assets/css/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I&'am a Passionate Web Developer And Graphic Designer";
  const index = useRef(0);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (index.current < fullText.length) {
        setText((prev) => prev + fullText.charAt(index.current));
        index.current += 1;
      } else {
        clearInterval(intervalId.current);
      }
    }, 40);

    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 fw-bold text-white">Syalomiele Pratama</h1>
            <p className="lead text-white">{text}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 btn-cv border-0">Download CV</button>
              <div className="social-icons d-flex my-auto fs-5 gap-2">
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="bi bi-pinterest text-white"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="bi bi-instagram text-white"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

