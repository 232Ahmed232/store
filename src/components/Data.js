const productList = [
  // ---------------- Electronics ----------------
  {
    id: 1,
    name: "Hubabay Smartphone X1",
    category: "Electronics",
    brand: "Hubabay",
    price: 899,
    description: "High-performance smartphone with sleek design.",
    image: "https://picsum.photos/seed/hubabayphone/400/300"
  },
  {
    id: 2,
    name: "Hubabay Laptop Z Pro",
    category: "Electronics",
    brand: "Hubabay",
    price: 1299,
    description: "Powerful ultrabook with long battery life.",
    image: "https://picsum.photos/seed/hubabaylaptop/400/300"
  },
  {
    id: 3,
    name: "Xpure Noise Cancelling Headphones",
    category: "Electronics",
    brand: "Xpure",
    price: 299,
    description: "Premium headphones with advanced noise cancellation.",
    image: "https://picsum.photos/seed/xpureheadphones/400/300"
  },
  {
    id: 4,
    name: "Xpure Smart TV 55-inch",
    category: "Electronics",
    brand: "Xpure",
    price: 699,
    description: "4K UHD Smart TV with vibrant colors.",
    image: "https://picsum.photos/seed/xpuretv/400/300"
  },
  {
    id: 5,
    name: "Champa Smartwatch Pro",
    category: "Electronics",
    brand: "Champa",
    price: 199,
    description: "Smartwatch with fitness tracking and notifications.",
    image: "https://picsum.photos/seed/champawatch/400/300"
  },
  {
    id: 6,
    name: "Champa Bluetooth Speaker",
    category: "Electronics",
    brand: "Champa",
    price: 149,
    description: "Portable speaker with deep bass and clear sound.",
    image: "https://picsum.photos/seed/champaspeaker/400/300"
  },
  {
    id: 7,
    name: "Alley 4K Action Camera",
    category: "Electronics",
    brand: "Alley",
    price: 249,
    description: "Compact action camera for outdoor adventures.",
    image: "https://picsum.photos/seed/alleycamera/400/300"
  },
  {
    id: 8,
    name: "Alley Wireless Router AX",
    category: "Electronics",
    brand: "Alley",
    price: 129,
    description: "High-speed Wi-Fi 6 router for seamless streaming.",
    image: "https://picsum.photos/seed/alleyrouter/400/300"
  },

  // ---------------- Cosmetics ----------------
  {
    id: 9,
    name: "Hubabay Lipstick Velvet Red",
    category: "Cosmetics",
    brand: "Hubabay",
    price: 35,
    description: "Rich, long-lasting lipstick with a velvet finish.",
    image: "https://picsum.photos/seed/hubabaylipstick/400/300"
  },
  {
    id: 10,
    name: "Hubabay Nail Polish Set",
    category: "Cosmetics",
    brand: "Hubabay",
    price: 25,
    description: "Colorful nail polish set with lasting shine.",
    image: "https://picsum.photos/seed/hubabaynail/400/300"
  },
  {
    id: 11,
    name: "Xpure Foundation Glow",
    category: "Cosmetics",
    brand: "Xpure",
    price: 45,
    description: "Lightweight foundation with natural glowing effect.",
    image: "https://picsum.photos/seed/xpurefoundation/400/300"
  },
  {
    id: 12,
    name: "Xpure Compact Powder",
    category: "Cosmetics",
    brand: "Xpure",
    price: 28,
    description: "Smooth powder for a flawless finish.",
    image: "https://picsum.photos/seed/xpurepowder/400/300"
  },
  {
    id: 13,
    name: "Champa Eyeliner Precision",
    category: "Cosmetics",
    brand: "Champa",
    price: 20,
    description: "Waterproof eyeliner for sharp and bold looks.",
    image: "https://picsum.photos/seed/champaeyeliner/400/300"
  },
  {
    id: 14,
    name: "Champa Blush Palette",
    category: "Cosmetics",
    brand: "Champa",
    price: 32,
    description: "Blush palette with multiple shades.",
    image: "https://picsum.photos/seed/champablush/400/300"
  },
  {
    id: 15,
    name: "Alley Mascara VolumeMax",
    category: "Cosmetics",
    brand: "Alley",
    price: 30,
    description: "Volumizing mascara for fuller lashes.",
    image: "https://picsum.photos/seed/alleymascara/400/300"
  },
  {
    id: 16,
    name: "Alley Makeup Remover",
    category: "Cosmetics",
    brand: "Alley",
    price: 18,
    description: "Gentle remover for long-lasting makeup.",
    image: "https://picsum.photos/seed/alleyremover/400/300"
  },

  // ---------------- Beauty ----------------
  {
    id: 17,
    name: "Hubabay Hair Serum",
    category: "Beauty",
    brand: "Hubabay",
    price: 40,
    description: "Nourishing serum for smooth and shiny hair.",
    image: "https://picsum.photos/seed/hubabayserum/400/300"
  },
  {
    id: 18,
    name: "Hubabay Face Wash Gentle",
    category: "Beauty",
    brand: "Hubabay",
    price: 22,
    description: "Daily face wash for clear and fresh skin.",
    image: "https://picsum.photos/seed/hubabayfacewash/400/300"
  },
  {
    id: 19,
    name: "Xpure Skin Moisturizer",
    category: "Beauty",
    brand: "Xpure",
    price: 55,
    description: "Deep hydration cream for radiant skin.",
    image: "https://picsum.photos/seed/xpureskin/400/300"
  },
  {
    id: 20,
    name: "Xpure Anti-Aging Cream",
    category: "Beauty",
    brand: "Xpure",
    price: 70,
    description: "Anti-aging formula with natural extracts.",
    image: "https://picsum.photos/seed/xpurecream/400/300"
  },
  {
    id: 21,
    name: "Champa Face Mask Pack",
    category: "Beauty",
    brand: "Champa",
    price: 25,
    description: "Revitalizing sheet masks for skin nourishment.",
    image: "https://picsum.photos/seed/champamask/400/300"
  },
  {
    id: 22,
    name: "Champa Body Lotion",
    category: "Beauty",
    brand: "Champa",
    price: 35,
    description: "Moisturizing lotion for soft skin.",
    image: "https://picsum.photos/seed/champalotion/400/300"
  },
  {
    id: 23,
    name: "Alley Hair Oil",
    category: "Beauty",
    brand: "Alley",
    price: 30,
    description: "Natural hair oil for strengthening and shine.",
    image: "https://picsum.photos/seed/alleyhairoil/400/300"
  },
  {
    id: 24,
    name: "Alley Face Scrub",
    category: "Beauty",
    brand: "Alley",
    price: 27,
    description: "Exfoliating scrub for glowing skin.",
    image: "https://picsum.photos/seed/alleyscrub/400/300"
  },

  // ---------------- Perfumes ----------------
  {
    id: 25,
    name: "Hubabay Eau De Parfum",
    category: "Perfumes",
    brand: "Hubabay",
    price: 120,
    description: "Elegant perfume with floral and woody notes.",
    image: "https://picsum.photos/seed/hubabayperfume/400/300"
  },
  {
    id: 26,
    name: "Hubabay Citrus Cologne",
    category: "Perfumes",
    brand: "Hubabay",
    price: 95,
    description: "Refreshing citrus fragrance for daily wear.",
    image: "https://picsum.photos/seed/hubabaycologne/400/300"
  },
  {
    id: 27,
    name: "Xpure Cologne Fresh",
    category: "Perfumes",
    brand: "Xpure",
    price: 95,
    description: "Refreshing cologne with citrus and aquatic tones.",
    image: "https://picsum.photos/seed/xpurecologne/400/300"
  },
  {
    id: 28,
    name: "Xpure Perfume Noir",
    category: "Perfumes",
    brand: "Xpure",
    price: 130,
    description: "Dark and bold fragrance with musk and spice.",
    image: "https://picsum.photos/seed/xpurenoir/400/300"
  },
  {
    id: 29,
    name: "Champa Oud Essence",
    category: "Perfumes",
    brand: "Champa",
    price: 140,
    description: "Luxury perfume with rich oud fragrance.",
    image: "https://picsum.photos/seed/champaperfume/400/300"
  },
  {
    id: 30,
    name: "Champa Jasmine Delight",
    category: "Perfumes",
    brand: "Champa",
    price: 115,
    description: "Refreshing floral perfume with jasmine essence.",
    image: "https://picsum.photos/seed/champajasmine/400/300"
  },
  {
    id: 31,
    name: "Alley Rose Mist",
    category: "Perfumes",
    brand: "Alley",
    price: 110,
    description: "Romantic fragrance with soft rose notes.",
    image: "https://picsum.photos/seed/alleyperfume/400/300"
  },
  {
    id: 32,
    name: "Alley Musk Intense",
    category: "Perfumes",
    brand: "Alley",
    price: 135,
    description: "Strong and lasting perfume with musk notes.",
    image: "https://picsum.photos/seed/alleymusk/400/300"
  }
];

export default productList;
