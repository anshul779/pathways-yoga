"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const BACK_URL: string = "/";

const NAV_ITEMS = [
  { id: "section-hero", label: "Welcome Beginners!", mobileLabel: "Welcome Beginners!", isSub: false },
  { id: "section-what-is-yoga", label: "What Is Yoga?", mobileLabel: "01. What Is Yoga?", isSub: false },
  { id: "section-is-yoga-right", label: "Is Yoga Right for You?", mobileLabel: "02. Is Yoga Right for You?", isSub: false },
  { id: "section-best-yoga", label: "What Is the Best Yoga?", mobileLabel: "03. What Is the Best Yoga for Beginners?", isSub: true },
  { id: "section-how-to-practice", label: "How to Practice Yoga", mobileLabel: "04. How to Practice Yoga", isSub: false },
  { id: "section-first-practice", label: "Your First Yoga Practice", mobileLabel: "05. Your First Yoga Practice", isSub: false },
  { id: "section-frequency", label: "How Often Should I Do Yoga?", mobileLabel: "06. How Often Should I Do Yoga?", isSub: false },
  { id: "section-benefits", label: "The Benefits of Practicing Yoga", mobileLabel: "07. The Benefits of Practicing Yoga", isSub: false },
  { id: "section-how-to-improve", label: "How to Improve After Starting", mobileLabel: "08. How to Improve After Starting", isSub: false },
];

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("section-hero");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Helper: Show Toast Notification
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Back Button Navigation Behavior
  const handleBackAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (BACK_URL && BACK_URL.trim() !== "") {
      window.location.href = BACK_URL;
    } else {
      if (typeof window !== "undefined" && window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        showToast("No previous page in history.");
      }
    }
  };

  // Reading Progress Indicator
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setProgressPercent(Math.min(100, Math.max(0, Math.round(scrolled))));
      } else {
        setProgressPercent(0);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    window.addEventListener("resize", updateReadingProgress);
    updateReadingProgress();

    return () => {
      window.removeEventListener("scroll", updateReadingProgress);
      window.removeEventListener("resize", updateReadingProgress);
    };
  }, []);

  // Close mobile dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Smooth Scrolling & Menu Closing for Nav Items
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(id);

    if (targetSection) {
      setMobileMenuOpen(false);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      targetSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

      // Accessibility: Move focus to heading
      const heading = targetSection.querySelector("h1, h2, h3");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        (heading as HTMLElement).focus({ preventScroll: true });
      }
    }
  };

  // Active Section Detection on Scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -60% 0px", // Trigger highlights as section passes header boundary
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Back to Top Button Visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  // Back to Top Action
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });

    const firstHeading = document.getElementById("hero-title");
    if (firstHeading) {
      firstHeading.setAttribute("tabindex", "-1");
      firstHeading.focus({ preventScroll: true });
    }
  };

  // Compute mobile explore menu label
  const activeNav = NAV_ITEMS.find(item => item.id === activeSection);
  const rawLabel = activeNav ? activeNav.mobileLabel : "Explore this guide";
  const cleanLabel = rawLabel.includes(".") ? rawLabel.split(".")[1].trim() : rawLabel;

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="ReadingProgressContainer" aria-hidden="true">
        <span className="progress-label">Reading progress</span>
        <div className="progress-track">
          <div 
            className="ReadingProgressBar" 
            id="reading-progress-bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="progress-percent" id="reading-progress-percent">{progressPercent}%</span>
      </div>

      <div className="PageContainer">
        {/* Desktop Left Sidebar */}
        <aside className="Sidebar" aria-label="Yoga Guide Navigation">
          <div className="SidebarStickyContent">
            {/* Back Button */}
            <button 
              type="button" 
              className="BackButton" 
              onClick={handleBackAction} 
              aria-label="Go back" 
              title="Go back"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <nav className="DesktopNav" aria-label="Guide Sections">
              <h2 className="nav-title">On this page</h2>
              <ul className="nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`nav-item ${activeSection === item.id ? "active" : ""} ${item.isSub ? "sub-nav-item" : ""}`}
                    >
                      <span className="nav-dot" />
                      <span className="nav-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar Quote */}
            <div className="SidebarQuote">
              <svg className="lotus-icon" viewBox="0 0 100 100" aria-hidden="true">
                <path d="M50 20 C42 35, 38 48, 50 80 C62 48, 58 35, 50 20 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 40 C30 45, 20 60, 50 80 C80 60, 70 45, 50 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 55 C15 58, 10 70, 50 80 C90 70, 85 58, 50 55 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="80" r="3" fill="currentColor" />
              </svg>
              <blockquote>
                <p>â€œYoga is the journey of the self, through the self, to the self.â€</p>
                <cite>â€” The Bhagavad Gita</cite>
              </blockquote>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="MainContent" id="main-content">
          {/* Mobile Top Header Bar */}
          <div className="MobileHeaderBar">
            <button 
              type="button" 
              className="BackButton" 
              onClick={handleBackAction} 
              aria-label="Go back" 
              title="Go back"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
          </div>

          {/* Hero Card Section */}
          <section className="HeroCard" id="section-hero" aria-labelledby="hero-title">
            <div className="HeroContent">
              <h1 id="hero-title" className="HeroMainTitle">YOGA FOR BEGINNERS</h1>
              <h2 className="HeroSubtitle">Welcome Beginners!</h2>
              <div className="HeroText">
                <p>When youâ€™re brand new to yoga, it can feel intimidating and be difficult to know exactly where and how to get started. Our Yoga for Beginners guide was created specifically for youâ€”to give you all the tips, guidelines, and recommendations you will need to start a successful yoga practice. To ensure your success, we highly recommend you read this entire page before attempting any yoga.</p>
              </div>
            </div>
            <div className="HeroVisual">
              <Image 
                src="/meditation-illustration.png" 
                alt="Illustration of a woman sitting in meditation lotus pose facing a round window surrounded by plants" 
                className="HeroImage"
                width={450}
                height={378}
                priority
              />
            </div>
          </section>

          {/* Mobile Expandable Menu Control */}
          <div className="MobileExploreMenu" id="mobile-explore-menu" ref={dropdownRef}>
            <button 
              type="button" 
              className="ExploreToggle" 
              ref={toggleButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen} 
              aria-controls="mobile-explore-list"
            >
              <span className="toggle-icon">
                <svg className="hamburger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </span>
              <span className="toggle-label" id="explore-toggle-label">{cleanLabel}</span>
              <span className="toggle-chevron">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div className="ExploreDropdown" id="mobile-explore-list" hidden={!mobileMenuOpen}>
              <nav aria-label="Explore Guide Sections Mobile">
                <ul className="mobile-nav-list">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
                      >
                        {item.mobileLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Article Sections Container */}
          <div className="ArticleBody">
            {/* 01 What Is Yoga? */}
            <section className="ArticleSection" id="section-what-is-yoga" aria-labelledby="title-what-is-yoga">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">01</span>
                <h2 id="title-what-is-yoga" className="SectionTitle">What Is Yoga?</h2>
              </div>
              <div className="SectionContent">
                <p>Yoga is a vast collection of spiritual techniques and practices aimed at integrating mind, body, and spirit to achieve a state of enlightenment or oneness with the universe. What is normally thought of as â€œyogaâ€ in the West is really Hatha Yoga, one of the many paths of yoga. The different paths of yoga emphasize different approaches and techniques but ultimately lead to the same goal of unification and enlightenment.</p>
                <p>Hatha Yoga attains the union of mind-body-spirit through a practice of asanas (yoga postures), pranayama (yoga breathing), mudra (body gestures), and shatkarma (internal cleansing). These physical practices are used to purify the body and cultivate prana (life-force energy). Modern Hatha Yoga does not emphasize many of these esoteric practices and instead focuses more on the physical yoga postures.</p>
                <p>Regardless of what your goals or intentions are for starting, just the yoga poses themselves are a <strong>fantastic form of mental and physical exercise</strong>.</p>
              </div>
            </section>

            {/* 02 Is Yoga Right for You? */}
            <section className="ArticleSection" id="section-is-yoga-right" aria-labelledby="title-is-yoga-right">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">02</span>
                <h2 id="title-is-yoga-right" className="SectionTitle">Is Yoga Right for You?</h2>
              </div>
              <div className="SectionContent">
                <p>Yoga is in no way exclusiveâ€”being able to practice yoga does not matter how old you are, how much you weigh, what you do for a living, where you live, or what religion you practice. <strong>Yoga is accessible for just about everyone.</strong></p>
                <p>If you have a medical condition or a recent injury, it can be challenging or dangerous to do certain types of yoga, specific poses, or breathing techniques. Usually, there are alternatives or modifications that can allow you to practice safely, and many common complaints have specific yoga therapy remedies. If you are recovering from an injury or are in poor health, we recommended consulting with a physician or other qualified health care professional before beginning yoga.</p>
                <p>While you may feel some intensity in the belly of your muscles while in a yoga pose, you should never feel pain, especially in the joints. Sharp or intense pain is your bodyâ€™s signal to tell you to stop, back off, and take it easy.</p>
              </div>
            </section>

            {/* 03 What Is the Best Yoga for Beginners? (Visually nested subsection of 02) */}
            <section className="ArticleSection Subsection" id="section-best-yoga" aria-labelledby="title-best-yoga">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">03</span>
                <h3 id="title-best-yoga" className="SectionTitle">What Is the Best Yoga for Beginners?</h3>
              </div>
              <div className="SectionContent">
                <p>If you are out of shape or extremely inflexible, we recommend you begin with gentle practice until you have built up the strength and flexibility for more challenging sequences. If you are a relatively fit and flexible person, you should be able to jump right into a regular hatha yoga class. Once you are familiar with the basic postures, you can explore a vinyasa or flow class. We recommend you avoid Ashtanga, Bikram, or hot yoga until you have built up some physical strength and endurance. It is always best to an error on the side of caution and safety and approach yoga slowly and carefully.</p>
                <div className="TryYogaCallout">
                  <span className="CalloutQuoteMark" aria-hidden="true">â€œ</span>
                  <p className="CalloutText">The best way to know if yoga is for you is to give it a try!</p>
                </div>
              </div>
            </section>

            {/* 04 How to Practice Yoga */}
            <section className="ArticleSection" id="section-how-to-practice" aria-labelledby="title-how-to-practice">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">04</span>
                <h2 id="title-how-to-practice" className="SectionTitle">How to Practice Yoga</h2>
              </div>
              <div className="SectionContent">
                <p>Yoga is typically performed on bare feet on a sticky yoga mat with optional yoga props. The yoga movements and poses require clothes that can stretch and move freely with your body. You can purchase clothing specifically designed for yoga practice, but you can probably put together a comfortable outfit from your existing wardrobe to get started.</p>
                <p>Yoga classes may use additional props, the most common being straps, blocks, blankets, and bolsters. You donâ€™t need to purchase these right away as you can easily substitute these items with scarves or neckties, a stack of books, and pillows. If you take classes at a yoga studio, they will provide everything that you need.</p>
              </div>
            </section>

            {/* 05 Your First Yoga Practice */}
            <section className="ArticleSection FirstPracticeCard" id="section-first-practice" aria-labelledby="title-first-practice">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">05</span>
                <div className="TitleWithIcon">
                  <span className="LotusMiniIcon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2c0 0-4 6-4 10s4 6 4 6 4-2 4-6-4-10-4-10z" />
                      <path d="M12 8c0 0-8 2-8 8s8 4 8 4 8-2 8-4-8-8-8-8z" />
                    </svg>
                  </span>
                  <h2 id="title-first-practice" className="SectionTitle">Your First Yoga Practice</h2>
                </div>
              </div>
              <div className="SectionContent">
                <p>We recommend that you start with a short and straightforward yoga session and slowly build up from there. Once you feel comfortable with a few basic beginner yoga postures, you can incorporate them into a sequence and continue to add more challenging poses. Make sure you learn and follow the essential components of yoga practice: breathing, meditation, intention, asanas, and relaxation.</p>
              </div>
            </section>

            {/* 06 How Often Should I Do Yoga? */}
            <section className="ArticleSection" id="section-frequency" aria-labelledby="title-frequency">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">06</span>
                <h2 id="title-frequency" className="SectionTitle">How Often Should I Do Yoga?</h2>
              </div>
              <div className="SectionContent">
                <p>If you can practice yoga <strong className="badge-strong">3 or more times per week</strong>, you will see significant improvements in your flexibility, range of motion, strength, balance, inner peace, and overall well-being. Ideally, we recommend shorter and more frequent sessions, <strong className="badge-strong">20-45 minutes</strong> long, and for a total of <strong className="badge-strong">3-4 hours spread over several days</strong>. Practicing yoga less than this amount will still be beneficial, but you will see smaller improvements over a longer period of time. Like most things, the more time you can dedicate towards it, the more benefits you will receive.</p>
              </div>
            </section>

            {/* 07 The Benefits of Practicing Yoga */}
            <section className="ArticleSection" id="section-benefits" aria-labelledby="title-benefits">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">07</span>
                <h2 id="title-benefits" className="SectionTitle">The Benefits of Practicing Yoga</h2>
              </div>
              <div className="SectionContent">
                <p>The benefits of yoga are almost endless! Practicing yoga helps build healthy virtues and good values, such as discipline, honesty, devotion, self-inquiry, mindfulness, and non-attachment. Yoga empowers you to make conscious choices toward living a more healthy and fulfilling life. Yoga also helps you:</p>
                <ul className="BenefitsGrid">
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Keep your mind healthy and strong</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Reduce stress and promote relaxation</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Get a better nightâ€™s sleep</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Boost your immune system</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Help heal common aches like back pain</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Increase happiness and well being and reduce depression</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Lose weight and change your body shape</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Improve and maintain the health of muscles, joints, and organs</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Prevent conditions such as diabetes, heart disease, and auto-immune disorders</span>
                  </li>
                  <li className="BenefitItem">
                    <span className="CheckIcon" aria-hidden="true">âœ“</span>
                    <span className="BenefitText">Improve flexibility, strength, stamina, mobility, range of motion, and balance</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 08 How to Improve After Starting */}
            <section className="ArticleSection" id="section-how-to-improve" aria-labelledby="title-how-to-improve">
              <div className="SectionHeader">
                <span className="SectionNumber" aria-hidden="true">08</span>
                <h2 id="title-how-to-improve" className="SectionTitle">How to Improve After Starting</h2>
              </div>
              <div className="SectionContent">
                <p>Patience, commitment, repetition, and consistency are the keys to developing and progressing in the practice of yoga. After youâ€™ve found a style, teacher, and yoga studio that works for you, try these tips:</p>
                <ul className="ImprovementGrid">
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Commit to a regular schedule of yoga classes or home practice</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Increase the length of your practice and the number of days per week that you practice</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Attend yoga workshops that focus on specific aspects of yoga in more detail</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Journal the effects a consistent yoga practice has on your body, mind, and heart</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Read and study to learn more about yoga</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Find sources of inspiration</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Make yoga friends and get involved in a community of yogis</span>
                  </li>
                  <li className="ImproveItem">
                    <span className="bullet" aria-hidden="true" />
                    <span className="ImproveText">Adopt a yogic lifestyle</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Footer / Back to Top */}
          <footer className="Footer">
            <button 
              type="button" 
              className="BackToTopBtn" 
              onClick={handleBackToTop}
              style={{
                opacity: showBackToTop ? 1 : 0,
                pointerEvents: showBackToTop ? "auto" : "none",
                transform: showBackToTop ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.2s, transform 0.2s, background-color 0.2s, border-color 0.2s"
              }}
            >
              <span>Back to top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </footer>
        </main>
      </div>

      {/* Toast system */}
      <div 
        id="toast-message" 
        className={`Toast ${toastMessage ? "show" : ""}`} 
        role="status" 
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </>
  );
}

