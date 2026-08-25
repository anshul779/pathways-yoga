const sessions = [
  {
    title: "The Journey Junkie",
    founder: "Allie Flavio",
    tag: "Full-Body Flow",
    img: "/img/journey-junkie.png",
    desc: "A place where creativity, intentions, positivity, and passion are encouraged and embraced — yoga tutorials and guided meditations broken down in an easy-to-follow format, covering everything from core strength and lower-back relief to full-body relaxation.",
    quote: "The benefits of yoga are boundless, unlimited, never-ending, and all will help you to live your best, most fulfilled, healthiest life.",
    picks: ["Yoga for low back pain — a 20-minute video for everyone", "Cultivate your core", "Morning yoga: awaken and energize your body"]
  },
  {
    title: "YogaByCandace",
    founder: "Candace Moore",
    tag: "De-stress & Mobility",
    img: "/img/yogabycandace.png",
    desc: "A contemporary yoga lifestyle company and the go-to place for a modern approach to wellness, blending AcroYoga, Ashtanga, Bikram, Power Yoga, Restorative/Yin, and Vinyasa Flow into playful, sometimes humorous sequences.",
    quote: "The top benefits of yoga include de-stressing, mindfulness, improved mobility, and relaxation.",
    picks: ["15-minute morning yoga to wake up", "30-minute yoga for strength and flexibility", "30-minute power yoga"]
  },
  {
    title: "Yoga with Tim",
    founder: "Tim Senesi",
    tag: "Iyengar × Vinyasa",
    img: "/img/yoga-with-tim.png",
    desc: "A soulful, open-minded, and inspiring approach to yoga that blends Iyengar and Vinyasa Flow to help you understand your body better, with clear step-by-step videos that target specific areas like the core, legs, hips, neck, and shoulders.",
    quote: "Yoga helps me to find balance, and I wanted to be able to share that and give back.",
    picks: ["Day 1 of the 30-day challenge", "Yoga for weight loss", "Total body power flow workout"]
  },
  {
    title: "Strala",
    founder: "Tara Stiles & Mike Taylor",
    tag: "Yoga + Tai Chi",
    img: "/img/strala.png",
    desc: "Strala combines yoga with tai chi and traditional Chinese and Japanese medicine to promote creativity, happiness, inspiration, and healthy living, with classes for morning energy, bedtime sleep, and building strength.",
    quote: "Our first job is to take really good care of ourselves. From here, we can take good care of everyone.",
    picks: ["Energize express", "Hard poses made easy flow", "Energize"]
  },
  {
    title: "Prenatal Yoga Center",
    founder: "Deb Flashenberg",
    tag: "Prenatal & Postnatal",
    img: "/img/prenatal.png",
    desc: "A three-pronged approach — physical comfort, a supportive community, and childbirth education — offering sequences that relieve lower-back pain, ease carpal tunnel, and prepare the body and mind for labor.",
    quote: "It is vitally important for women to mentally and physically prepare for labor, no matter if they want a medicated, unmedicated, or cesarean birth.",
    picks: ["Alleviating back pain", "Breathing techniques for labor", "Helpful hip openers"]
  }
];

const listEl = document.getElementById('list');
const sessionCountEl = document.getElementById('sessionCount');

function renderList(items){
  listEl.innerHTML = '';

  items.forEach((s, i) => {
    const isFeatured = i === 0;
    const card = document.createElement('button');
    card.className = isFeatured ? 'featured-card' : 'grid-card';
    card.innerHTML = isFeatured ? `
      <div class="thumb">
        <img src="${s.img}" alt="">
        <span class="thumb-duration">${s.tag}</span>
      </div>
      <div class="featured-body">
        <div class="card-title">${s.title}</div>
        <div class="card-meta"><span class="meta-dot"></span><span>${s.founder}</span></div>
        <div class="card-desc">${s.desc}</div>
      </div>
    ` : `
      <div class="thumb">
        <img src="${s.img}" alt="">
        <span class="thumb-duration">${s.tag}</span>
      </div>
      <div class="grid-body">
        <div class="card-title">${s.title}</div>
        <div class="card-meta"><span class="meta-dot"></span><span>${s.founder}</span></div>
        <div class="card-desc">${s.desc}</div>
      </div>
    `;
    card.addEventListener('click', () => openProfile(s));
    listEl.appendChild(card);
  });

  sessionCountEl.textContent = `${items.length} pick${items.length === 1 ? '' : 's'}`;
}

renderList(sessions);

// ---- Profile modal logic ----
const backdrop = document.getElementById('backdrop');
const profileImg = document.getElementById('profileImg');
const playerTitle = document.getElementById('playerTitle');
const playerMeta = document.getElementById('playerMeta');
const profileQuote = document.getElementById('profileQuote');
const profileDesc = document.getElementById('profileDesc');
const profilePicks = document.getElementById('profilePicks');
let lastFocused = null;

function openProfile(s){
  lastFocused = document.activeElement;
  playerTitle.textContent = s.title;
  playerMeta.textContent = `${s.founder} · ${s.tag}`;
  profileImg.src = s.img;
  profileImg.alt = s.title;
  profileQuote.textContent = `“${s.quote}”`;
  profileDesc.textContent = s.desc;
  profilePicks.innerHTML = s.picks.map(p => `<li>${p}</li>`).join('');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('closeBtn').focus();
}

function closeProfile(){
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  if(lastFocused) lastFocused.focus();
}

document.getElementById('closeBtn').addEventListener('click', closeProfile);
backdrop.addEventListener('click', (e) => { if(e.target === backdrop) closeProfile(); });
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && backdrop.classList.contains('open')) closeProfile();
});

// ---- Back to top ----
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
  toTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
