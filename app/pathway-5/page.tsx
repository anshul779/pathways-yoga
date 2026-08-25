"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const backBtn = document.getElementById("backBtn");
    const fill = document.getElementById("progressFill");
    const toTopBtn = document.getElementById("toTopBtn");

    if (!backBtn || !fill || !toTopBtn) return;

    function handleBack(e: Event) {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      }
    }
    backBtn.addEventListener("click", handleBack);

    function updateProgress() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      fill!.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    function updateToTop() {
      if (window.scrollY > 420) {
        toTopBtn!.classList.add("visible");
      } else {
        toTopBtn!.classList.remove("visible");
      }
    }
    window.addEventListener("scroll", updateToTop, { passive: true });
    updateToTop();

    function handleToTopClick() {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
    toTopBtn.addEventListener("click", handleToTopClick);

    return () => {
      backBtn.removeEventListener("click", handleBack);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("scroll", updateToTop);
      toTopBtn.removeEventListener("click", handleToTopClick);
    };
  }, []);

  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" id="progressFill"></div>
      </div>

      <div className="page">
        <a href="#" className="back-btn" id="backBtn" aria-label="Go back">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </a>

        {/* ================= HERO — 01 ================= */}
        <header className="hero">
          <div className="hero-text">
            <p className="eyebrow">
              <span className="num">01</span>Nutrition &amp; Supplements
            </p>
            <h1 className="page-title display">
              Nutrition Beyond Greens and Leafs
            </h1>
            <p className="hero-desc">
              Greens powder is a dietary supplement that has become a popular
              way to help people reach their daily recommended intake of
              vitamins and minerals. The nutrient combination in greens
              powder is formulated to support your body&rsquo;s immune system
              and energy levels while meeting the nutrition requirements for
              a healthy diet.
            </p>
          </div>
          <div className="hero-media">
            <div className="hero-img-frame">
              <img
                src="https://images.unsplash.com/photo-1584587727565-a486d45d58b4?w=1200&q=80&auto=format&fit=crop"
                alt="A glass of green smoothie made from greens powder, photographed in natural light"
              />
            </div>
            <div className="hero-badge">
              <span className="dot"></span>
              <span className="hero-badge-text">
                <strong>45 cal</strong>per tablespoon
              </span>
            </div>
          </div>
        </header>

        {/* ================= INGREDIENTS — 02 ================= */}
        <section className="section">
          <div className="section-inner">
            <div className="split">
              <div className="split-text">
                <p className="eyebrow">
                  <span className="num">02</span>What&apos;s Inside
                </p>
                <h2 className="section-title display">
                  What&apos;s Inside Greens Powder?
                </h2>
                <p className="article" style={{ margin: 0 }}>
                  Ingredients in greens powders vary by brand, but commonly
                  include nutrition from:
                </p>
                <div className="chip-grid">
                  <div className="chip">
                    <span className="chip-dot"></span>Leafy greens and
                    seaweed
                  </div>
                  <div className="chip">
                    <span className="chip-dot"></span>Grasses and other
                    vegetables
                  </div>
                  <div className="chip">
                    <span className="chip-dot"></span>Antioxidant-rich fruits
                  </div>
                  <div className="chip">
                    <span className="chip-dot"></span>Probiotics
                  </div>
                  <div className="chip">
                    <span className="chip-dot"></span>Nutritional extracts
                    and herbs
                  </div>
                </div>
              </div>
              <div className="split-media">
                <div className="media-frame">
                  <img
                    src="https://images.unsplash.com/photo-1543362905-bddfadc3d44f?w=1000&q=80&auto=format&fit=crop"
                    loading="lazy"
                    alt="Flat-lay photograph of fresh leafy greens, herbs, citrus and vegetables used as greens powder ingredients"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= USAGE — 03 ================= */}
        <section className="section">
          <div className="section-inner">
            <div className="split reverse">
              <div className="split-text">
                <p className="eyebrow">
                  <span className="num">03</span>How It&apos;s Used
                </p>
                <h2 className="section-title display">How is it used?</h2>
                <p className="article">
                  Greens powder is most often mixed into water, smoothies, or
                  juices. While these powders often come with a grassy
                  taste, natural sugar substitutes like stevia extract are
                  added to improve the flavor. These dietary powders are
                  also usually vegan and made from non-genetically-modified
                  and organic products.
                </p>
              </div>
              <div className="split-media">
                <div className="media-frame">
                  <img
                    src="https://images.unsplash.com/photo-1622818426027-8909055faae8?w=1000&q=80&auto=format&fit=crop"
                    loading="lazy"
                    alt="A person pouring greens powder mixed with water into a glass jar"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NUTRITION DASHBOARD — 04 ================= */}
        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <span className="num">04</span>Nutrition Information
            </p>
            <h2 className="section-title display">Nutrition Information</h2>
            <p className="article lede-text">
              Nutrition content in greens powders will vary by brand. On
              average, a one-tablespoon serving contains:
            </p>

            <div className="dash-grid">
              <div className="dash-card">
                <div className="dash-num">45</div>
                <div className="dash-label">Calories</div>
              </div>
              <div className="dash-card">
                <div className="dash-num">
                  3<sup>g</sup>
                </div>
                <div className="dash-label">Protein</div>
              </div>
              <div className="dash-card">
                <div className="dash-num">
                  6<sup>g</sup>
                </div>
                <div className="dash-label">Carbohydrates</div>
              </div>
            </div>

            <div className="radial-grid">
              <div className="radial-card">
                <div
                  className="radial"
                  style={{ "--pct": 18 } as React.CSSProperties}
                >
                  <div className="radial-inner">18%</div>
                </div>
                <div className="radial-text">
                  <div className="radial-label">Iron</div>
                  <div className="radial-value">18% of your daily value</div>
                </div>
              </div>
              <div className="radial-card">
                <div
                  className="radial"
                  style={{ "--pct": 60 } as React.CSSProperties}
                >
                  <div className="radial-inner">60%</div>
                </div>
                <div className="radial-text">
                  <div className="radial-label">Vitamin A</div>
                  <div className="radial-value">60% of your daily value</div>
                </div>
              </div>
            </div>

            <p className="nutrient-label">
              Greens powder can also be a good source of:
            </p>
            <div className="nutrient-row">
              <span className="nutrient-chip">
                <span className="mini-dot"></span>Calcium
              </span>
              <span className="nutrient-chip">
                <span className="mini-dot"></span>Iodine
              </span>
              <span className="nutrient-chip">
                <span className="mini-dot"></span>Selenium
              </span>
              <span className="nutrient-chip">
                <span className="mini-dot"></span>Chromium
              </span>
              <span className="nutrient-chip">
                <span className="mini-dot"></span>Potassium
              </span>
            </div>
          </div>
        </section>

        {/* ================= VITAMIN C — 05 ================= */}
        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <span className="num">05</span>Vitamins &amp; Minerals
            </p>
            <div className="split">
              <div className="split-media">
                <div className="media-frame">
                  <img
                    src="https://images.unsplash.com/photo-1569442130407-8d2d49e741db?w=1000&q=80&auto=format&fit=crop"
                    loading="lazy"
                    alt="Sliced citrus fruit representing vitamin C content in greens powder"
                  />
                </div>
              </div>
              <div className="split-text">
                <div className="highlight-card">
                  <span className="tag">Vitamin C</span>
                  <p>
                    Greens powders often include high levels of vitamin C,
                    which has been linked to healthy immune system function,
                    protection against heart disease, and good skin health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HEALTH BENEFITS — 06 ================= */}
        <section className="section">
          <div className="section-inner">
            <p className="eyebrow">
              <span className="num">06</span>Potential Benefits
            </p>
            <h2 className="section-title display">
              Potential Health Benefits of Greens Powder
            </h2>

            <div className="article">
              <p>
                Because greens powders are made from dried fruits and
                vegetables, some important nutritional content like fiber is
                lost in the process. Greens powders are not a substitute for
                a well-balanced diet and cannot replace the nutritional
                benefits you get from consuming whole foods.
              </p>
              <p>
                However, doctors say that greens powder can be a great way
                to supplement a healthy diet with a boost of extra vitamins
                and antioxidants.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">i</div>
              <div>
                <h3 className="display">Before You Add Supplements</h3>
                <p>
                  Taking some vitamins in excess can lead to health issues or
                  may interact with certain medications. It&rsquo;s important
                  to talk to your doctor before adding any nutritional
                  supplements to your diet and choose a reputable brand of
                  greens powder.
                </p>
              </div>
            </div>

            <p className="article" style={{ marginBottom: 0 }}>
              The nutrients in greens powders can contribute to potential
              health benefits including:
            </p>

            <div className="benefit-card">
              <div className="media-frame">
                <img
                  src="/images/healthy-blood-pressure-smoothie.png"
                  loading="lazy"
                  alt="A glass of green smoothie surrounded by kale, spinach, apple, kiwi, cucumber, and greens powder, with icons for heart health, essential minerals, overall well-being, and nutrient density"
                />
              </div>
              <div className="benefit-text">
                <h3 className="subsection-title display">
                  Healthy Blood Pressure
                </h3>
                <p>
                  Minerals found in greens powders like calcium and
                  potassium are associated with good blood pressure
                  management. In one clinical study, people who took one
                  serving daily of greens powder experienced a decrease in
                  both their systolic and diastolic blood pressure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <button
        className="to-top"
        id="toTopBtn"
        aria-label="Back to top"
        type="button"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 15V5M10 5L5 10M10 5L15 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="to-top-label">Back to Top</span>
      </button>
    </>
  );
}
