// Sample data for cart items (in a real application, this would be dynamic)
const cartItems = [
    { name: 'Product 1', quantity: 1, price: 19.99 },
    { name: 'Product 2', quantity: 2, price: 9.99 }
];

function loadCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    cartTableBody.innerHTML = ''; // Clear any existing content

    cartItems.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>Rs${item.price.toFixed(2)}</td>
            <td>Rs${(item.quantity * item.price).toFixed(2)}</td>
        `;

        cartTableBody.appendChild(row);
    });
}

document.getElementById('checkout-btn').addEventListener('click', function() {
    document.querySelector('.cart-container').style.display = 'none';
    document.querySelector('.checkout-container').style.display = 'block';
});

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderStatus = document.getElementById('order-status');
    orderStatus.textContent = 'Processing your order...';

    setTimeout(() => {
        orderStatus.textContent = 'Order placed successfully!';
    }, 2000);
});

// Load the cart items on page load
loadCart();
