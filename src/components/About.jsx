import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me better</p>
      
      <div className="about-content">
        <div className="about-card">
          <p className="about-text">
            <span className="greeting">Hello! I'm Aditya S. Sheregar</span>
            <br /><br />
            A passionate Full Stack Developer and Machine Learning Engineer who enjoys building 
            scalable applications and intelligent systems from end to end. With strong foundations 
            in C, C++, Python, Java, and SQL, I combine solid software engineering principles with 
            modern AI/ML techniques to create practical, real-world solutions.
            <br /><br />
            My experience spans building full stack projects, architecting efficient backends, 
            designing databases, and working with data structures, networking concepts, and 
            system-level logic. I've developed machine learning models using TensorFlow, 
            implemented reinforcement learning systems like Nim with Q-learning, worked on NLP 
            parsers, and built predictive models such as k-NN classifiers.
            <br /><br />
            I love exploring how things work at a deeper level—whether it's designing ERDs, 
            optimizing algorithms, analyzing BERT attention patterns, or building clean, 
            extensible architectures that follow SOLID principles. Driven by curiosity and a 
            desire to keep improving, I continuously learn new technologies and apply them to 
            build solutions that are both innovative and impactful.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

