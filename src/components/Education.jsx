import { useEffect, useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationRef = useRef(null)

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

    if (educationRef.current) {
      observer.observe(educationRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="education" ref={educationRef}>
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My academic journey</p>
      
      <div className="education-content">
        <div className="education-card">
          <div className="education-icon-wrapper">
            <FaGraduationCap className="education-icon" />
          </div>
          
          <div className="education-details">
            <h3 className="degree-title">B.Tech in Computer Science & Engineering</h3>
            
            <div className="education-meta">
              <div className="meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <span>Dayananda Sagar University, Bengaluru</span>
              </div>
              
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                <span>Expected Graduation: August 2028</span>
              </div>
            </div>
            
            <p className="education-description">
              Pursuing a comprehensive program in Computer Science & Engineering with focus on 
              software development, machine learning, and full-stack technologies. Actively 
              involved in technical societies and building real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

