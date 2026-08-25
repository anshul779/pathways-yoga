export const bodyHtml = `
<div class="page">

  <div class="hero">
    <img src="/img/flexibility-header.png" data-fallback="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1600&q=85" alt="Woman in a deep seated forward fold, practicing a flexibility yoga pose">
    <button class="hero-back" aria-label="Back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <div class="hero-content">
      <div class="hero-eyebrow">Yoga · Mobility · Flexibility</div>
      <h1>Increase Flexibility</h1>
      <p>Loosen tight muscles and open up your range of motion with guided flexibility flows.</p>
    </div>
  </div>


<main>
  <div class="section-head">
    <div>
      <h2>Stretch, open &amp; move freely</h2>
      <p>Guided yoga sessions to build flexibility, ease stiffness, and support everyday mobility.</p>
    </div>
    <span class="session-count" id="sessionCount">4 sessions</span>
  </div>

  <div class="sessions-grid" id="list"></div>

  <div class="benefits">
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 019 6a11.6 11.6 0 019-4c0 5.2-2 9-4.6 11.4A9.9 9.9 0 0111 20z"/><path d="M9 12c0 5-3 8-3 8"/></svg>
      </div>
      <h4>Safe & Effective</h4>
      <p>Designed by yoga experts for everyday wellness.</p>
    </div>
    <div class="benefit-divider"></div>
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
      </div>
      <h4>Short & Focused</h4>
      <p>Quick sessions that fit into your busy day.</p>
    </div>
    <div class="benefit-divider"></div>
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z"/></svg>
      </div>
      <h4>Feel Better Daily</h4>
      <p>Move, breathe and recover at your own pace.</p>
    </div>
  </div>

  <div class="closing">
    <p>"Flexibility isn't just in the body — a little daily stretching keeps both muscles and mind more at ease."</p>
  </div>
</main>

</div><!-- /.page -->

<div class="modal-backdrop" id="backdrop">
  <div class="player" role="dialog" aria-modal="true" aria-labelledby="playerTitle">
    <div class="player-top">
      <div class="player-top-info">
        <div class="eyebrow" id="playerMeta"></div>
        <h2 id="playerTitle"></h2>
      </div>
      <button class="close-btn" id="closeBtn" aria-label="Close video">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="video-wrap">
      <iframe id="youtubeFrame" title="Yoga session video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>

<button class="to-top" id="toTopBtn" aria-label="Back to top">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  <span>Back to top</span>
</button>
`;
