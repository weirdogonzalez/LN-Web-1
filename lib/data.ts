export const MENU: Record<number, {
  breakfast: Meal; lunch: Meal; snack: Meal; dinner: Meal;
  cal: number; protein: number;
}> = {
  1: {
    breakfast: { name: "Creamy Chicken Wrap", cal: 290, protein: 28, img: "photo-1528735602780-2552fd46c7af" },
    lunch: { name: "Chicken Curry with Rice & Daal", cal: 420, protein: 35, img: "photo-1585937421612-70a008356fbe" },
    snack: { name: "Muffin & Orange", cal: 150, protein: 4, img: "photo-1558961363-fa8fdf82db35" },
    dinner: { name: "Brown Pasta with Marinara", cal: 360, protein: 23, img: "photo-1563379926898-05f4575a45d8" },
    cal: 1020, protein: 90,
  },
  2: {
    breakfast: { name: "Butter Chicken Sandwich", cal: 340, protein: 30, img: "photo-1509722747041-616f39b57569" },
    lunch: { name: "Steamed Chicken Salad", cal: 310, protein: 38, img: "photo-1512621776951-a57141f2eefd" },
    snack: { name: "Guava & Frittata", cal: 170, protein: 10, img: "photo-1494597564530-871f2b93ac55" },
    dinner: { name: "Fish Teriyaki, Brown Rice", cal: 380, protein: 39, img: "photo-1539136788836-5699e78bfc75" },
    cal: 1155, protein: 117,
  },
  3: {
    breakfast: { name: "Club Sandwich", cal: 360, protein: 22, img: "photo-1528735602780-2552fd46c7af" },
    lunch: { name: "Chicken Teriyaki Poke Bowl", cal: 440, protein: 34, img: "photo-1546069901-ba9599a7e63c" },
    snack: { name: "Muffin & Apple", cal: 165, protein: 4, img: "photo-1558961363-fa8fdf82db35" },
    dinner: { name: "Spicy Hakka Noodle", cal: 340, protein: 19, img: "photo-1569718212165-3a8278d5f624" },
    cal: 1202, protein: 79,
  },
  4: {
    breakfast: { name: "Peanut Butter Toast & Omelette", cal: 380, protein: 26, img: "photo-1484723091739-30acce13e0c1" },
    lunch: { name: "Chinese Stir Fry with Rice", cal: 420, protein: 40, img: "photo-1603133872878-684f208fb84b" },
    snack: { name: "Almonds & Banana", cal: 180, protein: 5, img: "photo-1595476108010-b4d1f102b1b1" },
    dinner: { name: "Chicken Saslik", cal: 290, protein: 34, img: "photo-1565299585323-38d6b0865b47" },
    cal: 1256, protein: 105,
  },
  5: {
    breakfast: { name: "Deep Dish Pizza", cal: 400, protein: 22, img: "photo-1565299624946-b28f40a0ae38" },
    lunch: { name: "Penne Bolognese", cal: 430, protein: 38, img: "photo-1551183053-bf91798d047e" },
    snack: { name: "Fudge Brownie", cal: 180, protein: 3, img: "photo-1606313564200-e75d5e30476c" },
    dinner: { name: "Chicken Cubes with Mutabbal", cal: 320, protein: 46, img: "photo-1529042410759-befb1204b468" },
    cal: 1239, protein: 109,
  },
  6: {
    breakfast: { name: "Doi Chira", cal: 290, protein: 12, img: "photo-1490645935967-10de6ba17061" },
    lunch: { name: "Beef Poke Bowl", cal: 460, protein: 28, img: "photo-1546069901-ba9599a7e63c" },
    snack: { name: "Banana Bread", cal: 210, protein: 5, img: "photo-1481487196290-c152efe083f5" },
    dinner: { name: "Fish Black Pepper, Rice, Veg", cal: 330, protein: 13, img: "photo-1539136788836-5699e78bfc75" },
    cal: 1182, protein: 58,
  },
  7: {
    breakfast: { name: "Club Sandwich", cal: 360, protein: 22, img: "photo-1528735602780-2552fd46c7af" },
    lunch: { name: "Fried Rice, Chicken Pepper", cal: 420, protein: 33, img: "photo-1603133872878-684f208fb84b" },
    snack: { name: "Almonds & Banana", cal: 160, protein: 5, img: "photo-1595476108010-b4d1f102b1b1" },
    dinner: { name: "Steamed Chicken Tikka, Raita", cal: 310, protein: 23, img: "photo-1565299585323-38d6b0865b47" },
    cal: 1122, protein: 83,
  },
  8: {
    breakfast: { name: "Beef Jam Sandwich & Egg", cal: 380, protein: 24, img: "photo-1509722747041-616f39b57569" },
    lunch: { name: "Beef Khichuri", cal: 430, protein: 28, img: "photo-1585937421612-70a008356fbe" },
    snack: { name: "Deshi Komla & Almonds", cal: 155, protein: 4, img: "photo-1495475038960-5ca4c6ef3e71" },
    dinner: { name: "Japanese Cream Stew", cal: 320, protein: 15, img: "photo-1569718212165-3a8278d5f624" },
    cal: 1178, protein: 71,
  },
  9: {
    breakfast: { name: "Creamy Vanilla Oats", cal: 310, protein: 14, img: "photo-1490645935967-10de6ba17061" },
    lunch: { name: "Korean Chicken", cal: 420, protein: 38, img: "photo-1565299624946-b28f40a0ae38" },
    snack: { name: "Almonds & Banana", cal: 155, protein: 5, img: "photo-1595476108010-b4d1f102b1b1" },
    dinner: { name: "Assam Fish Curry", cal: 280, protein: 14, img: "photo-1539136788836-5699e78bfc75" },
    cal: 1113, protein: 71,
  },
  10: {
    breakfast: { name: "Peanut Butter Toast", cal: 310, protein: 12, img: "photo-1484723091739-30acce13e0c1" },
    lunch: { name: "Chicken Coconut Curry", cal: 440, protein: 24, img: "photo-1585937421612-70a008356fbe" },
    snack: { name: "Muffin & Banana", cal: 175, protein: 5, img: "photo-1558961363-fa8fdf82db35" },
    dinner: { name: "Butter Chicken, Brown Rice", cal: 380, protein: 12, img: "photo-1565299585323-38d6b0865b47" },
    cal: 1206, protein: 53,
  },
};

