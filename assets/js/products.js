// ============================================================
// PRODUCTS - the Soap and Candles pages and the homepage
// "Featured" section are built entirely from this list.
//
// To add a real product: copy one block, change the values.
// To remove samples: delete their blocks.
//
// Fields:
//   id        unique, lowercase, no spaces (e.g. "cedar-goat-milk")
//   type      "soap" or "candle"
//   name      product name
//   scent     scent notes
//   base      soap: "Goat milk", "Triple butter", "Beeswax"
//             candle: "Beeswax" or other wax
//   description  1-2 sentences
//   image     path like "assets/img/cedar.jpg" (put the file in assets/img/)
//             leave "" to show the "photo coming soon" placeholder
//   forHim    true / false  (shows in the "For Him" filter)
//   featured  true / false  (shows on the homepage)
//   sample    true = shows a "Sample" badge. Remove or set false on real products.
// ============================================================
window.PRODUCTS = [
  // ---------- SOAP (samples) ----------
  {
    id: "sample-soap-1", type: "soap", name: "Sample Soap 1",
    scent: "Cedarwood & black pepper", base: "Goat milk",
    description: "Placeholder product. A creamy goat milk bar with a warm, woody scent.",
    image: "", forHim: true, featured: true, sample: true
  },
  {
    id: "sample-soap-2", type: "soap", name: "Sample Soap 2",
    scent: "Honey & oat", base: "Beeswax",
    description: "Placeholder product. A gentle beeswax bar with a soft, sweet finish.",
    image: "", forHim: false, featured: true, sample: true
  },
  {
    id: "sample-soap-3", type: "soap", name: "Sample Soap 3",
    scent: "Bay rum", base: "Triple butter",
    description: "Placeholder product. A rich triple butter bar with a classic barbershop scent.",
    image: "", forHim: true, featured: false, sample: true
  },
  {
    id: "sample-soap-4", type: "soap", name: "Sample Soap 4",
    scent: "Lavender & lemon", base: "Goat milk",
    description: "Placeholder product. A bright, clean goat milk bar.",
    image: "", forHim: false, featured: false, sample: true
  },

  // ---------- CANDLES (samples) ----------
  {
    id: "sample-candle-1", type: "candle", name: "Sample Candle 1",
    scent: "Leather & tobacco", base: "Beeswax",
    description: "Placeholder product. A deep, smoky beeswax candle.",
    image: "", forHim: true, featured: true, sample: true
  },
  {
    id: "sample-candle-2", type: "candle", name: "Sample Candle 2",
    scent: "Vanilla bean", base: "Beeswax",
    description: "Placeholder product. A warm, cozy beeswax candle.",
    image: "", forHim: false, featured: true, sample: true
  },
  {
    id: "sample-candle-3", type: "candle", name: "Sample Candle 3",
    scent: "Campfire & pine", base: "Beeswax",
    description: "Placeholder product. Smells like the outdoors, minus the smoke in your eyes.",
    image: "", forHim: true, featured: false, sample: true
  },
  {
    id: "sample-candle-4", type: "candle", name: "Sample Candle 4",
    scent: "Fresh linen", base: "Beeswax",
    description: "Placeholder product. A light, clean beeswax candle.",
    image: "", forHim: false, featured: false, sample: true
  }
];
