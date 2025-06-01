import { useParams, useNavigate } from 'react-router-dom';
import { portfolioItems } from '../utils/portofolioData';
import '../assets/css/Portofolio.css';
import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { SiDjango, SiPython, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';
import { AdobeIllustrator, AdobePhotoshop } from 'iconoir-react';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const PortofolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-100px' });

  const item = portfolioItems.find((p) => p.id === parseInt(id));

  // Scroll to top saat component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // rerun tiap id berubah

  if (!item) {
    return <div className="container mt-5">Portofolio not found.</div>;
  }

  return (
    <div className="pd-portfolio-detail-container" ref={sectionRef}>
      <motion.button
        className="pd-btn-back mb-4"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        ← Kembali
      </motion.button>

      <motion.h2
        className="pd-portfolio-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {item.title}
      </motion.h2>

      <div className="pd-row-align-items-start">
        {/* Carousel kiri */}
        <motion.div
          className="pd-carousel-container"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <div
            id="carouselPortoDetail"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            {/* Indicators */}
            {item.images.length > 1 && (
              <div className="pd-carousel-indicators carousel-indicators">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselPortoDetail"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0 ? 'true' : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            )}

            <div className="carousel-inner">
              {item.images.map((img, index) => (
                <div
                  key={index}
                  className={`pd-carousel-item carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={img}
                    className="d-block w-100"
                    alt={`${item.title} ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            {item.images.length > 1 && (
              <>
                <button
                  className="pd-carousel-control-prev carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselPortoDetail"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="pd-carousel-control-next carousel-control-next"
                  type="button"
                  data-bs-target="#carouselPortoDetail"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Deskripsi kanan */}
        <motion.div
          className="pd-description-container"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
        >
          <p>Kategori: <strong>{item.category}</strong></p>
          <p>Deskripsi : {item.deskripsi}</p>

          {item.id === 6 ? (
            <div className="alert alert-warning mt-3" role="alert">
              <strong>Project ini dilindungi oleh Dinas Komunikasi dan Informatika.</strong><br />
              Tidak dapat dipakai atau dilihat sembarang orang.
            </div>
          ) : (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-btn-primary btn btn-primary border-0"
            >
              Kunjungi Proyek
            </a>
          )}
        </motion.div>
      </div>

      {/* Stack Section */}
      <motion.div
        className="skills-container my-3"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-title">
          <h2 className="pt-4">Technology Stack</h2>
        </div>

        <div className="row">
          {item.stack.map((tech, index) => {
            let icon;
            switch (tech) {
              case 'JavaScript':
                icon = <RiJavascriptFill className="skill-icon" style={{ color: '#ffbb2c' }} />; break;
              case 'React':
                icon = <RiReactjsFill className="skill-icon" style={{ color: '#11dbcf' }} />; break;
              case 'Django':
                icon = <SiDjango className="skill-icon" style={{ color: 'darkgreen' }} />; break;
              case 'HTML':
                icon = <SiHtml5 className="skill-icon" style={{ color: 'red' }} />; break;
              case 'CSS':
                icon = <SiCss3 className="skill-icon" style={{ color: 'blue' }} />; break;
              case 'Bootstrap':
                icon = <SiBootstrap className="skill-icon" style={{ color: 'blue' }} />; break;
              case 'Python':
                icon = <SiPython className="skill-icon" style={{ color: '#3776AB' }} />; break;
              case 'Adobe Illustrator':
                icon = <AdobeIllustrator className="skill-icon" style={{ color: '#ffa76e' }} />; break;
              case 'Adobe Photoshop':
                icon = <AdobePhotoshop className="skill-icon" style={{ color: '#47aeff' }} />; break;
              default:
                return null;
            }

            return (
              <div className="col-lg-3 col-md-4 mt-4" key={index}>
                <div className="icon-box d-flex align-items-center shadow-lg">
                  {icon}
                  <h3 className="mb-0">{tech}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default PortofolioDetail;
