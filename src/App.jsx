import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Github, GraduationCap, Mail, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react'

const projects = [
  { title: 'Shoppers Hub', category: 'E-commerce', description: 'A responsive storefront with product categories, promotional sections, product details, and clear shopping navigation.', stack: ['HTML5', 'CSS3', 'Bootstrap 5'], url: 'https://shoppers-hub-html-css-bootstrap-5-c.vercel.app', type: 'Frontend', accent: 'peach', mark: 'SHOPPERS' },
  { title: 'TOTC Online Learning', category: 'Online learning', description: 'A course discovery experience with structured learning sections and student testimonials across screen sizes.', stack: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'], url: 'https://totc-online-learning-website.vercel.app', type: 'Frontend', accent: 'blue', mark: 'LEARNING' },
  { title: 'Notes App', category: 'Productivity', description: 'A notes manager with create, search, folder organization, archive, and trash workflows.', stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'], url: 'https://notes-app-html-css-javascript.vercel.app', type: 'JavaScript', accent: 'lavender', mark: 'NOTES' },
  { title: 'Roamly Travel', category: 'Travel', description: 'A React travel site presenting destination content in a responsive, editorial layout.', stack: ['React', 'JavaScript', 'CSS'], url: 'https://roamly-travel-react-website.vercel.app', type: 'React', accent: 'mint', mark: 'ROAMLY' },
  { title: 'Real Estate Listings', category: 'Real estate', description: 'A Bootstrap-powered real estate website for browsing featured homes, rentals, and properties for sale.', stack: ['HTML5', 'CSS3', 'Bootstrap'], url: 'https://real-estate-website-bootstrap-ksos.vercel.app', type: 'Frontend', accent: 'yellow', mark: 'ESTATE' },
  { title: 'Figma to Bootstrap', category: 'Business landing page', description: 'A responsive landing page built from a design reference, with focused feature sections and Bootstrap layout.', stack: ['HTML5', 'CSS3', 'Bootstrap'], url: 'https://figma-to-bootstrap-website-pi.vercel.app', type: 'Frontend', accent: 'yellow', mark: 'FIGMA' },
  { title: 'Modern Furniture & Interior', category: 'Interior design', description: 'A polished furniture and interior website highlighting premium materials and design experiences.', stack: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://modern-furniture-interior-website-u-dun.vercel.app', type: 'Frontend', accent: 'lavender', mark: 'INTERIORS' },
  { title: 'remote-team-management-landing-page-using-bootstrap-figma', category: 'Business website', description: 'A responsive business site with structured content, service sections, and clear navigation.', stack: ['HTML5', 'CSS3', 'Bootstrap'], url: 'https://multi-page-responsive-website-using-murex.vercel.app', type: 'Frontend', accent: 'blue', mark: 'MUREX' },
  { title: 'Tailwind UI Sections', category: 'UI component showcase', description: 'A modern responsive showcase of reusable interface sections, built with Tailwind CSS.', stack: ['HTML5', 'Tailwind CSS', 'JavaScript'], url: 'https://tailwind-12-section-ui-modern-respo-ashy.vercel.app', type: 'Frontend', accent: 'peach', mark: 'TAILWIND UI' },
  { title: 'Responsive Business Website', category: 'Business website', description: 'A responsive company website with an about section and clear paths to learn more.', stack: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://responsive-website-orpin-three.vercel.app', type: 'Frontend', accent: 'blue', mark: 'RESPONSIVE' },
  { title: 'Form Validation', category: 'Interactive form', description: 'A registration form with client-side validation rules and clear feedback for each input.', stack: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://form-validation-html-css-javascript-two.vercel.app', type: 'JavaScript', accent: 'pink', mark: 'FORMS' },
  { title: 'Workspace Rental', category: 'Workspace landing page', description: 'A landing page for flexible workspace rentals, presenting workspace options and key benefits.', stack: ['HTML5', 'CSS3', 'JavaScript'], url: 'https://workspace-rental-landing-page.vercel.app', type: 'Frontend', accent: 'mint', mark: 'WORKSPACE' },
  { title: 'Multi-Page-Responsive-Website-Using-Bootstrap-5', category: 'Multi-page website', description: 'A responsive multi-page site exploring consistent navigation and reusable Bootstrap sections.', stack: ['HTML5', 'CSS3', 'Bootstrap'], url: 'https://multi-page-responsive-website-using-henna.vercel.app', type: 'Frontend', accent: 'mint', mark: 'HENNA' },
  { title: 'JavaScript API Explorer', category: 'API integration', description: 'A JavaScript project that connects to an API and presents fetched data in the interface.', stack: ['JavaScript', 'HTML5', 'CSS3', 'REST API'], url: 'https://javascript-api-call-project-gt2m.vercel.app', type: 'JavaScript', accent: 'pink', mark: 'API DATA' },
]
const skills = [
  { title: 'Frontend development', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Backend & databases', items: ['Node.js', 'MongoDB', 'MySQL'] },
  { title: 'Programming languages', items: ['JavaScript', 'Python', 'Java'] },
  { title: 'Tools & automation', items: ['Git', 'GitHub', 'Vercel', 'n8n', 'AI tools'] },
]
function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading reveal-on-scroll"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}
function ProjectCard({ project, position }) {
  const [previewing, setPreviewing] = useState(false)
  return <article className="project-card reveal-on-scroll">
    <div className={`project-art project-preview ${project.accent}${previewing ? ' is-previewing' : ''}`}>
      <iframe className="project-preview-frame" src={project.url} title={`${project.title} live website preview`} loading="lazy" sandbox="allow-scripts allow-forms allow-same-origin" referrerPolicy="no-referrer" />
      <span className="preview-badge"><span /> PROJECT {position}</span>
      <button className="preview-scroll-button" type="button" aria-pressed={previewing} onClick={() => setPreviewing(!previewing)}>{previewing ? 'Reset preview' : 'Scroll preview'} <ArrowDown size={13} /></button>
    </div>
    <div className="project-content"><div className="project-title-row"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><span className="round-link" aria-hidden="true"><ArrowUpRight size={19} /></span></div>
      <p>{project.description}</p><div className="tag-row">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><a className="text-link" href={project.url} target="_blank" rel="noreferrer">View live project <ArrowRight size={15} /></a>
    </div>
  </article>
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'React', 'JavaScript', 'Frontend']
  const visibleProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter)
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [filter])
  const closeMenu = () => setMenuOpen(false)
  return <>
    <header className="site-header"><div className="nav-wrap">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">HC</span><span>Hemanti Chauhan<small>FULL STACK DEVELOPER</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a></nav>
    </div></header>
    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-copy"><div className="availability"><span className="availability-dot" /> OPEN TO JUNIOR DEVELOPER ROLES</div><p className="hero-kicker">Full Stack Developer <span>/</span> Ahmedabad, India</p><h1>Thoughtful web<br />experiences, built<br /><span>from front to back.</span></h1>
          <p className="hero-description">I build responsive web experiences with React and JavaScript, and I’m developing my full-stack skills across Node.js and databases.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View selected work <ArrowRight size={17} /></a><a className="button button-light" href="#contact">Contact me <ArrowUpRight size={17} /></a></div>
          <div className="hero-meta"><span><MapPin size={15} /> Ahmedabad, India</span><span><Sparkles size={15} /> BCA graduate · 2026</span></div>
        </div>
        <div className="hero-visual" aria-label="Developer profile and areas of focus"><div className="visual-grid" />
          <div className="profile-tile"><div className="tile-topline"><span className="tile-label">HEMANTI CHAUHAN <span>/ 2026</span></span><Code2 size={18} /></div><div className="monogram">HC<span>.</span></div><p className="tile-statement">Building useful things<br />for the web.</p><div className="tile-bottom"><div><strong>Full Stack Developer</strong><small>React · JavaScript · Node.js</small></div><span className="tile-index">01 / 14</span></div></div>
          <div className="float-card float-card-top"><span className="float-icon"><Code2 size={17} /></span><div><strong>Frontend</strong><small>React &amp; JavaScript</small></div></div>
          <div className="float-card float-card-bottom"><span className="float-check"><Check size={17} /></span><div><strong>Full-stack foundations</strong><small>Node.js &amp; databases</small></div></div><div className="visual-caption">RESPONSIVE UI <span>·</span> PRACTICAL FEATURES</div>
        </div><a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>
      <section className="intro-strip"><div className="strip-inner"><span>CORE STRENGTHS</span><p>Responsive interfaces <b>·</b> React applications <b>·</b> JavaScript <b>·</b> Full-stack foundations</p></div></section>
      <section className="section-shell section-block about-section" id="about"><div className="about-layout">
        <div className="about-intro-panel reveal-on-scroll"><span className="eyebrow">ABOUT ME</span><h2>Thoughtful work.<br /><span>Useful experiences.</span></h2><p>Design-minded development with a focus on clarity, responsiveness, and the details that make a product feel right.</p><div className="about-location"><MapPin size={15} /> Ahmedabad, India</div></div>
        <div className="about-copy reveal-on-scroll"><span className="about-role">ASPIRING FULL STACK DEVELOPER</span><p className="lead">I’m Hemanti Chauhan, a BCA graduate who enjoys turning ideas into clear, useful digital experiences.</p><p>Through hands-on projects, I’ve built responsive interfaces and interactive features using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind. I’m also strengthening my foundations in Node.js and databases.</p><p>I’m now looking for a junior developer opportunity where I can contribute to a team, learn from real product work, and grow into a dependable engineer.</p>
          <div className="about-facts"><div><span className="fact-number">{String(projects.length).padStart(2, '0')}</span><span>Live projects</span></div><div><span className="fact-number">MERN</span><span>Full-stack training</span></div><div><span className="fact-number">2026</span><span>BCA graduate</span></div></div>
        </div></div></section>
      <section className="skills-section" id="skills"><div className="section-shell section-block"><SectionHeading eyebrow="TECHNICAL SKILLS" title={<>Tools and technologies<br /><span>I work with.</span></>} description="A growing toolkit across frontend development, backend fundamentals, and day-to-day engineering workflows." />
        <div className="skills-grid">{skills.map((group, i) => <div className="skill-card reveal-on-scroll" key={group.title}><div className="skill-card-top"><span className="skill-index">0{i + 1}</span><Code2 size={20} /></div><h3>{group.title}</h3><div className="tag-row">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div>
        <p className="skills-note reveal-on-scroll"><Sparkles size={16} /> Currently developing deeper experience with React, Node.js, databases, and workflow automation.</p>
      </div></section>
      <section className="section-shell section-block" id="projects"><div className="projects-heading-row"><SectionHeading eyebrow="SELECTED WORK" title={<>A selection of<br /><span>projects I’ve built.</span></>} description="Deployed projects demonstrating responsive layouts, interactive features, and modern web development fundamentals." /><span className="project-count">{String(visibleProjects.length).padStart(2, '0')} PROJECTS <ArrowDown size={15} /></span></div>
        <div className="filter-row" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
        <div className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} position={index + 1} />)}</div>
        <div className="github-callout reveal-on-scroll"><div className="github-icon"><Github size={23} /></div><div><h3>Explore the code</h3><p>Browse source code and additional projects on GitHub.</p></div><a href="https://github.com/hemantichauhan07-maker" target="_blank" rel="noreferrer" className="button button-dark">Visit GitHub <ArrowUpRight size={16} /></a></div>
      </section>
      <section className="education-section" id="education"><div className="section-shell section-block"><SectionHeading eyebrow="EDUCATION & TRAINING" title={<>A foundation for<br /><span>continued growth.</span></>} />
        <div className="timeline"><div className="timeline-item reveal-on-scroll"><div className="timeline-icon"><GraduationCap size={22} /></div><div className="timeline-main"><span className="timeline-date">2023 — 2026</span><h3>Bachelor of Computer Applications</h3><p>Saurashtra University</p><span className="timeline-status">Degree completed</span></div></div>
          <div className="timeline-item reveal-on-scroll"><div className="timeline-icon"><BriefcaseBusiness size={21} /></div><div className="timeline-main"><span className="timeline-date">2026</span><h3>Full Stack Development</h3><p>Felix IT’s, Ahmedabad</p><span className="timeline-status">Professional training</span></div></div>
          <div className="timeline-item reveal-on-scroll"><div className="timeline-icon"><Code2 size={21} /></div><div className="timeline-main"><span className="timeline-date">2026</span><h3>MERN Stack Development</h3><p>Gronited Pvt. Ltd.</p><span className="timeline-status">Technical training</span></div></div></div>
      </div></section>
      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div className="contact-copy reveal-on-scroll"><span className="eyebrow">CONTACT</span><h2>Let’s build<br /><span>something useful.</span></h2><p>I’m currently open to junior developer roles in Ahmedabad and beyond. For opportunities or collaboration, please get in touch.</p><a className="button button-white" href="mailto:hemantichauhan07@gmail.com">Email Hemanti <ArrowUpRight size={17} /></a></div>
        <div className="contact-details"><a href="mailto:hemantichauhan07@gmail.com" className="contact-item reveal-on-scroll"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL</small><strong>hemantichauhan07@gmail.com</strong></span><ArrowUpRight size={17} /></a>
          <a href="tel:+916355919646" className="contact-item reveal-on-scroll"><span className="contact-icon"><Phone size={19} /></span><span><small>PHONE</small><strong>+91 63559 19646</strong></span><ArrowUpRight size={17} /></a>
          <a href="https://www.linkedin.com/in/hemanti-chauhan-b89a23434/" target="_blank" rel="noreferrer" className="contact-item reveal-on-scroll"><span className="contact-icon linkedin-icon">in</span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={17} /></a>
          <a href="https://github.com/hemantichauhan07-maker" target="_blank" rel="noreferrer" className="contact-item reveal-on-scroll"><span className="contact-icon"><Github size={19} /></span><span><small>GITHUB</small><strong>Explore my repositories</strong></span><ArrowUpRight size={17} /></a></div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="section-shell footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">HC</span><span>Hemanti Chauhan<small>FULL STACK DEVELOPER</small></span></a><span>© {new Date().getFullYear()} Hemanti Chauhan</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
  </>
}