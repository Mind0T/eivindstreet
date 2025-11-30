 # Eivind Street - Portafolio Fotográfico y Documental

 Este repositorio aloja el sitio web oficial de **Eivind Leso** (Eivind Street). 
 Es un portafolio profesional diseñado para exhibir fotografía documental, 
 proyectos urbanos en la CDMX (Iztapalapa, Jamaica, Metro) y servicios de videografía.

 El sitio ha sido construido desde cero (Vanilla JS), priorizando el rendimiento, 
 la semántica SEO y una experiencia de usuario inmersiva tanto en escritorio como en móvil.

 ---

 ## 🚀 Tecnologías Utilizadas

 El proyecto no utiliza frameworks pesados (como React o Bootstrap) para mantener 
 el código ligero y tener control total sobre las animaciones y el diseño.

 - **HTML5 Semántico:** Estructura optimizada para SEO (`meta tags`, `OG tags`).
 - **CSS3 Moderno:** #   - Uso de Variables CSS (`:root`).
   - Diseño Responsive (Mobile-First) con Media Queries.
   - Flexbox y CSS Grid para layouts complejos.
   - Animaciones y transiciones suaves.
 - **JavaScript (ES6+):**
   - Lógica modular para carruseles y menús.
   - **Intersection Observer API** para efectos de "Lazy Load" y animaciones al hacer scroll.
   - Manejo de eventos táctiles (`touchstart`, `touchmove`) para gestos en móviles.

 ---

 ## ✨ Características Principales

 ### 1. Navegación y UI
 - **Header Dinámico:** Cambia de transparente a sólido dependiendo de la página y el scroll.
 - **Menú Móvil:** Animado y accesible.
 - **Modo Oscuro/Claro:** Secciones de alto contraste (negro para impacto visual, blanco para galerías).

 ### 2. Galerías de Imágenes Avanzadas
 - **Scroll Gallery:** Las imágenes aparecen con un efecto de desvanecimiento (`fade-in`) conforme el usuario baja, usando `IntersectionObserver`.
 - **Carga Diferida (Lazy Loading):** Implementado para mejorar la velocidad de carga en conexiones móviles.

 ### 3. Lightbox Personalizado (Visor de Fotos)
 Se desarrolló un Lightbox a medida que adapta su comportamiento según el dispositivo:
 - **Escritorio:** Navegación con flechas y teclado, centrado en pantalla.
 - **Móvil:** #   - Soporte para **Gestos Táctiles (Pinch-to-Zoom)** con física personalizada.
   - Desplazamiento lateral (Swipe) nativo con `scroll-snap`.
   - Pantalla completa inmersiva.

 ---

 ## 📂 Estructura del Proyecto

 ```bash
 .
 ├── index.html                # Página de inicio (Carrusel principal)
 ├── about.html                # Biografía y perfil profesional
 ├── proyectosPersonales.html  # Menú de selección de galerías
 ├── videos.html               # Portafolio de videografía y drone
 ├── cursos.html               # Oferta académica (IA y Fotografía)
 ├── contacto.html             # Formulario de contacto
 │
 ├── assets/
 │   ├── css/
 │   │   └── style.css         # Hoja de estilos principal
 │   ├── js/
 │   │   └── script.js         # Lógica completa del sitio
 │   └── img/                  # Recursos gráficos organizados por carpetas
 │       ├── general/          # Logos y fondos
 │       ├── proyectos/        # Carpetas por proyecto (iztapalapa, jamaica, etc.)
 │       └── carruselHOME/     # Imágenes del slider principal
 │
 └── README.md                 # Documentación del proyecto
 ```

 ---

 ## 🔧 Instalación y Despliegue

 ### Localmente
 Dado que es un sitio estático, no requiere instalación de dependencias npm.
 1. Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/eivind-street-portfolio.git](https://github.com/tu-usuario/eivind-street-portfolio.git)
    ```
 2. Abre el archivo `index.html` en tu navegador o usa una extensión como **Live Server** en VS Code.

 ### Despliegue (Deploy)
 El sitio está listo para desplegarse en cualquier host de archivos estáticos:
 - **Vercel / Netlify:** Simplemente conecta el repositorio y el deploy es automático.
 - **GitHub Pages:** Habilita la opción en la configuración del repositorio apuntando a la rama `main` (o `master`).

 ---

 ## 📸 Proyectos Destacados

 El sitio incluye galerías documentales específicas:
 - **Iztapalapa:** Documentación visual de 34 años de historia en la alcaldía.
 - **Mercado de Jamaica:** El ciclo de la vida y la muerte a través de las flores.
 - **Transporte CDMX:** Ensayo sobre la soledad colectiva en el metro.
 - **Centro Médico Siglo XXI:** Arquitectura brutalista y muralismo.

 ---

 ## ✒️ Autor

 **Eivind Leso**
 - Fotógrafo Documental & Estudiante de Ingeniería en IA.
 - [Instagram](https://www.instagram.com/eivind_street/)
 - [Web Oficial](https://eivindstreet.com)



 ## 📄 Licencia

 Todos los derechos reservados sobre las imágenes mostradas en este portafolio.
 El código fuente puede ser utilizado con fines educativos.