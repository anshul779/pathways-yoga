"use client";

import { useEffect, useRef, useState } from "react";

interface Session {
  title: string;
  difficulty: string;
  duration: string;
  desc: string;
  img: string;
  fallback: string;
  videoThumbnail: string;
  videoSrc: string;
}

const sessions: Session[] = [
  {
    title: "Yoga for Beginners Night Time",
    difficulty: "Easy",
    duration: "12:58",
    desc: "A gentle, calming wind-down sequence to release the day's tension and ease you into restful sleep.",
    img: "/img/beginner-session-nighttime.png",
    fallback:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/video-thumbnails/Q1e1ps9t5rQ-HD.jpg",
    videoSrc: "/videos/Yoga for Beginners _ 10 minute Beginner Yoga SLOW Stretch.mp4",
  },
  {
    title: "Yoga for Beginners Morning",
    difficulty: "Easy",
    duration: "12:39",
    desc: "A bright, energising flow to wake up the body and set a calm, focused tone for the day ahead.",
    img: "/img/beginner-session-morning.png",
    fallback:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/video-thumbnails/CyHs9v7F9gE-HD.jpg",
    videoSrc: "/videos/10 minute MORNING Yoga for Beginners _ Beginner Yoga Stretch.mp4",
  },
  {
    title: "Yoga for Beginners Full Body",
    difficulty: "Easy",
    duration: "13:05",
    desc: "A well-rounded full-body sequence that gently builds strength, balance, and flexibility from head to toe.",
    img: "/img/beginner-session-fullbody.png",
    fallback:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/video-thumbnails/t3joHNOOyYY-HD.jpg",
    videoSrc:
      "/videos/vidssave.com 30 min Yin Yoga for Hormones - Yoga for Adrenal Fatigue & Thyroid Issues 720P.mp4",
  },
  {
    title: "10 minute Simple Yoga Flow for All Levels",
    difficulty: "Easy",
    duration: "09:59",
    desc: "A short, simple flow anyone can follow — a perfect starting point whatever your experience level.",
    img: "/img/beginner-session-simpleflow.png",
    fallback:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/video-thumbnails/18mnOUa482Y-HD.jpg",
    videoSrc: "/videos/10 minute EASY & SIMPLE Yoga Flow for All Levels.mp4",
  },
];

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=85";

function ImgWithFallback({
  src,
  fallback,
  alt,
  className,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const usedFallback = useRef(false);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (usedFallback.current) return;
        usedFallback.current = true;
        setCurrentSrc(fallback);
      }}
    />
  );
}

function playBadgeSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="var(--sage-deep)">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function timeMetaSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function Home() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [videoSrc, setVideoSrc] = useState("about:blank");
  const [toTopVisible, setToTopVisible] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function openPlayer(session: Session) {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveSession(session);
    setVideoSrc(session.videoSrc);
    setPlayerOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closePlayer() {
    setVideoSrc("about:blank");
    setPlayerOpen(false);
    document.body.style.overflow = "";
    if (lastFocusedRef.current) lastFocusedRef.current.focus();
  }

  useEffect(() => {
    if (playerOpen) {
      closeBtnRef.current?.focus();
    }
  }, [playerOpen]);

  useEffect(() => {
    if (!playerOpen || !activeSession) return;

    const playTimer = window.setTimeout(() => {
      videoRef.current?.play().catch(() => undefined);
    }, 1000);

    return () => window.clearTimeout(playTimer);
  }, [playerOpen, activeSession]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape" && playerOpen) closePlayer();
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerOpen]);

  useEffect(() => {
    function onScroll() {
      setToTopVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="page">
        <div className="hero">
          <ImgWithFallback
            src="/img/beginner-hero-downdog.png"
            fallback={HERO_FALLBACK}
            alt="Woman practicing downward dog yoga pose against a brick wall"
          />
          <button
            className="hero-back"
            aria-label="Back"
            onClick={() => window.history.back()}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="hero-content">
            <div className="hero-eyebrow">Yoga · Beginners · Foundations</div>
            <h1>Beginner Tour</h1>
            <p>
              New to yoga? Start here with simple, guided sessions built for
              absolute beginners.
            </p>
          </div>
        </div>

        <main>
          <div className="section-head">
            <div>
              <h2>Your first steps on the mat</h2>
              <p>
                Easy, beginner-friendly sessions to help you build
                flexibility, confidence, and a daily practice.
              </p>
            </div>
            <span className="session-count">
              {sessions.length} session{sessions.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="sessions-grid">
            {sessions.map((s, i) => {
              const isFeatured = i === 0;
              return (
                <button
                  key={s.title}
                  className={isFeatured ? "featured-card" : "grid-card"}
                  onClick={() => openPlayer(s)}
                >
                  <div className="thumb">
                    <ImgWithFallback src={s.img} fallback={s.fallback} alt="" />
                    <div className="play-badge">{playBadgeSvg()}</div>
                  </div>
                  <div className={isFeatured ? "featured-body" : "grid-body"}>
                    {isFeatured && (
                      <div className="eyebrow featured-eyebrow">
                        Featured session
                      </div>
                    )}
                    <div className="card-title">{s.title}</div>
                    <div className="card-meta">
                      <span className="meta-dot"></span>
                      <span>{s.difficulty}</span>
                      <span className="meta-time">
                        {timeMetaSvg()}
                        <span>{s.duration} mins</span>
                      </span>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4.5v15m0-15c-2-2.5-5-3-8-2 0 4 2 6.5 8 6.5m0-4.5c2-2.5 5-3 8-2 0 4-2 6.5-8 6.5" />
                </svg>
              </div>
              <h4>Beginner Friendly</h4>
              <p>No experience needed — every session guides you step by step.</p>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </div>
              <h4>Just Minutes a Day</h4>
              <p>Short sessions that fit before work, after class, or before bed.</p>
            </div>
            <div className="benefit-divider"></div>
            <div className="benefit">
              <div className="benefit-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h4>Build Confidence</h4>
              <p>Move at your own pace and grow a little stronger every day.</p>
            </div>
          </div>

          <div className="closing">
            <p>
              &quot;Every practice starts with a single breath — the
              beginning is often the hardest, and the most rewarding, part.&quot;
            </p>
          </div>
        </main>
      </div>

      <div
        className={`modal-backdrop${playerOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closePlayer();
        }}
      >
        <div
          className="player"
          role="dialog"
          aria-modal="true"
          aria-labelledby="playerTitle"
        >
          <div className="player-top">
            <div className="player-top-info">
              <div className="eyebrow">
                {activeSession
                  ? `${activeSession.difficulty} · ${activeSession.duration} mins`
                  : ""}
              </div>
              <h2 id="playerTitle">{activeSession ? activeSession.title : ""}</h2>
            </div>
            <button
              className="close-btn"
              aria-label="Close video"
              ref={closeBtnRef}
              onClick={closePlayer}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="video-wrap">
            <video
              title="Yoga session video"
              src={videoSrc}
              poster={activeSession?.videoThumbnail}
              ref={videoRef}
              controls
              playsInline
            />
          </div>
        </div>
      </div>

      <button
        className={`to-top${toTopVisible ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span>Back to top</span>
      </button>
    </>
  );
}
