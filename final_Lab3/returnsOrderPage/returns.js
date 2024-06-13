// Definir el booleano
const mostrarCards = false;

// Función para controlar la visibilidad de las cards
function controlarVisibilidadCards() {
    const cards = document.querySelectorAll('.card');
    if (!mostrarCards) {
        cards.forEach(card => {
            card.classList.add('hidden');
        });
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', controlarVisibilidadCards);