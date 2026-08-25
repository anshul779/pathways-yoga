export const bodyHtml = `
<header class="progress-header" id="top">
  <div class="wrap progress-header-inner">
    <div class="brand"><span class="leaf">&#10039;</span> Morning Flow</div>
    <div class="progress-track" role="progressbar" aria-label="Poses explored" aria-valuemin="0" aria-valuemax="100" id="progressBar">
      <div class="progress-fill" id="progressFill"></div>
    </div>
    <div class="progress-pct" id="progressPct">0%</div>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow">Morning yoga routine</div>
        <h1 class="title">18 Yoga Poses to Create Your Ideal Morning Routine</h1>
        <p class="hero-copy">A few minutes of yoga can build flexibility and strength, lift your energy, ease stress, and support a healthy weight — whatever level you're starting from. Choose a level below and work through a short, focused routine to open your day.</p>
        <div class="hero-stats">
          <div class="hero-stat"><b>18</b><span>Total poses</span></div>
          <div class="hero-stat"><b>3</b><span>Skill levels</span></div>
          <div class="hero-stat"><b>5–10</b><span>Minutes a day</span></div>
        </div>
      </div>
      <div class="hero-image-wrap">
        <img id="heroImage" src="/assets/images/c5dfadfb-8e98-44c6-b8dc-40cda478a933.png" alt="A woman practicing yoga on a mat" />
      </div>
    </div>
  </section>

  <section class="benefits">
    <div class="wrap benefits-grid">
      <div class="benefit-card">
        <div class="ico">&#8596;</div>
        <h3>Flexibility</h3>
        <p>Gently lengthens muscles and improves range of motion.</p>
      </div>
      <div class="benefit-card">
        <div class="ico">&#9889;</div>
        <h3>Strength</h3>
        <p>Builds stability through the core, arms, and legs.</p>
      </div>
      <div class="benefit-card">
        <div class="ico">&#9737;</div>
        <h3>Energy</h3>
        <p>Wakes up the body and mind for the day ahead.</p>
      </div>
      <div class="benefit-card">
        <div class="ico">&#8734;</div>
        <h3>Stress &amp; anxiety</h3>
        <p>Slows the breath and settles a busy mind.</p>
      </div>
      <div class="benefit-card">
        <div class="ico">&#9906;</div>
        <h3>Weight management</h3>
        <p>Supports a sustainable, active daily habit.</p>
      </div>
    </div>
  </section>

  <section class="level-section">
    <div class="wrap">
      <div class="level-heading">
        <h2>Choose your level</h2>
        <p>Every level uses only poses from this 18-pose library — pick where you are today.</p>
      </div>
      <div class="level-tabs" role="tablist" aria-label="Routine level">
        <button class="level-tab" role="tab" data-level="beginner" id="tab-beginner" aria-selected="true">
          <b>Beginner</b><span>5 poses</span>
        </button>
        <button class="level-tab" role="tab" data-level="intermediate" id="tab-intermediate" aria-selected="false">
          <b>Intermediate</b><span>6 poses</span>
        </button>
        <button class="level-tab" role="tab" data-level="advanced" id="tab-advanced" aria-selected="false">
          <b>Advanced</b><span>7 poses</span>
        </button>
      </div>
      <div class="routine-context">
        <h3 id="routineTitle">Beginner Routine</h3>
        <p id="routineBlurb"></p>
      </div>
    </div>
  </section>

  <section class="tile-section">
    <div class="wrap">
      <div class="tile-grid" id="tileGrid" role="tabpanel"></div>
    </div>
  </section>

  <div class="back-to-top-wrap">
    <button class="back-to-top" id="backToTop">&#8593; Back to top</button>
  </div>

  <p class="closing-quote">&ldquo;A calm mind begins with a mindful breath.&rdquo;</p>
</main>

<footer>
  Content adapted from Healthline's morning yoga routine guide, written by Nicole Davis. For informational purposes only — not a substitute for professional medical advice.
</footer>

<div class="overlay" id="overlay"></div>

<div class="detail-panel" id="detailPanel" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
  <div class="detail-topbar">
    <button class="icon-btn" id="closeDetail" aria-label="Close pose details">&#10005;</button>
    <span class="detail-position" id="detailPosition">01 / 05</span>
    <button class="icon-btn" id="favDetail" aria-label="Save this pose">&#9825;</button>
  </div>
  <div class="detail-scroll">
    <div class="detail-hero-img"><img id="detailImg" alt=""></div>
    <div class="detail-content">
      <span class="detail-level-tag" id="detailLevelTag">Beginner</span>
      <h2 class="detail-title" id="detailTitle"></h2>
      <p class="detail-tagline" id="detailTagline"></p>
      <div class="detail-block">
        <h4>Muscles worked</h4>
        <div class="muscle-tags" id="detailMuscles"></div>
      </div>
      <div class="detail-block">
        <h4>To do this</h4>
        <ol class="steps-list" id="detailSteps"></ol>
      </div>
      <div class="detail-block">
        <span class="hold-note" id="detailHold"></span>
      </div>
    </div>
  </div>
  <div class="detail-footer">
    <button class="nav-btn" id="prevPose">&#8592; Previous</button>
    <button class="nav-btn" id="nextPose">Next &#8594;</button>
  </div>
</div>

<div class="completion-modal" id="completionModal" role="dialog" aria-modal="true" aria-labelledby="completionLevel" aria-hidden="true">
  <div class="completion-card">
    <div class="completion-mark" aria-hidden="true">&#127881;</div>
    <h2>Congratulations!</h2>
    <p class="completion-level" id="completionLevel"></p>
    <p id="completionMessage"></p>
    <button class="completion-action" id="completionAction">Done</button>
  </div>
</div>
`;
