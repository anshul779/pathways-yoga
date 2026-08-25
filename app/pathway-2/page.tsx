"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedBenefitId, setExpandedBenefitId] = useState<string | null>("benefit-1");
  const [activeBenefitId, setActiveBenefitId] = useState("benefit-1");
  const [readingProgress, setReadingProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const mobileNavToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavMenuRef = useRef<HTMLDivElement>(null);

  const benefits = [
    { id: "benefit-1", num: "01", text: "Yoga improves flexibility" },
    { id: "benefit-2", num: "02", text: "Yoga helps with stress relief" },
    { id: "benefit-3", num: "03", text: "Yoga improves mental health" },
    { id: "benefit-4", num: "04", text: "Yoga may reduce inflammation" },
    { id: "benefit-5", num: "05", text: "Yoga will likely increase your strength" },
    { id: "benefit-6", num: "06", text: "Yoga may reduce anxiety" },
    { id: "benefit-7", num: "07", text: "Yoga may improve quality of life" },
    { id: "benefit-8", num: "08", text: "Yoga may boost immunity" },
    { id: "benefit-9", num: "09", text: "Yoga can improve balance" },
    { id: "benefit-10", num: "10", text: "Yoga may improve cardiovascular functioning" },
    { id: "benefit-11", num: "11", text: "Yoga may help improve sleep" },
    { id: "benefit-12", num: "12", text: "Yoga may improve self-esteem" },
    { id: "benefit-13", num: "13", text: "Yoga may improve bone health" },
    { id: "benefit-14", num: "14", text: "Yoga can promote better posture and body awareness" },
    { id: "benefit-15", num: "15", text: "Yoga can improve brain functioning" },
    { id: "benefit-16", num: "16", text: "Yoga can help with burnout" }
  ];

  // Detect viewport size for layout behavior (accordion)
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setExpandedBenefitId(null);
      } else {
        setExpandedBenefitId((prev) => prev || "benefit-1");
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile navigation menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileNavToggleRef.current &&
        !mobileNavToggleRef.current.contains(e.target as Node) &&
        mobileNavMenuRef.current &&
        !mobileNavMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Update Reading Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setReadingProgress((scrollTop / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section Highlights & Sidebar Auto-Scrolling
  useEffect(() => {
    const sections = document.querySelectorAll(".ArticleSection");
    const desktopNavItems = document.querySelectorAll(".desktop-nav-menu .nav-item");

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveBenefitId(id);

            // Auto scroll active desktop nav item into sidebar view
            const activeNavItem = Array.from(desktopNavItems).find(
              (item) => item.getAttribute("href") === `#${id}`
            );
            if (activeNavItem) {
              activeNavItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleBackButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const BACK_URL: string = "/";
    if (BACK_URL.trim() !== "") {
      window.location.href = BACK_URL;
    } else {
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
      } else {
        triggerToast("Navigating to default page...");
        setTimeout(() => {
          window.location.href = "/";
        }, 800);
      }
    }
  };

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      if (isMobile) {
        setExpandedBenefitId(targetId);
      }

      const offset = isMobile ? 80 : 40;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSectionTitleClick = (benefitId: string) => {
    if (isMobile) {
      const targetSection = document.getElementById(benefitId);
      if (targetSection) {
        const isCurrentlyExpanded = expandedBenefitId === benefitId;

        // Toggle state
        if (isCurrentlyExpanded) {
          setExpandedBenefitId(null);
        } else {
          setExpandedBenefitId(benefitId);

          // Scroll header into view after React renders
          setTimeout(() => {
            const mobileHeaderOffset = 85;
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - mobileHeaderOffset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }, 50);
        }
      }
    }
  };

  const handleBackToTopClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const getBenefitLabel = (id: string) => {
    const matching = benefits.find((b) => b.id === id);
    return matching ? `${matching.num}. ${matching.text}` : "Explore Benefits";
  };

  const getSectionClassName = (id: string) => {
    if (!isMobile) return "ArticleSection";
    return expandedBenefitId === id ? "ArticleSection expanded" : "ArticleSection collapsed";
  };

  return (
    <>
      {/* Reading Progress Indicator */}
      <div
        className="ReadingProgress"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      ></div>

      <div className="ArticlePage">
        {/* Back Button */}
        <header className="header-container">
          <button
            type="button"
            className="BackButton"
            onClick={handleBackButtonClick}
            aria-label="Go back"
            title="Go back"
          >
            <svg
              width="20"
              height="20"
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
        </header>

        {/* Hero Section */}
        <section className="ArticleHero">
          <div className="hero-content">
            <h1 className="hero-title">16 Benefits of Yoga That Are Supported by Science</h1>
            <div className="hero-intro">
              <p>
                While modern media and advertising may have us think that yoga is all about physical poses, the entirety of yoga includes a wide range of contemplative and self-disciplinary practices, such as meditation, chanting, mantra, prayer, breath work, ritual, and even selfless action.
              </p>
              <p>
                The word “yoga” comes from the root word “yuj,” which means “to yoke” or “to bind.” The word itself has numerous meanings, from an astrological conjunction to matrimony, with the underlying theme being connection.
              </p>
              <p>Yoga asana is the physical practice and postures of yoga.</p>
              <p>
                The scientific research into yoga’s benefits is still somewhat preliminary, but much of the evidence so far supports what practitioners seem to have known for millennia: Yoga is incredibly beneficial to our overall well-being.
              </p>
              <p className="intro-cta">Let’s look at 16 of the many benefits of yoga in greater depth.</p>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/meditation-illustration.png"
              alt="Vector illustration of a woman meditating in lotus pose, depicting mental peace and physical balance"
              className="hero-img"
              width="450"
              height="450"
            />
          </div>
        </section>

        {/* Mobile Navigation Toggle */}
        <div className="MobileBenefitNavigation" id="mobile-nav">
          <button
            ref={mobileNavToggleRef}
            className="mobile-nav-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span>{getBenefitLabel(activeBenefitId)}</span>
            <svg
              className="chevron-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            ref={mobileNavMenuRef}
            className="mobile-nav-menu"
            id="mobile-nav-menu"
            hidden={!isMobileMenuOpen}
          >
            <nav className="mobile-nav-list" aria-label="Yoga benefits navigation mobile">
              {benefits.map((b) => (
                <a
                  key={b.id}
                  href={`#${b.id}`}
                  onClick={(e) => handleNavItemClick(e, b.id)}
                  className={`mobile-nav-item ${activeBenefitId === b.id ? "active" : ""}`}
                >
                  {b.num}. {b.text}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="article-container">
          {/* Desktop Sidebar Navigation */}
          <aside className="ArticleNavigation" aria-label="Yoga benefits navigation desktop">
            <nav className="desktop-nav-menu">
              <ul className="nav-list">
                {benefits.map((b) => (
                  <li key={b.id}>
                    <a
                      href={`#${b.id}`}
                      onClick={(e) => handleNavItemClick(e, b.id)}
                      className={`nav-item ${activeBenefitId === b.id ? "active" : ""}`}
                    >
                      <span className="nav-num">{b.num}</span>
                      <span className="nav-text">{b.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Article Text Content */}
          <main className="article-content">
            {/* Benefit 1 */}
            <article className={getSectionClassName("benefit-1")} id="benefit-1" data-benefit="1">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-1")}>01</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-1")}>Yoga improves flexibility</h2>
              <div className="section-body">
                <p>
                  In 2016, two of yoga’s leading organizations, Yoga Journal and Yoga Alliance, conducted a worldwide survey looking at a variety of statistics about yoga in an attempt to quantify its value amid ever-increasing popularity.
                </p>
                <p>
                  The most cited reason people selected for doing yoga was to <span className="highlight-quote">“increase flexibility”</span>.
                </p>
                <p>
                  Flexibility is an important component of physical health. Yoga offers many styles to choose from, varying in intensity from high to moderate to mild. Even the lowest intensity styles have been found to increase flexibility.
                </p>
                <p>
                  Yoga seems to be especially helpful for improving flexibility in adults <span className="highlight-stat">ages 65 and older</span>. Reduced flexibility is a natural part of aging, and a <span className="highlight-ref">2019 study</span> found that yoga both slowed down loss and improved flexibility in older adults.
                </p>
              </div>
            </article>

            {/* Benefit 2 */}
            <article className={getSectionClassName("benefit-2")} id="benefit-2" data-benefit="2">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-2")}>02</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-2")}>Yoga helps with stress relief</h2>
              <div className="section-body">
                <p>
                  The American Psychological Association recently shared that <span className="highlight-stat">84% of American adults</span> are feeling the impact of prolonged stress (<a href="https://www.apa.org/news/press/releases/2021/02/adults-stress-pandemic" target="_blank" rel="noopener noreferrer" className="research-link">5</a>).
                </p>
                <p>
                  So, it makes sense that the second most cited reason people selected as to why they do yoga was to relieve stress. Thankfully, the science supports that yoga, and especially asana, is excellent at reducing stress.
                </p>
                <p>
                  But remember — the physical practice is just one aspect of yoga. Meditation, breath work, and auditory rituals, like chanting and <a href="https://www.healthline.com/health/sound-bath" target="_blank" rel="noopener noreferrer" className="research-link">sound baths</a>, have all also been shown to significantly lessen tension and relieve stress.
                </p>
              </div>
            </article>

            {/* Benefit 3 */}
            <article className={getSectionClassName("benefit-3")} id="benefit-3" data-benefit="3">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-3")}>03</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-3")}>Yoga improves mental health</h2>
              <div className="section-body">
                <p>Major depressive disorder (MDD) is thought to be one of the most common mental health disorders in the world.</p>
                <p>
                  A <span className="highlight-ref">2017 meta-analysis</span> of <span className="highlight-stat">23 interventions</span> looking at the effects of yoga-based treatments on depressive symptoms overwhelmingly concluded that yoga can now be considered an effective alternative treatment for MDD.
                </p>
                <p>
                  Both movement-based yoga therapies and breathing-based practices have been shown to significantly improve depressive symptoms.
                </p>
              </div>
            </article>

            {/* Benefit 4 */}
            <article className={getSectionClassName("benefit-4")} id="benefit-4" data-benefit="4">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-4")}>04</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-4")}>Yoga may reduce inflammation</h2>
              <div className="section-body">
                <p>Often, the precursor to illness is chronic inflammation. Heart disease, diabetes, arthritis, Crohn’s disease, and many other conditions are linked to prolonged inflammation.</p>
                <p>
                  One review examined <span className="highlight-stat">15 research studies</span> and found a common result: Yoga — of various styles, intensities, and durations — reduced the biochemical markers of inflammation across several chronic conditions.
                </p>
              </div>
            </article>

            {/* Benefit 5 */}
            <article className={getSectionClassName("benefit-5")} id="benefit-5" data-benefit="5">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-5")}>05</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-5")}>Yoga will likely increase your strength</h2>
              <div className="section-body">
                <p>
                  While most people associate yoga with stretching and flexibility, some types of yoga classes can also be considered strength-building. It just depends on the class level, approach, and teacher. This makes yoga asana a multimodal form of exercise.
                </p>
                <p>
                  Yoga’s effectiveness at building strength has been studied in several specific contexts — for instance, as it pertains to people with breast cancer, older adults, and children.
                </p>
                <p>
                  Another study conducted on air force personnel found yoga to be an effective strength-building practice across many age groups of healthy participants.
                </p>
              </div>
            </article>

            {/* Benefit 6 */}
            <article className={getSectionClassName("benefit-6")} id="benefit-6" data-benefit="6">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-6")}>06</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-6")}>Yoga may reduce anxiety</h2>
              <div className="section-body">
                <p>
                  The Anxiety and Depression Association of America recently stated that anxiety disorders may be the most common mental health disorders in the United States.
                </p>
                <p>
                  There are a number of different anxiety disorders, such as generalized anxiety disorder, social anxiety, and specific phobias. Even chronic stress can sometimes be categorized as an anxiety disorder.
                </p>
                <p>
                  Numerous studies suggest that yoga asana may be effective as an alternative treatment for anxiety disorders, though several of the researchers request additional replicated studies before conclusively stating as much.
                </p>
                <p>
                  Yoga nidra, which is a body scan/guided meditation, has been shown to conclusively reduce symptoms of anxiety.
                </p>
              </div>
            </article>

            {/* Benefit 7 */}
            <article className={getSectionClassName("benefit-7")} id="benefit-7" data-benefit="7">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-7")}>07</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-7")}>Yoga may improve quality of life</h2>
              <div className="section-body">
                <p>
                  The World Health Organization defines quality of life (QOL) as “an individual’s perception of their position in life in the context of the culture and value systems in which they live and in relation to their goals, expectations, standards and concerns”.
                </p>
                <p>
                  Some factors that affect QOL are relationships, creativity, learning opportunities, health, and material comforts.
                </p>
                <p>
                  For decades, researchers have viewed QOL as an important predictor of people’s longevity and patients’ likelihood of improvement when treated for a chronic illness or injury.
                </p>
                <p>
                  A <span className="highlight-ref">2019 meta-analysis</span> shows promising potential for yoga to improve QOL in people with chronic pain.
                </p>
              </div>
            </article>

            {/* Benefit 8 */}
            <article className={getSectionClassName("benefit-8")} id="benefit-8" data-benefit="8">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-8")}>08</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-8")}>Yoga may boost immunity</h2>
              <div className="section-body">
                <p>Chronic stress negatively effects your immune system.</p>
                <p>
                  When your immunity is compromised, you’re more susceptible to illness. However, as discussed earlier, yoga is considered a scientifically backed alternative treatment for stress.
                </p>
                <p>
                  The research is still evolving, but some studies have found a distinct link between practicing yoga (especially consistently over the long term) and better immune system functioning.
                </p>
                <p>
                  This is due in part to yoga’s ability to fight inflammation and in part to the enhancement of cell-mediated immunity.
                </p>
              </div>
            </article>

            {/* Benefit 9 */}
            <article className={getSectionClassName("benefit-9")} id="benefit-9" data-benefit="9">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-9")}>09</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-9")}>Yoga can improve balance</h2>
              <div className="section-body">
                <p>
                  Balance is not just important when you’re trying to stand on one leg in Tree Pose in yoga class. It’s also essential for simple everyday movements such as picking something up off the floor, reaching up to a shelf, and descending stairs.
                </p>
                <p>Yoga has been shown to improve balance and overall performance in athletes.</p>
                <p>
                  Likewise, a review of the research conducted on healthy populations suggests balance may improve for most people after consistently practicing yoga.
                </p>
                <p>
                  Still, falling can have serious effects for certain populations. According to the Agency for Healthcare Research and Quality, falls are incredibly common among older adults in nursing facilities, and even the simplest ones can lead to an increased risk of death.
                </p>
                <p>Newer research suggests yoga can improve balance in older populations.</p>
                <p>However, more studies with large sample sizes are needed before a general conclusion can be drawn.</p>
                <p>Yoga asana can also be helpful at improving balance in people with brain injuries.</p>
                <p>
                  Adaptive yoga or chair yoga can be especially helpful for older adults or people with injuries who are less mobile or for whom balance is a concern.
                </p>
              </div>
            </article>

            {/* Benefit 10 */}
            <article className={getSectionClassName("benefit-10")} id="benefit-10" data-benefit="10">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-10")}>10</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-10")}>Yoga may improve cardiovascular functioning</h2>
              <div className="section-body">
                <p>Pranayama, often referred to as “yogic breathing,” is an important and beneficial aspect of yoga.</p>
                <p>
                  The Journal of Ayurveda and Integrative Medicine published a review of <span className="highlight-stat">1,400 studies</span> looking at the overall effects of pranayama. One key takeaway was that yogic breathing can improve the functioning of several systems in the body.
                </p>
                <p>
                  Specifically, the research summarized in the review found that the cardiovascular system benefited mightily from controlling the pace of breathing, as evidenced by favorable changes in heart rate, stroke capacity, arterial pressure, and contractility of the heart.
                </p>
                <p>This research indicates that yogic breathing may actually influence the brain’s cardiorespiratory center to improve functioning.</p>
              </div>
            </article>

            {/* Benefit 11 */}
            <article className={getSectionClassName("benefit-11")} id="benefit-11" data-benefit="11">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-11")}>11</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-11")}>Yoga may help improve sleep</h2>
              <div className="section-body">
                <p>When measuring sleep, researchers look at a person’s ability to both fall asleep and stay asleep. Insomnia can affect one or both of these aspects.</p>
                <p>
                  Yoga has been shown to improve both how quickly people fall asleep and how deeply they stay asleep. This is partly due to the aftereffects of exercise and the mental calming and stress relief provided by yoga specifically.
                </p>
                <p>
                  In addition to improving anxiety (or perhaps because of it), numerous studies show yoga nidra to be particularly helpful at improving sleep.
                </p>
              </div>
            </article>

            {/* Benefit 12 */}
            <article className={getSectionClassName("benefit-12")} id="benefit-12" data-benefit="12">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-12")}>12</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-12")}>Yoga may improve self-esteem</h2>
              <div className="section-body">
                <p>
                  Body image and self-esteem are often particularly challenging for adolescents and young adults. The good news is that several recent studies show positive results when using yoga for improving self-esteem and perceived body image in these populations.
                </p>
                <p>
                  There has also been promising evidence that yoga could help with the accompanying symptoms of obsession, anxiety, and depression in patients with <a href="https://www.healthline.com/health/anorexia-nervosa" target="_blank" rel="noopener noreferrer" className="research-link">anorexia nervosa</a>.
                </p>
              </div>
            </article>

            {/* Benefit 13 */}
            <article className={getSectionClassName("benefit-13")} id="benefit-13" data-benefit="13">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-13")}>13</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-13")}>Yoga may improve bone health</h2>
              <div className="section-body">
                <p>
                  Many postures in yoga are isometric contractions, meaning the length of the muscles holding the pose doesn’t change, though they are fully engaged.
                </p>
                <p>
                  For example, in Plank Pose, which is an upper pushup position, the arms, trunk, and legs are all engaged, without shortening or lengthening as they would if you were moving through a pushup.
                </p>
                <p>
                  In Warrior II, you hold a position with the lead leg bent at both the hip and knee. Isometric exercises — especially when performed with the joints in flexion — have been found to increase bone density.
                </p>
                <p>
                  Yoga asana may also reverse the bone loss associated with osteopenia and osteoporosis. One study showed that just <span className="highlight-stat">12 minutes of yoga per day</span> can significantly improve bone health.
                </p>
                <p>
                  That said, it’s important to note that the findings related to yoga’s impact on bone density have been mixed, and therefore inconclusive, so far.
                </p>
              </div>
            </article>

            {/* Benefit 14 */}
            <article className={getSectionClassName("benefit-14")} id="benefit-14" data-benefit="14">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-14")}>14</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-14")}>Yoga can promote better posture and body awareness</h2>
              <div className="section-body">
                <p>As a modern society reliant on technology, we seem to be spending more and more time sitting or hunched over devices.</p>
                <p>
                  But one recent review of <span className="highlight-stat">34 research studies</span> found an emerging pattern: Yoga improved brain functioning in the centers responsible for interoception (recognizing the sensations within your body) and posture.
                </p>
                <p>
                  Additionally, yoga’s focus on mobility and flexibility can contribute to better alignment by releasing muscles that are often tight, such as the hamstrings, and improving mobility of the spine.
                </p>
                <p>Doing yoga poses during breaks in your workouts can also promote better posture.</p>
              </div>
            </article>

            {/* Benefit 15 */}
            <article className={getSectionClassName("benefit-15")} id="benefit-15" data-benefit="15">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-15")}>15</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-15")}>Yoga can improve brain functioning</h2>
              <div className="section-body">
                <p>Yoga truly is a mind-body exercise, studies suggest.</p>
                <p>
                  The review mentioned above found that practicing yoga activated areas of the brain responsible for motivation, executive functioning, attention, and neuroplasticity.
                </p>
              </div>
            </article>

            {/* Benefit 16 */}
            <article className={getSectionClassName("benefit-16")} id="benefit-16" data-benefit="16">
              <div className="section-num" aria-hidden="true" onClick={() => handleSectionTitleClick("benefit-16")}>16</div>
              <h2 className="section-title" onClick={() => handleSectionTitleClick("benefit-16")}>Yoga can help with burnout</h2>
              <div className="section-body">
                <p>It seems like burnout — excessive exhaustion that effects one’s health — is at an all-time high.</p>
                <p>
                  A recent study looking at burnout among hospice workers during the COVID-19 pandemic concluded that yoga-based meditation interventions helped significantly reduce the effects of burnout by improving interoceptive awareness.
                </p>
                <p>
                  This is the ability to notice internal signals and respond appropriately — meaning yoga may help people become more in tune with, and even more likely to listen to, their body’s signals.
                </p>
              </div>
            </article>

            {/* The Bottom Line */}
            <section className="TheBottomLine" id="bottom-line">
              <h2 className="bottom-line-title">The bottom line</h2>
              <div className="bottom-line-body">
                <p>
                  While the research is still young (especially in comparison with how long people have been practicing yoga), the results are promising and confirm what yoga practitioners have been touting for thousands of years: Yoga is beneficial for our overall health.
                </p>
                <p>
                  Numerous practices fall into category of yoga, and most do not involve physical activity, instead focusing on meditation techniques. Even karmic or philanthropic action can qualify as yoga!
                </p>
                <p>Because yoga is not limited to physical movement, it’s a practice you can do every day.</p>
                <p className="conclusion-highlight">
                  Find the modality that works best for you and remember: Investing in a yoga practice is investing in <strong>you</strong>!
                </p>
              </div>
            </section>

            {/* Back to Top / Footer Controls */}
            <footer className="article-footer">
              <button
                type="button"
                className="BackToTop"
                onClick={handleBackToTopClick}
                id="back-to-top-btn"
              >
                <span>Back to top</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </footer>
          </main>
        </div>
      </div>

      {/* Toast notification system */}
      <div id="toast" className={`toast ${toastMessage ? "show" : ""}`} role="status" aria-live="polite">
        {toastMessage}
      </div>
    </>
  );
}
