export const menu = [
  {
    category: "",
    items: [
      {
        name: "Sharing is great — but a minimum of one hookah per two guests is required. ",
        isNotice: true,
      },
    ],
  },
  {
    category: "Hookah",
    subcategories: [
      {
        name: "Single Flavours",
        price: 30,
        items: [
          { name: "Double Apple" },
          { name: "Blueberry" },
          { name: "Bluemist", note: "+$5" },
          { name: "Cherry" },
          { name: "Coconut" },
          { name: "Fresh" },
          { name: "Grape" },
          { name: "Guava" },
          { name: "Grapefruit" },
          { name: "Gum" },
          { name: "Gum Cinnamon" },
          { name: "Kiwi" },
          { name: "Lemon" },
          { name: "Mint" },
          { name: "Mango" },
          { name: "Melon" },
          { name: "Orange" },
          { name: "Orange Cream" },
          { name: "Paan", note: "+$5" },
          { name: "Peach" },
          { name: "Pineapple" },
          { name: "Rose" },
          { name: "Vanilla" },
          { name: "Watermelon" },
        ],
      },
      {
        name: "Mix Flavors",
        price: 32,
        items: [
          { name: "Citrus Burst", note: "orange, lemon, mint" },
          { name: "Tropics", note: "mango, pineapple" },
          { name: "Sunrise", note: "grapefruit, coconut" },
          { name: "Triple X", note: "apple, grape, orange" },
          { name: "Blue Ice", note: "blueberry, orange, peach" },
          { name: "Fuzzy", note: "peach, kiwi, mint" },
          { name: "Piña Colada", note: "pineapple, coconut, vanilla" },
          { name: "Cool Melon", note: "melon, watermelon, mint" },
        ],
      },
      {
        name: "Premium Mix",
        price: 35,
        items: [
          { name: "Paradiz", note: "bluemist, orange, mint" },
          { name: "Midnight", note: "bluemist, kiwi, mint" },
          { name: "Coco Puff", note: "coconut, saffron" },
          { name: "Adalya Lady Killer", note: "honeydew, mango, barries, mint " },
          { name: "Adalya Love 66", note: "passionfruit, watermelon, mint" },
        ],
      },
      {
        name: "Special Add-on",
        items: [
          { name: "Fruit Head", price: 15 },
          { name: "Juice/Milk", price: 5 },
          { name: "Ice Bowl", price: 5 },
        ],
      },
    ],
  },
  {
    category: "Food & Drinks",
    subcategories: [
      {
        name: "Tea",
        items: [
          { name: "Persian Tea", note: "Black tea with cardamom", price: 5 },
          { name: "Saffron Tea", price: 5 },
          { name: "Green Tea", price: 5 },
          { name: "Chamomile Tea", price: 5 },
          { name: "Tea Pot", price: 15, note: "2-4 people" },
          { name: "Nabat", price: 1 },
          { name: "Dates", price: 5 },
          { name: "Fresh Mint", price: 1 },
        ],
      },
      {
        name: "Coffee",
        items: [
          { name: "Tehran Fog", price: 7, note: "Persian tea, espresso, condensed milk" },
          { name: "Coffee", price: 6 },
          { name: "Turkish Coffee", price: 6 },
          { name: "Espresso", price: 6 },
          { name: "Americano", price: 6 },
          { name: "Hot Chocolate", price: 6 },
          { name: "French Vanilla", price: 6 },
        ],
      },
      {
        name: "Cold Drinks",
        items: [
          { name: "Fruit Juice", price: 7, note: "Apple/Orange/Pomegranate" },
          { name: "Red Bull", price: 5 },
          { name: "Barbican", price: 5, note: "Apple/Peach/Pomegranate" },
          { name: "Vitamin Water", price: 5 },
          { name: "Ice Tea", price: 4 },
          { name: "Pop", price: 3, note: "Coke/Coke Zero/Sprite/Ginger Ale/Fanta" },
          { name: "Water", price: 3 },
        ],
      },
      {
        name: "Food",
        items: [
          { name: "Pizza", price: 25, note: "Chicken/Beef/Pepperoni/Veggie, 12 inch (medium)" },
          { name: "Chicken Strips & Fries", price: 21 },
          { name: "Wings", price: 19, note: "Salt & Pepper or Hot, 1lb" },
          { name: "Chicken Samosa", price: 15, note: "2 pieces with chips and sour cream" },
          { name: "Veggie Samosa", price: 14, note: "2 pieces with chips and sour cream", vegetarian: true },
          { name: "Pom-Power Salad", note: "Broccoli, green onion, pomegranate, pumpkin seed, feta cheese, grilled chickpeas with paprika", price: 15, vegetarian: true },
          { name: "Green Goddess Salad", note: "Lettuce, celery, cauliflower, green onion, broccoli, pumpkin seeds, black beans", price: 15, vegetarian: true },
          { name: "Fries", price: 12, vegetarian: true },
        ],
      },
      {
        name: "Snacks",
        items: [
          { name: "Mixed Fruit & Nuts", price:  12, vegetarian: true },
          { name: "Chips", price: 9, note: "With sour cream", vegetarian: true },
          { name: "Peanut Butter Pretzels", price: 8, vegetarian: true },
          { name: "Popcorn", price: 6, vegetarian: true },
        ],
      },
      {
        name: "Dessert",
        items: [
          { name: "Baklava", price: 11, vegetarian: true },
          { name: "Cheesecake", price: 10, vegetarian: true },
          { name: "Ice Cream", price: 10, note: "Vanilla/Saffron/Chocolate, 3 scoops", vegetarian: true },
          { name: "Mini Cream Puffs", price: 8, note: "9 pieces", vegetarian: true },
          { name: "Mochi Ice Cream Trio", price: 7, note: "Vanilla, Mango, Strawberry", vegetarian: true },
        ],
      },
    ],
  },
  {
    category: "Merch",
    items: [
      { name: "Disposable hookah", note: "for camping", price: 15 },
      { name: "Premium Hookah", note: "for gifting & home", price: 200 },
    ],
  },
]; 