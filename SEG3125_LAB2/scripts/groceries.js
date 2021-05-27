// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Almond Milk - $3.99",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 3.99
	},
	{
		name: "Peanut Butter - $2.30",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: false,
		price: 2.30
	},
	{
		name: "Kraft Singles - $5.00",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 5.00
	},
	{
		name: "Apples - $2.99",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: true,
		price: 2.99
	},
	{
		name: "Pepporoni Pizza - $15.50",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 15.50
	},
	{
		name: "Lays Chips - $4.00",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 4.00
	},
	{
		name: "Greek Yogurt - $3.99",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: true,
		price: 3.99
	},
	{
		name: "Lindt Chocolate (Nuts and Berries) - $2.55",
		lactoseIntolerant: true,
		nutAllergies: false,
		isOrganic: false,
		price: 2.55
	},
	{
		name: "Ice Cream- $7.00",
		lactoseIntolerant: false,
		nutAllergies: true,
		isOrganic: false,
		price: 7.00
	},
	{
		name: "Bread - $6.56",
		lactoseIntolerant: true,
		nutAllergies: true,
		isOrganic: false,
		price: 6.56
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
			
		}
		else if ((restriction == "Nut Allergies") && (prods[i].nutAllergies == true)){
			product_names.push(prods[i].name);
			
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		
		}
		
	}
	return product_names;
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