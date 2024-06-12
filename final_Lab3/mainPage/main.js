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
