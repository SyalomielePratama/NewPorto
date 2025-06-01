import { useNavigate } from 'react-router-dom';
import { portfolioItems } from '../utils/portofolioData';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Portofolio = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-100px' });

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portofolio" className="shadow-lg" ref={sectionRef}>
      <div className="container mt-5">
        <div className="text-center mt-5">
          <motion.h1
            className="fw-bold pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            MY <span className="porto-text">PORTOFOLIO</span>
          </motion.h1>

          <motion.div
            className="filter-buttons mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {['all', 'web', 'illustration', 'logo'].map((type) => (
              <button
                key={type}
                className="buttons-filters"
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div className="row mt-4" layout>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="col-lg-4 col-md-6 mb-4"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.02}
                  transitionSpeed={250}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className="h-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="card-porto"
                    onClick={() => navigate(`/portofolio/${item.id}`)}
                  >
                    <img src={item.images[0]} alt={item.title} className="img-fluid" />
                    <div className="card-overlay">
                      <h5>{item.title}</h5>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portofolio;
