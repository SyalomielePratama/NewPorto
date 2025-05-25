// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portofolio from '../components/Portofolio';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
    </>
  );
};

export default Home;
