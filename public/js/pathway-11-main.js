const sessions = [
  { title: "Full Body Yoga Workout for Flexibility", difficulty: "Easy", duration: "23:27", desc: "A complete full-body flow that opens the hips, hamstrings, and spine — helping you build lasting flexibility from head to toe.", img: "/img/full-body-yoga-workout-flexibility.png", fallback: "/img/full-body-yoga-workout-flexibility.png", videoThumbnail: "/images/flexibility/y-Z4thG1Pjs-HD (1).jpg", videoSrc: "/videos/flexibility/vidssave.com 10 minute Yoga for Beginners _ Beginner Yoga for Flexibility 720P.mp4" },
  { title: "Full Body Mobility Morning Yoga", difficulty: "Easy", duration: "22:23", desc: "An energizing morning sequence that warms up every major joint and muscle group, so you start the day moving with ease.", img: "/img/full-body-mobility-morning-yoga.png", fallback: "/img/full-body-mobility-morning-yoga.png", videoThumbnail: "/images/flexibility/3WxXSIFrta0-HD.jpg", videoSrc: "/videos/flexibility/vidssave.com 20 minute Full Body Power Morning Yoga Flow 🔥 BURN 720P.mp4" },
  { title: "Relaxing Stretches for Sore Muscles", difficulty: "Easy", duration: "21:34", desc: "Gentle, slow-paced stretches that release tension and soreness — perfect for winding down after a workout or a long day.", img: "/img/relaxing-stretches-sore-muscles.png", fallback: "/img/relaxing-stretches-sore-muscles.png", videoThumbnail: "/images/flexibility/jWyUFyo9JbQ-HD (1).jpg", videoSrc: "/videos/flexibility/vidssave.com 10 minute MORNING YOGA Stretch for Sore Muscles _ Chest, Neck & Shoulders 720P.mp4" },
  { title: "How to Meditate: Moving Meditation", difficulty: "Easy", duration: "25:00", desc: "A calming moving-meditation practice that blends mindful breathing with slow stretches to quiet the mind and loosen the body.", img: "/img/how-to-meditate-moving-meditation.png", fallback: "/img/how-to-meditate-moving-meditation.png", videoThumbnail: "/images/flexibility/3WxXSIFrta0-HD (2).jpg", videoSrc: "/videos/flexibility/vidssave.com 20 minute Full Body Power Morning Yoga Flow 🔥 BURN 480P.mp4" }
];

const listEl = document.getElementById('list');
const sessionCountEl = document.getElementById('sessionCount');

function useFallbackImage(image, fallback) {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackUsed) return;
    image.dataset.fallbackUsed = 'true';
    image.src = fallback;
  });
}

function playBadgeSvg() {
  return '<svg viewBox="0 0 24 24" fill="var(--sage-deep)"><path d="M8 5v14l11-7z"/></svg>';
}

function renderList(items) {
  listEl.innerHTML = '';
  items.forEach((s, i) => {
    const card = document.createElement('button');
    card.className = i === 0 ? 'featured-card' : 'grid-card';
    const bodyClass = i === 0 ? 'featured-body' : 'grid-body';
    card.innerHTML = `
      <div class="thumb">
        <img src="${s.img}" alt="">
        <div class="play-badge">${playBadgeSvg()}</div>
        <span class="thumb-duration">${s.duration}</span>
      </div>
      <div class="${bodyClass}">
        <div class="card-title">${s.title}</div>
        <div class="card-meta"><span class="meta-dot"></span><span>${s.difficulty}</span><span class="meta-duration">${s.duration} mins</span></div>
        <div class="card-desc">${s.desc}</div>
      </div>`;
    useFallbackImage(card.querySelector('.thumb img'), s.fallback);
    card.addEventListener('click', () => openPlayer(s));
    listEl.appendChild(card);
  });
  sessionCountEl.textContent = `${items.length} sessions`;
}

renderList(sessions);

const backdrop = document.getElementById('backdrop');
const videoPlayer = document.getElementById('videoPlayer');
const playerTitle = document.getElementById('playerTitle');
const playerMeta = document.getElementById('playerMeta');
let lastFocused = null;
let playTimer = null;

function openPlayer(session) {
  lastFocused = document.activeElement;
  playerTitle.textContent = session.title;
  playerMeta.textContent = `${session.difficulty} · ${session.duration} mins`;
  videoPlayer.poster = session.videoThumbnail;
  videoPlayer.src = session.videoSrc;
  videoPlayer.load();
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('closeBtn').focus();
  playTimer = setTimeout(() => videoPlayer.play().catch(() => {}), 1000);
}

function closePlayer() {
  clearTimeout(playTimer);
  playTimer = null;
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.getElementById('closeBtn').addEventListener('click', closePlayer);
backdrop.addEventListener('click', (event) => { if (event.target === backdrop) closePlayer(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && backdrop.classList.contains('open')) closePlayer();
});

const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
  toTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
