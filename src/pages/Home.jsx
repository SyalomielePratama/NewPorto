// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portofolio from '../components/Portofolio';
import Available from '../components/Available';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
      <Available />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
