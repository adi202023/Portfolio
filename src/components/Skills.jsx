import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'Java', 'SQL', 'JavaScript']
    },
    {
      title: 'AI & ML',
      skills: ['Reinforcement Learning', 'ML Algorithms', 'TensorFlow', 'NLP', 'Q-learning', 'k-NN']
    },
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'React Native']
    },
    {
      title: 'Backend Development',
      skills: ['Python/Flask', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Vercel', 'Netlify']
    },
    {
      title: 'Testing & Deployment',
      skills: ['Jest', 'React Testing Library', 'RESTful APIs', 'CI/CD']
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Leadership', 'Effective Communication', 'Problem Solving', 'Critical Thinking', 'Time Management', 'Prioritization', 'Analytical Thinking']
    }
  ]

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`skill-category-card ${category.title === 'Soft Skills' ? 'soft-skills-card' : ''}`}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

