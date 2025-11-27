document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DEL CARRUSEL PRINCIPAL (HOME) ---
    let slideIndex = 1;
    let slideInterval;
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Solo iniciar autoplay si existen slides en la página (para el Home)
    if (slides.length > 0 && document.getElementById('home-carousel')) {
        showSlides(slideIndex);
        startAutoSlide();
    }

    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(function() { plusSlides(1); }, 3000);
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

    // --- UTILS (Fondos, Menú, Lightbox) ---
    window.changeBackground = function(imageName) {
        const container = document.getElementById('projects-container');
        if(container) container.style.backgroundImage = `url('assets/img/proyectos/general/${imageName}')`;
    };

    window.resetBackground = function() {
        const container = document.getElementById('projects-container');
        if(container) container.style.backgroundImage = "url('assets/img/proyectos/general/fondoProy.jpg')";
    };

    const menuToggle = document.getElementById('mobile-menu-btn');
    const closeMenu = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() { mobileMenu.classList.add('active'); });
    }
    if(closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() { mobileMenu.classList.remove('active'); });
    }

    // --- LOGICA LIGHTBOX ---
    let lightboxIndex = 1;
    window.openLightbox = function(n) {
        const lightbox = document.getElementById('myLightbox');
        if(lightbox) {
            lightbox.style.display = "flex"; lightbox.style.justifyContent = "center"; lightbox.style.alignItems = "center";
            currentLightboxSlide(n);
        }
    };
    window.closeLightbox = function() {
        const lightbox = document.getElementById('myLightbox');
        if(lightbox) lightbox.style.display = "none";
    };
    window.plusLightboxSlides = function(n) { showLightboxSlides(lightboxIndex += n); };
    window.currentLightboxSlide = function(n) { showLightboxSlides(lightboxIndex = n); };

    function showLightboxSlides(n) {
        let originalImages = document.querySelectorAll('.project-carousel-frame .carousel-slide');
        if (originalImages.length === 0) {
            originalImages = document.querySelectorAll('.scroll-gallery-container .gallery-item');
        }
        const lightboxImg = document.getElementById("lightbox-img");
        if (!originalImages.length || !lightboxImg) return;
        if (n > originalImages.length) {lightboxIndex = 1}
        if (n < 1) {lightboxIndex = originalImages.length}
        lightboxImg.src = originalImages[lightboxIndex-1].src;
    }

    // --- LÓGICA DE GALERÍA SCROLL (EDITORIAL) ---
    window.initScrollGallery = function(folderPath, imagePrefix, totalImages) {
        const container = document.getElementById('scroll-gallery');
        if (!container) return;

        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        for (let i = 1; i <= totalImages; i++) {
            const img = document.createElement('img');
            img.src = `${folderPath}/${imagePrefix}${i}.jpg`;
            img.alt = `Foto ${i}`;
            img.className = 'gallery-item';
            img.onclick = function() { openLightbox(i); };
            
            // LÓGICA DE POSICIONAMIENTO CORREGIDA
            img.onload = function() {
                const isPortrait = this.naturalHeight > this.naturalWidth;

                if (isPortrait) {
                    this.classList.add('is-portrait');
                    
                    // Usamos el modulo (%) para crear un ciclo determinista:
                    // Esto asegura que 1, 2, 3 siempre tengan posiciones distintas.
                    // i % 3 puede ser 0, 1 o 2.
                    const positionIndex = i % 3;

                    if (positionIndex === 1) {
                        this.classList.add('align-left');   // Fotos 1, 4, 7...
                    } else if (positionIndex === 2) {
                        this.classList.add('align-center'); // Fotos 2, 5, 8...
                    } else {
                        this.classList.add('align-right');  // Fotos 3, 6, 9...
                    }

                } else {
                    this.classList.add('is-landscape');
                    this.classList.add('align-center');
                }
            };

            container.appendChild(img);
            observer.observe(img);
        }
    };

    // --- BOTÓN BACK TO TOP (VOLVER ARRIBA) ---
    const backToTopBtn = document.getElementById("backToTop");
    if(backToTopBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});