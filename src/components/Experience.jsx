import { useEffect, useRef } from 'react'
import { FaAward, FaUsers, FaTrophy } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experienceRef = useRef(null)

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <h2 className="section-title">Experience & Achievements</h2>
      <p className="section-subtitle">My journey and accomplishments</p>
      
      <div className="experience-content">
        <div className="experience-section">
          <h3 className="subsection-title">
            <FaUsers className="section-icon" />
            Volunteer Experience
          </h3>
          
          <div className="experience-cards">
            <div className="experience-card">
              <div className="experience-header">
                <h4 className="experience-title">IEEE Member</h4>
                <span className="experience-org">Dayananda Sagar University</span>
              </div>
              <p className="experience-description">
                Active member of IEEE, contributing to various technical events and activities.
              </p>
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                <h4 className="experience-title">Web-Master</h4>
                <span className="experience-org">ACM-DSU</span>
              </div>
              <p className="experience-description">
                Spearheaded and managed a core organizing team to plan, coordinate, and execute 
                inter-college hackathon. Maintained and developed the organization's web presence.
              </p>
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                <h4 className="experience-title">Volunteer & Host</h4>
                <span className="experience-org">IEEE Event - Dayananda Sagar University</span>
              </div>
              <p className="experience-description">
                Served as a volunteer and hosted QUIZ competition in IEEE event, ensuring smooth 
                execution and engaging experience for participants.
              </p>
            </div>
          </div>
        </div>

        <div className="experience-section awards-section">
          <h3 className="subsection-title">
            <FaTrophy className="section-icon" />
            Awards & Honors
          </h3>
          
          <div className="award-card">
            <FaAward className="award-icon" />
            <div className="award-content">
              <h4 className="award-title">First Place - Bharat-ID-Shield Challenge</h4>
              <p className="award-org">Christ University</p>
              <p className="award-description">
                Secured first place by developing a robust shield model for secure digital identities, 
                integrating encryption, blockchain audit trails, and threat-detection logic. This 
                comprehensive solution demonstrated advanced security architecture and innovative 
                approach to digital identity protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

