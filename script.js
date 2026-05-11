// 1. Product Data Array 
// (Change names or images here to update your shop)
const products = [
    { id: 1, name: "Casual Summer Shirt", price: 2500, image: "images/clothes1.jpg" },
    { id: 2, name: "Slim Fit Jeans", price: 3500, image: "images/clothes2.jpg" },
    { id: 3, name: "Urban Hoodie", price: 4000, image: "images/clothes3.jpg" },
    { id: 4, name: "Designer T-Shirt", price: 1800, image: "images/clothes4.jpg" }
];

// Select elements from the HTML
const productGrid = document.querySelector('.product-grid');
const cartCountDisplay = document.getElementById('cart-count');
let cartCount = 0;

// 2. Function to Render Products to the Screen
function renderProducts(items) {
    // If no products match the search
    if (items.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No clothes found matching your search.</p>`;
        return;
    }

    productGrid.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Ksh ${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// 3. Search Functionality
function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filtered);
}

// 4. Cart Logic
function addToCart(productName) {
    cartCount++;
    cartCountDisplay.innerText = cartCount;
    
    // Alert the user
    alert(`${productName} has been added to your cart! Group 4 appreciates your support.`);
    
    // Visual feedback: Make the cart icon pulse
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartIcon.style.transform = "scale(1)";
    }, 200);
}

// 5. Contact Form Handler
function handleContact(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const name = event.target.querySelectorAll('input')[0].value;
    
    alert(`Hello ${name}, your message has been sent to Group 4! We will get back to you in Mombasa soon.`);
    
    event.target.reset(); // Clears the form
}

// Initial call to display products when the page loads
renderProducts(products);