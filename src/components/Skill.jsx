import '../assets/css/Skill.css';
import { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start(i => ({
        width: i,
        transition: { duration: 1.2, ease: 'easeOut' }
      }));
    } else {
      controls.start({ width: '0%' });
    }
  }, [isInView, controls]);

  return (
    <section id="skill" ref={ref}>
      <div className="container">
        <div className="row">
          {/* Left column for text */}
          <div className="col-lg-5">
            <h2 className="fw-bold my-5">I have high skills in design and programming</h2>
            <p className="mt-5">
              I was doing everything in my power to provide me with all the experiences to provide
              cost-effective and high quality products to satisfy my customers all over the world
            </p>
          </div>
          {/* Empty column for spacing */}
          <div className="col-lg-2"></div>
          {/* Right column for progress bars */}
          <div className="col-lg-5 d-flex align-items-center">
            <div className="barchart w-100 my-5">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2">Web Development</div>
                  <div>90%</div>
                </div>
                <div className="progress">
                  <motion.div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="90"
                    custom="90%"
                    animate={controls}
                    initial={{ width: '0%' }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2">Illustration</div>
                  <div>80%</div>
                </div>
                <div className="progress">
                  <motion.div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="80"
                    custom="80%"
                    animate={controls}
                    initial={{ width: '0%' }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2">Logo Design</div>
                  <div>85%</div>
                </div>
                <div className="progress">
                  <motion.div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="85"
                    custom="85%"
                    animate={controls}
                    initial={{ width: '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
