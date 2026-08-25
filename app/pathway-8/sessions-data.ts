export interface Session {
  title: string;
  difficulty: string;
  duration: string;
  desc: string;
  img: string;
  fallback: string;
  videoThumbnail: string;
  videoSrc: string;
}

export const sessions: Session[] = [
  {
    title: "Yoga Stretch for Sore Muscles",
    difficulty: "Easy",
    duration: "10:59",
    desc: "A gentle full-body sequence that targets tight shoulders, hips, and lower back — ideal the morning after a hard workout.",
    img: "/img/image-1787225540155.png",
    fallback: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/images/healthcare/jWyUFyo9JbQ-HD.jpg",
    videoSrc: "/videos/healthcare/10 minute MORNING YOGA Stretch for Sore Muscles _ Chest, Neck & Shoulders.mp4",
  },
  {
    title: "Yoga for Neck & Shoulder Tension Relief",
    difficulty: "Easy",
    duration: "11:16",
    desc: "Slow, seated stretches designed to release tension built up from long hours at a desk or looking at a screen.",
    img: "/img/image-1787225545464.png",
    fallback: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/images/healthcare/YuxuAQCvWxs-HD.jpg",
    videoSrc: "/videos/healthcare/15 minute Yoga for Sore Muscles, Stiffness & Upper Body Tension.mp4",
  },
  {
    title: "Yoga to Unwind Tight Neck & Hips",
    difficulty: "Easy",
    duration: "31:33",
    desc: "A longer restorative flow pairing deep hip openers with neck and spine mobility work to release stored tension.",
    img: "/img/image-1787225549246.png",
    fallback: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/images/healthcare/tBXldjO4Y0Y-HD.jpg",
    videoSrc: "/videos/healthcare/30 minute Yoga for Tight Hips & Low Back Pain Relief.mp4",
  },
  {
    title: "Bedtime Yoga Stretch for Upper Body",
    difficulty: "Easy",
    duration: "11:12",
    desc: "A calming wind-down sequence for the arms, chest, and upper back to help you settle in before sleep.",
    img: "/img/image-1787225553716.png",
    fallback: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/images/healthcare/8S4WOgXyQMo-HD.jpg",
    videoSrc: "/videos/healthcare/10 minute BEDTIME Yoga for Stress & Anxiety (2).mp4",
  },
  {
    title: "Yoga Stretches for Sickness, Cold & Flu",
    difficulty: "Easy",
    duration: "20:29",
    desc: "Light, seated and lying stretches to ease congestion and body aches when you're feeling under the weather.",
    img: "/img/image-1787225551439.png",
    fallback: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80",
    videoThumbnail: "/images/healthcare/I7ZH9rTJ6mk-HD.jpg",
    videoSrc: "/videos/healthcare/20 minute Gentle Yoga for Sickness, Cold, Flu & Headache.mp4",
  },
];
