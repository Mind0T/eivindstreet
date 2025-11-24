document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DEL CARRUSEL ---
    let slideIndex = 1;
    let slideInterval;
    
    const slides = document.getElementsByClassName("carousel-slide");
    
    if (slides.length > 0) {
        showSlides(slideIndex);
        startAutoSlide();
    }

    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
    }

    window.plusSlides = function(n) {
        clearInterval(slideInterval); 
        showSlides(slideIndex += n);
        startAutoSlide(); 
    };

    function showSlides(n) {
        let i;
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            slides[i].classList.remove("active");
        }
        
        if (slides[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block";  
            slides[slideIndex-1].classList.add("active");
        }
    }

    // --- LÓGICA CAMBIO DE FONDO (Proyectos) ---
    window.changeBackground = function(imageName) {
        const container = document.getElementById('projects-container');
        if(container) {
            container.style.backgroundImage = `url('assets/img/proyectos/general/${imageName}')`;
        }
    };

    window.resetBackground = function() {
        const container = document.getElementById('projects-container');
        if(container) {
            container.style.backgroundImage = "url('assets/img/proyectos/general/fondoProy.jpg')";
        }
    };

    // --- LÓGICA MENÚ MÓVIL (NUEVO) ---
    const menuToggle = document.getElementById('mobile-menu-btn');
    const closeMenu = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }

    if(closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
});