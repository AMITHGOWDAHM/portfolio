import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong fundamentals in programming and algorithmic thinking"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Developer",
      description: "Building modern web applications with latest technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Developer",
      description: "Working with MySQL and database design principles"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Focused",
      description: "Creating solutions that make a real-world impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image for About Section */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="img1.jpg"
                  alt="Amith Gowda HM - About"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am a motivated and detail-oriented computer science student with strong fundamentals 
              in programming and problem-solving. I enjoy building web applications and exploring 
              new technologies through hands-on projects.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              My passion lies in creating innovative solutions that bridge the gap between complex 
              technology and real-world applications. I'm particularly interested in full-stack 
              web development and software engineering.
            </p>

            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React.js', 'Java', 'PHP', 'C', 'HTML/CSS', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="order-3 md:order-3 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 dark:hover:from-blue-900/20 dark:hover:to-teal-900/20 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;