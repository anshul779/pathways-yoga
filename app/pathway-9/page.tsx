"use client";

import { useEffect, useRef, useState } from "react";

interface Session {
  title: string;
  difficulty: string;
  duration: string;
  desc: string;
  img: string;
  fallback: string;
  video: string;
}

const sessions: Session[] = [
  {
    title: "Power Morning Yoga for Weight Loss",
    difficulty: "Easy",
    duration: "10:59",
    desc: "An energizing morning flow that fires up the whole body, builds heat, and supports steady, sustainable weight loss.",
    img: "/img/pose-side-stretch.png",
    fallback:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80",
    video: "https://youtu.be/KmoGSER3Nhw?si=l_2xLBLmzaQN_NIi",
  },
  {
    title: "Energizing Power Flow Morning Yoga Workout",
    difficulty: "Easy",
    duration: "16:59",
    desc: "A dynamic sequence of warrior poses and lunges to build strength, improve balance, and wake up every muscle group.",
    img: "/img/pose-warrior-flow.png",
    fallback:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=500&q=80",
    video: "https://youtu.be/p1UxGHu9TVE?si=bJT7DgSjSPCVNwwc",
  },
  {
    title: "Total Body Yoga Workout",
    difficulty: "Easy",
    duration: "30:59",
    desc: "A complete strength and mobility flow that works the core, spine, and shoulders for a well-rounded, toned physique.",
    img: "/img/pose-upward-dog.png",
    fallback:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
    video: "https://youtu.be/gKklMcx8w7A?si=IDaAEgzx2YRaGBXG",
  },
  {
    title: "Power Yoga Workout for Warrior Strength",
    difficulty: "Easy",
    duration: "29:59",
    desc: "A challenging power practice built around deep core and arm balance work to build lasting strength and stability.",
    img: "/img/pose-crow.png",
    fallback:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80",
    video: "https://youtu.be/p1UxGHu9TVE?si=OcMjlpeUzpDWFOCy",
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

function youtubeEmbedUrl(url: string): string {
  const parsed = new URL(url);
  const id =
    parsed.hostname === "youtu.be"
      ? parsed.pathname.slice(1)
      : parsed.searchParams.get("v") ?? "";
  return `https://www.youtube.com/embed/${id}?rel=0`;
}

export default function Home() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [youtubeSrc, setYoutubeSrc] = useState("");
  const [toTopVisible, setToTopVisible] = useState(false);

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  function openPlayer(session: Session) {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveSession(session);
    setYoutubeSrc(youtubeEmbedUrl(session.video));
    setPlayerOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closePlayer() {
    setYoutubeSrc("");
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
            src="/img/hero-tone-up.png"
            fallback={HERO_FALLBACK}
            alt="Woman in a seated twist yoga stretch on a mat"
          />
          <button className="hero-back" aria-label="Back">
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
            <div className="hero-eyebrow">Yoga · Strength · Tone</div>
            <h1>Tone Up</h1>
            <p>
              Build lean strength and definition with power-flow yoga
              sessions made for everyday tone-up.
            </p>
          </div>
        </div>

        <main>
          <div className="section-head">
            <div>
              <h2>Tone, strengthen &amp; sculpt</h2>
              <p>
                Power-focused yoga flows to build strength, improve balance,
                and tone your whole body.
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
                  <path d="M11 20A7 7 0 019 6a11.6 11.6 0 019-4c0 5.2-2 9-4.6 11.4A9.9 9.9 0 0111 20z" />
                  <path d="M9 12c0 5-3 8-3 8" />
                </svg>
              </div>
              <h4>Safe & Effective</h4>
              <p>Designed by yoga experts to build strength safely.</p>
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
              <h4>Short & Focused</h4>
              <p>Power sessions that fit into your busy day.</p>
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
              <h4>Feel Stronger Daily</h4>
              <p>Build strength, tone up and move with confidence.</p>
            </div>
          </div>

          <div className="closing">
            <p>
              &quot;Strength isn&apos;t just built in the gym — a steady,
              mindful practice can sculpt the body and calm the mind
              together.&quot;
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
            <iframe
              title="Yoga session video"
              src={youtubeSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
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
