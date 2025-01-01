const data = [
	{
		"image": {
			"thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
			"mobile": "./assets/images/image-waffle-mobile.jpg",
			"tablet": "./assets/images/image-waffle-tablet.jpg",
			"desktop": "./assets/images/image-waffle-desktop.jpg"
		},
		"name": "Waffle with Berries",
		"category": "Waffle",
		"price": 6.50
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
			"mobile": "./assets/images/image-creme-brulee-mobile.jpg",
			"tablet": "./assets/images/image-creme-brulee-tablet.jpg",
			"desktop": "./assets/images/image-creme-brulee-desktop.jpg"
		},
		"name": "Vanilla Bean Crème Brûlée",
		"category": "Crème Brûlée",
		"price": 7.00
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
			"mobile": "./assets/images/image-macaron-mobile.jpg",
			"tablet": "./assets/images/image-macaron-tablet.jpg",
			"desktop": "./assets/images/image-macaron-desktop.jpg"
		},
		"name": "Macaron Mix of Five",
		"category": "Macaron",
		"price": 8.00
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
			"mobile": "./assets/images/image-tiramisu-mobile.jpg",
			"tablet": "./assets/images/image-tiramisu-tablet.jpg",
			"desktop": "./assets/images/image-tiramisu-desktop.jpg"
		},
		"name": "Classic Tiramisu",
		"category": "Tiramisu",
		"price": 5.50
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
			"mobile": "./assets/images/image-baklava-mobile.jpg",
			"tablet": "./assets/images/image-baklava-tablet.jpg",
			"desktop": "./assets/images/image-baklava-desktop.jpg"
		},
		"name": "Pistachio Baklava",
		"category": "Baklava",
		"price": 4.00
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
			"mobile": "./assets/images/image-meringue-mobile.jpg",
			"tablet": "./assets/images/image-meringue-tablet.jpg",
			"desktop": "./assets/images/image-meringue-desktop.jpg"
		},
		"name": "Lemon Meringue Pie",
		"category": "Pie",
		"price": 5.00
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-cake-thumbnail.jpg",
			"mobile": "./assets/images/image-cake-mobile.jpg",
			"tablet": "./assets/images/image-cake-tablet.jpg",
			"desktop": "./assets/images/image-cake-desktop.jpg"
		},
		"name": "Red Velvet Cake",
		"category": "Cake",
		"price": 4.50
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
			"mobile": "./assets/images/image-brownie-mobile.jpg",
			"tablet": "./assets/images/image-brownie-tablet.jpg",
			"desktop": "./assets/images/image-brownie-desktop.jpg"
		},
		"name": "Salted Caramel Brownie",
		"category": "Brownie",
		"price": 4.50
	},
	{
		"image": {
			"thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
			"mobile": "./assets/images/image-panna-cotta-mobile.jpg",
			"tablet": "./assets/images/image-panna-cotta-tablet.jpg",
			"desktop": "./assets/images/image-panna-cotta-desktop.jpg"
		},
		"name": "Vanilla Panna Cotta",
		"category": "Panna Cotta",
		"price": 6.50
	}
];
const items = document.getElementById('items');
let cart = [];

