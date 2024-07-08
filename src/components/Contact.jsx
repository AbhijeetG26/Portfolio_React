import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-container">
          <a
            href="https://www.linkedin.com/in/abhijeet-gourav-2b0349194/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:abhijeet.gouravdeo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <SiGmail className="contact-icon" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/AbhijeetG26"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/abhijeetgourav_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaInstagram className="contact-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </section>
      <style jsx>{`
        .contact-section {
          padding: 60px 20px;
          background-color: #f0f4f8;
          text-align: center;
        }

        .contact-section h1 {
          margin-bottom: 40px;
          color: #2c3e50;
          font-size: 2.5em;
          font-weight: bold;
        }

        .contact-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #333;
          background-color: #fff;
          padding: 15px;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease, color 0.3s ease;
          width: 100px;
          height: 100px;
          justify-content: center;
          align-items: center;
        }

        .contact-item:hover {
          background-color: #3498db;
          color: #fff;
        }

        .contact-icon {
          font-size: 2em;
        }

        .contact-item span {
          margin-top: 10px;
          font-size: 1em;
        }

        @media (max-width: 768px) {
          .contact-container {
            gap: 20px;
          }

          .contact-item {
            width: 80px;
            height: 80px;
          }

          .contact-icon {
            font-size: 1.5em;
          }

          .contact-item span {
            font-size: 0.9em;
          }
        }

        @media (max-width: 480px) {
          .contact-item {
            width: 70px;
            height: 70px;
          }

          .contact-icon {
            font-size: 1.3em;
          }

          .contact-item span {
            font-size: 0.8em;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
