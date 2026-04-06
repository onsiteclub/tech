/* eslint-disable @next/next/no-img-element */
import NavToggle from '@/components/NavToggle';
import AppModal from '@/components/AppModal';

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <img src="/images/logo-onsite-club.png" alt="OnSite Club" className="nav-logo-img" />
          </a>
          <div className="nav-links" id="navLinks">
            <a href="#apps">Our Apps</a>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#" className="nav-client">Client Area</a>
            <a
              href="https://www.onsiteclub.ca"
              className="nav-back"
              target="_blank"
              rel="noopener noreferrer"
            >
              &larr; OnSite Club
            </a>
            <a href="#contact" className="nav-cta">
              Let&apos;s Talk
            </a>
          </div>
          <NavToggle />
        </div>
      </nav>

      {/* HERO — dark photo bg + left text + right app cards */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-lines-glow" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-scanline" aria-hidden="true" />
        <div className="hero-content">
          {/* Left — text */}
          <div className="hero-text">
            <p className="hero-label">Construction Software Development</p>
            <h1 className="hero-title">
              Your App Idea.<br />We Build <span>It.</span>
            </h1>
            <p className="hero-sub">
              We&apos;re a tech company born on the jobsite. We design and develop
              custom apps, dashboards, and digital tools for construction — from
              napkin sketch to app store.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                I Have an Idea &rarr;
              </a>
              <a href="#apps" className="btn-outline">
                See Our Apps
              </a>
            </div>
          </div>

          {/* Right — app preview cards + download modal */}
          <AppModal />
        </div>
      </section>

      {/* OUR APPS */}
      <section className="apps" id="apps">
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Built, Shipped, Running.</h2>
          <p className="section-sub">
            Real products used by real workers on real jobsites across Canada.
          </p>
          <div className="apps-grid">
            <div className="app-card">
              <img
                src="/images/tool-calculator-woman.png"
                alt="OnSite Calculator"
                className="app-card-img"
              />
              <div className="app-card-body">
                <span className="app-card-status status-live">Live</span>
                <h3>OnSite Calculator</h3>
                <p>
                  Voice-activated inch calculator for framers and carpenters.
                  Add, split, and convert measurements without removing your
                  gloves.
                </p>
                <div className="app-card-links">
                  <a href="#" className="store-badge">
                    <svg className="store-badge-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="store-badge-text">
                      <small>Download on the</small>
                      <strong>App Store</strong>
                    </span>
                  </a>
                  <a href="#" className="store-badge">
                    <svg className="store-badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2L12 12L4 12Z" fill="#4285F4"/>
                      <path d="M4 2L20 12L12 12Z" fill="#EA4335"/>
                      <path d="M12 12L20 12L4 22Z" fill="#FBBC05"/>
                      <path d="M4 12L12 12L4 22Z" fill="#34A853"/>
                    </svg>
                    <span className="store-badge-text">
                      <small>GET IT ON</small>
                      <strong>Google Play</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="app-card">
              <img
                src="/images/timekeeper-men.png"
                alt="OnSite Timekeeper"
                className="app-card-img"
              />
              <div className="app-card-body">
                <span className="app-card-status status-live">Live</span>
                <h3>OnSite Timekeeper</h3>
                <p>
                  GPS-based time tracking with geofence auto clock-in/out.
                  Generates digital timecards and invoices automatically.
                </p>
                <div className="app-card-links">
                  <a href="#" className="store-badge">
                    <svg className="store-badge-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="store-badge-text">
                      <small>Download on the</small>
                      <strong>App Store</strong>
                    </span>
                  </a>
                  <a href="#" className="store-badge">
                    <svg className="store-badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2L12 12L4 12Z" fill="#4285F4"/>
                      <path d="M4 2L20 12L12 12Z" fill="#EA4335"/>
                      <path d="M12 12L20 12L4 22Z" fill="#FBBC05"/>
                      <path d="M4 12L12 12L4 22Z" fill="#34A853"/>
                    </svg>
                    <span className="store-badge-text">
                      <small>GET IT ON</small>
                      <strong>Google Play</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="app-card">
              <img
                src="/images/tool-checklist.png"
                alt="OnSite Checklist"
                className="app-card-img"
              />
              <div className="app-card-body">
                <span className="app-card-status status-live">Live</span>
                <h3>OnSite Checklist</h3>
                <p>
                  Job checklists with AI-powered step and material suggestions.
                  Phase-based tracking for residential builds.
                </p>
                <div className="app-card-links">
                  <a href="#" className="store-badge">
                    <svg className="store-badge-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20"/>
                      <path d="M12 2c-4 4-4 16 0 20"/>
                      <path d="M12 2c4 4 4 16 0 20"/>
                    </svg>
                    <span className="store-badge-text">
                      <small>Open</small>
                      <strong>Web App</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Two Ways We Can Help.</h2>
          <p className="section-sub">
            Whether you have an idea that needs building or need ready-made
            tools for your crew.
          </p>
          <div className="services-grid">
            <div className="service-block">
              <span className="tag">Custom Development</span>
              <h3>Your Idea, Built.</h3>
              <p>
                From napkin sketch to app store. We build mobile apps, web tools,
                and dashboards for construction companies.
              </p>
              <ul className="service-features">
                <li><span className="check">&#10003;</span> iOS, Android &amp; Web</li>
                <li><span className="check">&#10003;</span> GPS &amp; offline-first</li>
                <li><span className="check">&#10003;</span> API integrations</li>
                <li><span className="check">&#10003;</span> App Store deployment</li>
              </ul>
            </div>
            <div className="service-block">
              <span className="tag tag-dev">In Development</span>
              <h3>Our SaaS Tools</h3>
              <p>
                Construction tools we&apos;re building and testing on real jobsites.
                Some are live, others are coming soon.
              </p>
              <ul className="service-features">
                <li><span className="check">&#10003;</span> Voice calculator — Live</li>
                <li><span className="check">&#10003;</span> GPS time tracking — Live</li>
                <li><span className="check dot-dev">&#9679;</span> AI checklists — Beta</li>
                <li><span className="check dot-dev">&#9679;</span> Invoicing — Coming soon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="container">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Straight Talk. Real Results.</h2>
          <p className="section-sub">
            No jargon, no endless meetings. A simple process designed for people
            who build things for a living.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Tell Us Your Idea</h3>
              <p>
                Casual conversation, zero commitment. We sign an NDA before you
                share any details. Your idea is safe.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>We Design It Together</h3>
              <p>
                Visual prototype so you can see it before we write a single line
                of code. Your feedback shapes everything.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>We Build It — You Watch</h3>
              <p>
                Weekly progress updates. You see what&apos;s happening, give
                feedback, and stay in control the entire time.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch + Support</h3>
              <p>
                App published, team trained, ongoing support. We don&apos;t
                disappear after launch — we&apos;re with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <p className="section-label">Ready?</p>
          <h2 className="section-title">
            Napkin Sketch or Half-Built Project.
            <br />
            We&apos;ll Take It From Here.
          </h2>
          <p className="section-sub cta-sub">
            It doesn&apos;t matter where your idea is. What matters is that it
            gets built right. Talk to us — confidentially.
          </p>
          <a href="mailto:tech@onsiteclub.ca" className="btn-primary">
            Start a Conversation &rarr;
          </a>
          <p className="cta-note">
            We respond within 24 hours. Confidentiality guaranteed.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="nav-brand">
              <img src="/images/logo-onsite-club.png" alt="OnSite Club" className="nav-logo-img" />
              <span className="nav-brand-label">Tech</span>
            </a>
            <p>
              A division of OnSite Club. Building the tools that build better.
            </p>
          </div>
          <div className="footer-col">
            <h4>OnSite Ecosystem</h4>
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
              OnSite Shop
            </a>
            <a
              href="https://learn.onsiteclub.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              OnSite Learn
            </a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">NDA Template</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:tech@onsiteclub.ca">tech@onsiteclub.ca</a>
            <a href="#">Client Dashboard</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 OnSite Tech — A division of OnSite Club. Ottawa,
            Ontario, Canada.
          </p>
          <a
            href="https://www.onsiteclub.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            &larr; Back to OnSite Club
          </a>
        </div>
      </footer>
    </>
  );
}
