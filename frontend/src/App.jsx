import { useEffect, useRef, useState } from 'react'
import heroImg from './assets/Masrafi.png'
import brandLogo from './assets/M.png'
import './App.css'

const projects = [
  {
    kicker: 'Parking Automation',
    title: 'ParKar',
    description:
      'ParKar digitizes and automates semester-based parking access control in universities by managing who is allowed to park, while using AI assistance to support administrators in fair and efficient decision-making.',
    tags: ['Laravel', 'React', 'MySQL', 'FastAPI', 'AI'],
    details: ['Backend: Laravel (REST API)', 'Frontend: React.js', 'Rendering: Client-Side Rendering (CSR)', 'AI Layer: Python (FastAPI) / External AI API'],
    source: 'https://github.com/CyberFlare141/ParKar',
    live: 'https://github.com/CyberFlare141/ParKar',
  },
  {
    kicker: 'Financial Software',
    title: 'Bank Management',
    description:
      'A banking management app built with Laravel and React, designed to simplify account operations and administration workflows. It uses the ACID properties of PostgreSQL to ensure data integrity and reliability.',
    tags: ['Laravel', 'React' , 'PostgreSQL'],
    details: ['Backend: Laravel', 'Frontend: React.js', 'Database: PostgreSQL'],
    source: 'https://github.com/CyberFlare141/Bank-Management',
    live: 'https://github.com/CyberFlare141/Bank-Management',
  },
  {
    kicker: 'Healthcare Platform',
    title: 'Blood Donation Management System',
    description:
      'A web application that efficiently connects blood donors with recipients and simplifies the donation request process.',
    tags: ['React', 'MongoDB', 'Node.js'],
    details: ['Donor registration', 'Blood request management', 'User authentication', 'Real-time data management'],
    source: 'https://github.com/CyberFlare141/Project-Blood-Donation',
    live: 'https://github.com/CyberFlare141/Project-Blood-Donation',
  },
]

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'PHP', 'Prolog'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Laravel', 'Node.js'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Core Web Technologies',
    skills: ['HTML5', 'CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['VS Code', 'PyCharm', 'Code::Blocks', 'Git', 'GitHub', 'Azure', 'Google Colaboratory', 'Jupyter Notebook', 'Docker' , 'Postman', 'Figma', 'Canva', 'Linux'],
  },
  {
    category: 'Soft Skills',
    skills: ['Consistency', 'Time Management' , 'Teamwork', 'Problem Solving', 'Adaptability'],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Ahsanullah University of Science and Technology (AUST)',
    status: 'Currently Enrolled',
    year: 'Ongoing',
    gradeLabel: 'CGPA',
    gpa: 'Ongoing',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka City College',
    status: 'Passed',
    year: '2022',
    gpa: '5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Jatrabari High School and College',
    status: 'Passed',
    year: '2020',
    gpa: '5.00',
  },
]

