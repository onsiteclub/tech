'use client';

import { useState, useEffect } from 'react';

export default function NavToggle() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const links = document.getElementById('navLinks');
    if (!links) return;
    if (open) {
      links.classList.add('active');
    } else {
      links.classList.remove('active');
    }
  }, [open]);

  // Close mobile nav when clicking an anchor link
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <button
      className="nav-toggle"
      aria-label="Toggle menu"
      onClick={() => setOpen(!open)}
    >
      <span /><span /><span />
    </button>
  );
}
