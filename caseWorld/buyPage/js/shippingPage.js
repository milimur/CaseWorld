document.getElementById('calculate-shipping').addEventListener('click', function() {
    event.preventDefault();
    const postalCode = document.getElementById('codigo-postal').value;
    const shippingData = {
        "postalcode" : [
            { "id": 1, "codigo_postal": 5500, "nombre": "Mendoza (Capital)", "precio": 500 },
            { "id": 2, "codigo_postal": 5501, "nombre": "Godoy Cruz", "precio": 600 },
            { "id": 3, "codigo_postal": 5521, "nombre": "Guaymallén", "precio": 650 },
            { "id": 4, "codigo_postal": 5539, "nombre": "Las Heras", "precio": 700 },
            { "id": 5, "codigo_postal": 5507, "nombre": "Luján de Cuyo", "precio": 750 },
            { "id": 6, "codigo_postal": 5515, "nombre": "Maipú", "precio": 700 },
            { "id": 7, "codigo_postal": 5570, "nombre": "San Martín", "precio": 850 },
            { "id": 8, "codigo_postal": 5560, "nombre": "Tunuyán", "precio": 900 },
            { "id": 9, "codigo_postal": 5561, "nombre": "Tupungato", "precio": 950 },
            { "id": 10, "codigo_postal": 5577, "nombre": "Rivadavia", "precio": 800 },
            { "id": 11, "codigo_postal": 5600, "nombre": "San Rafael", "precio": 1000 },
            { "id": 12, "codigo_postal": 5620, "nombre": "General Alvear", "precio": 1050 },
            { "id": 13, "codigo_postal": 5613, "nombre": "Malargüe", "precio": 1100 },
            { "id": 14, "codigo_postal": 5533, "nombre": "Lavalle", "precio": 750 },
            { "id": 15, "codigo_postal": 5596, "nombre": "Santa Rosa", "precio": 850 },
            { "id": 16, "codigo_postal": 5594, "nombre": "La Paz", "precio": 900 }
        ]
    };

    const shippingInfo = shippingData.postalcode.find(item => item.codigo_postal == postalCode);
    const totalPriceElement = document.querySelector('.d-flex .mb-2:last-child');
    let totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));

    if (shippingInfo) {
        const shippingPrice = shippingInfo.precio;
        document.getElementById('envio').textContent = `$${shippingPrice.toFixed(2)}`;
        const finalPrice = totalPrice + shippingPrice;
        document.getElementById('precio-final').textContent = `$${finalPrice.toFixed(2)}`;
    } else {
        document.getElementById('envio').textContent = 'No disponible';
        document.getElementById('precio-final').textContent = `$${totalPrice.toFixed(2)}`;
    }
});

async function loadProfileData() {
    try {
        const response = await fetch('./../userPage/registro/thing.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched Data:', data);

        const profileData = data[0];

        console.log(profileData)

        if (profileData.email) {
            document.getElementById('email').value = profileData.email;
        } else {
            console.warn('Email not found in data');
        }

        if (profileData.phone) {
            document.getElementById('phone').value = profileData.phone;
        } else {
            console.warn('Phone not found in data');
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

window.onload = loadProfileData();

window.onload = function() {
    const accountLink = document.getElementById('account-link');
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    if (cookies.email) {
        accountLink.href = "/userPage/profile/Index.html";
    } else {
        accountLink.href = "/userPage/logIn/Index.html";
    }
};

