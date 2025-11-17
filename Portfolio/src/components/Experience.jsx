import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Codzinc",
      location: "Lahore, Pakistan",
      role: "Software Engineer",
      duration: "Apr 2025 – Present",
      responsibilities: [
        "Engineered feature-rich web solutions with React.js, ensuring cross-platform responsiveness and optimal performance.",
        "Optimized application performance through code refactoring, lazy loading, and efficient rendering strategies.",
        "Contributed to technical planning, feature estimation, and deployment processes to ensure smooth product releases.",
      ],
    },
    {
      id: 2,
      company: "Djeneric Sol",
      location: "Lahore, Pakistan",
      role: "React.js Front-End Developer",
      duration: "Oct 2024 – Mar 2025",
      responsibilities: [
        "Collaborated with team on dynamic web interfaces using React.js, enhancing UI/UX for scalable web applications.",
        "Implemented state management with Context API and optimized component reusability for maintainable codebases.",
        "Gained hands-on experience integrating REST APIs and working in Agile development environments.",
      ],
    },
    {
      id: 3,
      company: "HiSky Tech",
      location: "Sargodha, Pakistan",
      role: "Front-End Development Intern",
      duration: "Jul 2024 – Aug 2024",
      responsibilities: [
        "Built responsive, pixel-perfect layouts with HTML5, CSS3, and JavaScript following UI/UX standards.",
        "Developed interactive UI elements via DOM manipulation using vanilla JavaScript.",
        "Supported frontend optimization and clean code practices alongside senior developers.",
      ],
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16 text-justify"
    >
      <h1 className="text-4xl font-bold mb-10">Experience</h1>
      <div className="grid gap-10">
        {experiences.map(
          ({
            id,
            company,
            location,
            role,
            duration,
            responsibilities,
            logo,
          }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-start md:items-center border-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {company}
                </h2>
                <p className="text-green-500 font-medium">{role}</p>
                <p className="text-gray-500 text-sm mb-2">
                  {location} | {duration}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
