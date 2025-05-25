import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioItems } from '../utils/portofolioData';
import '../assets/css/Portofolio.css';

const PortofolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = portfolioItems.find((p) => p.id === parseInt(id));

  if (!item) {
    return <div className="container mt-5">Portofolio not found.</div>;
  }

  return (
    <div className="pd-portfolio-detail-container">
      <button className="pd-btn-back mb-4" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <h2 className="pd-portfolio-title">{item.title}</h2>

      <div className="pd-row-align-items-start">
        {/* Carousel kiri */}
        <div className="pd-carousel-container">
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
                  <span className="pd-carousel-control-prev-icon carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="pd-carousel-control-next carousel-control-next"
                  type="button"
                  data-bs-target="#carouselPortoDetail"
                  data-bs-slide="next"
                >
                  <span className="pd-carousel-control-next-icon carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Deskripsi kanan */}
        <div className="pd-description-container">
          <p>Kategori: <strong>{item.category}</strong></p>
          <p>Deskripsi placeholder untuk <strong>{item.title}</strong>. Kamu bisa tambahkan deskripsi lengkap proyek di sini untuk memberikan gambaran kepada pengunjung.</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pd-btn-primary btn btn-primary border border-0"
          >
            Kunjungi Proyek
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortofolioDetail;
