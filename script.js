// Seleccionamos el navbar
const navbar = document.getElementById('navbar');

// Seleccionamos todos los enlaces del menú de navegación
const navLinks = navbar.querySelectorAll('.nav-link');

// Obtenemos el nombre del archivo actual desde la URL
const currentPage = window.location.pathname.split("/").pop(); 

// Función para quitar la clase 'active' de todos los enlaces
function removeActiveClasses() {
    navLinks.forEach(nav => nav.classList.remove('active'));
}

//

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('show');
        mobileMenu.classList.toggle('active');
    });

    // Opcional: Para cerrar el menú cuando se hace clic en un enlace de la lista
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('show');
            mobileMenu.classList.remove('active');
        });
    });
});


// Añadimos la clase 'active' al enlace que coincide con la página actual
navLinks.forEach(link => {
    // Comprobamos si el href del enlace coincide con la página actual
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }

    // Añadimos el evento click para actualizar la clase 'active'
    link.addEventListener('click', function() {
        removeActiveClasses(); // Quitamos 'active' de todos
        this.classList.add('active'); // Agregamos 'active' al enlace clicado
    });

    // Añadimos el evento 'mouseover' para iluminar al pasar el mouse
    link.addEventListener('mouseover', function() {
        removeActiveClasses(); // Quitamos 'active' de todos los enlaces
        this.classList.add('active'); // Agregamos 'active' al enlace sobre el cual se pasa el mouse
    });

    // Añadimos el evento 'mouseout' para restaurar la clase 'active' cuando el mouse sale
    link.addEventListener('mouseout', function() {
        removeActiveClasses(); // Limpiamos todas las clases activas
        // Restauramos la clase 'active' al enlace correspondiente a la página actual
        navbar.querySelector(`a[href="${currentPage}"]`).classList.add('active');

    });
});


// Agregar funcionalidad para mostrar la tarjeta de información al hacer clic en los círculos
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const infoBox = document.getElementById('info-box');
        const infoText = document.getElementById('info-text');
        const infoImage = document.getElementById('info-image');
        const country = this.getAttribute('data-country');

        // Actualiza el texto de la tarjeta según el país
        infoText.textContent = `This is a review from ${country}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

        // Puedes cambiar la imagen aquí si tienes diferentes fotos por país
        // Ejemplo: infoImage.src = `images/${country.toLowerCase()}-client.png`;

        // Mostrar la tarjeta de información
        infoBox.classList.add('show');
    });
});

// Cerrar el cuadro de información cuando se hace clic fuera de él
document.addEventListener('click', function(e) {
    const infoBox = document.getElementById('info-box');
    if (!e.target.closest('.circle') && !e.target.closest('#info-box')) {
        infoBox.classList.remove('show');
    }
});
