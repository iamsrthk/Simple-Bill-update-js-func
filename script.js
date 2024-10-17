// script.js

// Function to calculate total
function calculateTotal() {
	let total = 0
	const items = document.querySelectorAll(".item-row")

	items.forEach((item) => {
		const quantity = parseInt(item.querySelector(".quantity").textContent)
		const price = parseInt(
			item.querySelector(".price").getAttribute("data-price")
		)
		total += quantity * price
	})

	document.getElementById("total-amount").textContent = total
}

// Function to update quantity
function updateQuantity(button, operation) {
	const quantityElement = button.parentElement.querySelector(".quantity")
	let currentQuantity = parseInt(quantityElement.textContent)

	if (operation === "increase") {
		currentQuantity += 1
	} else if (operation === "decrease" && currentQuantity > 0) {
		currentQuantity -= 1
	}

	quantityElement.textContent = currentQuantity

	// Disable the minus button if quantity is 0
	if (currentQuantity === 0) {
		button.parentElement.querySelector(".minus-btn").disabled = true
	} else {
		button.parentElement.querySelector(".minus-btn").disabled = false
	}

	calculateTotal()
}

// Add event listeners to buttons
document.querySelectorAll(".plus-btn").forEach((button) => {
	button.addEventListener("click", () => updateQuantity(button, "increase"))
})

document.querySelectorAll(".minus-btn").forEach((button) => {
	button.addEventListener("click", () => updateQuantity(button, "decrease"))
})

// Initial calculation
calculateTotal()
