# DERIURS - Portfolio Web

Este repositorio contiene el código fuente del sitio web personal de **DERIURS**, un portafolio diseñado para exhibir fotografía documental, videografía aérea y la intersección con la Ingeniería en IA.

El diseño sigue una estética minimalista y oscura ("Dark Mode"), priorizando la visualización de imágenes de alta calidad y una navegación tipográfica limpia y moderna utilizando la familia de fuentes *Montserrat*.

## 📋 Características Principales

* **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.
* **Navegación Dinámica:**
    * Header fijo con gradiente y distribución equilibrada (Logo a la izquierda, Menú al centro, Redes a la derecha).
    * Tipografía "Light" para una densidad visual elegante.
    * Efectos de *hover* en enlaces e iconos.
* **Carrusel de Imágenes (Slider):**
    * Implementado en JavaScript puro (Vanilla JS).
    * Funcionalidad automática y manual (flechas de navegación).
* **Menú de Proyectos Interactivo:**
    * Cambio de fondo de pantalla completa al pasar el cursor sobre los nombres de los proyectos (`onmouseover`).
* **Galería de Videos:**
    * Integración (Embed) de videos de YouTube manteniendo la relación de aspecto 16:9.
* **Tipografía y Iconos:**
    * Uso de *Google Fonts* (Montserrat) con jerarquía de grosores (Light vs. Extra Bold).
    * Iconos vectoriales mediante *FontAwesome* (sin uso de imágenes PNG para iconos).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Variables CSS (`:root`), Flexbox, CSS Grid y transiciones.
* **JavaScript (ES6):** Lógica del carrusel y manipulación del DOM para fondos dinámicos.
* **Librerías Externas:**
    * [FontAwesome 6.4](https://fontawesome.com/) (Iconos)
    * [Google Fonts](https://fonts.google.com/) (Montserrat)

## 📂 Estructura del Proyecto

El proyecto sigue una estructura ordenada para facilitar el mantenimiento:

```text
/
├── index.html                # Página de Inicio (Carrusel principal)
├── about.html                # Sección "Acerca de mí"
├── proyectosPersonales.html  # Menú interactivo de proyectos
├── videos.html               # Galería de videografía
├── cursos.html               # Sección de cursos ofertados
├── iztapalapa.html           # Proyecto individual
├── jamaica.html              # Proyecto individual
├── metroCdmx.html            # Proyecto individual
├── README.md                 # Documentación
└── assets/
    ├── css/
    │   └── style.css         # Estilos globales
    ├── js/
    │   └── script.js         # Lógica del carrusel y fondos
    └── img/
        ├── general/          # Logos, iconos antiguos, recursos base
        ├── acerca/           # Fotos para sección about
        ├── carruselHOME/     # Imágenes del slider inicial
        └── proyectos/        # Carpetas por proyecto (iztapalapa, metro, etc.)

🚀 Instalación y Uso
Este es un sitio web estático, por lo que no requiere instalación de dependencias complejas ni servidores backend.

Clonar el repositorio:

git clone [https://github.com/tu-usuario/deriurs-portfolio.git](https://github.com/tu-usuario/deriurs-portfolio.git)

2. Ejecutar: Simplemente abre el archivo index.html en tu navegador web preferido (Chrome, Firefox, Edge).

Recomendación: Para desarrollo, utiliza la extensión "Live Server" de VS Code.

⚙️ Personalización
Agregar un nuevo proyecto
Duplica un archivo de proyecto existente (ej. iztapalapa.html) y renómbralo.

Actualiza el título y la descripción en el HTML.

Cambia las rutas de las imágenes del carrusel.

Agrega el enlace en proyectosPersonales.html:
<a href="nuevo-proyecto.html" class="project-link" 
   onmouseover="changeBackground('nuevaImagenFondo.jpg')" 
   onmouseout="resetBackground()">
   Nombre del Proyecto
</a>