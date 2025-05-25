import { useNavigate } from 'react-router-dom';
import { portfolioItems } from '../utils/portofolioData';
import { useState } from 'react';

const Portofolio = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portofolio">
      <div className="container mt-5">
        <div className="text-center mt-5">
          <h1 className="fw-bold">MY <span className='porto-text'>PORTOFOLIO</span></h1>
          <div className="filter-buttons mt-4">
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('web')}>Web</button>
            <button onClick={() => setFilter('illustration')}>Illustration</button>
            <button onClick={() => setFilter('logo')}>Logo</button>
          </div>
        </div>

        <div className="row mt-4">
          {filteredItems.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card-porto" onClick={() => navigate(`/portofolio/${item.id}`)}>
                <img src={item.images[0]} alt={item.title} className="img-fluid" />
                <div className="card-overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
