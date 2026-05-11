// Product Data Array
const products = [
    { id: 1, name: "Casual Summer Shirt", price: 2500, image: "images/clothes1.jpg" },
    { id: 2, name: "Slim Fit Jeans", price: 3500, image: "images/clothes2.jpg" },
    { id: 3, name: "Urban Hoodie", price: 4000, image: "images/clothes3.jpg" },
    { id: 4, name: "Designer T-Shirt", price: 1800, image: "images/clothes4.jpg" }
];

const productGrid = document.querySelector('.product-grid');
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

// Function to display products
function displayProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Ksh ${product.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

// Function for Interactivity
function addToCart() {
    cartCount++;
    cartDisplay.innerText = cartCount;
    alert("Item added to cart! Group 4 thanks you.");
}

// Initialize
displayProducts();