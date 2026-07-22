/* Say Hi — menu data, mirrored from the live Clover order page.
   img paths are relative to the site root (assets/images/...).
   Update prices/availability here; the live order page stays the
   real-time source of truth for pricing & availability. */
window.SAYHI_MENU = [
  {
    id: "noodles", label: "Noodle Soups", emoji: "🍜",
    note: "Every bowl your way — beef, chicken, pork, veg, tofu or squid, with egg, rice, vermicelli or flat noodles.",
    items: [
      { name: "No.1 Boat Noodles", desc: "Signature rich, dark broth.", price: "18.99", hot: true, img: "assets/images/bowl-boat.jpg" },
      { name: "No.2 Pinky Noodle (Yen Ta Fo)", desc: "Tangy pink seafood soup.", price: "18.99", img: "assets/images/bowl-yentafo.jpg" },
      { name: "No.3 Spicy & Sour Soup", desc: "Bright, punchy, hot & sour.", price: "18.99", img: "assets/images/bowl-spicysour.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no3-spicy-and-sour-soup-M4J457JRPZJKA" },
      { name: "No.4 Creamy Tom Yum Soup", desc: "Hot, sour, creamy, addictive.", price: "18.99", hot: true, img: "assets/images/bowl-tomyum.jpg" },
      { name: "No.5 Dry Noodle Soy Sauce", desc: "Noodles tossed, no soup.", price: "18.99", img: "assets/images/bowl-dry.jpg" },
      { name: "No.6 Clear Noodle Soup", desc: "Light, clean, comforting.", price: "18.99", img: "assets/images/bowl-clear.jpg" },
      { name: "No.7 Tum Sen (Spicy Noodle Salad)", desc: "Som-tum style, but noodles.", price: "18.99", img: "assets/images/bowl-tumsen.jpg" }
    ]
  },
  {
    id: "entree", label: "Entrées", emoji: "🥢",
    items: [
      { name: "Spring Rolls", desc: "Crispy & golden.", price: "6.00", img: "assets/images/ent-springrolls.jpg" },
      { name: "Spicy Chicken Wings", desc: "", price: "6.00", img: "assets/images/ent-wings.jpg" },
      { name: "Pork Wonton", desc: "", price: "6.00" },
      { name: "Moo Ping — Pork Skewer (1 pc)", desc: "Grilled marinated pork.", price: "3.50", hot: true, img: "assets/images/ent-mooping.jpg" },
      { name: "Isaan Sausage", desc: "Fermented, sour, northeastern.", price: "9.99" },
      { name: "Chicken Meatballs", desc: "On skewers.", price: "7.00", img: "assets/images/ent-meatballs.jpg" },
      { name: "Pork Meatballs", desc: "On skewers.", price: "7.00" },
      { name: "Beef Meatballs", desc: "On skewers.", price: "7.00" },
      { name: "Moo Ping Sticky Rice Set", desc: "Pork skewers + sticky rice.", price: "12.99", img: "assets/images/ent-mooping-set.jpg" },
      { name: "Thai Sticky Rice", desc: "", price: "3.00", img: "assets/images/sticky-rice.jpg" }
    ]
  },
  {
    id: "snack", label: "Thai Snacks", emoji: "🌶️",
    items: [
      { name: "Three-Flavour Squid", desc: "Sweet, sour, spicy.", price: "5.00", img: "assets/images/ent-squid.jpg" },
      { name: "All Coconut", desc: "Coconut snowball, refreshing.", price: "9.00", img: "assets/images/coconut-snowball.jpg" },
      { name: "Chilli Oil", desc: "House-made. Goes on everything.", price: "7.00" },
      { name: "Nam Prik Gak Moo", desc: "", price: "7.00" },
      { name: "Pork Beef Jerky", desc: "", price: "12.00" },
      { name: "Spicy Pickled Mango", desc: "", price: "3.20" },
      { name: "Durian", desc: "King of fruit. You've been warned.", price: "41.00" }
    ]
  },
  {
    id: "dessert", label: "Desserts", emoji: "🍮",
    items: [
      { name: "Bua Loy", desc: "Rice-flour dumplings in warm coconut.", price: "9.99", hot: true, img: "assets/images/dessert-bualoy.jpg" },
      { name: "Ka Nom Tuay", desc: "Coconut custard cups.", price: "8.00", img: "assets/images/dessert-kanomtuay.jpg" },
      { name: "Khanom Chan — Thai Layer Cake", desc: "Jewel-toned & chewy.", price: "8.00", img: "assets/images/dessert-khanomchan.jpg" }
    ]
  },
  {
    id: "drinks", label: "Thai Drinks", emoji: "🧋",
    items: [
      { name: "Thai Milk Tea (Large)", desc: "The classic. Sweet & strong.", price: "9.00", hot: true, img: "assets/images/drink-thaitea.jpg" },
      { name: "Thai Milk Tea (Medium)", desc: "", price: "7.00", img: "assets/images/drink-thaitea.jpg" },
      { name: "Thai Tea — Cloud Coconut", desc: "Topped with coconut cloud.", price: "7.00", img: "assets/images/drink-cloudcoconut.jpg" },
      { name: "Thai Lemon Tea", desc: "", price: "7.00", img: "assets/images/drink-lemontea.jpg" },
      { name: "Red Lemonade", desc: "", price: "7.00", img: "assets/images/drink-redlemon.jpg" },
      { name: "Strawberry Magic", desc: "", price: "7.00", img: "assets/images/drink-strawberry.jpg" },
      { name: "Green Grape Soda", desc: "", price: "7.00", img: "assets/images/drink-grape.jpg" },
      { name: "Dirty Coke", desc: "Coke + secrets.", price: "7.00", img: "assets/images/drink-dirtycoke.jpg" },
      { name: "Blue Sky Soda", desc: "", price: "7.00", img: "assets/images/drink-bluesky.jpg" },
      { name: "Yakult Pop", desc: "", price: "7.00" },
      { name: "Sour Plum Soda", desc: "", price: "7.00" }
    ]
  },
  {
    id: "soft", label: "Soft Drinks", emoji: "🥤",
    items: [
      { name: "Coke", desc: "", price: "3.00" },
      { name: "Coke Zero", desc: "", price: "3.00" },
      { name: "Lemonade", desc: "", price: "3.00" },
      { name: "Water", desc: "", price: "3.00" }
    ]
  }
];
