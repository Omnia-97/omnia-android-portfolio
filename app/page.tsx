"use client";

import { useEffect, useState } from "react";

/* ---------- Screenshot component with graceful fallback ---------- */
function Shot({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
}) {
  const [error, setError] = useState(false);
  if (error) return <>{fallback}</>;
  return (
    <img
      className="screenshotImg"
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

const skillGroups = [
  { comment: "// Languages", items: ["Kotlin", "Java", "Dart"] },
  {
    comment: "// UI & architecture",
    items: [
      "Jetpack Compose",
      "Coroutines & Flow",
      "MVVM",
      "MVI",
      "Clean Architecture",
      "SOLID Principles",
      "Dagger-Hilt",
      "Dart",
      "Flutter",
      "Firebase",
      "Provider",
      "Cubit",
      "Bloc",
    ],
  },
  {
    comment: "// Networking & data",
    items: ["Retrofit", "Room", "DataStore", "Paging 3", "Firebase", "REST APIs"],
  },
  {
    comment: "// Tooling & process",
    items: ["Git", "GitHub / Bitbucket", "Postman", "Jira · Agile"],
  },
];

export default function Home() {
  useEffect(() => {
    const codeLines = document.querySelectorAll<HTMLElement>(".codeLine");
    codeLines.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.09}s`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav">
        {/* NOTE: brand text/mark below — no external image needed */}
        <a className="brand" href="#">
          <span className="brandMark">O</span>Omnia Nabil
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
        <a className="navCta" href="mailto:omnianabil1920@gmail.com">Let&apos;s talk →</a>
      </nav>

      <section className="hero">
        <div className="heroGrid">
          <div>
            <div className="status"><i /> Available for new opportunities</div>
            <p className="eyebrow">Android Developer · Cairo, Egypt</p>
            <h1>
              Building Android <span className="accent">experiences</span> that feel right.
            </h1>
            <p className="lead">
              I&apos;m Omnia Nabil. Mobile Developer with hands-on experience in Android and Flutter development. Skilled in Java, Kotlin, XML, Jetpack Compose, MVVM, MVI, Clean Architecture, and modern mobile technologies. Passionate about building high-quality applications, solving real-world problems, and continuously learning new technologies.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="#work">View my work →</a>
              <a className="btn btnGhost" href="mailto:omnianabil1920@gmail.com">Get in touch</a>
              <a className="btn btnGhost" href="/resume.pdf" target="_blank">Download CV ↓</a>
            </div>
            <div className="socials">
              <a href="https://github.com/Omnia-97" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/omnia-nabil-j2510k24t/" target="_blank">LinkedIn</a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="ideWindow">
              <div className="ideBar">
                <span className="dot r" /><span className="dot y" /><span className="dot g" />
                <span className="ideTab mono">MainScreen.kt</span>
              </div>
              <div className="codeBody mono">
                <div className="codeLine"><span className="ln">1</span><span className="kw">@Composable</span></div>
                <div className="codeLine"><span className="ln">2</span><span className="kw">fun</span> <span className="fn">MainScreen</span>(<span className="pl">state:</span> <span className="tp">UiState</span>) {"{"}</div>
                <div className="codeLine"><span className="ln">3</span>&nbsp;&nbsp;<span className="kw">val</span> ui <span className="pl">by</span> viewModel.<span className="fn">collectAsState</span>()</div>
                <div className="codeLine"><span className="ln">4</span>&nbsp;&nbsp;<span className="tp">Column</span>(modifier = <span className="pl">Modifier</span>.<span className="fn">fillMaxSize</span>()) {"{"}</div>
                <div className="codeLine"><span className="ln">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="tp">Text</span>(<span className="str">&quot;Build. Ship. Improve.&quot;</span>)</div>
                <div className="codeLine"><span className="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="com">// clean architecture, always</span></div>
                <div className="codeLine"><span className="ln">7</span>&nbsp;&nbsp;{"}"}</div>
                <div className="codeLine"><span className="ln">8</span>{"}"}</div>
              </div>
            </div>

            <div className="deviceFrame">
              <div className="deviceNotch" />
              {/* ADD PHOTO: real screenshot from SHIFT -> /public/screens/shift-home.png */}
              <div className="deviceScreen">
                <Shot
                  src="/screens/shift-home.png"
                  alt="SHIFT app screenshot"
                  fallback={
                    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                      <div className="deviceStatus"><span>9:41</span><span>●●●</span></div>
                      <div className="deviceAppBar">
                        Build.<br />Ship. <em style={{ fontFamily: "Georgia,serif", fontStyle: "italic", fontWeight: 400 }}>Improve.</em>
                      </div>
                      <div className="deviceCard"><div className="cLine" /><div className="cLine short" /></div>
                      <div className="deviceCard"><div className="cLine" /><div className="cLine short" /></div>
                      <div className="deviceFab">＋</div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marqueeTrack mono">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              KOTLIN ✦ JETPACK COMPOSE ✦ CLEAN ARCHITECTURE ✦ MVI ✦ COROUTINES &amp; FLOW ✦
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="section">
        <Reveal className="sectionHead">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Things I&apos;ve built.</h2>
          </div>
          <p>Real products, thoughtful architecture, and a lot of Kotlin.</p>
        </Reveal>

        <div className="cases">
          {/* ---------- SHIFT ---------- */}
          <Reveal className="case">
            <div className="caseVisual">
              {/* ADD PHOTO: /public/screens/shift-booking.png */}
              <div className="caseDevice">
                <div className="caseDeviceScreen">
                  <Shot
                    src="/screens/shift-booking.png"
                    alt="SHIFT booking screen"
                    fallback={
                      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ padding: "16px 14px 8px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>SHIFT</div>
                        <div style={{ margin: "0 14px", background: "#f4f6f4", borderRadius: 10, height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#999", fontSize: 11 }}>Map + pickup point</div>
                        <div style={{ margin: "12px 14px", background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 10 }}>
                          <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6 }} />
                          <div style={{ height: 6, width: "60%", background: "#eee", borderRadius: 4 }} />
                        </div>
                        <div style={{ margin: "0 14px", background: "#15131c", color: "#fff", textAlign: "center", padding: 10, borderRadius: 10, fontSize: 11, fontWeight: 600 }}>Confirm booking</div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="caseInfo">
              <p className="caseKicker">Featured · Production Android app</p>
              <h3>SHIFT</h3>
              <p className="desc">
                A tech-driven mobility app for car rental and ride-hailing, built from the ground
                up and shipped to Google Play. Owned authentication, booking, payments, chauffeur
                and car-sharing flows, deep-link navigation, and full multilingual support
                including Chinese.
              </p>
              <div className="caseStats">
                <div><b>3 apps shipped</b><span>Shift · Shift Driver · Shift Employee</span></div>
                <div><b>Multilingual</b><span>Including Chinese</span></div>
                <div><b>Agile team</b><span>iOS, Backend &amp; DevOps</span></div>
              </div>
              <div className="tags">
                {["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Deep Links"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="caseLink" href="https://play.google.com/store/apps/details?id=com.innovitics.app.shift&hl=en" target="_blank">
                View on Play Store →
              </a>
            </div>
          </Reveal>

          {/* ---------- News App ---------- */}
          <Reveal className="case">
            <div className="caseVisual">
              {/* ADD PHOTO: /public/screens/news-list.png */}
              <div className="caseDevice">
                <div className="caseDeviceScreen">
                  <Shot
                    src="/screens/news-list.png"
                    alt="News app screenshot"
                    fallback={
                      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ padding: "16px 14px 8px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>News</div>
                        <div style={{ margin: "0 14px 10px", background: "#f4f6f4", borderRadius: 8, padding: "8px 10px", fontSize: 10, color: "#999" }}>Search articles…</div>
                        <div style={{ margin: "0 14px 8px", display: "flex", gap: 8, background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 8 }}>
                          <div style={{ width: 38, height: 38, background: "#eee", borderRadius: 6 }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6 }} />
                            <div style={{ height: 6, width: "70%", background: "#eee", borderRadius: 4 }} />
                          </div>
                        </div>
                        <div style={{ margin: "0 14px", display: "flex", gap: 8, background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 8 }}>
                          <div style={{ width: 38, height: 38, background: "#eee", borderRadius: 6 }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6 }} />
                            <div style={{ height: 6, width: "50%", background: "#eee", borderRadius: 4 }} />
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="caseInfo">
              <p className="caseKicker">Android · Personal project</p>
              <h3>News App</h3>
              <p className="desc">
                A modern news reading experience with search, bookmarks, full-article reading,
                shimmer loading states and smooth animations, backed by efficient paged loading
                and offline support.
              </p>
              <div className="caseStats">
                <div><b>Solo build</b><span>End to end</span></div>
                <div><b>Offline-first</b><span>Paging 3 + Room</span></div>
              </div>
              <div className="tags">
                {["Compose", "MVVM", "MVI", "Retrofit", "Room", "Dagger-Hilt", "Paging 3"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="caseLink" href="https://github.com/Omnia-97/NewsAppAndroid" target="_blank">
                View on GitHub →
              </a>
            </div>
          </Reveal>

          {/* ---------- DR.Scan ---------- */}
          <Reveal className="case">
            <div className="caseVisual">
              {/* ADD PHOTO: /public/screens/drscan-result.png */}
              <div className="caseDevice">
                <div className="caseDeviceScreen">
                  <Shot
                    src="/screens/drscan-result.png"
                    alt="DR.Scan app screenshot"
                    fallback={
                      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ padding: "16px 14px 8px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>DR.Scan</div>
                        <div style={{ margin: "0 14px", background: "#eef7f0", border: "1px solid #dcefe0", borderRadius: 10, padding: 12, textAlign: "center" }}>
                          <div style={{ fontSize: 10, color: "#5fae78", fontWeight: 700, marginBottom: 6 }}>SCAN COMPLETE</div>
                          <div style={{ height: 6, background: "#dcefe0", borderRadius: 4, marginBottom: 6 }} />
                          <div style={{ height: 6, width: "60%", background: "#dcefe0", borderRadius: 4, margin: "0 auto" }} />
                        </div>
                        <div style={{ margin: "12px 14px 0", background: "#15131c", color: "#fff", textAlign: "center", padding: 10, borderRadius: 10, fontSize: 11, fontWeight: 600 }}>See guidance</div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="caseInfo">
              <p className="caseKicker">Graduation project · Team lead</p>
              <h3>DR.Scan</h3>
              <p className="desc">
                A Flutter application that simplifies medical test interpretation and diagnosis.
                Patients can access results, get symptom guidance, and connect with healthcare
                specialists anytime, anywhere.
              </p>
              <div className="caseStats">
                <div><b>Team lead</b><span>+ Flutter developer</span></div>
                <div><b>ML-powered</b><span>Test interpretation</span></div>
              </div>
              <div className="tags">
                {["Flutter", "Firestore", "ML Integration", "GetIt", "Provider"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="caseLink" href="https://github.com/Omnia-97/dr_scan_project_graduation" target="_blank">
                View on GitHub →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section">
        <Reveal className="sectionHead">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2>My everyday stack.</h2>
          </div>
          <p>What&apos;s actually in the build file.</p>
        </Reveal>

        <Reveal className="depsWindow">
          <div className="ideBar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="ideTab mono">build.gradle.kts</span>
          </div>
          <div className="depsBody">
            {skillGroups.map((group) => (
              <div className="depsGroup" key={group.comment}>
                <div className="depsComment">{group.comment}</div>
                {group.items.map((item) => (
                  <div className="depLine" key={item}>
                    <span className="k">implementation</span>(<span className="s">&quot;{item}&quot;</span>)
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="about" className="section about">
        <Reveal>
          <p className="eyebrow">A little about me</p>
          <h2>Code with purpose.<br />Learn constantly.</h2>
        </Reveal>
        <Reveal className="aboutCopy">
          <p>
            I&apos;m an Android Developer with 2 years of experience building production-ready
            applications with Kotlin and Jetpack Compose.
          </p>
          <p>
            My work spans modern Android architecture, REST APIs, Firebase, state management and
            complex product flows — from authentication and booking to payments and multilingual
            experiences.
          </p>
          <p>
            Before focusing on native Android, I also worked with Flutter, giving me a strong
            perspective on both native and cross-platform mobile development.
          </p>
          <div className="badgeRow">
            {["Kotlin-first", "Compose UI", "Clean Architecture", "Cross-platform (Flutter)"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
          <div className="eduBlock">
            <div className="eduRow">
              <span className="mono eduYear">2019 — 2023</span>
              <div>
                <b>B.Sc. Computer &amp; Information Sciences</b>
                <span>Software Engineering · Mansoura University</span>
              </div>
            </div>
            <div className="eduRow">
              <span className="mono eduYear">ITI</span>
              <div>
                <b>Android Application Development</b>
                <span>Information Technology Institute</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="experience" className="experience">
        <div className="experienceInner">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h2>Where I&apos;ve been.</h2>
          </Reveal>
          <Reveal className="gitLog">
            <div className="commit">
              <div className="commitHash mono">feat(android) · jul 2024 — present</div>
              <h3>Android Developer</h3>
              <div className="commitMeta">Generation C · Cairo · Hybrid</div>
              <ul>
                <li>Built and shipped production Android applications to Google Play.</li>
                <li>Developed authentication, booking, payments, chauffeur and car-sharing modules.</li>
                <li>Worked with Kotlin, Jetpack Compose, MVI and Clean Architecture.</li>
                <li>Collaborated with iOS, Backend and DevOps teams in Agile workflows.</li>
              </ul>
            </div>
            <div className="commit">
              <div className="commitHash mono">feat(flutter) · nov 2024 — jan 2025</div>
              <h3>Flutter Developer</h3>
              <div className="commitMeta">Newtecx · Doha · Remote</div>
              <ul>
                <li>Contributed to UI/UX improvements and feature development.</li>
                <li>Worked with Flutter, Dart, Firebase, REST APIs, Cubit and Bloc.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>
          Let&apos;s make something <span className="accent">great.</span>
        </h2>
        <a className="contactMail" href="mailto:omnianabil1920@gmail.com">
          omnianabil1920@gmail.com →
        </a>
        <div className="contactLinks">
          <a href="https://www.linkedin.com/in/omnia-nabil-j2510k24t/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Omnia-97" target="_blank">GitHub</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
          <span>Cairo, Egypt</span>
        </div>
      </section>

      <footer>
        <span>© 2026 Omnia Nabil</span>
        <span>Android Developer</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}
