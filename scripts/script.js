const items = document.getElementById('items');

fetch("../data.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error
                (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        items.innerHTML = '';
        data.forEach(element => {
            items.innerHTML += `
            <div data-name="Waffle with Berries">
						<div class="relative mb-8 has-[.add-to-cart.hidden]:border-red border-2 rounded-xl">
							<img src="${element.image.desktop}" alt="Baklava" class="rounded-xl w-72 lg:block hidden">
							<img src="${element.image.tablet}" alt="Baklava" class="rounded-xl w-72 sm:block lg:hidden hidden">
							<img src="${element.image.mobile}" alt="Baklava" class="rounded-xl w-72 max-sm:block hidden">
							<div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
								<button class="flex gap-3 bg-white py-3 px-8 pr-14 rounded-full border-rose-300 border add-to-cart" onclick="add(${element.name})">
									<img src="./assets/images/icon-add-to-cart.svg" alt="">
									<p class="font-semibold text-nowrap">Add To Cart</p>
								</button>
								<div class="flex justify-between bg-red py-3 px-8 rounded-full border-rose-300 border added-to-cart hidden">
									<button onclick="decrement(${element.name})">
										<img src="./assets/images/icon-decrement-quantity.svg" alt="minus" class="rounded-full border-white border p-1 w-5 h-5">
									</button>
									<p class="cart-number text-white">1</p>
									<button onclick="increment(${element.name})">
										<img src="./assets/images/icon-increment-quantity.svg" alt="plus" class="rounded-full border-white border p-1 w-5 h-5">
									</button>
								</div>
							</div>
						</div>
						<p class="text-rose-400">${element.category}</p>
						<h3 class="text-rose-900 font-semibold">${element.name}</h3>
						<p class="text-red font-semibold">$${element.price.toFixed(2)}</p>
					</div>
            `
        });
    }).catch((error) =>
        console.error("Unable to fetch data:", error));


function add(name) {

}