'use client';

import { useState } from 'react';

interface AppInfo {
  name: string;
  desc: string;
  img: string;
  links: { label: string; url: string; icon: string }[];
}

const APPS: Record<string, AppInfo> = {
  calculator: {
    name: 'OnSite Calculator',
    desc: 'Voice-activated inch calculator for framers and carpenters. Add, split, and convert measurements hands-free.',
    img: '/images/tool-calculator-woman.png',
    links: [
      { label: 'App Store', url: '#', icon: '' },
      { label: 'Google Play', url: '#', icon: '' },
      { label: 'Web App', url: '#', icon: '' },
    ],
  },
  timekeeper: {
    name: 'OnSite Timekeeper',
    desc: 'GPS-based time tracking with geofence auto clock-in/out. Generates digital timecards and invoices.',
    img: '/images/timekeeper-men.png',
    links: [
      { label: 'Google Play', url: '#', icon: '' },
      { label: 'Web App', url: '#', icon: '' },
    ],
  },
};

export default function AppModal() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const app = activeApp ? APPS[activeApp] : null;

  function open(appKey: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setActiveApp(appKey);
    };
  }

  function close() {
    setActiveApp(null);
  }

  return (
    <>
      {/* Hero cards */}
      <div className="hero-cards">
        <a href="#" className="hero-app-card" onClick={open('calculator')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tool-calculator-woman.png" alt="OnSite Calculator" />
          <div className="hero-app-overlay">
            <span className="hero-app-badge status-live">Live</span>
            <h3>OnSite Calculator</h3>
            <p>Voice-powered measurements</p>
          </div>
        </a>
        <a href="#" className="hero-app-card" onClick={open('timekeeper')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/timekeeper-men.png" alt="OnSite Timekeeper" />
          <div className="hero-app-overlay">
            <span className="hero-app-badge status-live">Live</span>
            <h3>OnSite Timekeeper</h3>
            <p>GPS time tracking</p>
          </div>
        </a>
      </div>

      {/* Modal */}
      {app && (
        <div className="app-modal-backdrop" onClick={close}>
          <div className="app-modal" onClick={(e) => e.stopPropagation()}>
            <button className="app-modal-close" onClick={close} aria-label="Close">
              &times;
            </button>
            <div className="app-modal-header">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={app.img} alt={app.name} className="app-modal-img" />
              <div className="app-modal-info">
                <span className="hero-app-badge status-live">Live</span>
                <h2>{app.name}</h2>
                <p>{app.desc}</p>
              </div>
            </div>
            <div className="app-modal-links">
              {app.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="app-modal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="app-modal-link-icon">{link.label === 'App Store' ? '' : link.label === 'Google Play' ? '' : ''}</span>
                  <span>
                    <span className="app-modal-link-sub">Download on</span>
                    <span className="app-modal-link-label">{link.label}</span>
                  </span>
                  <span className="app-modal-link-arrow">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
