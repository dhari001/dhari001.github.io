// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Almond Milk",
		lactoseIntolerant: true,
		nutAllergies: true,
		price: 3.99
	},
	{
		name: "Peanut Butter",
		lactoseIntolerant: true,
		nutAllergies: false,
		price: 2.30
	},
	{
		name: "Cheese",
		lactoseIntolerant: false,
		nutAllergies: true,
		price: 5.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Nut Allergies") && (prods[i].nutAllergies == true)){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			product_prices.push(prods[i].price);
		}
	}
	return product_names;
	return product_prices;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}