items.innerHTML = '';
data.forEach(element => {
	items.innerHTML += `
            		<div>
						<div class="relative mb-8 has-[.add-to-cart.hidden]:border-red border-2 rounded-xl">
							<img src="${element.image.desktop}" alt="Baklava" class="rounded-xl w-72 lg:block hidden">
							<img src="${element.image.tablet}" alt="Baklava" class="rounded-xl w-72 sm:block lg:hidden hidden">
							<img src="${element.image.mobile}" alt="Baklava" class="rounded-xl w-72 max-sm:block hidden">
							<div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 min-w-32">
								<button class="flex gap-3 bg-white py-3 px-8 pr-14 rounded-full border-rose-300 border add-to-cart" onclick="addToCart(${data.indexOf(element)})">
									<img src="./assets/images/icon-add-to-cart.svg" alt="">
									<p class="font-semibold text-nowrap">Add To Cart</p>
								</button>
								<div class="flex justify-between bg-red py-3 px-4 w-full rounded-full border-rose-300 border added-to-cart hidden">
									<button onclick="decrement(${data.indexOf(element)})">
										<img src="./assets/images/icon-decrement-quantity.svg" alt="minus" class="rounded-full border-white border p-1 w-5 h-5">
									</button>
									<p class="cart-number text-white">1</p>
									<button onclick="increment(${data.indexOf(element)})">
										<img src="./assets/images/icon-increment-quantity.svg" alt="plus" class="rounded-full border-white border p-1 w-5 h-5">
									</button>
								</div>
							</div>
						</div>
						<p class="text-rose-400">${element.category}</p>
						<h3 class="text-rose-900 font-semibold">${element.name}</h3>
						<p class="text-red font-semibold">$${element.price.toFixed(2)}</p>
					</div>
            `;
});

function addToCart(id) {
	if (!cart.filter(obj => obj.id === id).length) {
		cart.push({
			id: id,
			quantity: 1,
		});
	} else {
		cart.filter(obj => obj.id === id)[0].quantity += 1;
	}
	// cartOne(id)
	display(id)
}

function increment(id) {
	cart.filter(obj => obj.id === id)[0].quantity += 1;
	display(id)
}

function decrement(id) {
	cart.filter(obj => obj.id === id)[0].quantity -= 1;
	// cartZero(id)
	display(id)
}

function display(id) {
	displayNum(id);
	displayCart();
}

function displayNum(id) {
	document.querySelector(`.added-to-cart:has(button[onclick="decrement(${id})"]) .cart-number`).innerText = cart.filter(obj => obj.id === id)[0].quantity;
	cart.filter(obj => obj.id === id)[0].quantity === 0 ? cartZero(id) : cartOne(id);
	// Remove object from cart
	cart.filter(obj => obj.quantity === 0).forEach(obj => {
		cart.splice(cart.indexOf(obj), 1);
	})
	console.log(cart);
	// displayCart();
}

function displayCart() {
	var element;
	document.getElementById('cart').innerHTML = '';
	cart.forEach(obj => {
		for (let i in data) {
			if (i == obj.id) {
				element = data[i];
			}
		}
		document.getElementById('cart').innerHTML += `
		<div class="flex justify-between w-full border-b py-2">
                        <div class="grid grid-rows-2 grid-cols-3 gap-2">
                            <h4 class="col-start-1 col-end-4 font-semibold">${element.name}</h4>
                            <span class="text-red font-semibold">${obj.quantity}x</span>
                            <span class="text-rose-400">@ $${element.price.toFixed(2)}</span>
                            <span class="text-rose-500 font-semibold">$${(element.price * obj.quantity).toFixed(2)}</span>
                        </div>
                        <button onclick="removeItem(0)">
                            <img src="./assets/images/icon-remove-item.svg" alt="close" class="border w-6 h-6 p-1 rounded-full">
                        </button>
                    </div>
		`
	})
}

function removeItem(id) {
	cart.splice(cart.indexOf(cart.filter(obj => obj.id == id)[0]), 1);
	display();
}

function cartOne(id) {
	document.querySelector(`.add-to-cart[onclick="addToCart(${id})"]`).classList.add('hidden')
	document.querySelector(`.added-to-cart:has(button[onclick="decrement(${id})"])`).classList.remove('hidden')

	document.getElementById('cartContainer').classList.remove('hidden')
	document.getElementById('emptyCart').classList.add('hidden')
}

function cartZero(id) {
	document.querySelector(`.add-to-cart[onclick="addToCart(${id})"]`).classList.remove('hidden')
	document.querySelector(`.added-to-cart:has(button[onclick="decrement(${id})"])`).classList.add('hidden')

	document.getElementById('emptyCart').classList.remove('hidden')
	document.getElementById('cartContainer').classList.add('hidden')
}