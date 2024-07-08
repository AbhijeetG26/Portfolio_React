import React, { useEffect, useRef } from 'react';
import pdf from './pdf/Abhijeet-Gourav_Resume.pdf';
import heroImage from './hero/abhijeet.jpeg';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Abhijeet Gourav",
        "I am a Full Stack Developer",
        "With Spring Boot, PostgreSQL, and React.JS",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="home-section" id="home">
        <div className="home-content">
          <div className="home-text">
            <h1 ref={typedRef}></h1>
            <a href={pdf} download="Abhijeet-Gourav_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
          </div>
          <div className="home-image">
            <img src={heroImage} alt="Abhijeet Gourav" />
          </div>
        </div>
      </section>
      <style jsx>{`
        .home-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f9f9f9; /* Light background color */
          padding: 60px 20px;
          min-height: 100vh;
          overflow: hidden;
        }

        .home-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 40px;
          max-width: 1200px;
          width: 100%;
        }

        .home-text {
          flex: 1;
          max-width: 500px;
        }

        .home-text h1 {
          font-size: 2.5em;
          color: #333; /* Dark text color */
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 700;
        }

        .btn-primary {
          display: inline-block;
          font-size: 1em;
          padding: 12px 24px;
          border-radius: 5px;
          border: none;
          color: #fff;
          background-color: #007bff; /* Primary button color */
          text-decoration: none;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #0056b3; /* Darker shade on hover */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .home-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home-image img {
          max-width: 80%;
          height: auto;
          border-radius: 10px; /* Rounded corners for the image */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .home-content {
            flex-direction: column;
            text-align: center;
          }

          .home-text h1 {
            font-size: 2em;
          }

          .btn-primary {
            padding: 10px 20px;
            font-size: 0.9em;
          }

          .home-image img {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
