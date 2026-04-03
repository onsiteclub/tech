/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container">
          <a href="/" className="nav-brand">
            <span className="nav-brand-dot" />
            OnSite <span>Tech</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#portfolio">Portfolio</a>
            <a href="https://www.onsiteclub.ca" target="_blank" rel="noopener noreferrer">
              OnSite Club
            </a>
          </div>
          <a href="#contact" className="nav-cta">
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-kicker">Construction Software</div>
          <h1 className="hero-title">
            We Build the Tools<br />
            That Build <span>Better.</span>
          </h1>
          <p className="hero-desc">
            Custom mobile apps, dashboards, and digital workflows for construction
            companies. From jobsite to back office — software that actually works on
            the ground.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-dark">
              Start a Project
            </a>
            <a href="#portfolio" className="btn-ghost">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stat">
            <div className="stat-number">
              5<span>+</span>
            </div>
            <div className="stat-label">Apps Shipped</div>
          </div>
          <div className="stat">
            <div className="stat-number">
              1,200<span>+</span>
            </div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">App Stores</div>
          </div>
          <div className="stat">
            <div className="stat-number">12</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-kicker">What We Build</div>
          <h2 className="section-title">End-to-End Construction Software</h2>
          <p className="section-desc">
            We design, build, and ship digital products for the construction
            industry. From concept to app store — we handle the full stack.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">Mobile Apps</h3>
              <p className="service-desc">
                Native iOS and Android apps built for jobsite conditions.
                Offline-first, GPS-enabled, and designed for gloved hands.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Web Dashboards</h3>
              <p className="service-desc">
                Real-time project dashboards, reporting tools, and admin panels.
                Built with modern frameworks, deployed on reliable infrastructure.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Workflow Automation</h3>
              <p className="service-desc">
                Digital checklists, automated reports, invoice generation, and
                approval flows. Replace paper processes with systems that scale.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📍</div>
              <h3 className="service-title">GPS &amp; Geofencing</h3>
              <p className="service-desc">
                Location-based time tracking, site boundary alerts, and automated
                clock-in/out. Built with Transistorsoft SDK for precision.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3 className="service-title">API Integrations</h3>
              <p className="service-desc">
                Connect your existing tools. QuickBooks, Canada Post, Stripe,
                government portals — we build the bridges between your systems.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3 className="service-title">Compliance &amp; Security</h3>
              <p className="service-desc">
                PIPEDA-compliant data handling, row-level security, role-based
                access control. Your workers&apos; data stays protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-kicker">How We Work</div>
          <h2 className="section-title">From Conversation to App Store</h2>
          <p className="section-desc">
            A straightforward process designed for construction companies who need
            results, not meetings.
          </p>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3 className="process-step-title">Discovery</h3>
              <p className="process-step-desc">
                We learn your operation. What works on paper, what breaks in the
                field, what costs you time and money.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3 className="process-step-title">Design</h3>
              <p className="process-step-desc">
                Wireframes and prototypes built for your real users — supers,
                framers, office staff. Tested before a line of code is written.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3 className="process-step-title">Build</h3>
              <p className="process-step-desc">
                Agile sprints with weekly demos. You see progress every week. We
                ship fast, iterate faster.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3 className="process-step-title">Ship &amp; Support</h3>
              <p className="process-step-desc">
                App Store and Play Store deployment, team onboarding, ongoing
                maintenance, and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-kicker">Our Work</div>
          <h2 className="section-title">Built, Shipped, and Running</h2>
          <p className="section-desc">
            Real products used by real workers on real jobsites across Canada.
          </p>

          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-card-img">
                <img
                  src="https://www.onsiteclub.ca/_next/image?url=%2Fimages%2Ftool-calculator-woman.png&w=800&q=80"
                  alt="OnSite Calculator"
                />
                <span className="portfolio-card-badge">Live</span>
              </div>
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">OnSite Calculator</h3>
                <p className="portfolio-card-desc">
                  Voice-activated inch calculator for framers and carpenters. Add,
                  split, and convert measurements hands-free.
                </p>
                <div className="portfolio-card-tags">
                  <span className="portfolio-tag">React Native</span>
                  <span className="portfolio-tag">Voice API</span>
                  <span className="portfolio-tag">iOS + Android</span>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-card-img">
                <img
                  src="https://www.onsiteclub.ca/_next/image?url=%2Fimages%2Ftimekeeper-men.png&w=800&q=80"
                  alt="OnSite Timekeeper"
                />
                <span className="portfolio-card-badge">Live</span>
              </div>
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">OnSite Timekeeper</h3>
                <p className="portfolio-card-desc">
                  GPS-based time tracking with geofence auto clock-in/out. Generates
                  digital timecards and invoices.
                </p>
                <div className="portfolio-card-tags">
                  <span className="portfolio-tag">Geofencing</span>
                  <span className="portfolio-tag">Supabase</span>
                  <span className="portfolio-tag">Expo</span>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-card-img">
                <img
                  src="https://www.onsiteclub.ca/_next/image?url=%2Fimages%2Ftool-checklist.png&w=800&q=80"
                  alt="OnSite Checklist"
                />
                <span className="portfolio-card-badge">Live</span>
              </div>
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">OnSite Checklist</h3>
                <p className="portfolio-card-desc">
                  Job checklists with AI-powered step and material suggestions.
                  Phase-based tracking for residential builds.
                </p>
                <div className="portfolio-card-tags">
                  <span className="portfolio-tag">Next.js</span>
                  <span className="portfolio-tag">AI</span>
                  <span className="portfolio-tag">PWA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="stack">
        <div className="container">
          <div className="section-kicker">Our Stack</div>
          <h2 className="section-title">Modern. Reliable. Scalable.</h2>

          <div className="stack-logos">
            <div className="stack-item">
              <div className="stack-icon">⚛️</div>
              React
            </div>
            <div className="stack-item">
              <div className="stack-icon">📱</div>
              Expo
            </div>
            <div className="stack-item">
              <div className="stack-icon">▲</div>
              Next.js
            </div>
            <div className="stack-item">
              <div className="stack-icon">⚡</div>
              Supabase
            </div>
            <div className="stack-item">
              <div className="stack-icon">▲</div>
              Vercel
            </div>
            <div className="stack-item">
              <div className="stack-icon">💳</div>
              Stripe
            </div>
            <div className="stack-item">
              <div className="stack-icon">📦</div>
              Turborepo
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Let&apos;s Build Something.</h2>
            <p className="cta-desc">
              Have a construction workflow that needs digitizing? An app idea for
              your crew? Let&apos;s talk.
            </p>
            <a href="mailto:tech@onsiteclub.ca" className="btn-amber">
              Start a Conversation
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="cta-note">Usually respond within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <span className="footer-dot" />
            © 2025 OnSite Tech — A division of OnSite Club
          </div>
          <div className="footer-links">
            <a
              href="https://www.onsiteclub.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              OnSite Club
            </a>
            <a
              href="https://shop.onsiteclub.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
            <a href="mailto:tech@onsiteclub.ca">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
