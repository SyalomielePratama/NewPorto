import '../assets/css/Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPinterest, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';  // import SweetAlert2

const scriptURL = 'https://script.google.com/macros/s/AKfycbyAk63h90y63-EXVGiQ7XTqCY83lJ8jCkcl0aFSJAquL_Fj1n_hOrsiqEbeXMzDnkR4Vg/exec';

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent.',
          timer: 3000,
          showConfirmButton: false,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error sending message: ' + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="contact-section"
    >
      <div className="container">
        <h2 className="fw-bold my-3">
          Get In <span className="fw-bold touch-text">Touch</span>
        </h2>
        <div className="row contact-wrapper align-items-stretch g-4">

          {/* Left Side - Contact Info */}
          <div className="col-lg-6 contact-info">
            <p className='mt-3'>
              Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
            <ul className="list-unstyled mt-4">
              <li className='my-4'><FaMapMarkerAlt /> Malang, Jawa Timur, Indonesia</li>
              <li className='my-4'><FaEnvelope /> pratamasyalomiele@gmail.com</li>
              <li className='my-4'><FaPhone /> +62 812 3150 0648</li>
              <li className='my-4'><FaPinterest /> @temancurhatmu</li>
              <li className='my-4'><FaLinkedin /> @Syalomiele Pratama</li>
              <li className='my-4'><FaGithub /> @SyalomielePratama</li>
              <li className='my-4'><FaInstagram /> @_sytama_</li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-6 contact-form">
            <form className="mt-3" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-danger btn-kirim"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
