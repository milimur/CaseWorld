document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener para el botón de "Quitar" en el carrito de compras
    document.querySelectorAll('.btn.text-danger').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            this.closest('.row').remove();
            updateCartTotal();
        });
    });

    // Event listener para la actualización de la cantidad de productos
    document.querySelectorAll('.form-control[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            updateCartTotal();
        });
    });

    // Actualizar el total del carrito
    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll('.row.gy-3.mb-4').forEach(row => {
            const priceElement = row.querySelector('.h6').innerText.replace('$', '');
            const quantityElement = row.querySelector('.form-control[type="number"]').value;
            const price = parseFloat(priceElement);
            const quantity = parseInt(quantityElement);
            total += price * quantity;
        });
        document.querySelector('.card-body .fw-bold').innerText = `$${total}`;
    }

    // Event listener formulario de búsqueda
    document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = this.querySelector('input[type="search"]').value;
        window.location.href = `/productPage/filter.html?search=${query}`;
    });

    // Event listener botón de "Aplicar" cupón
    document.querySelector('.btn.btn-light.border').addEventListener('click', function(event) {
        event.preventDefault();
        // Aplicar el cupón
        alert('Cupón aplicado!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shipping-form');
    const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        modal.show();
    });
});

        // Agrega tu public key
        const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
            locale: 'es-AR'
        });

        // Manejar la selección del método de pago
        function showForm(formId) {
            document.querySelectorAll('.payment-form').forEach(function(form) {
                form.style.display = 'none';
            });
            document.querySelectorAll('.payment-option').forEach(function(option) {
                option.classList.remove('active');
            });
            document.getElementById(formId).style.display = 'block';
            document.getElementById('option' + formId.split('-')[1]).classList.add('active');
        }

        // Crear el botón de pago
        const checkoutButton = mp.checkout({
            preference: {
                id: 'YOUR_PREFERENCE_ID' // Reemplaza con el ID de tu preferencia de pago
            },
            render: {
                container: '#form-mercado-pago', // Indica el lugar donde se renderizará el botón
                label: 'Pagar con Mercado Pago' // Cambia el texto del botón si es necesario
            }
        });
   
        function fValidarTarjeta(){
            var opt = $("#lstTipoTarjeta option:selected").val();
            codigo = $("#nro_tarjeta").val().replace('-', '');
            var msg = "Valor incorrecto";
            VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
            MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
            AMEX = /^3[47][0-9-]{16}$/;
            CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
            NARANJA =   /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/;
        
            $("#err_nro_tarjeta").html("");
            if(luhn(codigo)){
                if(opt == "VISA" && !codigo.match(VISA)){
                    alert(msg);
                }
                if(opt == "MASTERCARD" && !codigo.match(MASTERCARD)){
                    alert(msg);
                }
                if(opt == "NARANJA" && !codigo.match(NARANJA)){
                    alert(msg);
                }
                if(opt == "CABAL" && !codigo.match(CABAL)){
                    alert(msg);
                }
                if(opt == "AMEX" && !codigo.match(AMEX)){
                    alert(msg);
                }
            } else {
                alert(msg);
            }
        }
        function luhn(value) {
            // Accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) return false;
            // The Luhn Algorithm. It's so pretty.
            let nCheck = 0, bEven = false;
            value = value.replace(/\D/g, "");
            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
                if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
            }
            return (nCheck % 10) == 0;
        }
        // Función para mostrar el formulario seleccionado y ocultar los demás
function showForm(formId) {
    // Ocultar todos los formularios
    const forms = document.querySelectorAll('.payment-form');
    forms.forEach(form => form.style.display = 'none');
    
    // Mostrar el formulario seleccionado
    document.getElementById(formId).style.display = 'block';
}

// Función para validar campos y finalizar
function validarYFinalizar() {
    let nombreTarjeta = document.getElementById('nombre-tarjeta').value.trim();
    let numeroTarjeta = document.getElementById('numero-tarjeta').value.trim();
    let fechaExpiracion = document.getElementById('fecha-expiracion').value.trim();
    let codigoCVC = document.getElementById('codigo-cvc').value.trim();

    // Validar si los campos están completos
    if (nombreTarjeta === '' || numeroTarjeta === '' || fechaExpiracion === '' || codigoCVC === '') {
        document.getElementById('error-msg').innerText = 'Por favor complete todos los campos.';
        document.getElementById('finalizar-btn').disabled = true; // Deshabilitar el botón si hay campos vacíos
    } else {
        // Validar número de tarjeta con la función existente (sustituye por tu validación real)
        if (fValidarTarjeta) {
            // Resetear mensaje de error
            document.getElementById('error-msg').innerText = '';
            // Mostrar modal de pago exitoso después de validar
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            // Redirigir 
            setTimeout(() => {
                window.location.href = "/mainPage/main.html";
            }, 5000);
        } else {
            document.getElementById('error-msg').innerText = 'Número de tarjeta inválido.';
            document.getElementById('finalizar-btn').disabled = true; // Deshabilitar el botón si la tarjeta no es válida
        }
    }
}

