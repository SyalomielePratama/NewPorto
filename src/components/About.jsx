import React, { useRef } from 'react';
import '../assets/css/About.css';
import profileImage from '../assets/img/1.jpg';
import 'remixicon/fonts/remixicon.css';

import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { SiDjango, SiPython } from 'react-icons/si';
import { AdobeIllustrator, AdobePhotoshop } from 'iconoir-react';
import { motion, useInView } from 'framer-motion';

const skillItems = [
  { icon: <RiJavascriptFill style={{ color: '#ffbb2c' }} />, name: 'JavaScript' },
  { icon: <RiReactjsFill style={{ color: '#11dbcf' }} />, name: 'ReactJS' },
  { icon: <SiDjango style={{ color: '#092e20' }} />, name: 'Django' },
  { icon: <SiPython style={{ color: '#3776AB' }} />, name: 'Python' },
  { icon: <AdobeIllustrator style={{ color: '#ffa76e' }} />, name: 'Adobe Illustrator' },
  { icon: <AdobePhotoshop style={{ color: '#47aeff' }} />, name: 'Adobe Photoshop' },
];

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: '-100px' }); // Animasi akan dipicu setiap kali masuk/keluar viewport

  return (
    <section id="about" ref={aboutRef}>
      <div className="container mt-5">
        <div className="row">
          <motion.div
            className="col-lg-6 mb-5 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <img src={profileImage} alt="Profile" className="img-fluid" style={{ maxWidth: '80%' }} />
          </motion.div>

          <motion.div
            className="col-lg-6 d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold">ABOUT <span className='fw-bold me-text'>ME</span></h2>
            <p className='mt-3 fs-5'>
              Hello! I'm Syalomiele Pratama. I am a Web Developer who also possesses a passion as a Graphic Design artist.
              With a background in vector graphic design and proficiency in creating captivating web interfaces, I have explored the unique blend of art and technology.
            </p>
            <div className="row">
              <div className="col-lg-6 mt-3 fs-5">
                <div className="d-flex">
                  <i className="bi bi-chevron-right me-2"></i>
                  <strong className='skill-text-icon'>Web Developer</strong>
                </div>
                <div className="d-flex mt-3 ">
                  <i className="bi bi-chevron-right me-2"></i>
                  <strong className='skill-text-icon'>Graphic Designer</strong>
                </div>
              </div>
              <div className="col-lg-6 mt-3 fs-5">
                <div className="d-flex">
                  <i className="bi bi-chevron-right me-2"></i>
                  <strong className='skill-text-icon'>Logo Designer</strong>
                </div>
                <div className="d-flex mt-3 fs-5">
                  <i className="bi bi-chevron-right me-2"></i>
                  <strong className='skill-text-icon'>Vector Illustration</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="skills container my-3">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row">
            {skillItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="col-lg-4 col-md-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: isInView ? idx * 0.1 : 0 }}
              >
                <div className="icon-box d-flex align-items-center shadow-lg">
                  <span className="skill-icon">{item.icon}</span>
                  <h3 className="mb-0 ms-2">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
