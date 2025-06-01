import React from 'react';
import { FaInstagram, FaLinkedin, FaPinterest} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Syalomiele Pratama. All rights reserved.</p>
        <div>
          <a
            href="https://id.linkedin.com/in/syalomiele-pratama-793229286"
            target="_blank"
            rel="noreferrer"
            className="text-light mx-2"
            aria-label="Linkedin"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/_sytama_"
            target="_blank"
            rel="noreferrer"
            className="text-light mx-2"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://id.pinterest.com/temancurhatmu/"
            target="_blank"
            rel="noreferrer"
            className="text-light mx-2"
            aria-label="Pinterest"
          >
            <FaPinterest size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