export const PLANS = [
  {
    id: "w2",
    eyebrow: "Starter",
    name: "2 Meals",
    freq: "Weekly",
    meals: 2,
    period: "weekly",
    price: 7500,
    total: 7500,
    totalLabel: "14 meals / week",
    perMeal: 536,
    highlight: false,
    badge: null,
    perks: ["Breakfast + Lunch", "Delivered fresh by 8am", "WhatsApp support"],
  },
  {
    id: "m2",
    eyebrow: "Popular",
    name: "2 Meals",
    freq: "Monthly",
    meals: 2,
    period: "monthly",
    price: 26000,
    total: 26000,
    totalLabel: "60 meals / month",
    perMeal: 433,
    highlight: false,
    badge: null,
    perks: ["Breakfast + Lunch", "Delivered fresh by 8am", "Priority support"],
  },
  {
    id: "w4",
    eyebrow: "Full Day",
    name: "4 Meals",
    freq: "Weekly",
    meals: 4,
    period: "weekly",
    price: 10000,
    total: 10000,
    totalLabel: "28 meals / week",
    perMeal: 357,
    highlight: false,
    badge: null,
    perks: ["All 4 daily meals", "Macro tracking", "Chef-curated rotation", "Basic workout guidance"],
  },
  {
    id: "m4",
    eyebrow: "Best Value",
    name: "4 Meals",
    freq: "Monthly",
    meals: 4,
    period: "monthly",
    price: 34000,
    total: 34000,
    totalLabel: "120 meals / month",
    perMeal: 283,
    highlight: true,
    badge: "Best Value",
    perks: ["All 4 daily meals", "Macro tracking", "Chef-curated rotation", "Free nutrition + workout consult"],
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "I used to skip breakfast. Now I actually eat one — and lunch is waiting at my office by noon.",
    hi: "I actually eat one",
    name: "Rumana K.",
    role: "Gulshan · monthly plan",
    initials: "RK",
  },
  {
    stars: 5,
    quote: "The macros are legit. I lost 4kg in two months without thinking about food once.",
    hi: "without thinking about food once",
    name: "Faisal R.",
    role: "Banani · 4 meals/day",
    initials: "FR",
  },
  {
    stars: 5,
    quote: "As a working mom, this gave me back my evenings. The food tastes like home, not meal-prep.",
    hi: "gave me back my evenings",
    name: "Sharmin A.",
    role: "Dhanmondi · monthly plan",
    initials: "SA",
  },
];

export const FAQ_ITEMS = [
  {
    q: "When is my food delivered?",
    a: "Your meals are cooked overnight and delivered before 8am every morning. Our driver will send you a WhatsApp confirmation the night before.",
  },
  {
    q: "Which areas of Dhaka do you deliver to?",
    a: "We currently deliver to Gulshan, Banani, Baridhara, Dhanmondi, Uttara, and Bashundhara. More zones are coming soon.",
  },
  {
    q: "How does the subscription work?",
    a: "Your plan runs on a fixed daily schedule — that's what lets us cook fresh and deliver on time every morning. Pick a start date and your meals arrive daily for the duration of your plan.",
  },
  {
    q: "Are the meals freshly cooked?",
    a: "Absolutely. Every meal is cooked from scratch the night before delivery. We use no preservatives or reheated food.",
  },
  {
    q: "How is the food packaged?",
    a: "Your full day's meals arrive together in hygienic, food-safe containers designed for safe storage and freshness. Refrigerate on arrival — the food stays fresh until you're ready to eat.",
  },
  {
    q: "How do I reheat the meals?",
    a: "Pop them in the microwave for 1–2 minutes, warm on the stovetop, or use a low oven. Instructions are included with each delivery so you can't get it wrong.",
  },
  {
    q: "What's on the menu? Do the meals repeat?",
    a: "We run a rotating 10-day menu so you get real variety without decision fatigue. New plates come in every cycle, and every meal is calorie-counted and macro-balanced.",
  },
  {
    q: "Do you offer nutrition or workout guidance?",
    a: "Yes — a free phone consultation with our team before you start, plus basic workout guidance to complement your meal plan. It's goal-oriented support tailored to your lifestyle.",
  },
  {
    q: "How are macros tracked?",
    a: "Every meal is carefully planned with exact macros. You'll see calories, protein, carbs, and fat for every item on our menu.",
  },
  {
    q: "Can I customise meals for allergies?",
    a: "Yes. During sign-up you can list any allergies or dietary restrictions. Our kitchen will adapt your meals accordingly.",
  },
  {
    q: "How do I pay?",
    a: "We accept bKash, Nagad, and all major cards. Payment is collected monthly at the start of each cycle.",
  },
  {
    q: "What if I want to change my plan?",
    a: "You can upgrade, downgrade, or switch between weekly and monthly plans at any time from your account dashboard.",
  },
];

export interface Meal {
  name: string;
  cal: number;
  protein: number;
  img: string;
}
