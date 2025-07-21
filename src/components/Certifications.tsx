import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  verified?: boolean;
  url?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Data Structures and Algorithms",
      issuer: "CodeChef",
      date: "2024",
      description: "Comprehensive course covering fundamental data structures and algorithmic problem-solving techniques",
      verified: true
    },
    {
      title: "React Development Certification",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "Advanced React concepts including hooks, state management, and modern development patterns",
      verified: true
    },
    {
      title: "Database Management Systems (DBMS)",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "Database design, normalization, SQL queries, and database optimization techniques",
      verified: true
    },
    {
      title: "Computer Networks",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "Network protocols, architecture, security, and modern networking concepts",
      verified: true
    },
    {
      title: "Operating Systems",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "OS concepts including process management, memory management, and system design",
      verified: true
    },
    {
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL",
      date: "Jan-Apr 2025",
      description: "In-depth study of network protocols, internet architecture, and communication systems",
      verified: true
    },
    {
      title: "Theory of Computation",
      issuer: "NPTEL",
      date: "Jan-Apr 2025",
      description: "Formal languages, automata theory, computability, and complexity theory",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">Verified</span>
                    </div>
                  )}
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {cert.title}
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {cert.issuer}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">
              Committed to continuous learning and professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;