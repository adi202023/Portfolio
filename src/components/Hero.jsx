import { useEffect, useRef } from 'react'
import { FaDownload, FaEnvelope, FaUser } from 'react-icons/fa'
import './Hero.css'

// Google Drive Resume Link - Replace with your actual shareable Google Drive link
// To get your link: 
// 1. Upload resume.pdf to Google Drive
// 2. Right click on the file → "Get link" or "Share"
// 3. Set permission to "Anyone with the link" (Viewer)
// 4. Copy the full URL (should look like: https://drive.google.com/file/d/1ABC123xyz.../view?usp=sharing)
// 5. Replace the URL below with your actual link
const RESUME_GOOGLE_DRIVE_LINK = '' // Add your Google Drive shareable link here

const Hero = () => {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleDownloadResume = () => {
    // If Google Drive link is provided, use it. Otherwise, use local file
    if (RESUME_GOOGLE_DRIVE_LINK && RESUME_GOOGLE_DRIVE_LINK.trim() !== '') {
      window.open(RESUME_GOOGLE_DRIVE_LINK, '_blank')
    } else {
      // Fallback to local file (opens in browser, user can download from there)
      window.open('/resume.pdf', '_blank')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="/profile-photo.jpg" 
                alt="Aditya Sheregar" 
                className="hero-profile-image"
              />
            </div>
            <div className="image-ring"></div>
          </div>
          
          <h1 className="hero-name">Aditya Sheregar</h1>
          <p className="hero-title">AI-ML Engineer | Full Stack Developer</p>
          
          <p className="hero-description">
            A passionate Full Stack Developer and Machine Learning Engineer who enjoys building 
            scalable applications and intelligent systems from end to end.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={handleDownloadResume}
            >
              <FaDownload /> Download Resume
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('#contact')}
            >
              <FaEnvelope /> Contact Me
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('#about')}
            >
              <FaUser /> About Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,90 600,60 T1200,60 L1200,120 L0,120 Z" fill="var(--sand-beige)" opacity="0.5"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

