import { useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'Bharat-ID-AiDeVote',
      subtitle: 'AI-Powered Decentralized Voting System',
      description: 'Blockchain-based voting system to prevent fraud with AI-based facial & document verification. Features encrypted vote storage and auditability for transparent and secure democracy.',
      tech: ['ReactJS', 'Flask', 'Python', 'Blockchain', 'TensorFlow'],
      features: [
        'Blockchain-based fraud prevention',
        'AI-based facial & document verification',
        'Encrypted vote storage',
        'Full auditability'
      ]
    },
    {
      title: 'SecureVote',
      subtitle: 'Blockchain-Powered Voting System',
      description: 'A comprehensive, secure digital voting platform built with Next.js, TypeScript, and blockchain technology. Features Aadhaar verification, end-to-end encryption, offline support, real-time analytics, and government database integration.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Blockchain', 'Ethereum', 'Node.js', 'Express', 'JWT', 'IndexedDB'],
      github: 'https://github.com/adi202023/Voting',
      features: [
        'Aadhaar & Voter ID verification',
        'Multi-language support',
        'Immutable blockchain ledger',
        'Real-time analytics dashboard',
        'Offline support'
      ]
    },
    {
      title: 'Reel 2 Reality',
      subtitle: 'Social Challenge App',
      description: 'A social engaging platform where people get rewarded by completing tasks given by cafe and restaurant owners. Users can browse challenges from local businesses, complete fun tasks, share their experiences, and earn rewards.',
      tech: ['React Native', 'Expo SDK', 'React Navigation', 'Expo Linear Gradient', 'Expo Image Picker', 'Ionicons'],
      github: 'https://github.com/adi202023/Reel-2-Reality.git',
      features: [
        'Challenge feed from local businesses',
        'Friend selection',
        'Camera integration for proof submission',
        'Celebration animations',
        'Gamified experiences'
      ]
    }
  ]

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some of my recent work</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              {project.github && project.github !== '#' && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaExternalLinkAlt /> View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

