const POSES = [
  // ---------- BEGINNER (5) ----------
  {
    id: "childs-pose", level: "beginner", order: 1,
    name: "Child's Pose",
    tagline: "A soft landing to open your practice, easing the lower back and hips while you settle into your breath.",
    muscles: ["Lats", "Low back", "Hips"],
    steps: [
      "Start on all fours on your mat.",
      "Widen your knees and bring your big toes together.",
      "Sink your hips back toward your heels, letting your torso rest between your thighs and your forehead toward the floor.",
      "Reach your arms forward with palms down.",
      "Breathe slowly and deeply here."
    ],
    hold: "Hold 60 seconds"
  },
  {
    id: "happy-baby", level: "beginner", order: 2,
    name: "Happy Baby",
    tagline: "A direct, grounding stretch for the lower back and hips that also calms the nervous system.",
    muscles: ["Hips", "Inner thighs", "Low back"],
    steps: [
      "Lie on your back on the mat.",
      "Draw your knees toward your belly and hold the outer edges of your feet, flexing your ankles.",
      "Keep your ankles stacked above your knees and gently press your feet into your hands as you breathe."
    ],
    hold: "Hold 60 seconds"
  },
  {
    id: "cat-cow", level: "beginner", order: 3,
    name: "Cat-Cow",
    tagline: "A flowing warm-up that mobilizes the spine, wakes the core, and opens the chest.",
    muscles: ["Erector spinae", "Serratus anterior", "Abdominals"],
    steps: [
      "Come onto all fours with wrists under shoulders and knees under hips.",
      "Exhale and round your spine toward the ceiling, tucking your chin toward your chest. Hold about 10 seconds.",
      "Inhale and let your belly drop, lifting your head and tailbone. Hold about 10 seconds.",
      "Continue flowing smoothly between the two shapes."
    ],
    hold: "Hold 60 seconds"
  },
  {
    id: "cobra", level: "beginner", order: 4,
    name: "Cobra",
    tagline: "Opens the chest, shoulders, and front body while building strength through the arms and glutes.",
    muscles: ["Lats", "Triceps", "Abdominals", "Glutes", "Hamstrings"],
    steps: [
      "Lie face-down with legs hip-width apart and the tops of your feet on the mat.",
      "Place your hands beneath your shoulders, elbows tucked close to your sides.",
      "Inhale and press through the tops of your feet as you begin to straighten your arms.",
      "Lift your chest and draw your shoulders back and down.",
      "Stop extending once your hips start to lift off the ground, and breathe here for up to 30 seconds."
    ],
    hold: "Hold 60 seconds"
  },
  {
    id: "chair", level: "beginner", order: 5,
    name: "Chair",
    tagline: "Builds strength through the legs, back, and shoulders while testing your balance.",
    muscles: ["Abdominals", "Erector spinae", "Quads", "Hamstrings", "Gluteus medius", "Delts", "Triceps"],
    steps: [
      "Stand with your feet together and inhale, extending your arms straight overhead.",
      "Exhale, sink your hips back and bend your knees until your thighs are roughly parallel to the floor.",
      "Draw your shoulders down and back, tuck your tailbone under, and breathe here."
    ],
    hold: "Hold 60 seconds"
  },

  // ---------- INTERMEDIATE (6) ----------
  {
    id: "downward-dog", level: "intermediate", order: 1,
    name: "Downward Dog",
    tagline: "A grounding classic that lengthens the shoulders, hamstrings, calves, and feet while strengthening arms and legs.",
    muscles: ["Quadriceps", "Abdominals", "Deltoids"],
    steps: [
      "Start on all fours, wrists under shoulders and knees under hips. Inhale.",
      "Exhale, lift your knees off the floor, and reach your heels toward the ground without locking your knees.",
      "Draw your shoulder blades toward your tailbone and let your head relax between your arms.",
      "Hold here, gradually working your heels closer to the mat."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "warrior-1", level: "intermediate", order: 2,
    name: "Warrior I",
    tagline: "Strengthens the legs while opening the hips and chest.",
    muscles: ["Abdominals", "Hamstrings", "Quads"],
    steps: [
      "Stand with your feet together, arms at your sides.",
      "Step one foot back into a lunge, keeping the back leg straight and the back foot turned out about 45 degrees.",
      "Raise both arms straight overhead.",
      "Squeeze your shoulder blades down and together, and look up toward your fingertips."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "bridge", level: "intermediate", order: 3,
    name: "Bridge",
    tagline: "Strengthens the whole backside of the body — hamstrings, glutes, and quads.",
    muscles: ["Hamstrings", "Glutes", "Quads"],
    steps: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Rest your arms at your sides, palms down.",
      "Inhale, then exhale as you press through your feet and lift your hips toward the ceiling."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "garland", level: "intermediate", order: 4,
    name: "Garland",
    tagline: "Opens the hips, thighs, and ankles.",
    muscles: ["Deltoids", "Abdominals"],
    steps: [
      "Squat down with your feet as close together as is comfortable, toes turned out.",
      "Let your torso settle between your thighs, pressing your elbows against your knees.",
      "Keep your tailbone reaching down and your chest lifted, using gentle resistance from your knees."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "bow", level: "intermediate", order: 5,
    name: "Bow",
    tagline: "Stretches the entire front of the body while strengthening the back.",
    muscles: ["Lats", "Triceps", "Glutes", "Hamstrings"],
    steps: [
      "Lie face-down with arms by your sides, palms up.",
      "Bend your knees and reach back to hold your ankles.",
      "Keep your knees roughly hip-width apart.",
      "Inhale and lift your thighs and heels away from the floor.",
      "Draw your shoulder blades back and gaze forward."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "boat", level: "intermediate", order: 6,
    name: "Boat",
    tagline: "A core-strengthening shape that challenges your balance.",
    muscles: ["Abdominals", "Hip flexors"],
    steps: [
      "Sit with your legs extended in front of you.",
      "Lean back slightly, hands on the floor for support.",
      "Inhale and draw your knees toward your chest until your thighs reach about a 45-degree angle.",
      "Straighten your legs if you can, or hold with knees bent.",
      "Extend your arms out parallel to the floor and hold."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },

  // ---------- ADVANCED (7) ----------
  {
    id: "king-pigeon", level: "advanced", order: 1,
    name: "King Pigeon",
    tagline: "A deep hip and abdominal opener that builds on standard Pigeon Pose.",
    muscles: ["Triceps", "Biceps", "Lats"],
    steps: [
      "Come into Pigeon Pose with one knee bent in front of you and the other leg extended behind you.",
      "Bend the back knee and bring that foot up toward your back.",
      "Arch your back and let your head drop.",
      "Reach both hands overhead to hold the lifted foot."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "dove", level: "advanced", order: 2,
    name: "Dove",
    tagline: "Stretches the back and abs while strengthening the shoulders and legs.",
    muscles: ["Deltoids", "Quads", "Hamstrings", "Glutes"],
    steps: [
      "Kneel on the floor with your arms resting at your sides.",
      "Lean back onto your hands with fingers pointing forward and arms straight.",
      "Lower down onto your forearms.",
      "Push your thighs up and out as you arch your back, drop your head, and walk your hands closer to your feet."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "peacock", level: "advanced", order: 3,
    name: "Peacock",
    tagline: "An arm-balancing pose that builds serious strength and stability.",
    muscles: ["Forearms", "Abdominals", "Lats", "Low back", "Glutes", "Hamstrings"],
    steps: [
      "Kneel with your knees wide, sitting back on your heels.",
      "Lean forward and plant your palms on the floor, fingers pointing back toward you.",
      "Bend your elbows and slide your knees to the outside of your upper arms.",
      "Rest your torso on your upper arms and lower your head.",
      "Straighten your legs behind you, tops of the feet on the floor first.",
      "Once stable, shift your weight forward and lift your legs off the ground."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "lord-of-dance", level: "advanced", order: 4,
    name: "Lord of the Dance",
    tagline: "Builds balance and flexibility while stretching the entire front of the body.",
    muscles: ["Quads", "Hamstrings", "Abdominals", "Lats"],
    steps: [
      "Stand with your feet together, arms at your sides.",
      "Bend one knee, bringing that foot up toward your glutes.",
      "Reach back with the same-side hand to hold the outside of your foot, pressing your tailbone down and pelvis forward.",
      "Let the bent knee lift as you kick the foot into your hand.",
      "Extend the opposite arm forward, parallel to the floor."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "headstand", level: "advanced", order: 5,
    name: "Headstand",
    tagline: "Builds upper-body and core strength while challenging your balance and circulation.",
    muscles: ["Triceps", "Lats", "Abdominals", "Quads", "Hamstrings"],
    steps: [
      "Start on all fours, wrists under shoulders and knees under hips.",
      "Interlace your fingers on the floor and place the crown of your head on the mat in front of your hands.",
      "Straighten your legs and walk them toward your head, bringing your hips as close to shoulder level as you can.",
      "Inhale and lift one leg toward the ceiling, then follow with the other."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "headstand-lotus", level: "advanced", order: 6,
    name: "Headstand Lotus",
    tagline: "A further challenge to your balance, folding the legs into a Headstand.",
    muscles: ["Triceps", "Lats", "Abdominals", "Quads", "Hamstrings"],
    steps: [
      "Come into a Headstand.",
      "Bend your right leg and rest it on your left thigh.",
      "Bend your left leg and rest it on your right thigh."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  },
  {
    id: "firefly", level: "advanced", order: 7,
    name: "Firefly",
    tagline: "Stretches the hamstrings and hips while building serious arm strength.",
    muscles: ["Deltoids", "Lats", "Triceps", "Chest", "Abdominals"],
    steps: [
      "Squat down and lean your torso forward between your legs.",
      "Plant your hands on the floor inside your legs.",
      "Bring your upper arms in close against your upper thighs.",
      "Push into your hands and begin lifting yourself off the floor.",
      "Shift your weight back, straightening your legs out in front of you."
    ],
    hold: "Hold 1 minute, repeat circuit twice"
  }
];

const IMAGES = {
  "childs-pose": "/assets/images/childs-pose.jpg",
  "happy-baby": "/assets/images/happy-baby.jpg",
  "cat-cow": "/assets/images/cat-cow.jpg",
  "cobra": "/assets/images/cobra.jpg",
  "chair": "/assets/images/chair.jpg",
  "downward-dog": "/assets/images/downward-dog.jpg",
  "warrior-1": "/assets/images/warrior-1.jpg",
  "bridge": "/assets/images/bridge.jpg",
  "garland": "/assets/images/garland.png",
  "bow": "/assets/images/bow.jpg",
  "boat": "/assets/images/boat.jpg",
  "king-pigeon": "/assets/images/king-pigeon.jpg",
  "dove": "/assets/images/dove.jpg",
  "peacock": "/assets/images/peacock.jpg",
  "lord-of-dance": "/assets/images/lord-of-dance.jpg",
  "headstand": "/assets/images/headstand.jpg",
  "headstand-lotus": "/assets/images/headstand-lotus.png",
  "firefly": "/assets/images/firefly.jpg",
};

const LEVEL_META = {
  beginner: { label: "Beginner", count: 5, blurb: "New to yoga or want something gentle? Hold each pose for 60 seconds and move to the next — five minutes, done." },
  intermediate: { label: "Intermediate", count: 6, blurb: "A bit more challenge. Warm up with a pose or two from Beginner, then hold each move for a minute and repeat the circuit twice." },
  advanced: { label: "Advanced", count: 7, blurb: "Seven moves to test you in every way. Warm up with Beginner or Intermediate first, then hold each pose a minute and repeat the circuit twice." }
};
