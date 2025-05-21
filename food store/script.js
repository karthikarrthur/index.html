
// script.js

// Initialize an empty cart
let cart = [];

// Select all "Add to Cart" buttons
const addButtons = document.querySelectorAll('.add-to-cart');

// Add event listener for each button
addButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add item to the cart
function addToCart(event) {
    const itemElement = event.target.parentElement;
    const itemId = itemElement.getAttribute('data-id');
    const itemName = itemElement.getAttribute('data-name');
    const itemPrice = parseFloat(itemElement.getAttribute('data-price'));

    const cartItem = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantity: 1
    };

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push(cartItem);
    }

    // Update cart display
    updateCart();
}

// Update the cart UI
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty</li>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Update total price
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Checkout button event listener
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some items before checking out.");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        alert(`Your order has been placed! Total amount: $${totalAmount.toFixed(2)}`);
        cart = [];  // Clear the cart after checkout
        updateCart();  // Update the cart display
    }
});
