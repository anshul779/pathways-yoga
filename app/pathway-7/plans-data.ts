export interface DayPlan {
  day: number;
  breakfast: string;
  morningSnack: string;
  lunch: string;
  afternoonSnack: string;
  dinner: string;
}

export interface Plan {
  label: string;
  heading: string;
  days: DayPlan[];
}

export type PlanKey = "male" | "female";

export const PLANS: Record<PlanKey, Plan> = {
  male: {
    label: "Males",
    heading: "7-Day Healthful Meal Plan for Males",
    days: [
      {
        day: 1,
        breakfast:
          "Smoked salmon and egg on a whole-grain bagel with a portion of watercress, a medium low-fat mocha drink.",
        morningSnack: "A portion of hummus and raw vegetables for dipping, two oatcakes.",
        lunch:
          "A bowl of bean and vegetable soup drizzled with extra virgin olive oil, 1 slice of whole-grain seeded bread, a portion of raw, fa side lightly steamed vegetables, such as carrots, broccoli, or garden peas, and a portion of fruit.",
        afternoonSnack: "Chocolate n\u2019ice cream.",
        dinner:
          "Greek mac and cheese casserole, a portion of steamed broccoli, asparagus, or another green vegetable. Greek yogurt with berries and nuts for dessert.",
      },
      {
        day: 2,
        breakfast: "Berry smoothie with protein powder.",
        morningSnack:
          "Two rice cakes spread with 2 tablespoons (tbsp) peanut butter and topped with apple slices.",
        lunch:
          "Tuna salad sandwich on whole-grain bread, a small bag of root vegetable chips, sliced crudit\u00e9s, such as carrots or bell peppers, and a banana.",
        afternoonSnack: "Raspberry frozen yogurt pop.",
        dinner:
          "Salmon with pineapple-avocado salsa and a portion of leafy greens. Cocoa chia seed pudding, a handful of strawberries, and an oat milk hot drink before bed.",
      },
      {
        day: 3,
        breakfast:
          "Oatmeal with banana, pumpkin seeds, and a drizzle of maple syrup, coffee with low-fat milk.",
        morningSnack: "Chocolate peanut butter cup, apple slices.",
        lunch:
          "Mashed avocado, roast turkey, and chopped tomatoes on two slices of whole-grain toast, topped with extra virgin olive oil, shelled hemp seeds, and cayenne pepper, a handful of blueberries.",
        afternoonSnack: "A portion of hummus with raw vegetables for dipping and two oatcakes.",
        dinner:
          "Chicken and vegetable stir fry served with 1 cup of steamed brown rice, two squares of dark chocolate, and a handful of walnuts.",
      },
      {
        day: 4,
        breakfast: "Apple and peanut butter on a wholewheat English muffin, 1 cup of low-fat milk.",
        morningSnack: "Carrot Cake Energy Bar.",
        lunch:
          "One medium baked potato with 100 grams (g) beef chili and 28 g creme fraiche, a side serving of green beans or peas.",
        afternoonSnack: "A boiled egg, two oatcakes, and a portion of arugula.",
        dinner: "Veggie Korean bibimbap, kombucha drink.",
      },
      {
        day: 5,
        breakfast:
          "40 g granola, 100 g unsweetened Greek yogurt, 100 g blueberries, 3 tbsp flax seeds, coffee with low-fat milk.",
        morningSnack: "Tofu \u201cegg\u201d salad stuffed tomato.",
        lunch:
          "Tuna salad sandwich on whole-grain bread with plenty of salad vegetables, such as cucumbers, peppers, diced tomatoes, and lettuce, a banana, a handful of nuts, one sliced orange, a cup of lemon and ginger herbal tea.",
        afternoonSnack: "Vegan oat chocolate chip cookie, apple slices.",
        dinner:
          "Rotisserie chicken tacos with pineapple salsa, a small baked sweet potato, a portion of arugula, two squares of dark chocolate with a handful of walnuts.",
      },
      {
        day: 6,
        breakfast:
          "Two quinoa edamame egg muffins, a portion of grilled tomatoes and mushrooms drizzled with olive oil, a glass of almond milk.",
        morningSnack: "Two rice cakes spread with 2 tbsp peanut butter and sliced banana.",
        lunch:
          "Slow cooker black bean soup, a portion of watercress, roasted squash with paprika, and rosemary.",
        afternoonSnack: "Lemon, pistachio & berry frozen yogurt bark.",
        dinner:
          "One medium baked potato, 100 g chili, 28 g creme fraiche, a portion of leafy greens, three squares of dark chocolate with a handful of walnuts.",
      },
      {
        day: 7,
        breakfast:
          "Sardines on two slices of whole-grain toast with spread, a portion of fresh spinach, medium low-fat mocha drink",
        morningSnack: "One quarter cup Brazil nuts and a banana",
        lunch:
          "A grilled chicken fillet with 1 cup cooked broccoli, half a cup of cooked carrots, one corn on the cob, and an orange.",
        afternoonSnack: "A slice of spinach & tomato frittata and one serving of green olives, a kombucha drink.",
        dinner:
          "Slow cooker sweet potato curry served with one cup of cauliflower rice, one wheat paratha, a satsuma.",
      },
    ],
  },
  female: {
    label: "Females",
    heading: "7-Day Healthful Meal Plan for Females",
    days: [
      {
        day: 1,
        breakfast: "30 g granola, 100 g unsweetened Greek yogurt, 100 g blueberries, coffee with low-fat milk.",
        morningSnack: "Tofu \u201cegg\u201d salad stuffed tomato.",
        lunch: "Tuna salad sandwich on whole-grain bread, an apple, and a handful of walnuts.",
        afternoonSnack: "Lemon, pistachio & berry frozen yogurt bark.",
        dinner: "Veggie Korean bibimbap, kombucha drink, a portion of banana, and Greek yogurt.",
      },
      {
        day: 2,
        breakfast: "Smoked salmon and egg bagel, a portion of spinach, a medium low-fat mocha drink.",
        morningSnack: "One-quarter cup Brazil nuts, pear slices, a glass of kombucha.",
        lunch: "Sardines in tomato sauce on two slices of whole-grain toast.",
        afternoonSnack: "Raspberry cheesecake jar.",
        dinner: "Saut\u00e9ed shrimp with mango salsa & coconut cauliflower rice, a banana, and a few walnuts.",
      },
      {
        day: 3,
        breakfast: "Blueberry-Avocado Smoothie, a slice of whole-grain toast with almond butter.",
        morningSnack: "Red Lentil-Beet Hummus with oatcakes.",
        lunch:
          "A portion of slow cooker black bean soup, roasted beets with almond cream cheese, grated carrot, and watercress.",
        afternoonSnack: "28 g peanuts, an orange.",
        dinner:
          "Chicken and vegetable stir fry served with 1 cup of steamed brown rice, two squares of dark chocolate with a handful of walnuts.",
      },
      {
        day: 4,
        breakfast: "Apple and peanut butter on a whole-wheat English muffin, one cup of low-fat milk.",
        morningSnack: "Carrot Cake Energy Bar.",
        lunch: "A medium baked potato, 100 g chili, 28 g creme fraiche, side of green beans.",
        afternoonSnack: "Chocolate-avocado pop.",
        dinner:
          "Slow cooker sweet potato curry served with 1 cup of steamed cauliflower rice, one wheat paratha, a satsuma, a kombucha drink.",
      },
      {
        day: 5,
        breakfast: "Berry smoothie with protein powder.",
        morningSnack: "Spanish oat omelet.",
        lunch: "Sardines drizzled with olive oil on two slices of whole-grain toast with spread, leafy side salad.",
        afternoonSnack: "One vegan blueberry truffle.",
        dinner:
          "Slow cooker peanut chicken with broccoli, a baked sweet potato drizzled with extra virgin olive oil, a portion of steamed kale.",
      },
      {
        day: 6,
        breakfast:
          "Two quinoa edamame egg muffins, a portion of grilled tomatoes and mushrooms drizzled with olive oil, a glass of almond milk.",
        morningSnack: "Chocolate peanut butter cup, apple slices.",
        lunch: "Seared sesame tuna bowl with julienned carrots, snow peas, pak choi, and bamboo shoots.",
        afternoonSnack: "Lemon, pistachio & berry frozen yogurt bark.",
        dinner: "One medium baked potato, 100 g chili, 28 g creme fraiche, a portion of steamed broccoli.",
      },
      {
        day: 7,
        breakfast: "30 g granola, 100 g unsweetened Greek yogurt, 100 g blueberries, coffee with low-fat milk.",
        morningSnack: "Tofu \u201cegg\u201d salad stuffed tomato.",
        lunch: "Tuna salad sandwich on whole-grain bread, sliced bell peppers, sugar snap peas, a pear, 28 g walnuts.",
        afternoonSnack: "A boiled egg, two oatcakes, and a portion of arugula.",
        dinner:
          "Rotisserie chicken tacos with pineapple salsa, a portion of watercress, two squares of dark chocolate with some Brazil nuts.",
      },
    ],
  },
};

export const MEAL_ROWS: { key: keyof Omit<DayPlan, "day">; label: string; icon: "breakfast" | "snack" | "lunch" | "dinner" }[] = [
  { key: "breakfast", label: "Breakfast", icon: "breakfast" },
  { key: "morningSnack", label: "Morning Snack", icon: "snack" },
  { key: "lunch", label: "Lunch", icon: "lunch" },
  { key: "afternoonSnack", label: "Afternoon Snack", icon: "snack" },
  { key: "dinner", label: "Dinner", icon: "dinner" },
];

export const TRACKED_SECTIONS = [
  { id: "benefits", index: "01", label: "Benefits" },
  { id: "science", index: "02", label: "Science-Based Recommendations" },
  { id: "plans", index: "03", label: "7-Day Meal Plans" },
  { id: "make-ahead", index: "04", label: "Make Ahead" },
  { id: "summary", index: "05", label: "Summary" },
];
