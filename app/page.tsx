import { ArrowUpRight, Github, Mail, Smartphone, Code2, Layers3 } from "lucide-react";

const skills = [
  "Kotlin", "Jetpack Compose", "Coroutines", "Flow", "MVI", "MVVM",
  "Clean Architecture", "Hilt", "Retrofit", "Room", "DataStore", "Paging 3",
  "Firebase", "REST APIs", "Git", "Bitbucket"
];

const projects = [
  {
    title: "SHIFT",
    eyebrow: "Featured · Production Android App",
    description:
      "A production mobility application for car rental, car sharing and chauffeur services. Contributed to authentication, booking, payments, chauffeur and car-sharing flows.",
    tags: ["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture"],
    link: "https://play.google.com/store/apps/details?id=com.innovitics.app.shift&hl=en",
    featured: true
  },
  {
    title: "News App",
    eyebrow: "Android · Personal Project",
    description:
      "Modern news experience with search, bookmarks, full article reading, efficient loading and offline support.",
    tags: ["Compose", "MVI", "Retrofit", "Room", "Hilt", "Paging 3"],
    link: "https://github.com/Omnia-97",
  },
  {
    title: "DR.Scan",
    eyebrow: "Graduation Project · Team Lead",
    description:
      "Flutter application integrating a machine-learning model to simplify medical test interpretation and connect users with healthcare guidance.",
    tags: ["Flutter", "Firebase", "ML Integration", "Provider"],
    link: "https://github.com/Omnia-97",
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">ON<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="mailto:omnianabil1920@gmail.com">Let&apos;s talk <ArrowUpRight size={16}/></a>
      </nav>

      <section className="hero">
        <div className="heroGrid">
          <div className="heroCopy">
            <div className="status"><span/> Available for new opportunities</div>
            <p className="kicker">ANDROID DEVELOPER · CAIRO, EGYPT</p>
            <h1>Building Android<br/><em>experiences</em> that feel right.</h1>
            <p className="lead">
              I&apos;m Omnia Nabil — an Android Developer specializing in Kotlin and Jetpack Compose,
              focused on building scalable, production-ready mobile experiences.
            </p>
            <div className="heroActions">
              <a className="primary" href="#work">View my work <ArrowUpRight size={18}/></a>
              <a className="secondary" href="mailto:omnianabil1920@gmail.com">Get in touch <Mail size={17}/></a>
            </div>
            <div className="socials">
              <a href="https://github.com/Omnia-97" target="_blank"><Github size={19}/> GitHub</a>
              <a href="https://www.linkedin.com/in/omnia-nabil-j2510k24t/" target="_blank"><b>in</b> LinkedIn</a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orbit orbit1"/>
            <div className="orbit orbit2"/>
            <div className="phone">
              <div className="phoneTop"/>
              <div className="phoneScreen">
                <span className="miniLabel">ANDROID</span>
                <strong>Build.<br/>Ship.<br/><i>Improve.</i></strong>
                <div className="miniCard"><Code2 size={16}/><span>Kotlin + Compose</span></div>
              </div>
            </div>
            <div className="floatCard cardOne"><Smartphone size={18}/><b>2+ yrs</b><span>Android experience</span></div>
            <div className="floatCard cardTwo"><Layers3 size={18}/><b>Production</b><span>Real-world apps</span></div>
          </div>
        </div>
      </section>

      <section className="marquee"><span>KOTLIN</span><b>✦</b><span>JETPACK COMPOSE</span><b>✦</b><span>CLEAN ARCHITECTURE</span><b>✦</b><span>ANDROID</span><b>✦</b><span>MVI</span></section>

      <section id="work" className="section">
        <div className="sectionHead"><div><p className="kicker">SELECTED WORK</p><h2>Things I&apos;ve <em>built.</em></h2></div><p>Real products, thoughtful architecture,<br/>and a lot of Kotlin.</p></div>
        <div className="projects">
          {projects.map((p, i) => (
            <article className={`project ${p.featured ? "featured" : ""}`} key={p.title}>
              <div className="projectVisual">
                <div className="projectGlow"/>
                <div className="projectBadge">{i === 0 ? "01" : `0${i+1}`}</div>
                <div className="projectMock">
                  <span>{p.title}</span>
                  <div className="mockLine"/>
                  <div className="mockLine short"/>
                  <div className="mockBox"/>
                </div>
              </div>
              <div className="projectInfo">
                <p className="eyebrow">{p.eyebrow}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <a href={p.link} target="_blank">View project <ArrowUpRight size={16}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section dark">
        <div className="sectionHead"><div><p className="kicker">TOOLBOX</p><h2>My everyday <em>stack.</em></h2></div></div>
        <div className="skillGrid">{skills.map((s, i) => <div className="skill" key={s}><span>{String(i+1).padStart(2,"0")}</span><b>{s}</b></div>)}</div>
      </section>

      <section id="about" className="section about">
        <div><p className="kicker">A LITTLE ABOUT ME</p><h2>Code with purpose.<br/><em>Learn constantly.</em></h2></div>
        <div className="aboutCopy">
          <p>I&apos;m an Android Developer with 2 years of experience building production-ready applications with Kotlin and Jetpack Compose.</p>
          <p>My work spans modern Android architecture, REST APIs, Firebase, state management and complex product flows — from authentication and booking to payments and multilingual experiences.</p>
          <p>Before focusing on native Android, I also worked with Flutter, giving me a strong perspective on both native and cross-platform mobile development.</p>
        </div>
      </section>

      <section className="experience">
        <div className="experienceInner">
          <div><p className="kicker">EXPERIENCE</p><h2>Where I&apos;ve<br/><em>been.</em></h2></div>
          <div className="timeline">
            <div className="job"><span>JUL 2024 — PRESENT</span><div><h3>Android Developer</h3><p>Generation C · Cairo · Hybrid</p><ul><li>Built and shipped production Android applications to Google Play.</li><li>Developed authentication, booking, payments, chauffeur and car-sharing modules.</li><li>Worked with Kotlin, Jetpack Compose, MVI and Clean Architecture.</li><li>Collaborated with iOS, Backend and DevOps teams in Agile workflows.</li></ul></div></div>
            <div className="job"><span>NOV 2024 — JAN 2025</span><div><h3>Flutter Developer</h3><p>Newtecx · Doha · Remote</p><ul><li>Contributed to UI/UX improvements and feature development.</li><li>Worked with Flutter, Dart, Firebase, REST APIs, Cubit and Bloc.</li></ul></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="kicker">HAVE A PROJECT IN MIND?</p>
        <h2>Let&apos;s make something<br/><em>great.</em></h2>
        <a className="contactMail" href="mailto:omnianabil1920@gmail.com">omnianabil1920@gmail.com <ArrowUpRight/></a>
        <div className="contactLinks"><a href="https://www.linkedin.com/in/omnia-nabil-j2510k24t/" target="_blank">LinkedIn</a><a href="https://github.com/Omnia-97" target="_blank">GitHub</a><span>Cairo, Egypt</span></div>
      </section>

      <footer><span>© 2026 Omnia Nabil</span><span>Android Developer</span><a href="#">Back to top ↑</a></footer>
    </main>
  );
}
