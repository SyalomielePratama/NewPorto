import '../assets/css/Available.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Available = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <section id="available" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-between">
            <h2 className="fw-bold">I'm available for freelance work</h2>
            <a className="contact-link fw-medium" href="#contact">Contact Me</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Available;
