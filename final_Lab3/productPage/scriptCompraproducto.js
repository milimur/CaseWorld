//codigo que es para la parte de seleccionar el modelo de celular
const models = {
    iPhone: [
        'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
        'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
        'iPhone SE (2020)', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max'
    ],
    Samsung: [
        'Galaxy S21', 'Galaxy S21+', 'Galaxy S21 Ultra', 'Galaxy Note 20',
        'Galaxy Note 20 Ultra', 'Galaxy Z Fold 3', 'Galaxy Z Flip 3'
    ],
    Motorola: [
        'Moto G Power', 'Moto G Stylus', 'Moto G Play', 'Moto Edge 20',
        'Moto Edge 20 Pro', 'Moto G100'
    ]
};

const selectBrand = (brand) => {
    const brandButton = document.getElementById('brandButton');
    const modelMenu = document.getElementById('modelMenu');
    const modelDropdown = document.getElementById('modelDropdown');

    brandButton.innerText = brand;
    modelMenu.innerHTML = '';

    models[brand].forEach(model => {
        const modelLink = document.createElement('a');
        modelLink.href = '#';
        modelLink.innerText = model;
        modelLink.onclick = () => {
            selectModel(model);
            return false; // Evita que el enlace recargue la página
        };
        modelMenu.appendChild(modelLink);
    });

    modelDropdown.style.display = 'inline-block';
};

const selectModel = (model) => {
    const modelButton = document.getElementById('modelButton');
    modelButton.innerText = `Modelo: ${model}`;
};

document.getElementById('brandButton').addEventListener('click', () => {
    const brands = Object.keys(models);
    const brandMenu = document.createElement('div');
    brandMenu.style.position = 'absolute';
    brandMenu.style.backgroundColor = '#f9f9f9';
    brandMenu.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    brandMenu.style.zIndex = '1';

    brands.forEach(brand => {
        const brandLink = document.createElement('a');
        brandLink.href = '#';
        brandLink.innerText = brand;
        brandLink.style.display = 'block';
        brandLink.style.padding = '12px 16px';
        brandLink.style.color = 'black';
        brandLink.onclick = () => {
            selectBrand(brand);
            brandMenu.style.display = 'none';
            return false; // Evita que el enlace recargue la página
        };
        brandMenu.appendChild(brandLink);
    });

    document.body.appendChild(brandMenu);

    const rect = document.getElementById('brandButton').getBoundingClientRect();
    brandMenu.style.top = `${rect.bottom}px`;
    brandMenu.style.left = `${rect.left}px`;
    brandMenu.style.display = 'block';

    // Ocultar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!brandMenu.contains(event.target) && event.target !== document.getElementById('brandButton')) {
            brandMenu.style.display = 'none';
            document.body.removeChild(brandMenu);
        }
    }, { once: true });
});
//hasta aca codigo que es para seleccionar el modelo de celular


//cantidad

document.addEventListener('DOMContentLoaded', () => {
    const campoCantidad = document.getElementById('cantidad');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    const incrementar = () => {
        let valor = parseInt(campoCantidad.value);
        campoCantidad.value = valor + 1;
    };

    const decrementar = () => {
        let valor = parseInt(campoCantidad.value);
        if (valor > 0) {
            campoCantidad.value = valor - 1;
        }
    };

    incrementButton.addEventListener('click', incrementar);
    decrementButton.addEventListener('click', decrementar);
});
 
//hasta aca el iterador de la cantidad 

//lupa imagen
const imageContainer = document.querySelector('.image-container');
const magnifier = document.querySelector('.magnifier');
const productImage = document.getElementById('product-image');

imageContainer.addEventListener('mousemove', function(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;

    const width = magnifier.offsetWidth / 2;
    const height = magnifier.offsetHeight / 2;

    // Comprobación para asegurarse de que el cursor está dentro de los límites del contenedor de la imagen
    if (x >= 0 && x <= this.offsetWidth && y >= 0 && y <= this.offsetHeight) {
        magnifier.style.left = `${x - width}px`;
        magnifier.style.top = `${y - height}px`;

        magnifier.style.display = 'block';

        magnifier.style.backgroundImage = `url('${productImage.src}')`;
        magnifier.style.backgroundSize = `${productImage.width * 2}px ${productImage.height * 2}px`;
        magnifier.style.backgroundPosition = `-${x * 2 - width}px -${y * 2 - height}px`;
    } else {
        magnifier.style.display = 'none';
    }
});

imageContainer.addEventListener('mouseleave', function() {
    magnifier.style.display = 'none';
});



//botones favoritos y carrito
const heartButton = document.getElementById("heartButton");
const cartButton = document.getElementById("cartButton");

heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("active");
});

cartButton.addEventListener("click", () => {
    cartButton.classList.toggle("active");
});

