// Header Component - Coordinated by Queen Agent
'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  logo?: string;
  navigation?: Array<{ label: string; href: string }>;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Header({ 
  logo = "Immigration Consultancy",
  navigation = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  ctaLabel = "Book a Consultation",
  ctaHref = "#contact"
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
    >
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="#hero" className="logo-link">
            {logo}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop">
          <ul className="nav-list">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta desktop">
          <a href={ctaHref} className="cta-button">
            {ctaLabel}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="header-nav mobile">
          <ul className="nav-list">
            {navigation.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a href={ctaHref} className="nav-link cta-mobile">
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>
      )}

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: var(--spacing-md) 0;
          background: transparent;
          backdrop-filter: blur(0px);
          transition: all var(--animation-timing-normal) var(--animation-easing-easeInOut);
          z-index: 1000;
        }

        .header.scrolled {
          background: rgba(13, 47, 91, 0.8);
          backdrop-filter: blur(8px);
          padding: var(--spacing-sm) 0;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
        }

        .header-logo .logo-link {
          font-family: var(--font-headings);
          font-weight: var(--font-weight-heading600);
          font-size: var(--font-size-h4);
          color: var(--color-secondary);
          text-decoration: none;
        }

        .header-nav.desktop {
          display: flex;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: var(--spacing-xl);
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--color-secondary);
          text-decoration: none;
          font-weight: var(--font-weight-body400);
          transition: color var(--animation-timing-normal) var(--animation-easing-easeInOut);
        }

        .nav-link:hover {
          color: var(--color-accent);
        }

        .cta-button {
          background: var(--color-accent);
          color: var(--color-primary);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--border-radius-md);
          text-decoration: none;
          font-weight: var(--font-weight-heading600);
          transition: all var(--animation-timing-normal) var(--animation-easing-easeInOut);
        }

        .cta-button:hover {
          background: var(--color-secondary);
          transform: translateY(-2px);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--spacing-sm);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: var(--color-secondary);
          margin: 2px 0;
          transition: all var(--animation-timing-normal) var(--animation-easing-easeInOut);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .header-nav.mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--color-primary);
          padding: var(--spacing-lg);
        }

        .header-nav.mobile .nav-list {
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .cta-mobile {
          background: var(--color-accent);
          color: var(--color-primary);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--border-radius-md);
          text-align: center;
          font-weight: var(--font-weight-heading600);
        }

        @media (max-width: 768px) {
          .header-nav.desktop,
          .header-cta.desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .header-nav.mobile {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}