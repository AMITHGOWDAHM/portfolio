import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Computer Science Student | Aspiring Software Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src="img.jpg"
                  alt="Amith Gowda HM"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 bg-clip-text text-transparent">
              Amith Gowda HM
            </span>
          </h1>
          
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Experienced in web development with modern technologies and programming  languages.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="tel:+918618524177"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8618524177</span>
            </a>
            
            <a
              href="mailto:amithgowda9824@gmail.com"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>amithgowda9824@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/AmithGowdaHM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
            </a>
            
            <a
              href="https://github.com/AmithgowdaHM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;