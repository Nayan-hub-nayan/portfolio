import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import nexora from "./assets/image/nexora.jpg";
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '',number: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic frontend validation (optional)
  if (!formData.name || !formData.email || !formData.message || !formData.number) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("https://server-topaz-nine-25.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(formData),
      
    });

    const data = await response.json();
    if (!data.success) {
      // If backend sends validation errors
      if (data.error) {
        // Assuming backend sends { errors: { email: "Invalid email", name: "Required" } }
        
        alert(`Validation Error:  ${data.error}`);
      
      } else {
        alert("Something went wrong. Please try again.");
      }
      return;
    }

    // On success
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: "", number: "", email: "", message: "" });

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Network error. Please try again later.",error);
  }
};


  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Three.js', icon: '🎮' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '💎' },
    { name: 'Redux', icon: '🔄' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '🔧' },
  ];

  const experiences = [
    {
      title: 'Freelance Frontend Developer',
      company: 'Self-employed',
      period: 'Jan 2023 - Present',
      description: [
        'Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP',
        'Developed and deployed modern landing pages and portfolio websites for clients',
        'Integrated APIs and handled form validation, animations, and smooth scroll effects',
        'Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Full Stack Development Trainee',
      company: 'Sheryians Coding School',
      period: 'Aug 2023 - Mar 2025',
      description: [
        'Completed an intensive training program focused on MERN stack development',
        'Built multiple full-stack projects, including CRUD applications and authentication systems',
        'Worked with tools like Node.js, Express.js, MongoDB, React.js'
      ],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const projects = [
    {
      title: 'MacBookPro-redesign',
      description: 'A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive way to explore the product\'s look and features.',
      tech: ['React', 'Three.js', 'Tailwind'],
      gradient: 'from-purple-600 to-pink-600',
      icon: '💻'
    },
    {
      title: 'Falverra Redesign',
      description: 'A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an elegant and modern browsing experience that highlights the brand\'s visual identity.',
      tech: ['React', 'Tailwind', 'Framer'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🎨'
    },
    {
      title: 'Trip Guide',
      description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
      tech: ['Next.js', 'SupaBase', 'Stripe'],
      gradient: 'from-green-500 to-teal-500',
      icon: '✈️'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
        <div 
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${(window.innerWidth - mousePosition.x) / 30}px`,
            bottom: `${(window.innerHeight - mousePosition.y) / 30}px`,
            transition: 'all 0.5s ease-out',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-purple-600/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 ">
                <img src={nexora} className="w-full h-full object-cover rounded"/>
              </div>
              <div>
                <div className="text-sm font-semibold">Nexora</div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all hover:text-purple-400 relative ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-600/20 rounded-full text-sm text-purple-300 border border-purple-600/30 animate-pulse">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient">Nayan</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I develop 3d visuals, user interfaces and web applications
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/50 transition-all transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600/10 transition-all transform hover:scale-105"
              >
                View Work
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Nayan-hub-nayan" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://in.linkedin.com/in/nayan-kawalkar-164725352">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nayankawalkar07@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-purple-600/30 flex items-center justify-center overflow-hidden group">
              <div className="text-center space-y-4 relative z-10">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                <p className="text-gray-400 font-medium">Interactive 3D Workspace</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-600/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-purple-400 uppercase tracking-wider mb-4 font-semibold">Introduction</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Overview</h3>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Hi, I'm Nayan Kawalkar — a passionate Frontend / Full Stack Developer with hands-on experience in building modern, responsive web applications using technologies like React.js, Tailwind CSS, Node.js, and MongoDB. I've worked on real-world freelance projects and participated in hackathons like Reimagine, where I pushed my creativity and technical skills to the next level.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Web Developer', icon: '🌐', desc: 'Modern web apps' },
              { title: 'React Developer', icon: '⚛️', desc: 'Component architecture' },
              { title: 'Backend Developer', icon: '🔧', desc: 'API & databases' },
              { title: 'MERN Stack', icon: '💻', desc: 'Full-stack solutions' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl border border-slate-700 hover:border-purple-600 transition-all hover:shadow-xl hover:shadow-purple-600/20 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-sm text-purple-400 uppercase tracking-wider mb-4 font-semibold">What I've Done So Far</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Work Experience</h3>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-xl">💼</span>
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-32 bg-gradient-to-b from-purple-600 to-pink-600 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-600 transition-all hover:shadow-xl hover:shadow-purple-600/20 group">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{exp.title}</h4>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-3">
                          <span className="text-purple-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-sm text-purple-400 uppercase tracking-wider mb-4 font-semibold">What I Use To Build</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Technologies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group aspect-square bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl border border-slate-700 hover:border-purple-600 transition-all hover:shadow-xl hover:shadow-purple-600/20 flex items-center justify-center transform hover:scale-105 hover:-rotate-3 cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold group-hover:text-purple-400 transition-colors">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-sm text-purple-400 uppercase tracking-wider mb-4 font-semibold">My Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Projects</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've built using modern web technologies. From frontend animations to backend logic, with live demos and source code provided, these works reflect my hands-on experience in building scalable and maintainable web applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-2xl border border-slate-700 hover:border-purple-600 transition-all overflow-hidden hover:shadow-xl hover:shadow-purple-600/20 transform hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl z-10 transform group-hover:scale-125 transition-transform">{project.icon}</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-600/30">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group/link">
                    View Project 
                    <ExternalLink size={16} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm text-purple-400 uppercase tracking-wider mb-4 font-semibold">Get In Touch</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Contact</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="what's your name?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-300">Your Number</label>
                  <input
                    type="text"
                    value={formData.number}
                    onChange={(e) => setFormData({...formData, number: e.target.value})} 
                    placeholder="what's your number?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-300">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="what's your email?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-300">Your Message</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="what do you want to say?"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all resize-none text-white placeholder-gray-500"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/50 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-purple-600/30 flex items-center justify-center overflow-hidden group">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-pulse blur-2xl opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📧</div>
                    <p className="text-gray-300 font-medium">Let's Connect!</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-600/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Nayan Kawalkar. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/Nayan-hub-nayan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://in.linkedin.com/in/nayan-kawalkar-164725352" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nayankawalkar07@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}