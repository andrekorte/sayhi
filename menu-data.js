/* Say Hi — menu data, mirrored from the live Clover order page.
   img paths are relative to the site root (assets/images/...).
   Update prices/availability here; the live order page stays the
   real-time source of truth for pricing & availability. */
window.SAYHI_MENU = [
  {
    id: "noodles", label: "Noodle Soups", emoji: "🍜",
    note: "Every bowl your way — beef, chicken, pork, veg, tofu or squid, with egg, rice, vermicelli or flat noodles.",
    items: [
      { name: "No.1 Boat Noodles", desc: "Signature rich, dark broth.", price: "18.99", hot: true, img: "assets/images/bowl-boat.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no1-boat-noodles-84Y1P058466TE" },
      { name: "No.2 Pinky Noodle (Yen Ta Fo)", desc: "Tangy pink seafood soup.", price: "18.99", img: "assets/images/bowl-yentafo.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no2-pinky-noodle-yen-ta-fo-XJ5XKPDVJM7ER" },
      { name: "No.3 Spicy & Sour Soup", desc: "Bright, punchy, hot & sour.", price: "18.99", img: "assets/images/bowl-spicysour.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no3-spicy-and-sour-soup-M4J457JRPZJKA"  },
      { name: "No.4 Creamy Tom Yum Soup", desc: "Hot, sour, creamy, addictive.", price: "18.99", hot: true, img: "assets/images/bowl-tomyum.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no4-creamy-tom-yum-soup-3X5AYV1KE7J5M" },
      { name: "No.5 Dry Noodle Soy Sauce", desc: "Noodles tossed, no soup.", price: "18.99", img: "assets/images/bowl-dry.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no5-dry-noodle-soy-sauce-HVT1M9CATR2KR" },
      { name: "No.6 Clear Noodle Soup", desc: "Light, clean, comforting.", price: "18.99", img: "assets/images/bowl-clear.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no6-clear-noodles-soup-9KZYD45XPT43T" },
      { name: "No.7 Tum Sen (Spicy Noodle Salad)", desc: "Som-tum style, but noodles.", price: "18.99", img: "assets/images/bowl-tumsen.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/no7-tum-sen-spicy-noodles-salad-WV54DH68SZ9BY" }
    ]
  },
  {
    id: "entree", label: "Entrées", emoji: "🥢",
    items: [
      { name: "Spring Rolls", desc: "Crispy & golden.", price: "6.00", img: "assets/images/ent-springrolls.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/spring-rolls-SF4KBDH09VV76" },
      { name: "Spicy Chicken Wings", desc: "", price: "6.00", img: "assets/images/ent-wings.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/spicy-chicken-wing-5DXZ7TR88DAEC" },
      { name: "Pork Wonton", desc: "", price: "6.00", img: "assets/images/ent-wonton.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/pork-wonton-X7KQ5WD4AEKTC" },
      { name: "Moo Ping — Pork Skewer (1 pc)", desc: "Grilled marinated pork.", price: "3.50", hot: true, img: "assets/images/ent-mooping.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/pork-skewers-moo-ping-1-pcs-FKQV1WK3MW2AR" },
      { name: "Isaan Sausage", desc: "Fermented, sour, northeastern.", price: "9.99", img: "assets/images/ent-isaan.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/isaan-sausage-890YC2FX7E0HR" },
      { name: "Chicken Meatballs", desc: "On skewers.", price: "7.00", img: "assets/images/ent-meatballs.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/chicken-meat-ball-EXY0CVF1Q1HQG" },
      { name: "Pork Meatballs", desc: "On skewers.", price: "7.00", img: "assets/images/ent-meatball-pork.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/pork-meat-ball-YYP9NH0ECC484" },
      { name: "Beef Meatballs", desc: "On skewers.", price: "7.00", img: "assets/images/ent-meatball-beef.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/beef-meat-ball-3H91TGACJH81M" },
      { name: "Moo Ping Sticky Rice Set", desc: "Pork skewers + sticky rice.", price: "12.99", img: "assets/images/ent-mooping-set.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/moo-ping-sticky-rice-set-N5B30GQEZWCG4" },
      { name: "Thai Sticky Rice", desc: "", price: "3.00", img: "assets/images/sticky-rice.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/thai-sticky-rice-BN7TD4S43Q430" }
    ]
  },
  {
    id: "snack", label: "Thai Snacks", emoji: "🌶️",
    items: [
      { name: "Three-Flavour Squid", desc: "Sweet, sour, spicy.", price: "5.00", img: "assets/images/ent-squid.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/three-flavour-squid-MA920JJPG0J4Y" },
      { name: "All Coconut", desc: "Coconut snowball, refreshing.", price: "9.00", img: "assets/images/coconut-snowball.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/all-coconut-JYEWZ2QY3JZ2J" },
      { name: "Chilli Oil", desc: "House-made. Goes on everything.", price: "7.00", img: "assets/images/snack-chillioil.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/chili-oil-ABTYZ8FECTKDM" },
      { name: "Nam Prik Gak Moo", desc: "", price: "7.00", img: "assets/images/snack-namprik.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/nam-prik-gak-moo-V7KZJ5EBRKQGE" },
      { name: "Pork Beef Jerky", desc: "", price: "12.00", img: "assets/images/snack-jerky.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/pork-beef-jerky-T1140BMHV35NC" },
      { name: "Spicy Pickled Mango", desc: "", price: "3.20", img: "assets/images/snack-mango.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/spicy-pickle-mango-09Q15JHYFP01C" },
      { name: "Durian", desc: "King of fruit. You've been warned.", price: "41.00", img: "assets/images/snack-durian.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/durian-YFS6H0SEAZ1CT" }
    ]
  },
  {
    id: "dessert", label: "Desserts", emoji: "🍮",
    items: [
      { name: "Bua Loy", desc: "Rice-flour dumplings in warm coconut.", price: "9.99", hot: true, img: "assets/images/dessert-bualoy.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/bua-loy-M2A2E2HF83QG0" },
      { name: "Ka Nom Tuay", desc: "Coconut custard cups.", price: "8.00", img: "assets/images/dessert-kanomtuay.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/ka-nom-tuay-YMBGQ0F64RM5E" },
      { name: "Khanom Chan — Thai Layer Cake", desc: "Jewel-toned & chewy.", price: "8.00", img: "assets/images/dessert-khanomchan.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/khanom-chan-thai-layer-cake-RJNA3NP6TEHM4" }
    ]
  },
  {
    id: "drinks", label: "Thai Drinks", emoji: "🧋",
    items: [
      { name: "Thai Milk Tea (Large)", desc: "The classic. Sweet & strong.", price: "9.00", hot: true, img: "assets/images/drink-thaitea.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/thai-milk-tea-large-SH32JFNQX5GZ2" },
      { name: "Thai Milk Tea (Medium)", desc: "", price: "7.00", img: "assets/images/drink-thaitea-med.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/thai-milk-tea-medium-D5TQ9YC9Q08RJ" },
      { name: "Thai Tea — Cloud Coconut", desc: "Topped with coconut cloud.", price: "7.00", img: "assets/images/drink-cloudcoconut.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/thai-tea-cloud-coconut-3HMS3Y4Z74T5R" },
      { name: "Thai Lemon Tea", desc: "", price: "7.00", img: "assets/images/drink-lemontea.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/thai-lemon-tea-WSQ162TTXKCRW" },
      { name: "Red Lemonade", desc: "", price: "7.00", img: "assets/images/drink-redlemon.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/red-lemonade-XW4YW025504E4" },
      { name: "Strawberry Magic", desc: "", price: "7.00", img: "assets/images/drink-strawberry.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/strawberry-magic-P18Z8ZVQF7BW2" },
      { name: "Green Grape Soda", desc: "", price: "7.00", img: "assets/images/drink-grape.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/green-grape-soda-HPJ586B1TVXYT" },
      { name: "Dirty Coke", desc: "Coke + secrets.", price: "7.00", img: "assets/images/drink-dirtycoke.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/dirty-coke-B8XKDWNGQGP56" },
      { name: "Blue Sky Soda", desc: "", price: "7.00", img: "assets/images/drink-bluesky.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/blue-sky-soda-KRXHTS478EH36" },
      { name: "Yakult Pop", desc: "", price: "7.00", img: "assets/images/drink-yakult.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/yakult-pop-3B7JVK0ZQH57A" },
      { name: "Sour Plum Soda", desc: "", price: "7.00", img: "assets/images/drink-sourplum.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/sour-plum-soda-PRCMJJ61WNHR0" }
    ]
  },
  {
    id: "soft", label: "Soft Drinks", emoji: "🥤",
    items: [
      { name: "Coke", desc: "", price: "3.00", img: "assets/images/soft-coke.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/coke-FNN8NEFSP3K80" },
      { name: "Coke Zero", desc: "", price: "3.00", img: "assets/images/soft-cokezero.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/coke-zero-4C8YDWB8697MP" },
      { name: "Lemonade", desc: "", price: "3.00", img: "assets/images/soft-lemonade.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/lemonade-Z0XVVG1BXB21G" },
      { name: "Water", desc: "", price: "3.00", img: "assets/images/soft-water.jpg", order: "https://sayhi-thainoodlebar.cloveronline.com.au/menu/water-DBVPE2PT101HM" }
    ]
  }
];
