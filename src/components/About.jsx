import '../assets/css/About.css';
import profileImage from '../assets/img/1.jpg';
import 'remixicon/fonts/remixicon.css';

import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { SiDjango, SiPython } from 'react-icons/si';
import { AdobeIllustrator, AdobePhotoshop } from 'iconoir-react';

const About = () => {
    return (
        <section id="about">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mb-5 d-flex justify-content-center">
                        <img src={profileImage} alt="Profile" className="img-fluid" style={{ maxWidth: '80%' }} />
                    </div>
                    <div className=" col-lg-6 d-flex flex-column justify-content-center">
                        <h2 className="fw-bold">ABOUT <span className='fw-bold me-text'>ME</span></h2>
                        <p className='mt-3 fs-5'>
                            Hello! I'm Syalomiele Pratama. I am a Web Developer who also possesses a passion as a Graphic Design artist.
                            With a background in vector graphic design and proficiency in creating captivating web interfaces, I have explored the unique blend of art and technology.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 mt-3 fs-5">
                                <div className="d-flex">
                                    <i className="bi bi-chevron-right me-2"></i>
                                    <strong>Web Developer</strong>
                                </div>
                                <div className="d-flex mt-3 ">
                                    <i className="bi bi-chevron-right me-2"></i>
                                    <strong>Graphic Designer</strong>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3 fs-5">
                                <div className="d-flex">
                                    <i className="bi bi-chevron-right me-2"></i>
                                    <strong>Logo Designer</strong>
                                </div>
                                <div className="d-flex mt-3 fs-5">
                                    <i className="bi bi-chevron-right me-2"></i>
                                    <strong>Vector Illustration</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills container my-3">
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <RiJavascriptFill className="skill-icon" style={{ color: '#ffbb2c' }} />
                                <h3 className="mb-0">JavaScript</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <RiReactjsFill className="skill-icon" style={{ color: '#11dbcf' }} />
                                <h3 className="mb-0">ReactJS</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <SiDjango className="skill-icon" style={{ color: '#092e20' }} />
                                <h3 className="mb-0">Django</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <SiPython className="skill-icon" style={{ color: '#3776AB' }} />
                                <h3 className="mb-0">Python</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <AdobeIllustrator className="skill-icon" style={{ color: '#ffa76e' }} />
                                <h3 className="mb-0">Adobe Illustrator</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4">
                            <div className="icon-box d-flex align-items-center shadow-lg">
                                <AdobePhotoshop className="skill-icon" style={{ color: '#47aeff' }} />
                                <h3 className="mb-0">Adobe Photoshop</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
