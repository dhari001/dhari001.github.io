const selectedRestrictions = new Set()

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
  {

    name: "Almond Milk",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 3.99,
    src: './assets/milk.png',
    category: 'Dairy'
  },
  {
    name: "Peanut Butter",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: false,
		price: 2.30,
    src: './assets/peanutButter.png',
    category: 'Protein Foods'
  },
  {
    name: "Kraft Singles",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 5.00,
    src: './assets/cheese.png',
    category: 'Dairy'
  },
  {
    name: "Apples",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 2.99,
    src: './assets/apple.png',
    category: 'Fruit'
  },
  {
    name: "Pepporoni Pizza",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 15.50,
    src: './assets/pizza.png',
    category: 'Frozen Foods'
  },
  {
    name: "Lays Chips",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.00,
    src: './assets/chips.png',
    category: 'Snacks'
  },
  {
    name: "Greek Yogurt",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 3.99,
    src: './assets/yogurt.png',
    category: 'Dairy'
  },
  {
    name: "Lindt Chocolate (Nuts and Berries)",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 2.55,
    src: './assets/lindt.png',
    category: 'Dairy'
  },
  {
    name: "Ice Cream",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 7.00,
    src: './assets/iceCream.png',
    category: 'Dairy'
  },
  {
    name: "Bread",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 6.56,
    src: './assets/bread.png',
    category: 'Grains'
  },
  {
    name: "Banana",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.00,
    src: './assets/banana.png',
    category: 'Fruits'
  },
  {
    name: "Ham",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 3.50,
    src: './assets/ham.png',
    category: 'Frozen Foods'
  },
  {
    name: "Doriots",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.50,
    src: './assets/doritos.png',
    category: 'Snacks'
  },
  {
    name: "Tortilla",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 3.50,
    src: './assets/tortilla.png',
    category: 'Grains'
  },
  {
    name: "Pasta",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 8.50,
    src: './assets/pasta.png',
    category: 'Grains'
  },
  {
    name: "Salmon",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.50,
    src: './assets/salmon.png',
    category: 'Fish'
  },
  {
    name: "Tuna",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.50,
    src: './assets/tuna.png',
    category: 'Fish'
  },
  {
    name: "Herring",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.50,
    src: './assets/herring.png',
    category: 'Fish'
  },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
  let filteredProducts = [];
  for (let i = 0; i < prods.length; i += 1) {
    if ((selectedRestrictions.has("LactoseIntolerant")) && (prods[i].lactoseIntolerant == false)){
      continue;
    }
    if ((selectedRestrictions.has("NutAllergies")) && (prods[i].nutAllergies == false)){
      continue;
    }
    if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
      continue;
    }
    filteredProducts.push(prods[i]);
  }
  return filteredProducts;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  for (let i = 0; i < chosenProducts.length; i += 1) {
    totalPrice += chosenProducts[i]
  }
  const formattedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
  return formattedPrice;
}