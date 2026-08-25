"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a[data-nav]")
    );
    const mobileNav = document.getElementById("mobileNav");
    const mobileToggle = document.getElementById("mobileNavToggle");
    const mobileLabel = document.getElementById("mobileNavLabel");
    const progressFill = document.getElementById("readingProgressFill");
    const backToTop = document.getElementById("backToTop");

    if (!mobileNav || !mobileToggle || !mobileLabel || !progressFill || !backToTop) {
      return;
    }

    function isMobile() {
      return window.matchMedia("(max-width: 1023px)").matches;
    }

    function getOffset() {
      return isMobile() ? 64 : 24;
    }

    function handleNavClick(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const id = this.getAttribute("href")!.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const top = rect.top + window.pageYOffset - getOffset();
      window.scrollTo({ top: top, behavior: "smooth" });

      if (this.hasAttribute("data-mobile")) {
        mobileNav!.classList.remove("open");
        mobileToggle!.setAttribute("aria-expanded", "false");
      }
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    function handleToggleClick() {
      const open = mobileNav!.classList.toggle("open");
      mobileToggle!.setAttribute("aria-expanded", open ? "true" : "false");
    }
    mobileToggle.addEventListener("click", handleToggleClick);

    function handleDocumentClick(e: MouseEvent) {
      if (!mobileNav!.contains(e.target as Node)) {
        mobileNav!.classList.remove("open");
        mobileToggle!.setAttribute("aria-expanded", "false");
      }
    }
    document.addEventListener("click", handleDocumentClick);

    function setActive(id: string) {
      navLinks.forEach((link) => {
        const match = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", match);
        if (match && link.hasAttribute("data-mobile")) {
          mobileLabel!.textContent = link.textContent;
        }
      });
    }

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
      );

      sections.forEach((sec) => observer!.observe(sec));
    }

    setActive("overview");

    function updateReadingProgress() {
      if (!isMobile()) {
        progressFill!.style.width = "0%";
        return;
      }
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      let progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progress = Math.min(100, Math.max(0, progress));
      progressFill!.style.width = progress + "%";
    }

    let progressTicking = false;
    function handleScroll() {
      if (!progressTicking) {
        window.requestAnimationFrame(() => {
          updateReadingProgress();
          progressTicking = false;
        });
        progressTicking = true;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateReadingProgress);
    updateReadingProgress();

    function handleBackToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    backToTop.addEventListener("click", handleBackToTop);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      mobileToggle.removeEventListener("click", handleToggleClick);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateReadingProgress);
      backToTop.removeEventListener("click", handleBackToTop);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="reading-progress"
        id="readingProgress"
        aria-hidden="true"
      >
        <div className="reading-progress-fill" id="readingProgressFill"></div>
      </div>

      <div className="page">
        <button
          className="back-btn"
          onClick={() => window.history.back()}
          aria-label="Go back"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </button>

        <div className="hero">
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="A colorful spread of fresh fruits and vegetables at a market stall"
            />
          </div>
          <div className="hero-body">
            <span className="eyebrow">Yogic Nutrition</span>
            <h1>Yogic Diet for Complete Nutrition</h1>
            <p>
              Most yogis at some stage of their journey will wonder whether
              they should adopt a vegan/vegetarian diet. It goes without
              saying that a well balanced nutritious diet has a huge impact
              on your physical and mental well being. However due to health
              reasons, busy lifestyles, and certain other factors (for one
              the high cost of organic/healthy food) it is not always
              possible to maintain a strict yogic diet. It is however very
              important to listen to the needs of your body adjusting food
              choices accordingly rather than following a restrictive plan
              that could eventually make you unwell.
            </p>
          </div>
        </div>

        <div className="content-layout">
          <nav className="side-nav" aria-label="Section navigation">
            <div className="nav-label">Yogic Diet</div>
            <ul>
              <li>
                <a href="#overview" data-nav>
                  Overview
                </a>
              </li>
              <li>
                <a href="#conscious-eating" data-nav>
                  Conscious Eating
                </a>
              </li>
              <li>
                <a href="#yogic-foods" data-nav>
                  Yogic Foods
                </a>
              </li>
              <li>
                <a href="#diet-tweaks" data-nav>
                  Diet Tweaks
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <div className="mobile-nav" id="mobileNav">
              <button
                className="mobile-nav-toggle"
                id="mobileNavToggle"
                aria-expanded="false"
                aria-controls="mobileNavPanel"
              >
                <span id="mobileNavLabel">Yogic Diet</span>
                <svg
                  className="chev"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="mobile-nav-panel" id="mobileNavPanel">
                <ul>
                  <li>
                    <a href="#overview" data-nav data-mobile="true">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#conscious-eating" data-nav data-mobile="true">
                      Conscious Eating
                    </a>
                  </li>
                  <li>
                    <a href="#yogic-foods" data-nav data-mobile="true">
                      Yogic Foods
                    </a>
                  </li>
                  <li>
                    <a href="#diet-tweaks" data-nav data-mobile="true">
                      Diet Tweaks
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <article>
              <section id="overview">
                <div className="section-heading">
                  <span className="marker"></span>
                  <h2>Overview</h2>
                </div>
                <p>
                  A yogic diet is a way of eating that supports the mind and
                  body together, built around the food qualities described
                  below &mdash; sattvic, rajasic, and tamasic. It&apos;s less
                  about strict rules and more about paying attention to how
                  your choices actually make you feel.
                </p>
              </section>

              <section id="conscious-eating">
                <div className="section-heading">
                  <span className="marker"></span>
                  <h2>Conscious Eating.</h2>
                </div>
                <p>
                  Mindfulness is not only an essential tool in your yoga
                  practice it is also very important at mealtimes. Your food
                  choices should be tailor-made to support you, important
                  basic factors to take into consideration are lifestyle,
                  health, and age. Your diet should come from a conscious,
                  self-reflective look at how your eating habits affect your
                  body, mind, and soul. By eating consciously, you quickly
                  become aware of how your choices affect you. Sometimes you
                  can feel these effects straight after a meal and sometimes
                  the next day. Think indigestion, bloating, fatigue,
                  constipation and so on.
                </p>
              </section>

              <section id="yogic-foods">
                <div className="section-heading">
                  <span className="marker"></span>
                  <h2>Yogic Foods.</h2>
                </div>
                <p>
                  The yogic diet is based on the yoga principles of purity
                  (sattva), nonviolence (ahimsa), and balanced living. It
                  consists of foods with sattvic qualities, which increase
                  energy and create balance in the mind and body. Rajasic and
                  Tamasic foods are limited or eliminated whenever possible,
                  as their low vibration or life force and inherent toxins
                  reduce the vitality of the person eating them. Yogis
                  advocate a vegetarian/vegan diet, as one of the basic
                  principles of yoga is not to harm any living creature. This
                  is a pure diet that, with careful planning, leads to
                  optimum health and a peaceful mind in control of a fit
                  body.
                </p>

                <div className="inline-figure">
                  <img
                    src="https://images.pexels.com/photos/6823336/pexels-photo-6823336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="A colorful buddha bowl with quinoa, eggs, and fresh vegetables"
                  />
                </div>

                <div className="category-group">
                  <div className="category">
                    <div className="section-heading">
                      <span className="marker"></span>
                      <h2>Sattvic.</h2>
                    </div>
                    <p>
                      Sattvic foods are pure and life-giving, and they
                      promote health, vitality, strength and relaxation.
                      These include fresh fruit and juices, vegetables and
                      herbs, honey, whole grains, nuts, and seeds and should
                      be organically grown, locally sourced, (where possible)
                      unprocessed and additive and preservative-free. These
                      foods are easy to digest. Eating slowly, chewing well
                      and savouring each bite is also considered sattvic.
                    </p>
                  </div>

                  <div className="category">
                    <div className="section-heading">
                      <span className="marker"></span>
                      <h2>Rajasic.</h2>
                    </div>
                    <p>
                      Rajasic foods are overstimulating and promote excess
                      energy. They cause sleeplessness, anger, hyperactivity
                      and restlessness of the mind. These include meat, fish,
                      coffee, black tea sweets, chocolate, food
                      additives/colourings, some spices and eggs and are
                      spicy, sour, bitter, dry and salty. Eating in a hurry
                      is also considered rajasic.
                    </p>
                  </div>

                  <div className="category">
                    <div className="section-heading">
                      <span className="marker"></span>
                      <h2>Tamasic.</h2>
                    </div>
                    <p>
                      A Tamasic Diet benefits neither the mind nor the body.
                      This group includes foods that are stale,
                      over-cultivated, packaged, preserved, and deep-fried.
                      Tamasic foods can be difficult to digest, make you feel
                      bloated and encourage lethargy. The body&apos;s immune
                      system is compromised. Overeating is also considered
                      tamasic.
                    </p>
                  </div>
                </div>
              </section>

              <section id="diet-tweaks">
                <h3 className="tweaks-heading">5 painless diet tweaks:</h3>
                <ul className="tweak-list">
                  <li>
                    Choose whole grains &ndash; eg brown rice, quinoa, oats,
                    spelt, rye or millet.
                  </li>
                  <li>
                    Eat the whole fruit instead of having juice from a
                    carton.
                  </li>
                  <li>Ditch the fizzy drinks.</li>
                  <li>Switch to coconut oil.</li>
                  <li>
                    Try to eat something raw every day &ndash; fruit, salad,
                    nuts or seeds.
                  </li>
                </ul>

                <div className="inline-figure">
                  <img
                    src="https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="A vibrant display of fresh market vegetables including peppers, carrots and greens"
                  />
                </div>
                <p className="figure-caption">&nbsp;</p>

                <p className="lead-out">
                  Ultimately food should be used as an enjoyable fuel for our
                  bodies &ndash; so keep it fresh and keep it funky.
                </p>

                <ul className="tweak-list">
                  <li>
                    Shake up those old habits &ndash; small steps lead to big
                    changes.
                  </li>
                  <li>
                    Avoid going on diets &ndash; make healthy delicious food
                    a part of daily life.
                  </li>
                  <li>
                    A little of what you fancy does you good &ndash; enjoy
                    the naughty stuff but in moderation!
                  </li>
                </ul>

                <div className="closing-note">
                  <p>
                    Be mindful and remember that ahimsa also means taking
                    care of oneself.
                  </p>
                </div>

                <div className="namaste">Namasté.</div>
              </section>
            </article>

            <div className="back-to-top-wrap">
              <button
                type="button"
                className="back-to-top"
                id="backToTop"
                aria-label="Back to top of page"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
