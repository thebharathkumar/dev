import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Brain, Code, Database, Sun, Moon, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StyleSheet = () => (
  <style>
    {`
      @keyframes gradientBg {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(30px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .gradient-bg {
        background: linear-gradient(-45deg, #1a1a1a, #2d3748, #1e40af, #1e3a8a);
        background-size: 400% 400%;
        animation: gradientBg 15s ease infinite;
      }

      .float-animation {
        animation: float 3s ease-in-out infinite;
      }

      .slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }

      .scale-in {
        animation: scaleIn 0.5s ease-out forwards;
      }

      .stagger-delay-1 { animation-delay: 0.2s; }
      .stagger-delay-2 { animation-delay: 0.4s; }
      .stagger-delay-3 { animation-delay: 0.6s; }

      .card-hover {
        transition: all 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    `}
  </style>
);

export default function DynamicPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const fullText = '>>> import bharath.portfolio as engineer\n>>> engineer.initialize()\n>>> engineer.showcase_skills()';
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      title: "Software Development Intern",
      company: "Lets be the Change, Bangalore",
      period: "Sept '23- Present",
      description: [
        "Spearheading the entire development of a versatile digital solution across multiple platforms, utilizing mostly Flutter for mobile applications and React for web interfaces.",
        "Leveraging Flutter and React for crafting multi-platform applications with focus on data visualization and user experience."
      ],
      tech: ["Flutter", "React", "Data Visualization"]
    },
    {
      title: "Machine Learning Intern",
      company: "Compsoft Technologies, Bangalore",
      period: "Aug - Sept '23",
      description: [
        "Pioneered a Twitter sentiment analysis project during the COVID-19 pandemic",
        "Implemented Flask app with NLP concepts and recognition algorithms"
      ],
      tech: ["Python", "Flask", "NLP", "Machine Learning"]
    }
  ];

  const publications = [
    {
      title: "A Deep CNN-Based Approach for Identifying Medicinal and Edible Plants",
      publisher: "Atlantis Press, Springer Nature",
      series: "Atlantis Highlights in Computer Science (AHCS)",
      tags: ["Deep Learning", "CNN", "Research"]
    },
    {
      title: "Driver Drowsiness Detection using AI",
      publisher: "IJARESM",
      details: "ISSN: 2455-6211, Volume 11, Issue 11, November-2023",
      tags: ["AI", "Computer Vision", "Safety"]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <StyleSheet />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
                BK.Dev
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-20 relative gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="float-animation bg-black/80 backdrop-blur-lg text-green-400 p-6 rounded-lg mb-12 font-mono text-left max-w-2xl mx-auto border border-gray-800">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="overflow-x-auto">{terminalText}<span className="border-r-2 border-green-400">|</span></pre>
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 slide-up">
              Bharath Kumar R
            </h1>
            <div className="slide-up stagger-delay-1 text-xl text-gray-200 space-x-4">
              <a href="mailto:bharath.kr702@gmail.com" className="hover:text-blue-400 transition-colors inline-flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                bharath.kr702@gmail.com
              </a>
              <span className="text-gray-500">·</span>
              <a href="https://linkedin.com/in/thebharathkumar" className="hover:text-blue-400 transition-colors inline-flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                thebharathkumar
              </a>
            </div>
          </div>
        </div>
        <ChevronDown className="w-8 h-8 absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <Card key={index} className="card-hover backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{job.company}</p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {job.description.map((point, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Publications
          </h2>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="card-hover overflow-hidden backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        {pub.title}
                        <ExternalLink className="w-4 h-4 ml-2 text-blue-500" />
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{pub.publisher}</p>
                      {pub.details && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{pub.details}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:bharath.kr702@gmail.com" className="hover:text-blue-400 transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/thebharathkumar" className="hover:text-blue-400 transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Bharath Kumar R. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
