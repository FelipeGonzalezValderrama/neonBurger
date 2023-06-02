
//card1
let card = document.getElementById("card")
let cardClose = document.getElementById("cardClose")


card.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)"
})

cardClose.addEventListener("click", (event) => {
    card.style.transform = "rotateY(0deg)";
    event.stopPropagation();
})


//card2
let card2 = document.getElementById("card2")
let cardClose2 = document.getElementById("cardClose2")


card2.addEventListener("click", () => {
    card2.style.transform = "rotateY(180deg)"
})

cardClose2.addEventListener("click", (event) => {
    card2.style.transform = "rotateY(0deg)";
    event.stopPropagation();
})

// Obtén todas las tarjetas y el botón "Agregar al carrito"
const cards = document.querySelectorAll('.card');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Agrega un event listener a cada botón "Agregar al carrito"
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Obtén los detalles del producto seleccionado
        const card = cards[index];
        const title = card.querySelector('.card-info-title').textContent;
        const price = parseFloat(card.querySelector('.card-info-title span').textContent.replace('$', '').replace(',', ''));

        // Crea un objeto producto
        const product = {
            title: title,
            price: price
        };

        // Agrega el producto al carrito
        addToCart(product);
    });
});

// Carrito de compras
const cartItems = [];

// Función para agregar un producto al carrito
function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Limpia el carrito
    cartItemsElement.innerHTML = '';

    // Agrega los productos al carrito
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        cartItemsElement.appendChild(li);
    });

    // Calcula el total
    const total = cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
    cartTotalElement.textContent = '$' + total.toFixed(2);
}

// Mostrar/ocultar el carrito
const toggleCartBtn = document.getElementById('toggle-cart-btn');
toggleCartBtn.addEventListener('click', () => {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.toggle('show');
});