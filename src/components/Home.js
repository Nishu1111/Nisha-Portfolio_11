// HomeSection.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile_img.jpg'; // ✅ Update path
import resumePDF from '../assets/Nisha_Dadoriya_CV.pdf'; // ✅ Update path

const HomeSection = () => {
  return (
    <main
      id="home"
      className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between"
    >
      {/* Left: Text & CTA */}
      <div className="text-center text-md-start mb-5 mb-md-0">
        <h1 className="display-4 fw-bold mb-3">
          Hi, I’m <span className="text-success">Nisha Dadoriya</span>
        </h1>

        <h2 className="mb-4 fs-4">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'Software Developer',
              2000,
              'Python & React.js Specialist',
              2000,
              'Cloud & API Integrator',
              2000,
              'UI/UX Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <a
          href={resumePDF}
          download="Nisha_Dadoriya_CV.pdf"
          className="btn btn-success btn-lg px-4 py-2 d-inline-flex align-items-center"
        >
          <FaDownload className="me-2" />
          Download Resume
        </a>
      </div>

      {/* Right: Profile Image */}
      <div className="text-center">
        <img
          src={profileImg}
          alt="Nisha Dadoriya"
          className="rounded-circle shadow"
          style={{ width: '350px', height: '350px', objectFit: 'cover' }}
        />
      </div>
    </main>
  );
};

export default HomeSection;
