import React from 'react';
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors duration-200">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    IEEE Publication
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Published
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  A Comprehensive Review of Different Frameworks for Ensuring Data Privacy and Security for IoT Networks in Smart City
                </h3>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Amith Gowda HM</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>IEEE Xplore</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  This comprehensive review examines various frameworks and methodologies for ensuring data privacy 
                  and security in IoT networks within smart city environments. The paper analyzes current challenges, 
                  evaluates existing solutions, and proposes recommendations for implementing robust security measures 
                  in interconnected urban systems.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {['IoT Security', 'Smart Cities', 'Data Privacy', 'Network Security', 'Web Technologies'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://ieeexplore.ieee.org/document/10915140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View IEEE Paper</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Committed to contributing to the academic community through research and publication. 
              Currently working on additional research papers in web technologies, software engineering, and computer networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;