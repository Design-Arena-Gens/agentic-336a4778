import Head from "next/head";

const recipes = [
  {
    slug: "classic-chocolate-cake",
    title: "Classic Chocolate Cake",
    description: "Moist, rich chocolate layers with silky chocolate ganache.",
    image: "/images/cake01.svg",
    servings: 12,
    time: "1 hr 15 min",
    ingredients: [
      "2 cups all-purpose flour",
      "3/4 cup cocoa powder",
      "2 cups sugar",
      "2 tsp baking powder",
      "1 1/2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup neutral oil",
      "2 tsp vanilla",
      "1 cup hot coffee"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Grease and line two 8-inch pans.",
      "Whisk dry ingredients. Add eggs, milk, oil, vanilla; mix until smooth.",
      "Stir in hot coffee. Batter will be thin.",
      "Divide into pans; bake 30?35 min. Cool completely.",
      "Frost with chocolate ganache or buttercream."
    ]
  },
  {
    slug: "vanilla-sponge-cake",
    title: "Vanilla Sponge Cake",
    description: "Light and airy sponge perfect for berries and cream.",
    image: "/images/cake02.svg",
    servings: 10,
    time: "55 min",
    ingredients: [
      "1 1/2 cups cake flour",
      "1 cup sugar",
      "1 1/2 tsp baking powder",
      "1/2 tsp salt",
      "4 eggs, room temp",
      "1/2 cup milk, warm",
      "1/4 cup unsalted butter, melted",
      "2 tsp vanilla"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Line two 8-inch pans.",
      "Beat eggs and sugar until pale and tripled in volume.",
      "Fold in sifted dry ingredients gently.",
      "Stir milk, butter, vanilla; fold into batter.",
      "Bake 20?25 min. Cool and fill with whipped cream."
    ]
  },
  {
    slug: "red-velvet-cake",
    title: "Red Velvet Cake",
    description: "Tender cocoa-kissed layers with cream cheese frosting.",
    image: "/images/cake03.svg",
    servings: 12,
    time: "1 hr 10 min",
    ingredients: [
      "2 1/2 cups flour",
      "2 tbsp cocoa powder",
      "1 1/2 cups sugar",
      "1 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 1/2 cups oil",
      "1 cup buttermilk",
      "2 tsp vanilla",
      "2 tsp white vinegar",
      "2 tbsp red gel color"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Grease two 9-inch pans.",
      "Whisk dry ingredients. Add wet; mix until smooth.",
      "Divide; bake 25?30 min. Cool.",
      "Frost with cream cheese frosting."
    ]
  },
  {
    slug: "lemon-drizzle-cake",
    title: "Lemon Drizzle Cake",
    description: "Bright, zesty loaf soaked with lemon syrup.",
    image: "/images/cake04.svg",
    servings: 8,
    time: "1 hr",
    ingredients: [
      "1 1/2 cups flour",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "3/4 cup sugar",
      "3 eggs",
      "1/2 cup plain yogurt",
      "1/2 cup oil",
      "Zest of 2 lemons",
      "Syrup: 1/3 cup lemon juice + 1/3 cup sugar"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Line 9?5 loaf pan.",
      "Whisk wet; fold in dry and zest.",
      "Bake 45?50 min. While warm, poke holes and pour syrup.",
      "Cool completely; glaze if desired."
    ]
  },
  {
    slug: "carrot-cake",
    title: "Carrot Cake",
    description: "Spiced, super-moist layers loaded with carrots and walnuts.",
    image: "/images/cake05.svg",
    servings: 12,
    time: "1 hr 20 min",
    ingredients: [
      "2 cups flour",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1 tsp cinnamon",
      "1/2 tsp nutmeg",
      "1/2 tsp salt",
      "1 1/4 cups sugar",
      "3 eggs",
      "3/4 cup oil",
      "2 cups grated carrots",
      "1/2 cup crushed pineapple, drained",
      "1/2 cup chopped walnuts"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Line two 8-inch pans.",
      "Whisk dry. Beat eggs, sugar, oil; combine.",
      "Fold in carrots, pineapple, nuts.",
      "Bake 30?35 min. Cool; frost with cream cheese."
    ]
  },
  {
    slug: "baked-cheesecake",
    title: "Baked Cheesecake",
    description: "Silky New York-style with buttery biscuit crust.",
    image: "/images/cake06.svg",
    servings: 12,
    time: "6 hr (incl. chill)",
    ingredients: [
      "Crust: 2 cups graham crumbs + 1/3 cup butter",
      "Filling: 32 oz cream cheese",
      "1 cup sugar",
      "1 cup sour cream",
      "4 eggs",
      "2 tsp vanilla",
      "1 tbsp lemon juice"
    ],
    steps: [
      "Heat oven to 325?F/160?C. Press crust into 9-inch springform.",
      "Beat filling until smooth; add eggs one at a time.",
      "Bake 55?65 min until set at edges. Cool gradually.",
      "Chill 4 hours or overnight."
    ]
  },
  {
    slug: "strawberry-shortcake",
    title: "Strawberry Shortcake",
    description: "Tender biscuits, macerated strawberries, and whipped cream.",
    image: "/images/cake07.svg",
    servings: 8,
    time: "45 min",
    ingredients: [
      "2 cups flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold butter",
      "3/4 cup milk",
      "4 cups sliced strawberries + 3 tbsp sugar",
      "2 cups whipped cream"
    ],
    steps: [
      "Heat oven to 425?F/220?C. Mix dry; cut in butter.",
      "Stir in milk; pat, cut rounds. Bake 12?15 min.",
      "Macreate strawberries. Split biscuits; layer berries and cream."
    ]
  },
  {
    slug: "black-forest-cake",
    title: "Black Forest Cake",
    description: "Chocolate sponge, cherries, and clouds of whipped cream.",
    image: "/images/cake08.svg",
    servings: 12,
    time: "1 hr 30 min",
    ingredients: [
      "Chocolate sponge (see sponge recipe)",
      "2 cups heavy cream + 2 tbsp sugar",
      "2 cups cherry compote",
      "Kirsch (optional)",
      "Chocolate shavings"
    ],
    steps: [
      "Bake chocolate sponge in two 9-inch pans.",
      "Whip cream with sugar.",
      "Brush layers with kirsch; fill with cherries and cream.",
      "Top with cream and shavings."
    ]
  },
  {
    slug: "tiramisu-cake",
    title: "Tiramisu Cake",
    description: "Coffee-soaked layers with mascarpone cream and cocoa.",
    image: "/images/cake09.svg",
    servings: 10,
    time: "1 hr 10 min",
    ingredients: [
      "Vanilla sponge (see sponge recipe)",
      "1 1/2 cups strong coffee, cooled",
      "16 oz mascarpone",
      "1 cup heavy cream",
      "1/2 cup sugar",
      "Cocoa powder"
    ],
    steps: [
      "Whip mascarpone, cream, sugar until thick.",
      "Brush layers with coffee; fill and cover with cream.",
      "Dust generously with cocoa. Chill 2 hours."
    ]
  },
  {
    slug: "banana-walnut-cake",
    title: "Banana Walnut Cake",
    description: "Buttery banana layers with toasted walnuts and caramel frosting.",
    image: "/images/cake10.svg",
    servings: 12,
    time: "1 hr 15 min",
    ingredients: [
      "2 cups flour",
      "1 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "1 1/4 cups sugar",
      "2 eggs",
      "1/2 cup butter, melted",
      "3 ripe bananas, mashed",
      "1/2 cup sour cream",
      "1/2 cup chopped walnuts"
    ],
    steps: [
      "Heat oven to 350?F/175?C. Grease two 8-inch pans.",
      "Mix wet; fold in dry and bananas.",
      "Bake 28?32 min. Cool; frost as desired."
    ]
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Delicious Cake Ebook ? 10 Recipes</title>
        <meta name="description" content="A free ebook of 10 delectable cake recipes with images." />
      </Head>
      <main className="container">
        <header className="hero">
          <h1>Delicious Cake Ebook</h1>
          <p>10 tried-and-true cakes with step?by?step guidance.</p>
          <div className="actions">
            <button onClick={() => window.print()} className="btn">Download PDF</button>
          </div>
        </header>

        <div className="grid">
          {recipes.map((r) => (
            <article key={r.slug} className="card break-inside-avoid">
              <img src={r.image} alt={r.title} className="cover" />
              <h2>{r.title}</h2>
              <p className="muted">{r.description}</p>
              <div className="meta">
                <span>Servings: {r.servings}</span>
                <span>Time: {r.time}</span>
              </div>
              <div className="columns">
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                    {r.ingredients.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Steps</h3>
                  <ol>
                    {r.steps.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="footer">
          <p>? {new Date().getFullYear()} Cake Ebook. Free to share for personal use.</p>
        </footer>
      </main>
    </>
  );
}
