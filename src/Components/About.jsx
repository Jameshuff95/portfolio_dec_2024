import React, { useState, useEffect } from 'react';
import '../src/index.css';
import '../CSS/About.css';

const About = () => {
  const [currentSection, setCurrentSection] = useState('Mission');

  const skillSections = [
    {
      mission:
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ' +
        'This is a general mission statement placeholder. ',
      technicalSkills: [
        {
          title: 'Python',
          level: 1,
          levelString: 'Novice',
        },
        {
          title: 'SQL',
          level: 2,
          levelString: 'Apprentice',
        },
        {
          title: 'Javascript',
          level: 3,
          levelString: 'Proficient',
        },
        {
          title: 'C++',
          level: 4,
          levelString: 'Distinguished ',
        },
        {
          title: 'PostgreSQL',
          level: 2,
          levelString: 'Novice',
        },
        {
          title: 'Powershell',
          level: 3,
          levelString: 'Apprentice',
        },
        {
          title: 'PHP',
          level: 1,
          levelString: 'Proficient',
        },
        {
          title: 'MongoDB',
          level: 4,
          levelString: 'Distinguished ',
        },
        {
          title: 'Bash',
          level: 1,
          levelString: 'Distinguished ',
        },
      ],
      softSkills: [
        'soft skill 01',
        'soft skill 02',
        'soft skill 03',
        'soft skill 04',
        'soft skill 05',
        'soft skill 06',
        'soft skill 07',
        'soft skill 08',
        'soft skill 09',
        'soft skill 10',
        'soft skill 11',
        'soft skill 12',
      ],
      certifications: [
        {
          title: 'Certification 1',
          img: <img src="path/to/image1" alt="certification 1" />,
          description:
            'Description for certification 1 Description for certification 1',
        },
        {
          title: 'Certification 2',
          img: <img src="path/to/image2" alt="certification 2" />,
          description:
            'Description for certification 2 Description for certification 2',
        },
      ],
    },
  ];

  const sections = [
    'Mission',
    'Technical Skills',
    'Soft Skills',
    'Certifications',
  ];

  const fillBar = () => {
    const bars = document.querySelectorAll('.progressBar');
    bars.forEach((bar) => {
      const level = Number(bar.getAttribute('level'));

      switch (level) {
        case 1:
          bar.style.background =
            'linear-gradient(to right, lime 25%, transparent 25%)';
          break;
        case 2:
          bar.style.background =
            'linear-gradient(to right, lime 50%, transparent 50%)';
          break;
        case 3:
          bar.style.background =
            'linear-gradient(to right, lime 75%, transparent 75%)';
          break;
        case 4:
          bar.style.background =
            'linear-gradient(to right, lime 100%, transparent 100%)';
          break;
      }
    });
  };

  useEffect(() => {
    fillBar();
  }, [currentSection]);

  // prettier-ignore
  const handleArrowClick = (direction) => {
    const currentIndex = sections.indexOf(currentSection);

    const nextIndex = direction === 'left'
      ? (currentIndex - 1 + sections.length) % sections.length
      : (currentIndex + 1) % sections.length;

    setCurrentSection(sections[nextIndex]);
  };

  const getTitle = () => {
    switch (currentSection) {
      case 'Mission':
        return 'Mission';
      case 'Technical Skills':
        return 'Technical Skills';
      case 'Soft Skills':
        return 'Soft Skills';
      case 'Certifications':
        return 'Certifications';
      default:
        return '';
    }
  };

  return (
    <section className="section">
      <div id="arrowContainer">
        <i
          className="bi bi-arrow-left-short"
          onClick={() => handleArrowClick('left')}
        />
        <h4>{getTitle()}</h4>
        <i
          className="bi bi-arrow-right-short"
          onClick={() => handleArrowClick('right')}
        />
      </div>

      {currentSection === 'Mission' && (
        <div className="container">
          <p id="missionStatement" className="container">
            {skillSections[0].mission}
          </p>
        </div>
      )}

      {currentSection === 'Technical Skills' && (
        <>
          <div className="container">
            <ul id="technical_skills_list">
              {skillSections[0].technicalSkills.map((skill) => (
                <li key={skill.title} className="technical_skills_list_item">
                  {skill.title} {/*: {skill.levelString}*/}
                  <div className="progressBar" level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {currentSection === 'Soft Skills' && (
        <ul id="soft_skills_container" className="container">
          {skillSections[0].softSkills.map((softSkill) => (
            <li key={softSkill} className="softSkill">
              <i className="bi bi-check" /> {softSkill}
            </li>
          ))}
        </ul>
      )}

      {currentSection === 'Certifications' && (
        <div className="container">
          <ul id="certifications_list">
            {skillSections[0].certifications.map((certification) => (
              <li key={certification.title} className="certification">
                <p id="certTitle">{certification.title}</p>
                <div id="certLower">
                  <img
                    src={certification.img}
                    alt="certification image"
                    aria-label="certifcation_image"
                    id="certImage"
                  />
                  <p id="certDescription">{certification.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default About;
