import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brook's Recipes",
  description: 'Vegan recipes by Brook Katz – delicious plant-based meals for every occasion.',
};

const recipes = [
  {
    title: 'Stuffed Butternut Squash',
    description:
      'A show-stopping holiday centerpiece featuring roasted butternut squash filled with a savory wild rice and vegetable stuffing.',
    tags: ['Holiday', 'Gluten-Free Option', 'Main Course'],
  },
  {
    title: 'Seitan with Mushroom Gravy',
    description:
      'Sliced seitan smothered in a rich, savory mushroom gravy. A staple at EarthSave Thanksgiving events and a crowd favorite for over a decade.',
    tags: ['Thanksgiving', 'Main Course', 'Comfort Food'],
  },
  {
    title: 'Chestnut Stuffing',
    description:
      'Traditional-style stuffing made with chestnuts, herbs, and fresh vegetables. Perfect alongside seitan and mushroom gravy.',
    tags: ['Thanksgiving', 'Side Dish'],
  },
  {
    title: 'Candied Sweet Potatoes',
    description:
      'Naturally sweetened baked sweet potatoes — a gluten-free holiday staple that\'s always a hit at community events.',
    tags: ['Gluten-Free', 'Side Dish', 'Holiday'],
  },
  {
    title: 'Green Bean Casserole',
    description:
      'A plant-based take on the classic casserole, made entirely from scratch with fresh green beans and a creamy vegan sauce.',
    tags: ['Thanksgiving', 'Side Dish'],
  },
  {
    title: 'Cranberry Sauce',
    description:
      'Homemade cranberry sauce with a perfect balance of tart and sweet. A simple, essential accompaniment to any holiday spread.',
    tags: ['Holiday', 'Condiment', 'Gluten-Free'],
  },
  {
    title: 'Raw Vegan Dinner Spread',
    description:
      'An almost entirely raw dinner prepared in honor of Chef T (Thierry Brower), featuring vibrant salads, raw sauces, and dehydrated specialties.',
    tags: ['Raw', 'Gluten-Free', 'Full Menu'],
  },
  {
    title: 'Organic Mixed Greens Salad',
    description:
      'Fresh organic mixed greens with a choice of house-made dressings. A light, refreshing starter that begins every EarthSave buffet.',
    tags: ['Starter', 'Raw', 'Gluten-Free'],
  },
];

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h1 className="font-display text-4xl font-bold text-primary-dark">Brook&apos;s Recipes</h1>
      <p className="mt-2 text-lg text-gray-500">
        Delicious plant-based recipes from decades of vegan cooking. These menus have fed thousands
        at EarthSave events across South Florida.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <h3 className="text-lg font-semibold text-primary-dark">{recipe.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{recipe.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-r-xl border-l-4 border-primary bg-gradient-to-r from-emerald-50 to-green-50 p-6">
        <p className="font-medium text-gray-700">
          <strong>More recipes coming soon!</strong> Brook has decades of recipes from EarthSave
          events, cooking demonstrations, and his cookbooks. Check back often or sign up for the
          blog for updates.
        </p>
      </div>
    </div>
  );
}
