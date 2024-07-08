import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <>
      <section className="skills-section" id="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((data) => (
            <div className="skill-item" key={data.title}>
              <img src={`/assets/${data.imageSrc}`} alt={data.title} className="skill-icon" />
              <h5>{data.title}</h5>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .skills-section {
          padding: 60px 20px;
          background-color: #f4f4f4;
          color: #333;
          text-align: center;
        }

        .skills-section h1 {
          font-size: 2.5em;
          color: #2c3e50;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skill-item {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          width: 120px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          max-width: 60px;
          height: auto;
          margin-bottom: 10px;
        }

        .skill-item h5 {
          font-size: 1em;
          color: #333;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-container {
            flex-direction: column;
            align-items: center;
          }

          .skill-item {
            width: 100px;
          }

          .skill-icon {
            max-width: 50px;
          }

          .skills-section h1 {
            font-size: 2em;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Skills;
