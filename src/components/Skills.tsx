import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'React.js', level: 80, category: 'Frontend' },
    { name: 'Java', level: 80, category: 'Backend' },
    { name: 'PHP', level: 75, category: 'Backend' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'VS Code', level: 90, category: 'Tools' },
    { name: 'LaTeX', level: 70, category: 'Tools' },
    { name: 'GitHub', level: 85, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring advanced web development concepts, 
            software engineering practices, and modern development tools to stay at the forefront of technological innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;