'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // Helper to show a temporary toast notification for fallbacks/demo interactions
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Back Button Navigation
  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      // Check if history navigation is available and has prior entries
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        // Fallback navigation
        triggerToast('Navigating to Home page...');
        setTimeout(() => {
          window.location.href = '/';
        }, 800);
      }
    }
  };

  // Pathways Link Navigation
  const handlePathwaysClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href === '#/pathways' || href === '#pathways') {
      e.preventDefault();
      triggerToast('Navigating to Pathways...');
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.hash = '/pathways';
        }
      }, 600);
    }
  };

  return (
    <div className="page-wrapper">
      <main className="card-container">
        {/* Back Button */}
        <button
          type="button"
          className="back-btn"
          id="back-button"
          onClick={handleBackClick}
          aria-label="Go back to previous page"
          title="Go back"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className="content-grid">
          {/* Left Side: Text Content */}
          <div className="text-content">
            {/* Main Title */}
            <h1 className="main-heading">
              <span className="heading-line-1">Create Your</span>
              <span className="heading-line-2">
                Personalized Wellbeing Plan
                <span className="sprout-wrapper">
                  <svg className="sprout-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 26C14 26 14.5 17.5 18 13.5C21 10 26 8.5 28 8C27.5 12 24.5 16 20.5 17.5C18 18.5 16 19 14 26Z"
                      fill="#238647"
                    />
                    <path
                      d="M15 17.5C15 17.5 10.5 14 7 15.5C4.5 16.5 3.5 19.5 3.5 19.5C3.5 19.5 7.5 19.5 10.5 18.5C13 17.5 15 17.5 15 17.5Z"
                      fill="#238647"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Green Underline Accent */}
            <div className="heading-underline" aria-hidden="true"></div>

            {/* Paragraphs */}
            <div className="body-paragraphs">
              <p className="para">
                Mantra lets you build a personalized recovery plan tailored to your needs.
              </p>

              <p className="para">
                Simply go to{' '}
                <a
                  href="#/pathways"
                  id="pathways-link"
                  className="pathways-link"
                  onClick={handlePathwaysClick}
                >
                  Pathways
                </a>{' '}
                and select your condition&mdash;such as <strong>depression, stress, anxiety, ADHD, OCD,</strong> or more.
              </p>

              <p className="para">
                Each plan is expert-designed by psychologists after in-depth research and includes daily guided activities to
                support your recovery. Just return to the app each day, complete your activities, and track your progress.
              </p>

              <p className="para para-highlight">
                <strong>98%</strong> of users found these plans helpful, helping them recover and move toward a happier,
                healthier life. <span className="heart-icon" role="img" aria-label="blue heart">💙</span>
              </p>
            </div>
          </div>

          {/* Right Side: Meditation Illustration */}
          <div className="illustration-container">
            <div className="illustration-wrapper">
              <Image
                src="/meditation-illustration.jpg"
                alt="Vector illustration of a woman sitting in lotus pose meditating peacefully surrounded by leaves and lotus flower"
                className="illustration-img"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Toast notification for dynamic interactions */}
      <div
        id="toast"
        className={`toast ${showToast ? 'show' : ''}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </div>
  );
}
