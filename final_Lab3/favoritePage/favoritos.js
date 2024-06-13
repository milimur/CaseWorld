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


// Filtrar productos favoritos
const generarHtmlProducto = (product) => `
    <div class="card mb-3" style="max-width: 100%; width: 100%; position: relative;">
        <div class="row g-0">
            <div class="col-md-2 d-flex align-items-stretch">
                <img src="${product.image}" class="img-fluid rounded-start h-100" alt="${product.title}" style="width: auto; height: 100%;">
            </div>
            <div class="col-md-8">
                <div class="card-body d-flex flex-column justify-content-between h-100">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <h4 class="price">${product.precio}</h4>
                </div>
            </div>
            <div class="col-md-2 d-flex align-items-end justify-content-end">
                <a href="/buypage/buyPage.html" class="btn btn-primary align-self" style="margin-bottom: 8px; margin-right: 8px;">Comprar</a>
                <button class="btn-star btn btn-link position-absolute top-0 end-0 mt-2 me-3" style="z-index: 1;" onclick="cambioEstadoFavorito('${product.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    `;
const productosFavoritos = products.filter(product => product.favorito);
const contenedorProductos = document.getElementById('productosFavoritos');
contenedorProductos.innerHTML = productosFavoritos.map(generarHtmlProducto).join('');


function renderizarProductosFavoritos() {
    // Filtrar productos favoritos
    const productosFavoritos = products.filter(product => product.favorito);
    // Inyectar HTML en el contenedor de productos favoritos
    const contenedorProductos = document.getElementById('productosFavoritos');
    contenedorProductos.innerHTML = productosFavoritos.map(generarHtmlProducto).join('');
}


// ACA FALTARIA CREAR UNA FUNCION QUE CAMBIE EL ESTADO DE UN PRODUCTO DE SER TRUE O FALSE. RECOMENDARIA METER UNA ID DE PRODUCTO 
// Y AHI METER UN BOTON EN HTML QUE LLAME ESA FUNCION Y LA CAMBIE DE TRUE A FALSE O DE FALSE A TRUE.

function cambioEstadoFavorito(product_id) {
    product_id = Number(product_id);
    console.log(product_id);
    
    const specificProduct = products.find(product => product.id === product_id);
    
    // Si se encuentra el producto específico
    if (specificProduct) {
        // Invertir el valor de la propiedad favorito del producto
        specificProduct.favorito = !specificProduct.favorito;
        // Actualizar el estado del producto en la lista de productos
        const index = products.findIndex(product => product.id === product_id);
        if (index !== -1) {
            products[index] = specificProduct;
            console.log("Estado del producto cambiado:", specificProduct);
            // Renderizar nuevamente el div que contiene los favoritos dado que se actualizo.
            renderizarProductosFavoritos();
        } else {
            console.error("Producto no encontrado en la lista de productos.");
        }
    } else {
        console.error("Producto no encontrado.");
    }
}