const contactPlatforms = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/masrafi.iqbal897',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.8c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=masrafiiqbal1%40gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99l-8 4.99-8-4.99V6l8 4.99L20 6v2.99z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/CyberFlare141',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.185 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0112 5.8c1.02.005 2.045.138 3.003.405 2.28-1.555 3.285-1.23 3.285-1.23.655 1.655.245 2.88.12 3.185.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.9-.015 3.295 0 .315.21.69.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/masrafi-iqbal-0331a1235/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.85 0-2.132 1.444-2.132 2.937v5.668H9.356V9h3.414v1.561h.049c.477-.904 1.637-1.855 3.369-1.855 3.6 0 4.266 2.368 4.266 5.452v6.294zM5.337 7.433c-1.144 0-2.072-.93-2.072-2.075 0-1.145.929-2.075 2.072-2.075s2.073.93 2.073 2.075c0 1.145-.929 2.075-2.073 2.075zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.267V1.732C24 .774 23.208 0 22.225 0z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/01789722133',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.199.297-.769.967-.942 1.165-.173.199-.346.224-.643.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.298.298-.497.099-.199.05-.373-.025-.521-.075-.149-.672-1.611-.92-2.213-.242-.579-.487-.5-.672-.51l-.572-.01c-.199 0-.52.075-.792.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.199-.57-.348zM12 2C6.486 2 2 6.486 2 12c0 2.109.655 4.066 1.777 5.688L2 22l4.545-1.188A9.936 9.936 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    href: 'https://discord.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.369A19.791 19.791 0 0016.02 3.04a14.195 14.195 0 00-.663 1.354 18.304 18.304 0 00-5.714 0 20.24 20.24 0 00-.68-1.354 19.78 19.78 0 00-4.288 1.329C2.96 9.154 2.691 13.35 3.112 17.489a19.736 19.736 0 006.074 3.111 14.631 14.631 0 00.52-.8 13.777 13.777 0 01-2.025-.974 9.382 9.382 0 01.385-.251c2.823 1.294 5.867 1.294 8.708 0a8.912 8.912 0 01.403.262 13.755 13.755 0 01-2.006.949c.177.279.394.68.52.803a19.827 19.827 0 006.074-3.111c.654-3.248.534-7.225-.945-11.12zM8.02 15.331c-1.183 0-2.155-1.085-2.155-2.417 0-1.333.955-2.417 2.155-2.417 1.22 0 2.179 1.1 2.155 2.417 0 1.333-.956 2.417-2.155 2.417zm7.975 0c-1.183 0-2.155-1.085-2.155-2.417 0-1.333.955-2.417 2.155-2.417 1.22 0 2.179 1.1 2.155 2.417 0 1.333-.935 2.417-2.155 2.417z" />
      </svg>
    ),
  },
]

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.revealDelay || 0)
            setTimeout(() => entry.target.classList.add('in-view'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-top-button ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'skills', 'education', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  const navLinks = ['home', 'skills', 'education', 'projects', 'contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a className="nav-brand" href="#home" onClick={() => setIsOpen(false)} aria-label="Masrafi Iqbal — home">
          <img src={brandLogo} alt="" />
        </a>

        <button className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`nav-link ${activeSection === link ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function App() {
  const revealRef = useScrollReveal()

  return (
    <>
      <Navigation />
      <main className="hero-page" ref={revealRef}>
        <section id="home" className="hero-panel">
          <div className="hero-copy">
            <p className="hero-eyebrow reveal-up"><span className="status-dot" /> Available for opportunities</p>
            <h1 className="reveal-up">
              Building useful things<br />for the <em>real world.</em>
            </h1>
            <p className="hero-headline reveal-up">
              I’m Masrafi Iqbal — a full-stack developer and CSE student exploring the space where thoughtful software meets intelligent systems.
            </p>
            <p className="hero-description reveal-up">
              AUST student passionate about software development, MLOps, computer architecture, and retro technology.
            </p>

            <div className="hero-actions reveal-up">
              <a href="#projects" className="button button-primary">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a href="#contact" className="button button-secondary">
                Let’s talk
              </a>
            </div>

            <div className="hero-social reveal-up">
              <a href="https://github.com/CyberFlare141" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.185 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0112 5.8c1.02.005 2.045.138 3.003.405 2.28-1.555 3.285-1.23 3.285-1.23.655 1.655.245 2.88.12 3.185.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.9-.015 3.295 0 .315.21.69.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.85 0-2.132 1.444-2.132 2.937v5.668H9.356V9h3.414v1.561h.049c.477-.904 1.637-1.855 3.369-1.855 3.6 0 4.266 2.368 4.266 5.452v6.294zM5.337 7.433c-1.144 0-2.072-.93-2.072-2.075 0-1.145.929-2.075 2.072-2.075s2.073.93 2.073 2.075c0 1.145-.929 2.075-2.073 2.075zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.267V1.732C24 .774 23.208 0 22.225 0z" />
                </svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=masrafiiqbal1%40gmail.com" target="_blank" rel="noreferrer noopener" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.99l-8 4.99-8-4.99V6l8 4.99L20 6v2.99z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <span className="pebble pebble-1" aria-hidden="true" />
            <span className="pebble pebble-2" aria-hidden="true" />
            <span className="pebble pebble-3" aria-hidden="true" />
            <div className="visual-card">
              <img src={heroImg} alt="Masrafi Iqbal profile" />
              <div className="visual-tag"><span /> Dhaka, Bangladesh</div>
            </div>
            <div className="orbit-note orbit-note--top">Full-stack</div>
            <div className="orbit-note orbit-note--bottom">MLOps curious</div>
          </div>
          <a className="scroll-cue" href="#skills" aria-label="Scroll to skills"><span /> Scroll to explore</a>
        </section>

        <div className="tide-divider" aria-hidden="true">
          <svg viewBox="0 0 1200 64" preserveAspectRatio="none">
            <path
              d="M0,32 C200,8 360,56 600,32 C840,8 1000,56 1200,32 L1200,64 L0,64 Z"
              fill="var(--bg-alt)"
            />
          </svg>
        </div>

        <section id="skills" className="skills-section">
          <div className="section-head">
            <p className="section-eyebrow">Expertise</p>
            <h2>Tools I use to turn ideas <em>into products.</em></h2>
            <p>A practical toolkit spanning interfaces, APIs, data, and intelligent systems.</p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="skill-card reveal-on-scroll"
                data-reveal-delay={index * 80}
              >
                <h3>{category.category}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="section-head section-head--centered">
            <p className="section-eyebrow">Background</p>
            <h2>Always learning, <em>always building.</em></h2>
            <p>My academic journey and qualifications.</p>
          </div>

          <div className="education-ambient" aria-hidden="true">
            <span className="ambient-orbit"></span>
            <span className="ambient-orb ambient-orb--large"></span>
            <span className="ambient-orb ambient-orb--medium"></span>
            <span className="ambient-orb ambient-orb--small"></span>
            <span className="ambient-spark ambient-spark--one"></span>
            <span className="ambient-spark ambient-spark--two"></span>
          </div>

          <div className="education-timeline">
            {education.map((item, index) => (
              <div
                key={index}
                className="education-item reveal-on-scroll"
                data-reveal-delay={index * 100}
              >
                <div className="timeline-marker"></div>
                <div className="education-content">
                  <div className="education-head">
                    <div>
                      <h3>{item.degree}</h3>
                      <p className="institution">{item.institution}</p>
                    </div>
                    <span className="education-gpa">{item.gradeLabel ?? 'GPA'}: {item.gpa}</span>
                  </div>
                  <p className="meta">
                    {item.year} • {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-head section-head--centered">
            <p className="section-eyebrow">Selected work</p>
            <h2>Selected work with <em>real purpose.</em></h2>
            <p>A few things I have built using Laravel, React, MySQL, and AI.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card reveal-on-scroll"
                data-reveal-delay={index * 90}
                key={project.title + project.kicker}
              >
                <span className="project-number">0{index + 1}</span>
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-details">
                  {project.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.source} target="_blank" rel="noreferrer noopener">
                    Source Code <span aria-hidden="true">↗</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer noopener">
                    View Project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-head section-head--centered">
            <p className="section-eyebrow">Get in touch</p>
            <h2>Have an idea? Let’s make it <em>happen.</em></h2>
            <p>I’m always open to discussing projects, internships, and interesting collaborations.</p>
          </div>

          <div className="contact-grid">
            {contactPlatforms.map((platform, index) => (
              <a
                key={platform.label}
                href={platform.href}
                className="contact-card reveal-on-scroll"
                data-reveal-delay={index * 70}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="contact-icon">{platform.icon}</div>
                <span>{platform.label}</span>
              </a>
            ))}
          </div>
          <a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=masrafiiqbal1%40gmail.com" target="_blank" rel="noreferrer noopener">masrafiiqbal1@gmail.com <span aria-hidden="true">↗</span></a>
        </section>
        <footer className="site-footer">
          <a className="nav-brand" href="#home" aria-label="Masrafi Iqbal — home"><img src={brandLogo} alt="" /></a>
          <p>Designed &amp; built by Masrafi Iqbal.</p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </main>
      <ScrollTopButton />
    </>
  )
}

export default App
