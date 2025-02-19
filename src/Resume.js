import React from 'react';

const Resume = () => {
  return (
    <div className="font-sans m-8 p-8 bg-gray-100 shadow-lg rounded-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Srinivas</h1>
        <p className="text-lg text-gray-600">Software Developer</p>
        <p className="text-lg text-gray-600">Email: srinivas1997@example.com | Phone: +91-1234567890</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Highly motivated and skilled software developer with 2 years of experience in developing robust web applications using React, Node.js, MySQL, and Python. Proven ability to deliver high-quality projects on time and within budget. Strong problem-solving skills and a passion for learning new technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
          <li>React</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>RESTful APIs</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">Software Developer at PolygonGeo</h3>
          <p className="text-gray-600">Mar 2023 - Present</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed and maintained an admin panel, APIs, and user interfaces for various web applications.</li>
            <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
            <li>Improved application performance and user experience through code optimization and refactoring.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">Internship at Pragmatic Systems</h3>
          <p className="text-gray-600">[Dates]</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Assisted in the development of web applications by creating and integrating APIs, building user interfaces, and performing code reviews.</li>
            <li>Gained hands-on experience with full-stack development and agile methodologies.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">Admin Panel</h3>
          <p className="text-gray-700">Developed a comprehensive admin panel for managing user data, content, and settings. Implemented role-based access control and data visualization features using React and Chart.js.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">API Development</h3>
          <p className="text-gray-700">Created RESTful APIs for various applications, ensuring secure and efficient data exchange between the client and server. Utilized Node.js and Express for backend development.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">User Interfaces</h3>
          <p className="text-gray-700">Designed and implemented responsive user interfaces using React, HTML, and CSS. Focused on creating intuitive and user-friendly experiences for end-users.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">MCA</h3>
          <p className="text-gray-600">Osmania University</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>MindMajix Certified Python Developer</li>
          <li>Various Traiing Certifications From Nextwave</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Interests</h2>
        <p className="text-gray-700">Programming, Web Development, Cricket, Chess</p>
      </section>
    </div>
  );
};

export default Resume;