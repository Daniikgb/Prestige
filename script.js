const products = [
    {
        name: "Hoodie Oversized Graphite",
        category: "Abrigos",
        price: "Consulte Precio",
        image: "caalogo/abrigo1.png"
    },
    {
        name: "Hoodie Signature Cream",
        category: "Abrigos",
        price: "Consulte Precio",
        image: "caalogo/abrigo2.png"
    },
    {
        name: "Conjunto Urban Complete",
        category: "Outfits",
        price: "Consulte Precio",
        image: "caalogo/conjunto.png"
    },
    {
        name: "Outfit Street Legend",
        category: "Outfits",
        price: "Consulte Precio",
        image: "caalogo/outfit.png"
    },
    {
        name: "Pantalón Cargo Black Utility",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon1.png"
    },
    {
        name: "Pantalón Baggy Denim Light",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon2.png"
    },
    {
        name: "Pantalón Cargo Gothic Cross",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon3.png"
    },
    {
        name: "Pantalón Cargo Graphite",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon4.png"
    },
    {
        name: "Pantalón Cargo Night Stealth",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon5.png"
    },
    {
        name: "Pantalón Cargo Urban Grey",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon6.png"
    },
    {
        name: "Pantalón Cargo Street Style",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon7.png"
    },
    {
        name: "Pantalón Cargo Classic Black",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon8.png"
    },
    {
        name: "Pantalón Cargo Midnight",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon9.png"
    },
    {
        name: "Pantalón Baggy Sand",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon10.png"
    },
    {
        name: "Pantalón Denim Classic Blue",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon11.png"
    },
    {
        name: "Pantalón Denim Urban Light",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon12.png"
    },
    {
        name: "Pantalón Cargo Tactical Black",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon13.png"
    },
    {
        name: "Pantalón Denim Deep Blue",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalon14.png"
    },
    {
        name: "Colección Pantalones Premium",
        category: "Pantalones",
        price: "Consulte Precio",
        image: "caalogo/pantalones.png"
    },
    {
        name: "Remera Essential Black",
        category: "Remeras",
        price: "Consulte Precio",
        image: "caalogo/remera1.png"
    },
    {
        name: "Remera Boxy Fit Selection",
        category: "Remeras",
        price: "Consulte Precio",
        image: "caalogo/remeras boxy.png"
    },
    {
        name: "Remera Urban Multi-Pack",
        category: "Remeras",
        price: "Consulte Precio",
        image: "caalogo/remeras.png"
    },
    {
        name: "Short Urban Grey",
        category: "Shorts",
        price: "Consulte Precio",
        image: "caalogo/short1.png"
    },
    {
        name: "Short Street Black",
        category: "Shorts",
        price: "Consulte Precio",
        image: "caalogo/short2.png"
    },
    {
        name: "Short Denim Light",
        category: "Shorts",
        price: "Consulte Precio",
        image: "caalogo/short3.png"
    }
];

const lifestyleImages = [
    "caalogo/conjunto.png",
    "caalogo/outfit.png",
    "caalogo/pantalones.png",
    "caalogo/remeras boxy.png"
];

// Cart State
let cart = JSON.parse(localStorage.getItem('prestige_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderProducts();
    renderLifestyle();
    setupEventListeners();
    updateCartUI();
    generateWatermark();
}

function generateWatermark() {
    const wmContainer = document.getElementById('global-watermark');
    if (!wmContainer) return;

    // Create a repeating pattern of "PRESTIGE"
    const text = "PRESTIGE ";
    const repeated = text.repeat(50); // Large horizontal repeat

    for (let i = 0; i < 30; i++) { // Vertical repeat
        const row = document.createElement('div');
        row.className = 'wm-row';
        row.innerText = repeated;
        wmContainer.appendChild(row);
    }
}

function renderProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <button onclick="addToCart(${index})" class="btn btn-primary" style="margin-top: 15px; width: 100%;">Añadir al Carrito</button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

function renderLifestyle() {
    const brandImages = document.querySelector('.brand-images');
    if (brandImages) {
        brandImages.innerHTML = '';
        lifestyleImages.forEach(img => {
            const imgItem = `
                <div class="brand-img-item animate-fade-up">
                    <img src="${img}" alt="Lifestyle Streetwear" loading="lazy">
                </div>
            `;
            brandImages.innerHTML += imgItem;
        });
    }
}

function setupEventListeners() {
    // Cart Toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCheckout = document.getElementById('cart-checkout');
    const branchModalClose = document.getElementById('branch-modal-close');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links-container');

    if (cartToggle) cartToggle.onclick = toggleCart;
    if (cartClose) cartClose.onclick = toggleCart;
    if (cartOverlay) cartOverlay.onclick = function () {
        toggleCart();
        closeBranchModal();
        if (navLinksContainer) navLinksContainer.classList.remove('active');
        if (cartOverlay) cartOverlay.classList.remove('show');
    };
    if (cartCheckout) cartCheckout.onclick = openBranchModal;
    if (branchModalClose) branchModalClose.onclick = closeBranchModal;

    // Mobile Menu Toggle
    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.onclick = () => {
            navLinksContainer.classList.toggle('active');
            const overlay = document.getElementById('cart-overlay');
            if (overlay) overlay.classList.toggle('show');
        };
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.onclick = () => {
            if (navLinksContainer) navLinksContainer.classList.remove('active');
            const overlay = document.getElementById('cart-overlay');
            if (overlay) overlay.classList.remove('show');
        };
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 80) {
            navbar.style.padding = '15px 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '25px 5%';
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Reveal Animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .product-card, .brand-img-item, .info-item').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

// Cart Logic
window.addToCart = function (index) {
    const product = products[index];
    cart.push(product);
    saveCart();
    updateCartUI();
    openCart();
};

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('prestige_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartBadge = document.querySelector('.cart-badge');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');

    // Update Badge
    if (cartBadge) cartBadge.innerText = cart.length;

    // Update Items List
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío</p>';
        } else {
            cartItemsList.innerHTML = '';
            cart.forEach((item, index) => {
                cartItemsList.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${index})" class="cart-item-remove">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                `;
            });
        }
    }

    // Since prices are "Consulte Precio", we just show 0 or a summary
    if (cartTotalAmount) {
        cartTotalAmount.innerText = cart.length > 0 ? "A consultar" : "0.00";
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function openCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.add('open');
    overlay.classList.add('show');
}

// Branch Modal Logic
function openBranchModal() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }
    const modal = document.getElementById('branch-modal');
    modal.classList.add('show');
}

function closeBranchModal() {
    const modal = document.getElementById('branch-modal');
    if (modal) modal.classList.remove('show');
}

window.sendOrder = function (branchNumber) {
    if (cart.length === 0) return;

    let message = "Hola Prestige! Quisiera realizar el siguiente pedido:\n\n";
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.category})\n`;
    });

    message += `\nTotal de artículos: ${cart.length}\nPor favor, confirmame los precios y disponibilidad.`;

    const whatsappUrl = `https://wa.me/${branchNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Optional: close modal after sending
    closeBranchModal();
};
