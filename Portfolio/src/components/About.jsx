import React from "react";

const About = () => {
  return (
    <section
      name="About"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16 text-justify"
    >
      <h1 className="text-4xl font-extrabold mb-8">About Me</h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Hi! I’m a passionate developer who loves crafting accessible,
        pixel-perfect user interfaces. I enjoy blending thoughtful design with
        robust engineering to create experiences that are not only visually
        appealing but also performant and user-friendly.
      </p>

      {/* Current Role */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Current Role
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I’m currently a Software Engineer at{" "}
          <span className="font-medium text-green-500">Codzinc</span>, focusing
          on accessibility. I help design and maintain UI components that adhere
          to web accessibility standards, ensuring an inclusive experience for
          all users.
        </p>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <p className="text-gray-700 leading-relaxed">
          I completed my{" "}
          <span className="font-medium text-green-500">
            Bachelor’s in Software Engineering
          </span>
          , where I not only gained strong technical foundations but also
          enjoyed university life, exploring fun projects, collaborating with
          peers, and building a strong problem-solving mindset.
        </p>
      </div>

      {/* Past Experience */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Experience
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Previously, I worked at{" "}
          <span className="font-medium text-green-500">Djeneric Sol</span> and
          <span className="font-medium text-green-500"> Hisky Tech</span>, where
          I focused on frontend development with React.js, Tailwind CSS, and API
          integrations. I built payroll management and ledger management systems
          from scratch, creating scalable, user-friendly applications.
        </p>
      </div>

      {/* Personal Interests */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Beyond Coding
        </h2>
        <p className="text-gray-700 leading-relaxed">
          When I’m not coding, I enjoy watching movies, playing cricket, hanging
          out with friends and family, and exploring new technologies to
          continuously improve my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
