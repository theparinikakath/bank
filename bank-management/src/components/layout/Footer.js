import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p>&copy; 2024 BankApp. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://github.com/theparinikakath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark me-3"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/theparinikakath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark me-3"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/parinikakath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark me-3"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark me-3"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
