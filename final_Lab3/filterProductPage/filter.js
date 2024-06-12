/*let products = [
    { title: "Funda Android", description: "Descripción 1", precio: "$1000", image:'../productImage/funda_android.jpg', color: ["rojo","verde","azul"]},
    { title: "Funda iPhone", description: "Descripción 2", precio: "$2000",image:'../productImage/funda_Iphone.jpg', color:"negro,amarillo"},
    { title: "Funda clear", description: "Descripción 3", precio: "$3000",image:'../productImage/funda_clear.jpg', color: [] },
    { title: "Funda Android", description: "Descripción 4", precio: "$1000",image:'../productImage/funda_android.jpg', color: ["rojo","verde","azul"]},
    { title: "Funda iPhone", description: "Descripción 5", precio: "$2000",image:'../productImage/funda_Iphone.jpg', color:"negro,amarillo"},
    { title: "Funda clear", description: "Descripción 6", precio: "$3000",image:'../productImage/funda_clear.jpg', color: []},
    { title: "Funda Android", description: "Descripción 7", precio: "$1000",image:'../productImage/funda_android.jpg', color: ["rojo","verde","azul"]},
    { title: "Funda iPhone", description: "Descripción 8", precio: "$2000",image:'../productImage/funda_Iphone.jpg', color:"negro,amarillo"},
    { title: "Funda clear", description: "Descripción 9", precio: "$3000",image:'../productImage/funda_clear.jpg', color: []}
];


function createCards(products) {
    let container = document.getElementById('card-container');
    container.innerHTML = ''; // Limpiar el contenedor

    products.forEach((product, index) => {
        let card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4'); // Agrega la clase col-md-4 para tres columnas en pantallas medianas y más grandes
        
        card.innerHTML = `
            <div class="card">
                <a class="imageCard" href="../productPage/compraProducto.html">
                    <img src="${product.image}" class="card-img-top img-fluid w-100" alt="">
                </a>
                <div class="card-body">
                    <a href="#" class="no-underline"><h5 class="card-title">${product.title}</h5></a>
                    <p class="card-text">${product.description}</p>
                    <h4 class="price">${product.precio}</h4>
                    <a href="../productPage/compraProducto.html" class="btn btn-primary">Ver</a>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createCards(products);
});


//filtrado marca
function changeCardBrand(marca) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let cardImg = card.querySelector('.card-img-top');
        let cardTitle = card.querySelector('.card-title');
        let cardText = card.querySelector('.card-text');
        let cardPrice = card.querySelector('.price');
        let cardButton = card.querySelector('.btn');
        
        cardImg.style.filter = "grayscale(100%)";
        cardTitle.style.display = "none";
        cardText.style.display = "none";
        cardPrice.style.display = "none";
        cardButton.disabled = true;
        cardButton.removeAttribute("href");

        setTimeout(() => {
            // Restaurar los valores originales
            cardImg.style.filter = ""; 
            cardTitle.style.display = ""; 
            cardText.style.display = ""; 
            cardPrice.style.display = "";
            cardButton.disabled = false; 
            cardButton.setAttribute("href", "./ejemplo.html");
        }, 1000);
    });
}


//filtradp de precio
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('minPrice').addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let minPrice = parseFloat(this.value);
            let maxPrice = parseFloat(document.getElementById('maxPrice').value);
            changeCardPrice(minPrice, maxPrice);
        }
    });

    document.getElementById('maxPrice').addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let minPrice = parseFloat(document.getElementById('minPrice').value);
            let maxPrice = parseFloat(this.value);
            changeCardPrice(minPrice, maxPrice);
        }
    });
});

function changeCardPrice(minPrice, maxPrice) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let cardPrice = card.querySelector('.price');
        let price = cardPrice.innerText.replace('$', '');
        
        if (price < minPrice || price > maxPrice) {
            card.style.display = 'none';
        } else {
            card.style.display = '';
        }
    });
}

//filtrado de color
function changeCardColor(color) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let cardImg = card.querySelector('.card-img-top');
        let cardTitle = card.querySelector('.card-title');
        let cardText = card.querySelector('.card-text');
        let cardPrice = card.querySelector('.price');
        let cardButton = card.querySelector('.btn');
        
        cardImg.style.filter = "grayscale(100%)";
        cardTitle.style.display = "none";
        cardText.style.display = "none";
        cardPrice.style.display = "none";
        cardButton.disabled = true;
        cardButton.removeAttribute("href");

        setTimeout(() => {
            // Restaurar los valores originales
            cardImg.style.filter = ""; 
            cardTitle.style.display = ""; 
            cardText.style.display = ""; 
            cardPrice.style.display = "";
            cardButton.disabled = false; 
            cardButton.setAttribute("href", "./ejemplo.html");
        }, 1000);
    });
}*/
async function fetchProducts() {
    try {
        console.log('Fetching products.json...');
        const response = await fetch('../products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Products fetched successfully:', data);
        createCards(data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function createCards(products) {
    let container = document.getElementById('card-container');
    container.innerHTML = ''; // Limpiar el contenedor

    products.forEach((product) => {
        let card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4'); // Agrega la clase col-md-4 para tres columnas en pantallas medianas y más grandes

        card.innerHTML = `
            <div class="card">
                <a class="imageCard" href="../productPage/compraProducto.html">
                    <img src="${product.image}" class="card-img-top img-fluid w-100" alt="">
                </a>
                <div class="card-body">
                    <a href="#" class="no-underline"><h5 class="card-title">${product.title}</h5></a>
                    <p class="card-text">${product.description}</p>
                    <h4 class="price">${product.precio}</h4>
                    <a href="../productPage/compraProducto.html" class="btn btn-primary">Ver</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();
});
