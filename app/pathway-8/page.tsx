"use client";

import { useEffect, useRef, useState } from "react";
import { sessions, Session } from "./sessions-data";

const HERO_IMG = "/img/66958f15-4da7-4196-b25a-e9f6ef36194d.png";
const HERO_FALLBACK = "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1600&q=85";

function PlayBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="var(--sage-deep)">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function handleImgError(e: React.SyntheticEvent<HTMLImageElement>, fallback: string) {
  const img = e.currentTarget;
  if (img.dataset.fallbackUsed) return;
  img.dataset.fallbackUsed = "true";
  img.src = fallback;
}

export default function Home() {
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [showToTop, setShowToTop] = useState(false);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      setShowToTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && activeSession) {
        closePlayer();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSession]);

  useEffect(() => {
    if (activeSession) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [activeSession]);

  useEffect(() => {
    if (!activeSession) return;

    const playTimer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => undefined);
    }, 1000);

    return () => window.clearTimeout(playTimer);
  }, [activeSession]);

  function openPlayer(s: Session, e: React.MouseEvent<HTMLButtonElement>) {
    lastFocusedRef.current = e.currentTarget;
    setActiveSession(s);
  }

  function closePlayer() {
    setActiveSession(null);
    lastFocusedRef.current?.focus();
  }

  function handleToTopClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="page">
        <div className="hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Woman practicing a yoga stretch on a mat"
            onError={(e) => handleImgError(e, HERO_FALLBACK)}
          />
          <button className="hero-back" aria-label="Back" onClick={() => window.history.back()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="hero-content">
            <div className="hero-eyebrow">Yoga · Movement · Recovery</div>
            <h1>Health Care</h1>
            <p>Move better. Feel better. Make wellness part of your everyday routine.</p>
          </div>
        </div>

        <main>
          <div className="section-head">
            <div>
              <h2>Move, stretch &amp; restore</h2>
              <p>Guided yoga sessions to support mobility, relaxation, recovery, and everyday wellness.</p>
            </div>
            <span className="session-count" id="sessionCount">
              {sessions.length} session{sessions.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="sessions-grid" id="list">
            {sessions.map((s, i) => {
              const isFeatured = i === 0;
              return (
                <button
                  key={s.title}
                  type="button"
                  className={isFeatured ? "featured-card" : "grid-card"}
                  onClick={(e) => openPlayer(s, e)}
                >
                  <div className="thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt="" onError={(e) => handleImgError(e, s.fallback)} />
                    <div className="play-badge">
                      <PlayBadge />
                    </div>
                    <span className="thumb-duration">{s.duration}</span>
                  </div>
                  <div className={isFeatured ? "featured-body" : "grid-body"}>
                    <div className="card-title">{s.title}</div>
                    <div className="card-meta">
                      <span className="meta-dot"></span>
                      <span>{s.difficulty}</span>
                      <span className="meta-duration">{s.duration} mins</span>
                    </div>
                    <div className="card-desc">{s.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 019 6a11.6 11.6 0 019-4c0 5.2-2 9-4.6 11.4A9.9 9.9 0 0111 20z" />
                  <path d="M9 12c0 5-3 8-3 8" />
                </svg>
              </div>
              <h4>Safe & Effective</h4>
              <p>Designed by yoga experts for everyday wellness.</p>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </div>
              <h4>Short & Focused</h4>
              <p>Quick sessions that fit into your busy day.</p>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h4>Feel Better Daily</h4>
              <p>Move, breathe and recover at your own pace.</p>
            </div>
          </div>

          <div className="closing">
            <p>&quot;The body benefits from movement, and the mind benefits from stillness — a few quiet minutes is often all it takes.&quot;</p>
          </div>
        </main>
      </div>

      <div
        className={`modal-backdrop${activeSession ? " open" : ""}`}
        id="backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) closePlayer();
        }}
      >
        <div className="player" role="dialog" aria-modal="true" aria-labelledby="playerTitle">
          <div className="player-top">
            <div className="player-top-info">
              <div className="eyebrow" id="playerMeta">
                {activeSession ? `${activeSession.difficulty} · ${activeSession.duration} mins` : ""}
              </div>
              <h2 id="playerTitle">{activeSession ? activeSession.title : ""}</h2>
            </div>
            <button className="close-btn" id="closeBtn" aria-label="Close video" onClick={closePlayer} ref={closeBtnRef}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="video-wrap">
            <video
              ref={videoRef}
              title="Yoga session video"
              src={activeSession?.videoSrc}
              poster={activeSession?.videoThumbnail}
              controls
              playsInline
            ></video>
          </div>
        </div>
      </div>

      <button
        className={`to-top${showToTop ? " visible" : ""}`}
        id="toTopBtn"
        aria-label="Back to top"
        onClick={handleToTopClick}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span>Back to top</span>
      </button>
    </>
  );
}
