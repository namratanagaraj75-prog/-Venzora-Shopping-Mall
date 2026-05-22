const products = [{
        id: 5,
        name: "Laptop",
        price: 50000,
        category: "electronics",
        image: "https://i.pinimg.com/736x/4b/4e/d1/4b4ed1dd817eb1023063e4852f9449f2.jpg"
    },
    {
        id: 2,
        name: "Headphones",
        price: 2000,
        category: "electronics",
        image: "https://i.pinimg.com/736x/08/6c/e3/086ce3432892fa86d8e056e8334986e5.jpg"
    },
    {
        id: 3,
        name: "Mobile Phone",
        price: 25000,
        category: "electronics",
        image: "https://i.pinimg.com/736x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg"
    },

    {
        id: 4,
        name: "Trouser",
        price: 999,
        category: "men",
        image: "https://i.pinimg.com/1200x/75/8c/2c/758c2c26f7a9c1e1cb3f81e3b1640fb4.jpg"
    },
    {
        id: 1,
        name: "Men Shoes",
        price: 2500,
        category: "men",
        image: "https://i.pinimg.com/736x/af/89/88/af8988f60161559ee2b919376dd42077.jpg"
    },
    {
        id: 10,
        name: "Digital Watch",
        price: 4500,
        category: "electronics",
        image: "https://i.pinimg.com/736x/30/8e/26/308e26bbbddd4a548521d464556a3fcc.jpg"
    },
    {
        id: 11,
        name: "Goggle",
        price: 1500,
        category: "men",
        image: "https://i.pinimg.com/1200x/43/75/3e/43753e06bc6de0fcff2745b62424bace.jpg"
    },
    {
        id: 13,
        name: "Shirt",
        price: 999,
        category: "men",
        image: "https://i.pinimg.com/1200x/c8/20/b5/c820b5e4b9fd0b73cc74016161781888.jpg"
    },

    {
        id: 6,
        name: "Women Dress",
        price: 1800,
        category: "women",
        image: "https://i.pinimg.com/1200x/f5/56/8f/f5568f1247e6b9be2290c53958f67c1d.jpg"
    },
    {
        id: 7,
        name: "Handbag",
        price: 2200,
        category: "women",
        image: "https://i.pinimg.com/1200x/a4/48/9d/a4489d5af7fb51f5f968f6bfb217f692.jpg"
    },
    {
        id: 8,
        name: "Skin Care Pack",
        price: 3000,
        category: "women",
        image: "https://i.pinimg.com/1200x/8c/1d/c6/8c1dc6b9b5edd770e7e912853c0a632a.jpg"
    },
    {
        id: 14,
        name: "Heels",
        price: 1599,
        category: "women",
        image: "https://i.pinimg.com/1200x/41/21/68/412168e19ef35b9b38c8c1044574b05c.jpg"
    },

    {
        id: 9,
        name: "Kids Dress",
        price: 900,
        category: "kids",
        image: "https://i.pinimg.com/736x/d9/27/01/d927017357fbe0007b7215f769daa432.jpg"
    },
    {
        id: 15,
        name: "Sweater",
        price: 799,
        category: "kids",
        image: "https://i.pinimg.com/736x/2a/10/fc/2a10fc2d4fca7b4577b2b60159f03b50.jpg"
    },
    {
        id: 16,
        name: "Teddy Bear",
        price: 499,
        category: "kids",
        image: "https://i.pinimg.com/736x/96/09/65/960965dddb1b11f0e2172d25c760d806.jpg"
    },
    {
        id: 17,
        name: "Shirt",
        price: 999,
        category: "kids",
        image: "https://i.pinimg.com/736x/83/db/80/83db80e227ae7dafcab51d6e9fb70404.jpg"
    },

    {
        id: 10,
        name: "Wall Frame",
        price: 1200,
        category: "decor",
        image: "https://i.pinimg.com/736x/f5/bc/40/f5bc4052db51407a89e299029a8e3ba7.jpg"
    },
    {
        id: 18,
        name: "Lotus Home Decor",
        price: 1999,
        category: "decor",
        image: "https://i.pinimg.com/736x/7f/ac/64/7fac64e1cbcdadb6702965fc7b06ce2c.jpg"
    },
    {
        id: 19,
        name: "Lighting Tree",
        price: 1299,
        category: "decor",
        image: "https://i.pinimg.com/1200x/c0/dd/81/c0dd81ffb0a9f3329a8e599b9af8ba5d.jpg"
    },
    {
        id: 20,
        name: "Mini Waterfall",
        price: 2999,
        category: "decor",
        image: "https://i.pinimg.com/736x/c0/d2/c7/c0d2c7b29d3ec444705332be628d3238.jpg"
    }
];

// ===============================
// STATE
// ===============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filteredProducts = products;

// ===============================
// DISPLAY PRODUCTS
// ===============================
function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
      <span class="heart" onclick="toggleHeart(this)">♡</span>
      <span class="price-tag">₹${p.price}</span>
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="buyNow(${p.id})">Buy Now</button>
    `;

        container.appendChild(div);
    });
}

// ===============================
// CATEGORY FILTER (FIXED)
// ===============================
function filterProducts(category) {
    if (category === "all") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(
            item => item.category === category
        );
    }

    displayProducts(filteredProducts);
}

// ===============================
// SEARCH
// ===============================
function searchProducts() {
    const value = document.getElementById("search").value.toLowerCase();

    const result = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(result);
}

// ===============================
// WISHLIST HEART
// ===============================
function toggleHeart(el) {
    el.classList.toggle("active");
    el.innerText = el.classList.contains("active") ? "❤️" : "♡";
}

// ===============================
// CART LOGIC
// ===============================
function addToCart(id) {
    const item = cart.find(p => p.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            ...products.find(p => p.id === id),
            qty: 1
        });
    }

    saveCart();
    renderCart();
    showToast("Added to cart 🛒");
}

function buyNow(id) {
    addToCart(id);
    scrollToShop();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        list.innerHTML += `<li>${item.name} × ${item.qty}</li>`;
    });

    const discount = total >= 5000 ? total * 0.1 : 0;

    document.getElementById("total").innerText = total;
    document.getElementById("discount").innerText = discount.toFixed(0);
    document.getElementById("payable").innerText = (total - discount).toFixed(0);
}

// ===============================
// SAVE CART
// ===============================
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ===============================
// CHECKOUT
// ===============================
function checkout() {
    if (cart.length === 0) {
        showToast("Cart is empty");
        return;
    }

    showToast("Order placed 🎉");
    cart = [];
    saveCart();
    renderCart();
}

// ===============================
// TOAST
// ===============================
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);
}

// ===============================
// SCROLL FIX
// ===============================
function scrollToShop() {
    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });
}

// ===============================
// INITIAL LOAD
// ===============================
displayProducts(products);
renderCart();