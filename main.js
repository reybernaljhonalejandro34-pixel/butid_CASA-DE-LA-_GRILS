/* ==========================================
   INTERACTIVIDAD DE INTERFAZ Y EFECTOS VISUALES
   ========================================== */

// Sistema de Notificaciones Toast (Accesible de forma global)
function mostrarToast(mensaje, tipo = 'info') {
    let toastContainer = document.querySelector('.toast-container');
    
    // Si no existe el contenedor de notificaciones, lo creamos
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    // Crear el elemento individual del Toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    
    // Asignar ícono según el tipo
    let icon = '&bull;';
    if (tipo === 'success') {
        icon = '&#x2713;'; // Checkmark
    } else if (tipo === 'info') {
        icon = '&#x2139;'; // Info symbol
    } else if (tipo === 'warning') {
        icon = '&#x26A0;'; // Alert triangle
    }

    toast.innerHTML = `
        <span class="toast-icon" style="font-weight: bold; font-size: 1.2rem; margin-right: 8px;">${icon}</span>
        <span class="toast-message">${mensaje}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Forzar reflow para la transición de entrada
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);
    
    // Desaparecer después de 3.5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        // Remover del DOM tras la animación
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

// Configuración general del sitio al cargar
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Control del Menú Responsivo (Hamburguesa)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Animación de las barras del menú
            const spans = menuToggle.querySelectorAll('span');
            if (menuToggle.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Cerrar menú al hacer clic en un enlace (móvil)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            });
        });
    }

    // 2. Efecto en Navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. Sistema dinámico de Animación por Scroll (Scroll Reveal)
    const elementosAnimables = document.querySelectorAll('.animar-scroll');
    
    if (elementosAnimables.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aparecer');
                    observer.unobserve(entry.target); // Solo se anima una vez
                }
            });
        }, observerOptions);
        
        elementosAnimables.forEach(elemento => {
            scrollObserver.observe(elemento);
            // Añadir clase de estilo inicial
            elemento.classList.add('escondido');
        });
    }

    // 4. Panel lateral de Carrito (Abrir / Cerrar)
    const openCartBtn = document.getElementById('cart-open-btn');
    const openCartBtnMobile = document.getElementById('cart-open-btn-mobile');
    const closeCartBtn = document.getElementById('cart-close-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');

    function toggleCart(open) {
        if (!cartSidebar) return;
        if (open) {
            cartSidebar.classList.add('open');
            if (cartOverlay) cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Detiene scroll del body
        } else {
            cartSidebar.classList.remove('open');
            if (cartOverlay) cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaura scroll del body
        }
    }

    if (openCartBtn) openCartBtn.addEventListener('click', () => toggleCart(true));
    if (openCartBtnMobile) openCartBtnMobile.addEventListener('click', () => toggleCart(true));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

    // 5. Suscripción a Newsletter (Mockup interactivo)
    const newsletterSubmit = document.querySelector('.newsletter-form');
    if (newsletterSubmit) {
        newsletterSubmit.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterSubmit.querySelector('input');
            if (input && input.value.trim() !== '') {
                mostrarToast(`¡Gracias! Te mantendremos informada de nuestras novedades en Tocaima.`, "success");
                input.value = '';
            } else {
                mostrarToast("Por favor, ingresa un correo válido.", "warning");
            }
        });
    }
});

// Estilo de Animación Scroll Dinámica (Inyectado si no existe)
const style = document.createElement('style');
style.textContent = `
    .escondido {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .escondido.derecha {
        transform: translateX(30px);
    }
    .escondido.izquierda {
        transform: translateX(-30px);
    }
    .escondido.escala {
        transform: scale(0.9);
    }
    .aparecer {
        opacity: 1;
        transform: translate(0) scale(1);
    }
`;
document.head.appendChild(style);
