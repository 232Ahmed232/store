const productList = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      category: "Smartphones",
      brand: "Apple",
      price: 1099,
      description: "Advanced smartphone with A16 Bionic chip and Dynamic Island.",
      image: "https://picsum.photos/seed/iphone/400/300"
    },
    {
      id: 2,
      name: "Samsung Galaxy S22 Ultra",
      category: "Smartphones",
      brand: "Samsung",
      price: 1199,
      description: "Powerful Android phone with 108MP camera and S Pen.",
      image: "https://picsum.photos/seed/samsung/400/300"
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      brand: "Sony",
      price: 399,
      description: "Noise-canceling wireless headphones with premium audio.",
      image: "https://picsum.photos/seed/sonyheadphones/400/300"
    },
    {
      id: 4,
      name: "Dell XPS 13",
      category: "Laptops",
      brand: "Dell",
      price: 1399,
      description: "Compact ultrabook with 13-inch InfinityEdge display.",
      image: "https://picsum.photos/seed/dellxps/400/300"
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      category: "Shoes",
      brand: "Nike",
      price: 150,
      description: "Stylish sneakers with responsive Air Max cushioning.",
      image: "https://picsum.photos/seed/nike270/400/300"
    },
    {
      id: 6,
      name: "Canon EOS R50",
      category: "Cameras",
      brand: "Canon",
      price: 799,
      description: "Mirrorless camera with 24MP sensor and 4K video support.",
      image: "https://picsum.photos/seed/canonr50/400/300"
    },
    {
      id: 7,
      name: "Apple MacBook Air M2",
      category: "Laptops",
      brand: "Apple",
      price: 1299,
      description: "Lightweight laptop with M2 chip and all-day battery.",
      image: "https://picsum.photos/seed/macbookair/400/300"
    },
    {
      id: 8,
      name: "Adidas Ultraboost 22",
      category: "Shoes",
      brand: "Adidas",
      price: 180,
      description: "High-performance running shoes with Boost technology.",
      image: "https://picsum.photos/seed/adidasboost/400/300"
    },
    {
      id: 9,
      name: "GoPro HERO11",
      category: "Cameras",
      brand: "GoPro",
      price: 499,
      description: "Waterproof action camera with HyperSmooth stabilization.",
      image: "https://picsum.photos/seed/gopro/400/300"
    },
    {
      id: 10,
      name: "HP Envy Printer",
      category: "Printers",
      brand: "HP",
      price: 129,
      description: "All-in-one wireless color printer with mobile printing.",
      image: "https://picsum.photos/seed/hpprinter/400/300"
    },
    {
      id: 11,
      name: "JBL Flip 6",
      category: "Audio",
      brand: "JBL",
      price: 129,
      description: "Waterproof Bluetooth speaker with bold sound.",
      image: "https://picsum.photos/seed/jblflip/400/300"
    },
    {
      id: 12,
      name: "Apple Watch Series 8",
      category: "Wearables",
      brand: "Apple",
      price: 399,
      description: "Smartwatch with advanced health tracking features.",
      image: "https://picsum.photos/seed/applewatch/400/300"
    },
    {
      id: 13,
      name: "Amazon Echo Dot",
      category: "Smart Home",
      brand: "Amazon",
      price: 49,
      description: "Compact smart speaker with Alexa voice assistant.",
      image: "https://picsum.photos/seed/echodot/400/300"
    },
    {
      id: 14,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      brand: "Logitech",
      price: 99,
      description: "Precision ergonomic mouse with quiet clicks.",
      image: "https://picsum.photos/seed/logitechmx/400/300"
    },
    {
      id: 15,
      name: "Fitbit Charge 5",
      category: "Wearables",
      brand: "Fitbit",
      price: 179,
      description: "Fitness tracker with heart rate, ECG, and sleep tools.",
      image: "https://picsum.photos/seed/fitbitcharge/400/300"
    },
    {
      id: 16,
      name: "Asus ROG Zephyrus G14",
      category: "Laptops",
      brand: "Asus",
      price: 1599,
      description: "Gaming laptop with Ryzen processor and RTX graphics.",
      image: "https://picsum.photos/seed/asusrog/400/300"
    },
    {
      id: 17,
      name: "Beats Studio3",
      category: "Headphones",
      brand: "Beats",
      price: 349,
      description: "Premium over-ear headphones with noise cancelation.",
      image: "https://picsum.photos/seed/beatsstudio/400/300"
    },
    {
      id: 18,
      name: "Google Nest Hub",
      category: "Smart Home",
      brand: "Google",
      price: 99,
      description: "Smart display with Google Assistant and device control.",
      image: "https://picsum.photos/seed/nesthub/400/300"
    },
    {
      id: 19,
      name: "Roku Streaming Stick 4K",
      category: "Streaming",
      brand: "Roku",
      price: 49,
      description: "Easy-to-use streaming device with 4K support.",
      image: "https://picsum.photos/seed/roku/400/300"
    },
    {
      id: 20,
      name: "TP-Link AX3000",
      category: "Networking",
      brand: "TP-Link",
      price: 99,
      description: "High-speed Wi-Fi 6 router for smooth streaming.",
      image: "https://picsum.photos/seed/tplinkax/400/300"
    },
    {
      id: 21,
      name: "Instant Pot Duo",
      category: "Kitchen",
      brand: "Instant Pot",
      price: 89,
      description: "7-in-1 pressure cooker for fast, healthy meals.",
      image: "https://picsum.photos/seed/instantpot/400/300"
    },
    {
      id: 22,
      name: "Ninja Air Fryer XL",
      category: "Kitchen",
      brand: "Ninja",
      price: 129,
      description: "Large-capacity air fryer with crisping technology.",
      image: "https://picsum.photos/seed/ninjaair/400/300"
    },
    {
      id: 23,
      name: "Lenovo ThinkPad X1",
      category: "Laptops",
      brand: "Lenovo",
      price: 1699,
      description: "Business laptop with long battery life and robust design.",
      image: "https://picsum.photos/seed/thinkpadx1/400/300"
    },
    {
      id: 24,
      name: "Microsoft Surface Pro 9",
      category: "Tablets",
      brand: "Microsoft",
      price: 999,
      description: "Versatile 2-in-1 tablet with detachable keyboard.",
      image: "https://picsum.photos/seed/surfacepro/400/300"
    },
    {
      id: 25,
      name: "iPad Air 5th Gen",
      category: "Tablets",
      brand: "Apple",
      price: 599,
      description: "Powerful lightweight tablet with Apple M1 chip.",
      image: "https://picsum.photos/seed/ipadair/400/300"
    },
    {
      id: 26,
      name: "OnePlus 11",
      category: "Smartphones",
      brand: "OnePlus",
      price: 799,
      description: "Fast and smooth Android phone with Hasselblad camera.",
      image: "https://picsum.photos/seed/oneplus11/400/300"
    },
    {
      id: 27,
      name: "Garmin Forerunner 255",
      category: "Wearables",
      brand: "Garmin",
      price: 349,
      description: "Advanced running watch with GPS and VO2 max tracking.",
      image: "https://picsum.photos/seed/garminwatch/400/300"
    },
    {
      id: 28,
      name: "DJI Mini 3 Pro",
      category: "Drones",
      brand: "DJI",
      price: 759,
      description: "Lightweight 4K drone with obstacle avoidance and long flight time.",
      image: "https://picsum.photos/seed/djidrone/400/300"
    },
    {
      id: 29,
      name: "Samsung Galaxy Tab S8",
      category: "Tablets",
      brand: "Samsung",
      price: 699,
      description: "Premium Android tablet with S Pen and AMOLED screen.",
      image: "https://picsum.photos/seed/tabS8/400/300"
    },
    {
      id: 30,
      name: "Razer DeathAdder V2",
      category: "Accessories",
      brand: "Razer",
      price: 69,
      description: "Gaming mouse with high precision and ergonomic design.",
      image: "https://picsum.photos/seed/razerda/400/300"
    }
  ];
  
  export default productList;
  