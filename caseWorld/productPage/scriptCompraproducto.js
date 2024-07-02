// funcion para leer parametros get de la url
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let producto = fundas[GetURLParameter('id') - 1];

    const body = document.body;
  
    // Crear contenedor de la card
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
  
    // Crear imagen del producto
    const productImagee = document.createElement('img');
    productImagee.src = '../productImage/' + producto.id + '.jpg';
    productImagee.alt = 'Imagen del producto';
    cardContainer.appendChild(productImagee);
  
    // Crear contenedor de detalles del producto
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';
  
    // Título del producto
    const productTitle = document.createElement('h2');
    productTitle.innerText = producto.nombre;
    productDetails.appendChild(productTitle);
  
    // Descripción del producto
    const productDescription = document.createElement('p');
    productDescription.innerText = producto.descripcion;
    productDetails.appendChild(productDescription);
  
    // Lista desplegable para modelos
    const modelSelect = document.createElement('select');
    modelSelect.setAttribute("id", "listaModelos");
    const models = producto.modelos;
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.innerText = model;
      modelSelect.appendChild(option);
    });
    productDetails.appendChild(modelSelect);
  
    // Lista desplegable para colores
    const colorSelect = document.createElement('select');
    colorSelect.setAttribute("id", "listaColores");
    const colors = producto.colores;
    colors.forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.innerText = color;
      colorSelect.appendChild(option);
    });
    productDetails.appendChild(colorSelect);
  
    // Botón para añadir al carrito
    const cartButton = document.createElement('button');
    cartButton.innerText = 'Añadir al Carrito';
    cartButton.addEventListener("click",() => agregarAlCarrito(producto));
    productDetails.appendChild(cartButton);
  
    cardContainer.appendChild(productDetails);
    body.appendChild(cardContainer);
});