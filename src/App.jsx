// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortofolioDetail from './components/PortofolioDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolio/:id" element={<PortofolioDetail />} />
    </Routes>
  );
};

export default App;
