const products = [
    { id: 1, name: "Casual Summer Shirt", price: 2500, image: "images/clothes1.jpg" },
    { id: 2, name: "Slim Fit Jeans", price: 3500, image: "images/clothes2.jpg" },
    { id: 3, name: "Urban Hoodie", price: 4000, image: "images/clothes3.jpg" },
    { id: 4, name: "Designer T-Shirt", price: 1800, image: "images/clothes4.jpg" }
];

const productGrid = document.querySelector('.product-grid');
const cartCountDisplay = document.getElementById('cart-count');
let cartCount = 0;

function renderProducts(items) {
    if (items.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1;">No results found.</p>`;
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

function addToCart(name) {
    cartCount++;
    cartCountDisplay.innerText = cartCount;
    alert(`${name} added to cart!`);
}

function searchProducts() {
    const term = document.getElementById('product-search').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
}

function handleContact(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
}

renderProducts(products);