import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
    }, 20); // Typing speed: faster now

    return () => clearInterval(intervalId.current);
  }, []);

  const delayAfterTyping = fullText.length * 0.02; // Delay for other elements

  return (
    <section id="hero" className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.h1
              className="display-4 fw-bold text-white"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Syalomiele Pratama
            </motion.h1>

            <motion.p
              className="lead text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delayAfterTyping, duration: 0.5 }}
            >
              {text}
            </motion.p>

            <motion.div
              className="d-grid gap-2 d-md-flex justify-content-md-start"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delayAfterTyping + 0.2, duration: 0.4 }}
            >
              <motion.a
                href="/pdf/Resume.pdf"
                download="Syalomiele_Pratama_CV.pdf"
                className="btn btn-primary btn-lg px-4 me-md-2 btn-cv border-0"
                whileHover={{ scale: 1.05, backgroundColor: '#b34444' }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>

              <div className="social-icons d-flex my-auto fs-5 gap-2">
                {[
                  { href: "https://id.pinterest.com/temancurhatmu/", icon: "bi-pinterest" },
                  { href: "https://www.instagram.com/_sytama_", icon: "bi-instagram" },
                  { href: "https://id.linkedin.com/in/syalomiele-pratama-793229286", icon: "bi-linkedin" }
                ].map(({ href, icon }, i) => (
                  <motion.a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    whileHover={{ color: '#e54b4b', scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className={`bi ${icon} text-white`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
