export const bodyHtml = `
<div class="page">

  <div class="hero">
    <img src="/img/hero..png" alt="Woman in a crow pose arm balance on a wooden floor by a window">
    <button class="hero-back" aria-label="Back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <div class="hero-content">
      <div class="hero-eyebrow">Yoga · Movement · Recovery</div>
      <h1>Best Online Yoga</h1>
      <p>Five knowledgeable instructors, five ways to bring yoga into your everyday routine — no studio required.</p>
    </div>
  </div>


<main>
  <div class="section-head">
    <div>
      <h2>Five of the best online yoga workouts</h2>
      <p>We combed through yoga sites aplenty to bring you five of the best online yoga teachers the internet has to offer — each with videos on their site and a YouTube channel.</p>
    </div>
    <span class="session-count" id="sessionCount">5 picks</span>
  </div>

  <div class="sessions-grid" id="list"></div>

  <div class="benefits">
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>
      </div>
      <h4>A Growing Practice</h4>
      <p>US yoga practitioners rose from 20.4 million in 2012 to 36.7 million in 2016.</p>
    </div>
    <div class="benefit-divider"></div>
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
      </div>
      <h4>On Your Own Time</h4>
      <p>Every pick offers free videos on YouTube, ready whenever your schedule allows.</p>
    </div>
    <div class="benefit-divider"></div>
    <div class="benefit">
      <div class="benefit-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z"/></svg>
      </div>
      <h4>Led by Real Teachers</h4>
      <p>Certified instructors share their own journeys into — and through — yoga.</p>
    </div>
  </div>

  <div class="closing">
    <p>"Yoga gives us a way to release stress and tension, bring our whole selves into harmony, and move with ease through all kinds of challenges."</p>
    <p class="closing-note">As with any physical activity, yoga can cause injury if pushed too hard — consult a doctor first if you're pregnant or have a medical condition.</p>
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
      <button class="close-btn" id="closeBtn" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="profile-scroll">
      <div class="profile-media">
        <img id="profileImg" src="" alt="">
      </div>
      <div class="profile-body">
        <blockquote class="profile-quote" id="profileQuote"></blockquote>
        <p class="profile-desc" id="profileDesc"></p>
        <div class="profile-picks">
          <h3>Top picks</h3>
          <ul id="profilePicks"></ul>
        </div>
        <p class="profile-find">Find them on their website and YouTube channel.</p>
      </div>
    </div>
  </div>
</div>

<button class="to-top" id="toTopBtn" aria-label="Back to top">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  <span>Back to top</span>
</button>
`;
