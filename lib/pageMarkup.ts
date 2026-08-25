// Raw markup ported verbatim from the original index.html body
// (between <body> and the closing </body>, excluding the script tag).
// Kept as a literal string and injected via dangerouslySetInnerHTML so the
// UI and content are pixel-for-pixel identical to the original static page.
export const pageMarkup = `
<!-- ============ PROGRESS BAR ============ -->
<div id="progress-track" role="progressbar" aria-label="Reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <div id="progress-fill"></div>
</div>
<div id="progress-pct">Reading progress — <span id="pct-num">0</span>%</div>

<!-- ============ HEADER ============ -->
<header class="site-header">
  <div class="wrap site-header-wrap">
    <a href="#" class="back-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      <span>Back</span>
    </a>
  </div>
</header>

<nav class="context-nav" id="context-nav" aria-label="Current section">
  <button type="button" class="context-nav-bar" id="context-nav-toggle" aria-expanded="false" aria-controls="context-drawer">
    <span class="context-nav-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/></svg>
    </span>
    <span class="context-nav-label">
      <span class="cn-title" id="context-nav-title">Pack Healthy Snacks</span>
      <span class="cn-count" id="context-nav-count">Section 01 of 08</span>
    </span>
    <svg class="context-nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
  </button>
  <div class="context-nav-progress"><div class="context-nav-progress-fill" id="context-nav-progress-fill"></div></div>
  <div class="context-drawer" id="context-drawer">
    <ul class="context-drawer-list" id="context-drawer-list" role="list">
      <li><a href="#pack-snacks" data-target="pack-snacks"><span class="cd-num">01</span> Pack Healthy Snacks</a></li>
      <li><a href="#bring-meals" data-target="bring-meals"><span class="cd-num">02</span> Bring Your Meals</a></li>
      <li><a href="#plan-restaurants" data-target="plan-restaurants"><span class="cd-num">03</span> Plan Restaurants Ahead</a></li>
      <li><a href="#shop-locally" data-target="shop-locally"><span class="cd-num">04</span> Shop Locally</a></li>
      <li><a href="#balance-indulgence" data-target="balance-indulgence"><span class="cd-num">05</span> Balance Indulgence</a></li>
      <li><a href="#stay-hydrated" data-target="stay-hydrated"><span class="cd-num">06</span> Stay Hydrated</a></li>
      <li><a href="#enjoy-treats" data-target="enjoy-treats"><span class="cd-num">07</span> Enjoy Treats Mindfully</a></li>
      <li><a href="#back-on-track" data-target="back-on-track"><span class="cd-num">08</span> Get Back on Track</a></li>
    </ul>
  </div>
</nav>

<main id="top">

  <!-- ============ HERO ============ -->
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy reveal">
        <span class="eyebrow">Nutrition &nbsp;•&nbsp; Travel Wellness</span>
        <h1>Nutrition Check<br>While Traveling</h1>
        <p class="lede">There's nothing like a great vacation or successful business trip — except when you come home feeling sluggish and bloated from overeating. With a little preparation, eating well on the road is easier than you think. Six experts share exactly how.</p>
        <div class="hero-meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            8 min read
          </span>
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            6 expert dietitians &amp; trainers
          </span>
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            8 practical strategies
          </span>
        </div>
      </div>
      <div class="hero-visual reveal">
        <svg class="illo" viewBox="0 0 500 570" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hg1" cx="30%" cy="20%" r="80%">
              <stop offset="0%" stop-color="#8FB98B"/>
              <stop offset="100%" stop-color="#2F5B3C"/>
            </radialGradient>
          </defs>
          <rect width="500" height="570" fill="url(#hg1)"/>
          <!-- suitcase -->
          <g transform="translate(115,300)" fill="none" stroke="#FBF7EF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
            <rect x="0" y="30" width="220" height="150" rx="16"/>
            <path d="M70 30 V6 a14 14 0 0 1 14-14 h52 a14 14 0 0 1 14 14 v24"/>
            <line x1="0" y1="90" x2="220" y2="90"/>
            <rect x="96" y="78" width="28" height="24" rx="4" fill="#FBF7EF" stroke="none"/>
          </g>
          <!-- leaf -->
          <g transform="translate(280,90)" fill="#EADFC4" opacity="0.9">
            <path d="M0 80 C 0 20, 60 -10, 110 0 C 100 55, 55 90, 0 80 Z"/>
            <path d="M6 76 C 40 50, 70 20, 104 4" stroke="#2F5B3C" stroke-width="4" fill="none" stroke-linecap="round"/>
          </g>
          <!-- apple -->
          <g transform="translate(70,100)">
            <circle cx="40" cy="55" r="38" fill="#D97A52"/>
            <path d="M40 17 C 34 2, 46 2, 42 17" stroke="#5B3A22" stroke-width="5" fill="none" stroke-linecap="round"/>
            <ellipse cx="20" cy="40" rx="10" ry="16" fill="#F4C79A" opacity="0.35"/>
          </g>
          <!-- water bottle -->
          <g transform="translate(330,290)" fill="none" stroke="#FBF7EF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="10" y="40" width="50" height="140" rx="18"/>
            <rect x="24" y="14" width="22" height="30" rx="6"/>
            <line x1="10" y1="110" x2="60" y2="110" opacity="0.6"/>
          </g>
          <!-- citrus slice -->
          <g transform="translate(230,430)">
            <circle cx="36" cy="36" r="34" fill="#E8B84B"/>
            <circle cx="36" cy="36" r="26" fill="#F3D27A"/>
            <g stroke="#E8B84B" stroke-width="3">
              <line x1="36" y1="10" x2="36" y2="62"/>
              <line x1="10" y1="36" x2="62" y2="36"/>
              <line x1="17" y1="17" x2="55" y2="55"/>
              <line x1="55" y1="17" x2="17" y2="55"/>
            </g>
          </g>
        </svg>
        <div class="hero-caption">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7.1-1z"/></svg>
          <span>Pack smart, eat well, and come home feeling like yourself</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ INTRO ============ -->
  <div class="wrap intro-block reveal">
    <div class="intro-inner">
      <p>Choosing healthy foods on the go doesn't have to be impossible. With a little preparation, you can plan for delicious, nutrient-rich options that help you stay on track with your fitness goals. <strong>Our experts share six ways to stick to your diet while traveling</strong> so you can enjoy any trip without worrying about packing on extra pounds.</p>
    </div>
  </div>

  <!-- ============ MAIN LAYOUT ============ -->
  <div class="wrap layout">

    <!-- ARTICLE -->
    <div class="article">
      <div id="article-sentinel" aria-hidden="true" style="position:absolute; top:0; height:1px; width:1px;"></div>
      <div class="route-line" aria-hidden="true"></div>

      <!-- SECTION 01 -->
      <section class="section reveal" id="pack-snacks">
        <div class="section-head">
          <div class="section-num">01</div>
          <div class="section-title-wrap">
            <span class="kicker">Before you go</span>
            <h2>Pack Your Own Snacks</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#EFF4EA"/>
                <circle cx="330" cy="30" r="90" fill="#E3EBDD"/>
                <g transform="translate(60,60)" fill="none" stroke="#3F6A4E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="0" y="40" width="150" height="120" rx="14"/>
                  <line x1="0" y1="90" x2="150" y2="90"/>
                  <circle cx="35" cy="65" r="12" fill="#C57A4A" stroke="none"/>
                  <circle cx="75" cy="65" r="12" fill="#E8B84B" stroke="none"/>
                  <circle cx="115" cy="65" r="12" fill="#7FA57F" stroke="none"/>
                </g>
                <g transform="translate(230,150)" stroke="#3F6A4E" stroke-width="5" fill="none" stroke-linecap="round">
                  <circle cx="20" cy="20" r="18" fill="#F3D27A" stroke="none"/>
                  <circle cx="55" cy="10" r="12" fill="#F3D27A" stroke="none"/>
                  <circle cx="70" cy="35" r="10" fill="#D97A52" stroke="none"/>
                </g>
              </svg>
              <span class="media-tag">Nuts &amp; fresh favorites</span>
            </div>
            <div class="text">
              <p><span class="lead-quote-name">"If you're able to pack snacks, do so,"</span> says Becky Kerkenbush, a clinical dietitian with over 15 years of experience. "Being prepared with an array of healthy snacks keeps temptation at bay."</p>
              <p>Try string cheese, unsalted almonds, fresh fruit and vegetables, individual containers of hummus, yogurt, and cottage cheese, skim milk, hard-boiled eggs, sandwiches, water, whole grain crackers, or granola bars.</p>
            </div>
          </div>

          <p>Along with healthy snacks, come on-the-go workouts. Whether it's a quick cardio session or a post-flight stretch, Yogmantra can help you stay on track and healthy while traveling.</p>

          <div class="formula-card">
            <span class="eyebrow">Smart snack formula</span>
            <div class="formula-title">Protein + Fiber + Healthy Fat</div>
            <div class="formula-pills">
              <span>Mixed nuts</span><span>Fresh fruit</span><span>Hummus</span><span>Yogurt</span><span>Hard-boiled eggs</span><span>Whole-grain crackers</span>
            </div>
          </div>

          <p>Public Health and Nutrition Expert Dr. Dani Torchia recommends anything with plenty of protein, fiber, B vitamins, and mono- and polyunsaturated fats, instead of junk food or high-sugar items. To avoid hitting up the vending machine or making a poor food choice, try to keep snacks with you at all times, says Dr. Alex Robles of New York-Presbyterian Hospital — think mixed nuts, homemade protein bars, natural nut butter, and rice cakes. And if you're flying, skip salty, greasy, overpriced airport food, adds Chelsea Gloeckner, RD.</p>

          <div class="tip-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7.1-1z"/></svg>
            <div>
              <span class="tip-label">Travel tip</span>
              <p>Pack protein- and fiber-rich snacks to reduce impulse food choices while traveling.</p>
            </div>
          </div>

          <div class="takeaway">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <p>Quick takeaway — Preparation makes healthy eating easier while traveling.</p>
          </div>

          <a href="#bring-meals" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">02</span><span class="ns-title">Bring Your Meals</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 02 -->
      <section class="section reveal" id="bring-meals">
        <div class="section-head">
          <div class="section-num">02</div>
          <div class="section-title-wrap">
            <span class="kicker">Meal prep on the move</span>
            <h2>Bring Your Meals With You</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split reverse">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#F3ECDD"/>
                <circle cx="60" cy="270" r="110" fill="#EADFC4"/>
                <g transform="translate(120,70)" fill="none" stroke="#3F6A4E" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
                  <rect x="0" y="0" width="170" height="120" rx="16"/>
                  <line x1="0" y1="60" x2="170" y2="60"/>
                  <line x1="85" y1="0" x2="85" y2="120"/>
                  <circle cx="42" cy="30" r="14" fill="#7FA57F" stroke="none"/>
                  <circle cx="128" cy="30" r="14" fill="#D97A52" stroke="none"/>
                  <rect x="24" y="80" width="36" height="24" rx="4" fill="#E8B84B" stroke="none"/>
                  <rect x="108" y="80" width="36" height="24" rx="4" fill="#C57A4A" stroke="none"/>
                </g>
              </svg>
              <span class="media-tag">Meal-prep containers</span>
            </div>
            <div class="text">
              <p><span class="lead-quote-name">"Here's my secret: I purchased a car cooler that plugs into the power source in my car,"</span> shares Stephanie Lincoln, personal trainer and eating psychology expert. "I meal prep and bring lunch, dinner, snacks, and drinks for each day of a trip. All I have to do is open up the cooler and grab my food."</p>
              <p>For flights, she brings an insulated lunch box packed with small containers of salad with protein, salad dressing, boiled eggs, carrot sticks, and hummus — plus nuts, beef jerky, apples, individual nut butter packets, canned tuna or chicken salad, protein shakes, and a blender bottle in her carry-on.</p>
            </div>
          </div>

          <div class="tip-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <span class="tip-label">Before you pack</span>
              <p>There may be restrictions on fresh produce when flying to certain international destinations. Always check with your airline about what's allowed in checked and carry-on bags.</p>
            </div>
          </div>

          <a href="#plan-restaurants" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">03</span><span class="ns-title">Plan Restaurants Ahead</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 03 -->
      <section class="section reveal" id="plan-restaurants">
        <div class="section-head">
          <div class="section-num">03</div>
          <div class="section-title-wrap">
            <span class="kicker">Eating out, on purpose</span>
            <h2>Plan Restaurants in Advance</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="media-full">
            <svg class="illo" viewBox="0 0 900 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#6F9770"/>
                  <stop offset="100%" stop-color="#24402D"/>
                </linearGradient>
              </defs>
              <rect width="900" height="400" fill="url(#g3)"/>
              <g transform="translate(360,90)" fill="none" stroke="#FBF7EF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
                <circle cx="90" cy="90" r="88"/>
                <path d="M20 90 a70 70 0 0 1 140 0" opacity="0.5"/>
                <circle cx="60" cy="70" r="10" fill="#FBF7EF" stroke="none"/>
                <circle cx="120" cy="80" r="14" fill="#F3D27A" stroke="none"/>
                <circle cx="90" cy="110" r="9" fill="#D97A52" stroke="none"/>
                <path d="M40 130 q50 30 100 0" stroke="#F3D27A" stroke-width="6"/>
              </g>
              <g transform="translate(140,150)" fill="none" stroke="#FBF7EF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
                <line x1="0" y1="0" x2="0" y2="90"/>
                <line x1="-14" y1="0" x2="-14" y2="30"/>
                <line x1="14" y1="0" x2="14" y2="30"/>
                <line x1="-14" y1="15" x2="14" y2="15"/>
              </g>
              <g transform="translate(640,150)" fill="none" stroke="#FBF7EF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
                <ellipse cx="0" cy="0" rx="16" ry="8"/>
                <line x1="0" y1="8" x2="0" y2="90"/>
              </g>
            </svg>
            <span class="media-full-label">Choosing well before you sit down</span>
          </div>

          <p><span class="lead-quote-name">"Since travel often leads to an increase in eating out, the best way to stay on track with a healthy diet is to make a plan in advance,"</span> says Registered Dietitian Erin Palinski-Wade. "Plan out when you will eat so you can determine where you will be eating and what foods will be available to you. This can cut down on impulsive food decisions, which can often lead to poorer choices."</p>
          <p>Having a plan for meals can also ensure you don't wait too long between meals, which can lead to excessive hunger and cravings. If you're not sure where to eat, apps like Yelp or HappyCow can help you find local restaurants and eateries.</p>

          <h3 style="margin:26px 0 6px;">Smart strategies once you're seated</h3>
          <p style="color:var(--ink-soft); margin-bottom:4px;">Kerkenbush and Dr. Torchia's go-to ordering tactics:</p>
          <ul class="inline-checklist">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Pass on processed rolls and unfamiliar non-butter spreads</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Start with a side salad or broth-based soup</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Look for protein and vegetable options</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Ask how food is prepared — request dressing on the side and grilled instead of fried</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Ask for substitutions, like a side salad instead of french fries</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Swap cheese for extra veggies — onions, tomatoes, lettuce</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Box part of your meal to prevent over-consuming calories</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Steer clear of buffets</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>Drink water with lemon or plain iced tea instead of soda</li>
          </ul>

          <a href="#shop-locally" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">04</span><span class="ns-title">Shop Locally</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 04 -->
      <section class="section reveal" id="shop-locally">
        <div class="section-head">
          <div class="section-num">04</div>
          <div class="section-title-wrap">
            <span class="kicker">Eat like a local</span>
            <h2>Shop at a Local Grocery Store</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#EFF4EA"/>
                <circle cx="340" cy="280" r="120" fill="#E3EBDD"/>
                <g transform="translate(90,80)" fill="none" stroke="#3F6A4E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M0 40 L150 40 L135 150 a12 12 0 0 1 -12 10 L27 160 a12 12 0 0 1 -12-10 Z"/>
                  <line x1="12" y1="70" x2="138" y2="70"/>
                </g>
                <g transform="translate(120,110)">
                  <circle cx="20" cy="20" r="16" fill="#D97A52"/>
                  <circle cx="60" cy="15" r="13" fill="#7FA57F"/>
                  <circle cx="95" cy="25" r="15" fill="#E8B84B"/>
                  <circle cx="40" cy="45" r="12" fill="#C57A4A"/>
                </g>
              </svg>
              <span class="media-tag">Fresh, local produce</span>
            </div>
            <div class="text">
              <p>Look for a local grocery store or market that sells fresh produce, rather than relying on chain restaurants familiar from home.</p>
              <p><span class="lead-quote-name">"Before we book a hotel or an Airbnb, my wife and I always check to see if there is a supermarket nearby,"</span> says Dr. Robles. "If not, we look for another place. Everywhere we go, we buy enough food to prepare a nice, healthy breakfast every single day — eggs, spinach, peppers, onions, and avocados for omelets — then eat lunch and dinner out. Or we buy fruits and vegetables and make homemade smoothies for breakfast."</p>
            </div>
          </div>

          <a href="#balance-indulgence" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">05</span><span class="ns-title">Balance Indulgence</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 05 -->
      <section class="section reveal" id="balance-indulgence">
        <div class="section-head">
          <div class="section-num">05</div>
          <div class="section-title-wrap">
            <span class="kicker">Balance, not restriction</span>
            <h2>Don't Indulge Every Single Meal</h2>
          </div>
        </div>
        <div class="section-body">
          <blockquote class="quote-block">
            <p>It's okay to indulge, especially at a restaurant known for a particular dish. But be mindful to eat balanced meals — protein, vegetables, carbs, and healthy fats — most of the time you're on your trip.</p>
            <cite>— Kelly Chase, Aaptiv Trainer</cite>
          </blockquote>

          <div class="split reverse">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#F3ECDD"/>
                <circle cx="200" cy="170" r="120" fill="#FFFFFF" stroke="#3F6A4E" stroke-width="6"/>
                <circle cx="200" cy="170" r="86" fill="none" stroke="#E3EBDD" stroke-width="2"/>
                <path d="M200 84 A86 86 0 0 1 274 210 L200 170 Z" fill="#7FA57F"/>
                <path d="M274 210 A86 86 0 0 1 140 244 L200 170 Z" fill="#E8B84B"/>
                <path d="M140 244 A86 86 0 0 1 200 84 L200 170 Z" fill="#D97A52"/>
              </svg>
              <span class="media-tag">Half plate greens</span>
            </div>
            <div class="text">
              <p>Use a salad-sized plate instead of a dinner-sized plate, says Personal Trainer Jill McKay, and prioritize anything green.</p>
              <p>"Fill it half full with veggies, leafy greens, or roasted veggies — french fries don't count. Choose a palm-size of protein, about a thumb-size of healthy fat. If there's room left, enjoy a taste of whatever you want. Going back for seconds? Fill that plate half full of veggies again."</p>
            </div>
          </div>

          <div class="tip-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7.1-1z"/></svg>
            <div>
              <span class="tip-label">Stay accountable</span>
              <p>Yogmantra has workouts as short as 10 minutes — an easy way to hold yourself accountable while traveling.</p>
            </div>
          </div>

          <a href="#stay-hydrated" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">06</span><span class="ns-title">Stay Hydrated</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 06 -->
      <section class="section reveal" id="stay-hydrated">
        <div class="section-head">
          <div class="section-num">06</div>
          <div class="section-title-wrap">
            <span class="kicker">Rule number one</span>
            <h2>Stay Hydrated</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#8FB98B"/>
                    <stop offset="100%" stop-color="#3F6A4E"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="320" fill="url(#wg)"/>
                <g transform="translate(150,60)" fill="none" stroke="#FBF7EF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="0" y="60" width="100" height="190" rx="26"/>
                  <path d="M30 60 v-24 a20 20 0 0 1 40 0 v24"/>
                  <line x1="20" y1="150" x2="80" y2="150" opacity="0.6"/>
                  <line x1="20" y1="180" x2="80" y2="180" opacity="0.6"/>
                </g>
              </svg>
              <span class="media-tag">Hydration on the road</span>
            </div>
            <div class="text">
              <div class="tip-card" style="margin-top:0;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                <div>
                  <span class="tip-label">Hydration reminder</span>
                  <p>Carry water with you and make hydration part of every meal and travel routine.</p>
                </div>
              </div>
              <p>"The first rule for healthy nutrition while on a trip is not to forget drinking water, especially when it's hot outside," says Andy Groove, nutritionist and personal trainer. "Alcohol, coffee, and soda do not replace water."</p>
            </div>
          </div>

          <blockquote class="quote-block">
            <p>When you become even slightly dehydrated, your brain can misinterpret thirst for hunger, driving appetite and cravings. Dehydration can also drain energy levels, making you less likely to be physically active.</p>
            <cite>— Erin Palinski-Wade, Registered Dietitian</cite>
          </blockquote>
          <p>Focus on carrying water with you and drinking at least 16 ounces with each meal. As a bonus, drinking water before meals can help with portion control.</p>

          <a href="#enjoy-treats" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">07</span><span class="ns-title">Enjoy Treats Mindfully</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 07 -->
      <section class="section reveal" id="enjoy-treats">
        <div class="section-head">
          <div class="section-num">07</div>
          <div class="section-title-wrap">
            <span class="kicker">Guilt-free by design</span>
            <h2>Be Intentional About Treats</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split reverse">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#F4E3D3"/>
                <circle cx="90" cy="70" r="80" fill="#F3ECDD"/>
                <g transform="translate(150,110)">
                  <ellipse cx="70" cy="120" rx="90" ry="18" fill="#EADFC4"/>
                  <path d="M0 100 Q0 30 70 30 Q140 30 140 100 Z" fill="#E8B84B"/>
                  <circle cx="30" cy="55" r="6" fill="#FBF7EF"/>
                  <circle cx="70" cy="45" r="6" fill="#FBF7EF"/>
                  <circle cx="105" cy="60" r="6" fill="#FBF7EF"/>
                  <circle cx="55" cy="70" r="6" fill="#FBF7EF"/>
                  <circle cx="95" cy="85" r="6" fill="#FBF7EF"/>
                </g>
              </svg>
              <span class="media-tag">One thoughtful treat</span>
            </div>
            <div class="text">
              <p>McKay likes to pretend buffets are a menu. She asks herself if she'd really order everything if she had to pay for it all — the answer is usually no. That helps her pick and choose what she truly wants, then actually enjoy it. According to Kerkenbush, mindfully savoring your meal — instead of using food to kill time or reward yourself — pays off in the long run.</p>
              <p>Don't be afraid to treat yourself when it makes sense, either.</p>
            </div>
          </div>

          <blockquote class="quote-block">
            <p>My one allowance was to have a beignet at Cafe Du Monde. When I'm traveling, I allow for one treat — planned or spontaneous. That treat becomes the highlight of your trip, and you can return feeling great, guilt-free.</p>
            <cite>— Stephanie Lincoln, Personal Trainer &amp; Eating Psychology Expert</cite>
          </blockquote>

          <div class="takeaway">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <p>Quick takeaway — Enjoy treats intentionally instead of feeling guilty about them.</p>
          </div>

          <a href="#back-on-track" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">08</span><span class="ns-title">Get Back on Track</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

      <!-- SECTION 08 -->
      <section class="section reveal" id="back-on-track">
        <div class="section-head">
          <div class="section-num">08</div>
          <div class="section-title-wrap">
            <span class="kicker">Coming home</span>
            <h2>Don't Stress — Just Get Back on Track</h2>
          </div>
        </div>
        <div class="section-body">
          <div class="split">
            <div class="media">
              <svg class="illo" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="320" fill="#EFF4EA"/>
                <circle cx="330" cy="260" r="110" fill="#E3EBDD"/>
                <g transform="translate(90,70)" fill="none" stroke="#3F6A4E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 150 C 20 90 60 60 110 60 C 160 60 200 90 200 150"/>
                  <circle cx="110" cy="55" r="18" fill="#E8B84B" stroke="none"/>
                </g>
                <g transform="translate(150,150)">
                  <circle cx="20" cy="20" r="16" fill="#7FA57F"/>
                  <circle cx="55" cy="10" r="12" fill="#D97A52"/>
                </g>
              </svg>
              <span class="media-tag">Ease back in</span>
            </div>
            <div class="text">
              <p>Above all, there's a time and a place for healthy eating. It's important to figure out where to cut yourself some slack and where to practice discipline.</p>
              <p>McKay once saw a very fit woman use a food scale in the buffet line on a cruise ship. "As a fitness professional, if she was training for an event within a week or so after the cruise, I get it. But having a healthy relationship with food doesn't mean carrying a food scale on vacation."</p>
            </div>
          </div>

          <blockquote class="quote-block">
            <p>Any weight you gain during a week of vacation is likely water weight or constipation. When you get home, be diligent about getting back to eating well — plenty of vegetables, healthy carbohydrates, and protein in appropriate portions. Your body will get back to normal in no time.</p>
            <cite>— Jill McKay, Personal Trainer</cite>
          </blockquote>

          <p>Along with nutrition, be diligent about your exercise. For a workout partner that prioritizes your health and wellness, check out Yogmantra.</p>

          <div class="takeaway">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <p>Quick takeaway — A few indulgent days won't undo your progress. Ease back into your normal routine, without stress.</p>
          </div>

          <a href="#checklist" class="next-section">
            <span class="ns-label">Next</span>
            <span class="ns-info"><span class="ns-num">✓</span><span class="ns-title">See the full wellness checklist</span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </section>

    </div>
    <!-- /article -->

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="side-card">
        <h3>Jump to a section</h3>
        <ul class="side-nav-list" id="side-nav">
          <li><a href="#pack-snacks" data-target="pack-snacks"><span class="dot"></span>Pack Healthy Snacks</a></li>
          <li><a href="#bring-meals" data-target="bring-meals"><span class="dot"></span>Bring Your Own Meals</a></li>
          <li><a href="#plan-restaurants" data-target="plan-restaurants"><span class="dot"></span>Plan Restaurants Ahead</a></li>
          <li><a href="#shop-locally" data-target="shop-locally"><span class="dot"></span>Shop Locally</a></li>
          <li><a href="#balance-indulgence" data-target="balance-indulgence"><span class="dot"></span>Balance Indulgence</a></li>
          <li><a href="#stay-hydrated" data-target="stay-hydrated"><span class="dot"></span>Stay Hydrated</a></li>
          <li><a href="#enjoy-treats" data-target="enjoy-treats"><span class="dot"></span>Enjoy Treats Mindfully</a></li>
          <li><a href="#back-on-track" data-target="back-on-track"><span class="dot"></span>Get Back on Track</a></li>
        </ul>
      </div>

      <div class="side-card">
        <h3>Nutrition essentials</h3>
        <div class="side-essentials">
          <div class="ess"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>Water</div>
          <div class="ess"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/></svg>Protein</div>
          <div class="ess"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-4 0-7 3-7 8s3 8 7 8 7-3 7-8-3-8-7-8z"/><path d="M12 2c1 1 1 2 0 3"/></svg>Fruit</div>
          <div class="ess"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z"/><circle cx="12" cy="12" r="2"/></svg>Vegetables</div>
        </div>
      </div>

      <div class="side-card" style="text-align:center;">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--green-700)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;margin:0 auto 10px;"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
        <h3 style="margin-bottom:6px;">Reading progress</h3>
        <p style="font-size:0.82rem; color:var(--ink-soft); margin-bottom:0;">Track how far you are in the guide from the bar at the top of your screen.</p>
      </div>
    </aside>

  </div>
  <!-- /layout -->

  <!-- ============ TRAVEL WELLNESS CHECKLIST ============ -->
  <section class="checklist-section reveal" id="checklist">
    <div class="wrap">
      <div class="checklist-head">
        <span class="eyebrow">The full routine</span>
        <h2>Travel Wellness Checklist</h2>
        <p>Everything above, distilled into eight habits you can actually keep up with.</p>
      </div>
      <div class="checklist-grid">
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h2v-4h-2z"/></svg></div><span>Pack healthy snacks</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div><span>Carry water</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><span>Plan meals</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><span>Research restaurants</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z"/><circle cx="12" cy="12" r="2"/></svg></div><span>Shop locally</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/></svg></div><span>Choose balanced plates</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7-5-4.9 7.1-1z"/></svg></div><span>Enjoy treats intentionally</span></div>
        <div class="check-item"><div class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><span>Return to habits after travel</span></div>
      </div>
    </div>
  </section>

  <!-- ============ ESSENTIALS STRIP ============ -->
  <section class="essentials-section reveal">
    <div class="wrap">
      <div class="essentials-head">
        <span class="eyebrow">At a glance</span>
        <h2>Travel Nutrition Essentials</h2>
      </div>
      <div class="essentials-strip">
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div><span>Water</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/></svg></div><span>Protein</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-4 0-7 3-7 8s3 8 7 8 7-3 7-8-3-8-7-8z"/></svg></div><span>Fruits</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z"/><circle cx="12" cy="12" r="2"/></svg></div><span>Vegetables</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/></svg></div><span>Healthy fats</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 L12 4 L20 20 Z"/></svg></div><span>Whole grains</span></div>
        <div class="ess-card"><div class="ess-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg></div><span>Healthy snacks</span></div>
      </div>
    </div>
  </section>

  <!-- ============ CONTINUE MODULE: wellness message + related exploration (single merged section) ============ -->
  <section class="cta-section">
    <div class="wrap">
      <div class="cta-card reveal">
        <div class="cta-message">
          <span class="eyebrow">Keep it going</span>
          <h2>Keep Your Wellness Routine Going</h2>
          <p>Travel doesn't have to mean abandoning healthy habits. Pair these nutrition strategies with quick, flexible movement — Yogmantra has workouts as short as 10 minutes, wherever you are.</p>
        </div>

        <div class="cta-explore">
          <span class="explore-label">Continue Exploring</span>
          <div class="explore-list">
            <a href="#" class="explore-item">
              <div class="explore-thumb">
                <svg class="illo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#E3EBDD"/>
                  <circle cx="26" cy="30" r="20" fill="#7FA57F"/>
                  <circle cx="68" cy="66" r="24" fill="#6F9770"/>
                </svg>
              </div>
              <div class="explore-text">
                <span class="explore-cat">Movement</span>
                <h3>10-Minute Travel Workouts</h3>
                <p>Quick routines that fit in a hotel room, no equipment needed.</p>
              </div>
              <svg class="explore-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#" class="explore-item">
              <div class="explore-thumb">
                <svg class="illo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#F4E3D3"/>
                  <circle cx="36" cy="52" r="26" fill="#E8B84B"/>
                  <circle cx="78" cy="22" r="14" fill="#D97A52"/>
                </svg>
              </div>
              <div class="explore-text">
                <span class="explore-cat">Nutrition</span>
                <h3>Building a Balanced Plate</h3>
                <p>A simple visual guide to portioning protein, produce, and carbs.</p>
              </div>
              <svg class="explore-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#" class="explore-item">
              <div class="explore-thumb">
                <svg class="illo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#EFF4EA"/>
                  <circle cx="50" cy="50" r="30" fill="#3F6A4E"/>
                </svg>
              </div>
              <div class="explore-text">
                <span class="explore-cat">Wellness</span>
                <h3>Resetting After a Trip</h3>
                <p>Gentle ways to ease back into routine without the guilt.</p>
              </div>
              <svg class="explore-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>


<div class="back-to-top-wrap wrap">
  <button id="back-to-top" aria-label="Back to top of article">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
    Back to top
  </button>
</div>

<footer class="site-footer">
  <div class="wrap">Yogmantra &nbsp;•&nbsp; Nutrition &amp; Travel Wellness</div>
</footer>

`;
