import React, { useState } from 'react';
import experience from './data/experience.json';

const Experience = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModalContent = (role) => {
    if (role === 'Associate Business Analyst') {
      return (
        <>
          <h2>Infosys, Associate Business Analyst</h2>
          <p className="role-duration">2022/11 - present | Indore, Pune, India</p>
          <p>Played a key role in two transformative projects:</p>
          <ul>
            <li>Bed Bath & Beyond (November 2022 to August 2023)</li>
            <li>BMG Songs (October 2023 to Present)</li>
            <li>Leveraged expertise in PostgreSQL to develop scalable database solutions.</li>
            <li>Utilized Java for backend development and application logic.</li>
            <li>Implemented Microservices architecture for modular and maintainable systems.</li>
            <li>Developed dynamic user interfaces with React.js.</li>
            <li>Proficiently generated SAST and DAST reports for comprehensive security assessments.</li>
            <li>Utilized Git and GitHub Desktop for version control and collaborative development.</li>
            <li>Successfully deployed projects on cloud platforms utilizing Amazon EC2 and Lambda.</li>
            <li>Managed project tasks efficiently using Rally, optimizing Agile project workflows for enhanced productivity and delivery.</li>
          </ul>
          <div className="image-container">
            <img src="https://th.bing.com/th/id/OIP.xA5Pah2bSJcXQ7wiUVaEDwHaHa?rs=1&pid=ImgDetMain" alt="Bed Bath & Beyond" />
            <img src="https://www.fimi.it/imgpub/1921484/0/0/bmg.png" alt="BMG Songs" />
          </div>
        </>
      );
    } else if (role === 'Analyst') {
      return (
        <>
          <h2>Capgemini, Analyst</h2>
          <p className="role-duration">2021/04 - 2022/11 | Hyderabad, India</p>
          <p>Played a key role in two transformative projects at Baker Hughes:</p>
          <ul>
            <li>Employee Costing Manager (April 2021 to December 2021)</li>
            <li>Real track (December 2021 to November 2022)</li>
            <li>Leveraged expertise in PostgreSQL to develop scalable database solutions and functions.</li>
            <li>Utilized Java for backend development and application logic.</li>
            <li>Implemented Microservices architecture for modular and maintainable systems.</li>
            <li>Developed dynamic user interfaces with React.js.</li>
            <li>Proficiently generated SAST and DAST reports for comprehensive security assessments.</li>
            <li>Utilized Git and GitHub Desktop for version control and collaborative development.</li>
            <li>Successfully deployed projects on cloud platforms utilizing Amazon EC2 and Lambda.</li>
            <li>Managed project tasks efficiently using Rally, optimizing Agile project workflows for enhanced productivity and delivery.</li>
          </ul>
          <div className="image-container">
            <img src="https://www.pngmart.com/files/14/Baker-Hughes-Logo-Sign-Transparent-PNG.png" alt="Baker Hughes" />
          </div>
        </>
      );
    }
  };

  const toggleModal = (role) => {
    setModalContent(handleModalContent(role));
    setModalVisible(true);
  };

  return (
    <>
      <section className="experience-section" id="experience">
        <h1>Experience</h1>
        <div className="experience-container">
          {experience.map((data) => (
            <div
              key={data.id}
              className="experience-item"
              onClick={() => toggleModal(data.role)}
            >
              <div className="experience-left">
                {data.role === 'Associate Business Analyst' && (
                  <img src="https://th.bing.com/th/id/OIP.FOMHBj7B86MFCZfyAm39vwAAAA?rs=1&pid=ImgDetMain" alt="Infosys" className="experience-image" />
                )}
                {data.role === 'Analyst' && (
                  <img src="https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png" alt="Capgemini" className="experience-image" />
                )}
              </div>
              <div className="experience-right">
                <h2>{data.role}</h2>
                <h4>
                  <span className="date">{data.startDate} - {data.endDate}</span>
                  <span className="location"> | {data.location}</span>
                </h4>
                <h5>{data.experiences[0]}</h5>
                <h5>{data.experiences[1]}</h5>
              </div>
            </div>
          ))}
        </div>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
              {modalContent}
            </div>
          </div>
        )}
      </section>
      <style jsx>{`
        .experience-section {
          padding: 60px 20px;
          background-color: #f9f9f9;
          color: #333;
          text-align: center;
        }

        .experience-section h1 {
          margin-bottom: 40px;
          font-size: 2.5em;
          color: #2c3e50;
          font-weight: bold;
        }

        .experience-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .experience-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background-color: #fff;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .experience-item:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .experience-left {
          flex: 0 0 100px;
        }

        .experience-image {
          max-width: 100px;
          height: auto;
        }

        .experience-right {
          flex: 1;
          margin-left: 20px;
        }

        .experience-right h2 {
          font-size: 1.5em;
          color: #333;
        }

        .experience-right h4 {
          color: #555;
          font-size: 1em;
          margin: 10px 0;
        }

        .experience-right .date {
          color: #3498db;
        }

        .experience-right .location {
          color: #555;
        }

        .experience-right h5 {
          color: #888;
          font-size: 0.9em;
        }

        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          overflow: auto;
        }

        .modal-content {
          background-color: #fff;
          margin: 15px;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          color: #333;
          position: relative;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .modal-content h2 {
          color: #2c3e50;
        }

        .modal-content ul {
          list-style-type: disc;
          margin: 15px 0;
          padding-left: 20px;
        }

        .modal-content .image-container {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .modal-content .image-container img {
          max-width: 80px;
          height: auto;
          border-radius: 5px;
        }

        .modal-content .close {
          color: #aaa;
          float: right;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
        }

        .modal-content .close:hover,
        .modal-content .close:focus {
          color: #000;
        }

        @media (max-width: 768px) {
          .experience-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .experience-left {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Experience;
