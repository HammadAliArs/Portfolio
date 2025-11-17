import React from "react";
import payrol from "./../assets/Payroll.png";
import ledger from "./../assets/Ledger-1.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Ledger Management System – Unique Solar",
      description:
        "Designed and developed a complete ledger management web application from scratch using React.js and Tailwind CSS. Integrated RESTful APIs for real-time financial data handling with a responsive, intuitive UI.",
      screenshot: ledger,
    },
    {
      id: 2,
      name: "Coin-Be-Service – Payroll System",
      description:
        "Developed a fully responsive payroll management frontend using React.js and Tailwind CSS. Managed global state using Context API and integrated dynamic data via REST APIs.",
      screenshot: payrol,
    },
  ];

  return (
    <section
      name="Portfolio"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-16"
    >
      <h1 className="text-4xl font-extrabold mb-4 ">Portfolio</h1>
      <p className=" font-semibold text-gray-700 mb-10">Featured Projects</p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ id, screenshot, name, description }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              {/* Image container */}
              <div className="h-48 bg-gray-100 flex justify-center items-center overflow-hidden">
                <img
                  src={screenshot}
                  alt={name}
                  className="max-h-full w-full object-contain"
                />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
