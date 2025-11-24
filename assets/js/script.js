// Lógica del Carrusel (Funciona para Home y páginas de Proyectos)
let slideIndex = 1;

// Solo inicia el carrusel si existen elementos con la clase "carousel-slide"
if (document.getElementsByClassName("carousel-slide").length > 0) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Lógica para cambio de fondo en "Proyectos Personales"
function changeBackground(imageName) {
    const container = document.getElementById('projects-container');
    if(container) {
        // Asume que las imagenes están en assets/img/proyectos/general/
        container.style.backgroundImage = `url('assets/img/proyectos/general/${imageName}')`;
    }
}

function resetBackground() {
    const container = document.getElementById('projects-container');
    if(container) {
        container.style.backgroundImage = "url('assets/img/proyectos/general/fondoProy.jpg')";
    }
}