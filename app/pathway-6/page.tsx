"use client";

import { useEffect, useRef } from "react";
import { pageMarkup } from "@/lib/pageMarkup";

interface SectionMeta {
  id: string;
  title: string;
}

const SECTION_META: SectionMeta[] = [
  { id: "pack-snacks", title: "Pack Healthy Snacks" },
  { id: "bring-meals", title: "Bring Your Meals" },
  { id: "plan-restaurants", title: "Plan Restaurants Ahead" },
  { id: "shop-locally", title: "Shop Locally" },
  { id: "balance-indulgence", title: "Balance Indulgence" },
  { id: "stay-hydrated", title: "Stay Hydrated" },
  { id: "enjoy-treats", title: "Enjoy Treats Mindfully" },
  { id: "back-on-track", title: "Get Back on Track" },
];
const TOTAL_SECTIONS = SECTION_META.length;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ---- Reading progress bar ----
    const fill = document.getElementById("progress-fill");
    const track = document.getElementById("progress-track");
    const pctLabel = document.getElementById("progress-pct");
    const pctNum = document.getElementById("pct-num");
    const backBtn = document.getElementById("back-to-top");

    if (!fill || !track || !pctLabel || !pctNum || !backBtn) return;

    let ticking = false;

    function updateProgress() {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct =
        height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      fill!.style.width = pct + "%";
      track!.setAttribute("aria-valuenow", String(Math.round(pct)));
      pctNum!.textContent = String(Math.round(pct));

      if (scrollTop > 80) {
        pctLabel!.classList.add("show");
      } else {
        pctLabel!.classList.remove("show");
      }
      ticking = false;
    }

    function handleScrollProgress() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }
    window.addEventListener("scroll", handleScrollProgress, {
      passive: true,
    });
    updateProgress();

    // ---- Back to top ----
    function handleBackToTop() {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
          ? "auto"
          : "smooth",
      });
    }
    backBtn.addEventListener("click", handleBackToTop);

    // ---- Sidebar + contextual mobile nav ----
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section[id]")
    );
    const sideLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("#side-nav a")
    );
    const drawerLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("#context-drawer-list a")
    );

    const contextNav = document.getElementById("context-nav");
    const contextTitle = document.getElementById("context-nav-title");
    const contextCount = document.getElementById("context-nav-count");
    const contextProgressFill = document.getElementById(
      "context-nav-progress-fill"
    );
    const contextToggle = document.getElementById("context-nav-toggle");

    if (
      !contextNav ||
      !contextTitle ||
      !contextCount ||
      !contextProgressFill ||
      !contextToggle
    ) {
      return;
    }

    function setActive(id: string) {
      const idx = SECTION_META.findIndex((s) => s.id === id);
      if (idx === -1) return;
      const meta = SECTION_META[idx];

      sideLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-target") === id);
      });
      drawerLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-target") === id);
      });

      contextTitle!.textContent = meta.title;
      contextCount!.textContent =
        "Section " +
        String(idx + 1).padStart(2, "0") +
        " of " +
        String(TOTAL_SECTIONS).padStart(2, "0");
      contextProgressFill!.style.width =
        ((idx + 1) / TOTAL_SECTIONS) * 100 + "%";
    }

    // ---- Contextual nav drawer open/close ----
    function closeDrawer() {
      contextNav!.classList.remove("open");
      contextToggle!.setAttribute("aria-expanded", "false");
    }
    function handleToggleClick() {
      const isOpen = contextNav!.classList.toggle("open");
      contextToggle!.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    contextToggle.addEventListener("click", handleToggleClick);

    function handleDrawerLinkClick() {
      closeDrawer();
    }
    drawerLinks.forEach((a) => {
      a.addEventListener("click", handleDrawerLinkClick);
    });

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") closeDrawer();
    }
    document.addEventListener("keydown", handleKeydown);

    function handleDocumentClick(e: MouseEvent) {
      if (
        contextNav!.classList.contains("open") &&
        !contextNav!.contains(e.target as Node)
      ) {
        closeDrawer();
      }
    }
    document.addEventListener("click", handleDocumentClick);

    // ---- Show contextual nav once the article starts ----
    const sentinel = document.getElementById("article-sentinel");
    let sentinelObserver: IntersectionObserver | undefined;
    if (sentinel && "IntersectionObserver" in window) {
      sentinelObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const pastStart =
              !entry.isIntersecting && entry.boundingClientRect.top < 0;
            contextNav!.classList.toggle("active", pastStart);
            document.body.classList.toggle("context-active", pastStart);
            if (!pastStart) closeDrawer();
          });
        },
        { threshold: 0 }
      );
      sentinelObserver.observe(sentinel);
    }

    let navObserver: IntersectionObserver | undefined;
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => navObserver!.observe(s));

      // ---- Reveal on scroll ----
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll(".reveal").forEach((el) => {
        revealObserver!.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("in");
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScrollProgress);
      backBtn.removeEventListener("click", handleBackToTop);
      contextToggle.removeEventListener("click", handleToggleClick);
      drawerLinks.forEach((a) => {
        a.removeEventListener("click", handleDrawerLinkClick);
      });
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("click", handleDocumentClick);
      if (sentinelObserver) sentinelObserver.disconnect();
      if (navObserver) navObserver.disconnect();
      if (revealObserver) revealObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: pageMarkup }}
    />
  );
}
