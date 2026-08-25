"use client";

import { useEffect, useRef, useState } from "react";
import { PLANS, PlanKey, MEAL_ROWS, TRACKED_SECTIONS } from "./plans-data";
import MealIcon from "./MealIcon";

const PLAN_ORDER: PlanKey[] = ["male", "female"];

export default function Home() {
  const [activePlan, setActivePlan] = useState<PlanKey>("male");
  const [activeDay, setActiveDay] = useState<Record<PlanKey, number>>({
    male: 1,
    female: 1,
  });

  const dayRailRefs = {
    male: useRef<HTMLDivElement>(null),
    female: useRef<HTMLDivElement>(null),
  };

  // Keep the active day pill scrolled into view whenever the active day changes.
  useEffect(() => {
    const el = dayRailRefs.male.current?.querySelector(
      ".day-pill.is-active"
    ) as HTMLElement | null;
    el?.scrollIntoView({ block: "nearest", inline: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDay.male]);

  useEffect(() => {
    const el = dayRailRefs.female.current?.querySelector(
      ".day-pill.is-active"
    ) as HTMLElement | null;
    el?.scrollIntoView({ block: "nearest", inline: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDay.female]);

  // Scroll-aware section indicator, back-to-top visibility, and the
  // horizontal-scroll fade hints on the day rails — all ported from the
  // original vanilla-JS behavior.
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleLoad = () => {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    window.addEventListener("load", handleLoad);

    const bar = document.getElementById("sectionIndicator");
    const indexEl = document.getElementById("sectionIndicatorIndex");
    const nameEl = document.getElementById("sectionIndicatorName");
    const fillEl = document.getElementById("sectionIndicatorFill");

    const sections = TRACKED_SECTIONS.map((s) => ({
      ...s,
      el: document.getElementById(s.id),
    })).filter((s): s is (typeof TRACKED_SECTIONS)[number] & { el: HTMLElement } =>
      Boolean(s.el)
    );
    let current = sections[0] || null;

    function updateIndicator() {
      if (!bar) return;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      bar.classList.toggle("is-visible", scrollTop > 280);

      const probe = scrollTop + 110;
      let active = sections[0];
      for (const s of sections) {
        if (s.el.offsetTop <= probe) active = s;
      }
      if (active && active !== current) {
        current = active;
        if (indexEl) indexEl.textContent = current.index;
        if (nameEl) nameEl.textContent = current.label;
      }

      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      if (fillEl) fillEl.style.width = pct + "%";
      bar.setAttribute("aria-valuenow", String(Math.round(pct)));
    }

    const backToTopBtn = document.getElementById("backToTop");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function updateBackToTop() {
      backToTopBtn?.classList.toggle("is-visible", window.scrollY > 480);
    }
    const handleBackToTopClick = () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    };
    backToTopBtn?.addEventListener("click", handleBackToTopClick);

    function handleScroll() {
      updateIndicator();
      updateBackToTop();
    }
    function handleResize() {
      updateIndicator();
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    updateIndicator();
    updateBackToTop();

    const rails = Array.from(document.querySelectorAll<HTMLElement>(".day-rail"));
    const railCleanups: Array<() => void> = [];
    rails.forEach((rail) => {
      const wrap = rail.closest(".day-rail-wrap");
      function update() {
        const atStart = rail.scrollLeft < 8;
        const atEnd = rail.scrollLeft + rail.clientWidth > rail.scrollWidth - 8;
        rail.classList.toggle("is-start", atStart);
        rail.classList.toggle("is-end", atEnd);
        if (wrap) {
          wrap.classList.toggle("is-start", atStart);
          wrap.classList.toggle("is-end", atEnd);
        }
      }
      rail.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
      railCleanups.push(() => {
        rail.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      });
    });

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      backToTopBtn?.removeEventListener("click", handleBackToTopClick);
      railCleanups.forEach((fn) => fn());
    };
  }, []);

  function handlePlanTabKeyDown(e: React.KeyboardEvent, planKey: PlanKey) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = PLAN_ORDER.indexOf(planKey);
    const next =
      e.key === "ArrowRight"
        ? (i + 1) % PLAN_ORDER.length
        : (i - 1 + PLAN_ORDER.length) % PLAN_ORDER.length;
    const nextKey = PLAN_ORDER[next];
    setActivePlan(nextKey);
    document.getElementById(`plantab-${nextKey}`)?.focus();
  }

  function handleDayKeyDown(e: React.KeyboardEvent, planKey: PlanKey) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const days = PLANS[planKey].days;
    const idx = days.findIndex((d) => d.day === activeDay[planKey]);
    if (idx === -1) return;
    const nextIdx =
      e.key === "ArrowRight" ? (idx + 1) % days.length : (idx - 1 + days.length) % days.length;
    const nextDay = days[nextIdx].day;
    setActiveDay((prev) => ({ ...prev, [planKey]: nextDay }));
    requestAnimationFrame(() => {
      document.getElementById(`daytab-${planKey}-${nextDay}`)?.focus();
    });
  }

  function handleGuideNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId || targetId.charAt(0) !== "#") return;
    const target = document.querySelector<HTMLElement>(targetId);
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  function renderDayTabs(planKey: PlanKey) {
    return PLANS[planKey].days.map((d) => {
      const active = d.day === activeDay[planKey];
      return (
        <button
          type="button"
          key={d.day}
          className={`day-pill${active ? " is-active" : ""}`}
          role="tab"
          id={`daytab-${planKey}-${d.day}`}
          aria-selected={active}
          aria-controls={`daypanel-${planKey}`}
          data-day={d.day}
          tabIndex={active ? 0 : -1}
          onClick={() => setActiveDay((prev) => ({ ...prev, [planKey]: d.day }))}
          onKeyDown={(e) => handleDayKeyDown(e, planKey)}
        >
          Day {d.day}
        </button>
      );
    });
  }

  function renderDayPanel(planKey: PlanKey) {
    const day = PLANS[planKey].days.find((d) => d.day === activeDay[planKey])!;
    return (
      <>
        <div className="day-head">
          <span className="day-head-eyebrow mono">Day {String(day.day).padStart(2, "0")} of 7</span>
          <h3 className="day-head-title display">Day {day.day}</h3>
        </div>
        <ul className="meal-timeline">
          {MEAL_ROWS.map((row) => (
            <li className="meal-row" key={row.key}>
              <span className="meal-row-rail" aria-hidden="true">
                <span className={`meal-row-dot meal-row-dot--${row.icon}`}>
                  <MealIcon type={row.icon} />
                </span>
              </span>
              <span className="meal-row-body">
                <span className="meal-row-label">{row.label}</span>
                <span className="meal-row-text">{day[row.key]}</span>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="topbar">
        <button type="button" className="back-btn" onClick={() => window.history.back()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </button>
      </div>

      <div
        className="section-indicator"
        id="sectionIndicator"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div className="section-indicator-inner">
          <span className="section-indicator-index mono" id="sectionIndicatorIndex">01</span>
          <span className="section-indicator-name" id="sectionIndicatorName">Benefits</span>
          <div className="section-indicator-track">
            <div className="section-indicator-fill" id="sectionIndicatorFill"></div>
          </div>
        </div>
      </div>

      <main id="main" className="page">
        {/* HERO */}
        <section aria-labelledby="hero-title">
          <div className="hero">
            <div>
              <span className="hero-eyebrow">Nutrition &nbsp;&middot;&nbsp; Meal Planning</span>
              <h1 id="hero-title">
                Week of Healthy
                <br />
                Meal Plans
              </h1>
              <p className="hero-intro">
                A weekly meal plan can help someone maintain a healthful diet and manage their health and weight. It
                can also save time and be cost-effective.
              </p>
              <p className="hero-intro">
                This guide provides a 7-day meal plan for adults based on recommended calorie intakes, and includes
                foods that research suggests are beneficial to health.
              </p>
              <div className="hero-meta">
                <span>7-Day Meal Plan</span>
                <span>Male &amp; Female Plans</span>
                <span>Breakfast to Dinner</span>
              </div>
            </div>
            <div className="hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?auto=format&fit=crop&w=1400&q=80"
                alt="Three glass meal-prep containers filled with rice, corn, olives, tomatoes, cucumber, and lentils, arranged for a week of healthy lunches"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" aria-labelledby="benefits-title">
          <span className="section-eyebrow">Why plan ahead</span>
          <h2 className="section-title display" id="benefits-title">Benefits of Meal Plans</h2>
          <p className="section-lede">
            A 7-day meal plan can help someone maintain a healthful diet. The advantage is that people can plan
            their shopping, preparation, and cooking — avoiding unhealthful foods bought on impulse.
          </p>

          <div className="benefits-grid">
            <div className="benefits-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581791122402-f78981b3bcaf?auto=format&fit=crop&w=1200&q=80"
                alt="Sliced vegetables arranged in a meal-prep container as part of weekly meal planning"
                loading="lazy"
              />
            </div>
            <ul className="benefit-list">
              <li className="benefit-item">
                <span className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
                    <path d="M9 12h6M9 16h6M9 8h2" />
                  </svg>
                </span>
                <div>
                  <h3>Plan Shopping</h3>
                  <p>People can plan their shopping, preparation, and cooking, and avoid buying and eating unhealthful foods on impulse.</p>
                </div>
              </li>
              <li className="benefit-item">
                <span className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </span>
                <div>
                  <h3>Save Time</h3>
                  <p>A person can also batch cook meals and freeze them to save time.</p>
                </div>
              </li>
              <li className="benefit-item">
                <span className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7.5-4.6-9.7-9A5.4 5.4 0 0 1 12 6.3 5.4 5.4 0 0 1 21.7 12c-2.2 4.4-9.7 9-9.7 9Z" />
                  </svg>
                </span>
                <div>
                  <h3>Reduce Impulse Eating</h3>
                  <p>Planning ahead helps someone avoid unhealthful foods that they might otherwise buy or eat on impulse.</p>
                </div>
              </li>
              <li className="benefit-item">
                <span className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 15s1 1.5 3 1.5 3-1 3-2-1.3-1.6-3-2-3-1-3-2 1-2 3-2 3 1.5 3 1.5" />
                  </svg>
                </span>
                <div>
                  <h3>Save Money</h3>
                  <p>It may be more cost-effective to buy ingredients in bulk and use them for meals throughout the week.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* SCIENCE-BASED RECOMMENDATIONS */}
        <section id="science" aria-labelledby="science-title">
          <span className="section-eyebrow">The approach</span>
          <h2 className="section-title display" id="science-title">Science-Based Recommendations</h2>
          <p className="section-lede">
            These meal plans draw upon scientific research that suggests certain dietary approaches are beneficial
            to health. The meals derive from a combination of the four approaches below, so not every meal will be
            suitable for everyone who adheres to one specific diet.
          </p>

          <div className="science-grid">
            <div className="science-item">
              <span className="science-index mono">01</span>
              <div>
                <h3 className="display">Plant-Based Foods</h3>
                <p>Plant-based diets, or including more plant-based foods, are a core part of the approach behind these plans.</p>
              </div>
            </div>
            <div className="science-item">
              <span className="science-index mono">02</span>
              <div>
                <h3 className="display">Gut-Friendly Foods</h3>
                <p>Foods that support the gut microbiome, such as fermented foods and those containing prebiotic fiber, such as asparagus, bananas, and onions.</p>
              </div>
            </div>
            <div className="science-item">
              <span className="science-index mono">03</span>
              <div>
                <h3 className="display">Mediterranean Approach</h3>
                <p>The Mediterranean diet is rich in whole grains, fruit, vegetables, unsaturated fats, and lean proteins like oily fish and poultry.</p>
              </div>
            </div>
            <div className="science-item">
              <span className="science-index mono">04</span>
              <div>
                <h3 className="display">Dietary Guidelines</h3>
                <p>The plans also draw on the Dietary Guidelines for Americans 2015&ndash;2020.</p>
              </div>
            </div>
          </div>

          <div className="science-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1600&q=80"
              alt="A close-up spread of fresh vegetables, including greens, corn, and mushrooms, representing whole-food ingredients used across the plans"
              loading="lazy"
            />
          </div>
        </section>

        {/* CALORIE REFERENCE */}
        <section aria-labelledby="calorie-title">
          <div className="calorie-band">
            <div className="calorie-band-head">
              <span className="section-eyebrow">Typical daily reference</span>
              <h2 className="section-title display" id="calorie-title" style={{ marginBottom: 6 }}>Calorie Reference</h2>
            </div>
            <div className="calorie-grid">
              <div className="calorie-card">
                <div className="calorie-card-label">Adult Females</div>
                <div className="calorie-card-value mono">2,000<span>calories / day</span></div>
              </div>
              <div className="calorie-card">
                <div className="calorie-card-label">Adult Males</div>
                <div className="calorie-card-value mono">2,500<span>calories / day</span></div>
              </div>
            </div>
            <p className="calorie-note">
              Calories for the meals specified are approximately these amounts. However, recommended intakes vary
              according to age, sex, and activity level, so the meal plans are flexible, allowing people to adapt
              them to suit their own dietary needs.
            </p>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section aria-labelledby="flex-title">
          <span className="section-eyebrow">Adapt as needed</span>
          <h2 className="section-title display" id="flex-title">Make the Plan Work for You</h2>
          <div className="flex-grid">
            <div className="flex-text">
              <p>
                These meal plans contain a range of ingredients, some of which are cupboard staples, and some of
                which may be more expensive to purchase or more specialist, depending on where a person lives and
                the outlets available to them.
              </p>
              <p>
                Some of the recipes involve preparing or cooking food in advance, but most can be made in batches
                and stored in the freezer for a reasonable time — many people may find the batch-cooking recipes
                more helpful when planning meals for a family or group.
              </p>
              <p>People can substitute many of the ingredients for easier-to-find or cheaper ingredients with a similar macronutrient profile.</p>
            </div>
            <div>
              <div className="sub-chips">
                <div className="sub-chip">
                  <strong>Quinoa</strong>
                  <span className="swap">&harr; substitute for</span>
                  <strong>Brown Rice</strong>
                </div>
                <div className="sub-chip">
                  <strong>Edamame</strong>
                  <span className="swap">&harr; substitute for</span>
                  <strong>Garden Peas</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN SELECTOR + DAY EXPERIENCE */}
        <section id="plans" aria-labelledby="plans-title" className="plan-select-band">
          <span className="section-eyebrow">Choose your plan</span>
          <h2 className="section-title display" id="plans-title">7-Day Meal Plans</h2>
          <p className="section-lede">
            Two complete 7-day plans, based on typical calorie needs for adult males and females. Switch between
            them any time, and browse day by day.
          </p>

          <div className="plan-selector" role="tablist" aria-label="Choose a 7-day meal plan">
            <button
              type="button"
              role="tab"
              id="plantab-male"
              aria-selected={activePlan === "male"}
              aria-controls="planpanel-male"
              tabIndex={activePlan === "male" ? 0 : -1}
              onClick={() => setActivePlan("male")}
              onKeyDown={(e) => handlePlanTabKeyDown(e, "male")}
            >
              For Males
            </button>
            <button
              type="button"
              role="tab"
              id="plantab-female"
              aria-selected={activePlan === "female"}
              aria-controls="planpanel-female"
              tabIndex={activePlan === "female" ? 0 : -1}
              onClick={() => setActivePlan("female")}
              onKeyDown={(e) => handlePlanTabKeyDown(e, "female")}
            >
              For Females
            </button>
          </div>
          <p className="plan-flex-note">
            Recommended calorie intake varies according to age, sex, and activity level &mdash; use whichever plan
            fits your needs, or mix days from both.
          </p>

          {/* MALE PLAN PANEL */}
          <div
            className="plan-panel"
            id="planpanel-male"
            role="tabpanel"
            aria-labelledby="plantab-male"
            tabIndex={-1}
            hidden={activePlan !== "male"}
          >
            <h3 className="plan-panel-heading display">7-Day Healthful Meal Plan for Males</h3>
            <div className="day-rail-wrap">
              <div className="day-rail" role="tablist" aria-label="Choose a day, male plan" ref={dayRailRefs.male}>
                {renderDayTabs("male")}
              </div>
            </div>
            <div
              className="day-panel"
              id="daypanel-male"
              role="tabpanel"
              aria-labelledby={`daytab-male-${activeDay.male}`}
              tabIndex={-1}
            >
              {renderDayPanel("male")}
            </div>
          </div>

          {/* FEMALE PLAN PANEL */}
          <div
            className="plan-panel"
            id="planpanel-female"
            role="tabpanel"
            aria-labelledby="plantab-female"
            tabIndex={-1}
            hidden={activePlan !== "female"}
          >
            <h3 className="plan-panel-heading display">7-Day Healthful Meal Plan for Females</h3>
            <div className="day-rail-wrap">
              <div className="day-rail" role="tablist" aria-label="Choose a day, female plan" ref={dayRailRefs.female}>
                {renderDayTabs("female")}
              </div>
            </div>
            <div
              className="day-panel"
              id="daypanel-female"
              role="tabpanel"
              aria-labelledby={`daytab-female-${activeDay.female}`}
              tabIndex={-1}
            >
              {renderDayPanel("female")}
            </div>
          </div>
        </section>

        {/* MAKE AHEAD / BATCH COOKING */}
        <section id="make-ahead" aria-labelledby="makeahead-title">
          <div className="callout-band">
            <div>
              <span className="section-eyebrow">Prepare in advance</span>
              <h2 className="section-title display" id="makeahead-title">Make Ahead</h2>
              <p>Some recipes involve preparing or cooking food in advance, but most can be made in batches and stored in the freezer for a reasonable time.</p>
              <ul className="callout-list">
                <li>Batch cook meals and freeze them to save time.</li>
                <li>Especially helpful when planning meals for a family or group.</li>
                <li>Buy ingredients in bulk and use them across meals throughout the week.</li>
              </ul>
            </div>
            <div className="callout-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?auto=format&fit=crop&w=1000&q=80"
                alt="Glass meal-prep containers with rice, vegetables, and legumes, prepared ahead for the week"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* NUTRITION ESSENTIALS */}
        <section aria-labelledby="essentials-title">
          <span className="section-eyebrow">What&apos;s on the plate</span>
          <h2 className="section-title display" id="essentials-title">Nutrition Essentials</h2>
          <p className="section-lede">Recurring categories drawn from the meals in these plans.</p>
          <div className="tag-cloud">
            <span className="tag-chip tag-chip--grain">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21V5M12 9c-3.8 0-5.8-1.5-6.8-4C8.7 4.4 11 6 12 9ZM12 14c3.8 0 5.8-1.5 6.8-4-3.5-.6-5.8 1-6.8 4ZM12 15c-3.5 0-5.4-1.3-6.3-3.7 3.2-.5 5.3.8 6.3 3.7ZM12 7c3.2 0 5-1.3 5.8-3.5C14.8 3 12.9 4.2 12 7Z" />
                </svg>
              </span>
              <span>Whole grains</span>
            </span>
            <span className="tag-chip tag-chip--fruit">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8c-1.4-2.2-.6-4.1 1.4-5.2M12.5 8.7c-3.8-2.1-7.4.3-7.4 4.6 0 4.1 2.7 7.3 6.9 7.3s6.9-3.2 6.9-7.3c0-4.3-3.5-6.7-6.4-4.6Z" />
                </svg>
              </span>
              <span>Fruits</span>
            </span>
            <span className="tag-chip tag-chip--vegetable">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-7M7 20h10M12 13c-4.2 0-5.6-3.2-4.3-5.8 1.8-.2 3.3.5 4.3 2.2 1-1.7 2.5-2.4 4.3-2.2C17.6 9.8 16.2 13 12 13ZM12 9c-1.3-3.5.5-5.7 3.3-6.5 1.1 2.8-.2 5.6-3.3 6.5Z" />
                </svg>
              </span>
              <span>Vegetables</span>
            </span>
            <span className="tag-chip tag-chip--protein">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 14.5c1.4-2.9 4.1-5.2 7.4-5.5l3.1-.3 2.7 2.7-.3 3.1c-.3 3.3-2.6 6-5.5 7.4l-2.2-2.2-3 0-2-2 0-3Z" />
                  <path d="m16.7 8.8 2-2M18.7 6.8l1.8 1.8M8.1 15.9l-1.5 1.5" />
                </svg>
              </span>
              <span>Lean proteins</span>
            </span>
            <span className="tag-chip tag-chip--fish">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12c2.3-3.4 5.3-5 9-5 3.5 0 6.3 1.7 9 5-2.7 3.3-5.5 5-9 5-3.7 0-6.7-1.6-9-5Z" />
                  <path d="m3 12-2-2v4l2-2M16 10.5h.1M12 12v.1" />
                </svg>
              </span>
              <span>Oily fish</span>
            </span>
            <span className="tag-chip tag-chip--nuts">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4c3.1 1.2 5.1 4.2 5.1 7.8 0 4.8-2.2 7.9-5.1 7.9s-5.1-3.1-5.1-7.9C6.9 8.2 8.9 5.2 12 4Z" />
                  <path d="M12 4c-.3-1.3.2-2.2 1.3-3M12 7c1.7 1.2 2.4 2.8 2.2 5.1M12 7c-1.6 1.2-2.3 2.8-2.1 5" />
                </svg>
              </span>
              <span>Nuts &amp; seeds</span>
            </span>
            <span className="tag-chip tag-chip--legumes">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5c-3.8-2.1-7.6.5-6.2 4.1-3.6 1.5-1.4 5.7 2.2 5.2.1 3.7 4.4 4.1 6 1 2.8 2.1 5.9-1.1 4.2-4.1 3-2.2.2-5.8-2.8-4.8C15 3.5 13.6 3.8 12 5Z" />
                </svg>
              </span>
              <span>Legumes</span>
            </span>
            <span className="tag-chip tag-chip--fermented">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8M9 4v3l-2 2v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9l-2-2V4M7 10h10" />
                </svg>
              </span>
              <span>Fermented foods</span>
            </span>
            <span className="tag-chip tag-chip--fats">
              <span className="tag-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c2.7 3.8 5.3 6.7 5.3 10.4A5.3 5.3 0 0 1 6.7 13.4C6.7 9.7 9.3 6.8 12 3Z" />
                  <path d="M10 15.5c.4 1.1 1.2 1.7 2.4 1.9" />
                </svg>
              </span>
              <span>Unsaturated fats</span>
            </span>
          </div>
        </section>

        {/* SUMMARY */}
        <section id="summary" aria-labelledby="summary-title">
          <div className="summary-band">
            <span className="section-eyebrow">In short</span>
            <p className="summary-takeaway display">Plan ahead. Prepare intentionally. Adapt meals to your needs.</p>
            <div className="summary-body">
              <h2 className="sr-only" id="summary-title">Summary</h2>
              <p>Using a meal plan can help someone eat a healthful diet.</p>
              <p>A person can calculate how many calories they need each day and adjust recipes and meals accordingly.</p>
              <p>A person must eat a variety of different foods, so someone could rotate two or more weekly plans.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section aria-labelledby="cta-title">
          <div className="cta-band">
            <h2 id="cta-title" className="display">Make Healthy Eating Easier</h2>
            <p>Pick a plan, choose your day, and start building your week &mdash; then adapt it with your own substitutions as you go.</p>
            <a className="cta-button" href="#plans" data-scroll="true" onClick={handleGuideNavClick}>
              View the 7-Day Plans
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Week of Healthy Meal Plans</span>
        <span>Nutrition &amp; Meal Planning Guide</span>
      </footer>

      <button type="button" className="back-to-top" id="backToTop" aria-label="Back to top of page">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
        Back to Top
      </button>
    </>
  );
}
