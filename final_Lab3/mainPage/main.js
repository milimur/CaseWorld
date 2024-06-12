let products = [
    { id: 1, title: "Funda Android", description: "Descripción 1", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: false },
    { id: 2, title: "Funda iPhone", description: "Descripción 2", precio: "$2000", image: '../productImage/funda_Iphone.jpg', color: ["negro", "amarillo"], favorito: false },
    { id: 3, title: "Funda clear", description: "Descripción 3", precio: "$3000", image: '../productImage/funda_clear.jpg', color: [], favorito: false },
    { id: 4, title: "Funda Android", description: "Descripción 4", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: false },
    { id: 5, title: "Funda iPhone", description: "Descripción 5", precio: "$2000", image: '../productImage/funda_Iphone.jpg', color: ["negro", "amarillo"], favorito: false },
    { id: 6, title: "Funda clear", description: "Descripción 6", precio: "$3000", image: '../productImage/funda_clear.jpg', color: [], favorito: false },
    { id: 7, title: "Funda Android", description: "Descripción 7", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: false },
    { id: 8, title: "Funda iPhone", description: "Descripción 8", precio: "$2000", image: '../productImage/funda_Iphone.jpg', color: ["negro", "amarillo"], favorito: false },
    { id: 9, title: "Funda clear", description: "Descripción 9", precio: "$3000", image: '../productImage/funda_clear.jpg', color: [], favorito: false },
    { id: 10, title: "Funda Android", description: "Descripción 7", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: false },
    { id: 11, title: "Funda iPhone", description: "Descripción 8", precio: "$2000", image: '../productImage/funda_Iphone.jpg', color: ["negro", "amarillo"], favorito: false },
    { id: 12, title: "Funda clear", description: "Descripción 9", precio: "$3000", image: '../productImage/funda_clear.jpg', color: [], favorito: false },
    { id: 13, title: "Funda Android", description: "Descripción 7", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: true },
    { id: 14, title: "Funda iPhone", description: "Descripción 8", precio: "$2000", image: '../productImage/funda_Iphone.jpg', color: ["negro", "amarillo"], favorito: true },
    { id: 15, title: "Funda clear", description: "Descripción 9", precio: "$3000", image: '../productImage/funda_clear.jpg', color: [], favorito: false },
    { id: 16, title: "Funda Android", description: "Descripción 7", precio: "$1000", image: '../productImage/funda_android.jpg', color: ["rojo", "verde", "azul"], favorito: true }
];

document.addEventListener('DOMContentLoaded', function() {
    createCards(products);
});

function createCards(products) {
    let container = document.getElementById('card-container');
    container.innerHTML = ''; // Limpiar el contenedor

    products.forEach((product, index) => {
        let card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="card">
                <a class="imageCard" href="../productPage/compraProducto.html">
                    <img src="${product.image}" class="card-img-top img-fluid w-100" alt="">
                </a>
                <div class="card-body"> 
                    <a href="/productPage/compraProducto.html" class="no-underline"><h5 class="card-title">${product.title}</h5></a>
                    <p class="card-text">${product.description}</p>
                    <h4 class="price">${product.precio}</h4>
                    <a href="../productPage/compraProducto.html" class="btn btn-primary">Ver</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
