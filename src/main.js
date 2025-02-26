document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let carouselIndex = 0;

    // Función para cambiar entre tema claro y oscuro
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '☀️'; // Cambiar icono a Sol
            themeToggle.title = 'Cambiar a modo claro'; // Cambiar tooltip a "Modo Claro"
            themeToggle.classList.remove('theme-toggle-light-style'); // Remover clase de estilo claro
            themeToggle.classList.add('theme-toggle-dark-style'); // Añadir clase de estilo oscuro
        } else {
            themeToggle.innerHTML = '🌙'; // Cambiar icono a Luna
            themeToggle.title = 'Cambiar a modo oscuro'; // Cambiar tooltip a "Modo Oscuro"
            themeToggle.classList.remove('theme-toggle-dark-style'); // Remover clase de estilo oscuro
            themeToggle.classList.add('theme-toggle-light-style'); // Añadir clase de estilo claro
        }
    });

    // Inicializar el icono, tooltip y estilo del botón de tema al cargar la página
    if (body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '☀️'; // Icono Sol si tema oscuro al inicio
        themeToggle.title = 'Cambiar a modo claro'; // Tooltip "Modo Claro"
        themeToggle.classList.add('theme-toggle-dark-style'); // Añadir clase de estilo oscuro
    } else {
        themeToggle.innerHTML = '🌙'; // Icono Luna si tema claro al inicio
        themeToggle.title = 'Cambiar a modo oscuro'; // Tooltip "Modo Oscuro"
        themeToggle.classList.add('theme-toggle-light-style'); // Añadir clase de estilo claro
    }


    // --- NUEVO CÓDIGO PARA NAVBAR TOGGLE ---
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show'); // Añade/quita la clase 'show' al navbar-collapse
    });


    // Carrusel de imágenes
    if (carousel && prevButton && nextButton) {
        nextButton.addEventListener('click', () => {
            carouselIndex++;
            if (carouselIndex >= carousel.children.length) {
                carouselIndex = 0;
            }
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            carouselIndex--;
            if (carouselIndex < 0) {
                carouselIndex = carousel.children.length - 1;
            }
            updateCarousel();
        });

        function updateCarousel() {
            carousel.style.transform = `translateX(-${carouselIndex * 100}%)`;
        }
    }
});

// AOS.init()