/* ==========================================
   LÓGICA DEL CARRITO DE COMPRAS Y CHECKOUT
   ========================================== */

// Configuración de la tienda
const WHATSAPP_CONFIG = {
    telefono: "573227170952", // Código de país 57 (Colombia) + número del usuario
    mensajeBienvenida: "¡Hola! Me interesa realizar un pedido para entregar en Tocaima. Aquí están los detalles de mi compra: ✨🛒"
};

// Estado del carrito en memoria
let carrito = [];

// Inicializar Carrito
function inicializarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito_tocaima');
    if (carritoGuardado) {
        try {
            carrito = JSON.parse(carritoGuardado);
        } catch (e) {
            carrito = [];
        }
    }
    actualizarContadores();
    renderCarrito();
}

// Guardar en LocalStorage
function guardarCarrito() {
    localStorage.setItem('carrito_tocaima', JSON.stringify(carrito));
    actualizarContadores();
    renderCarrito();
}

// Actualizar contadores del badge en el Navbar
function actualizarContadores() {
    const badges = document.querySelectorAll('.cart-count');
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    
    badges.forEach(badge => {
        badge.textContent = totalItems;
        if (totalItems > 0) {
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Añadir Producto al Carrito
function agregarAlCarrito(id, cantidad = 1) {
    // Buscar si ya existe el producto en el carrito
    const itemExistente = carrito.find(item => item.id === id);
    
    // Buscar la información completa en PRODUCTOS
    const productoInfo = PRODUCTOS.find(p => p.id === id);
    if (!productoInfo) return;

    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: productoInfo.id,
            nombre: productoInfo.nombre,
            precio: productoInfo.precio,
            imagen: productoInfo.imagen,
            cantidad: cantidad
        });
    }

    guardarCarrito();
    
    // Mostrar notificación Toast
    mostrarToast(`¡${productoInfo.nombre} añadido al carrito!`, "success");
}

// Eliminar Producto
function eliminarDelCarrito(id) {
    const productoInfo = carrito.find(item => item.id === id);
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    
    if (productoInfo) {
        mostrarToast(`Se retiró "${productoInfo.nombre}" del carrito.`, "info");
    }
}

// Actualizar Cantidad
function actualizarCantidad(id, nuevaCantidad) {
    const item = carrito.find(item => item.id === id);
    if (!item) return;

    item.cantidad = parseInt(nuevaCantidad);
    
    if (item.cantidad <= 0) {
        eliminarDelCarrito(id);
    } else {
        guardarCarrito();
    }
}

// Vaciar Carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarToast("El carrito ha sido vaciado.", "info");
}

// Formatear precio a pesos colombianos
function formatearPrecio(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(valor);
}

// Renderizar Carrito en la interfaz flotante
function renderCarrito() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartFooter = document.getElementById('cart-footer-details');

    if (!cartItemsContainer) return; // Puede que estemos en inicio.html y no en productos.html

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '';
        if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'block'; // Mostrar subtotal $0 y botón deshabilitado
        if (cartSubtotalElement) cartSubtotalElement.textContent = formatearPrecio(0);
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.setAttribute('title', 'Tu carrito está vacío. Agrega productos primero.');
        }
        return;
    }

    if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.removeAttribute('title');
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = '';

    carrito.forEach(item => {
        const totalProducto = item.precio * item.cantidad;
        subtotal += totalProducto;

        const cartItemHTML = `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-img" onerror="this.src='https://placehold.co/80x80/FAF6F0/2C221E?text=Cosmetico'">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.nombre}</h4>
                    <span class="cart-item-price">${formatearPrecio(item.precio)}</span>
                    <div class="cart-item-qty">
                        <button onclick="cambiarCantidadUI('${item.id}', -1)" class="qty-btn"><i class="fas fa-minus"></i></button>
                        <span class="qty-number">${item.cantidad}</span>
                        <button onclick="cambiarCantidadUI('${item.id}', 1)" class="qty-btn"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <button onclick="eliminarDelCarrito('${item.id}')" class="cart-item-remove">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    if (cartSubtotalElement) {
        cartSubtotalElement.textContent = formatearPrecio(subtotal);
    }
}

// Cambiar cantidad en la UI
function cambiarCantidadUI(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;
    
    const nuevaCantidad = item.cantidad + delta;
    actualizarCantidad(id, nuevaCantidad);
}

// Enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        mostrarToast("Tu carrito está vacío. Añade productos antes de realizar tu pedido.", "warning");
        return;
    }

    // Solicitar detalles de entrega locales de forma amigable en Tocaima
    const nombreCliente = prompt("Por favor, ingresa tu nombre completo:");
    if (!nombreCliente || nombreCliente.trim() === "") {
        alert("El nombre es requerido para procesar el despacho en Tocaima.");
        return;
    }

    const direccionCliente = prompt("Ingresa tu dirección de entrega en Tocaima (o indica si retiras en el punto físico):");
    if (!direccionCliente || direccionCliente.trim() === "") {
        alert("La dirección o punto de entrega es requerida.");
        return;
    }

    const metodoPago = prompt("Selecciona tu método de pago preferido en Tocaima:\n1. Nequi\n2. Daviplata\n3. Pago Contraentrega (Efectivo)\n(Escribe 1, 2 o 3):");
    let medioPagoText = "Pago Contraentrega (Efectivo)";
    if (metodoPago === "1") medioPagoText = "Nequi";
    else if (metodoPago === "2") medioPagoText = "Daviplata";

    // Compilar mensaje detallado
    let listadoProductos = "";
    let subtotalTotal = 0;

    carrito.forEach((item, index) => {
        const itemTotal = item.precio * item.cantidad;
        subtotalTotal += itemTotal;
        listadoProductos += `\n*${index + 1}.* ${item.nombre} x${item.cantidad} - _${formatearPrecio(itemTotal)}_`;
    });

    const costoEnvio = "¡Envío GRATIS en Tocaima!";
    const totalFinal = subtotalTotal;

    // Crear el mensaje decodificando URLs
    const mensajeText = 
`${WHATSAPP_CONFIG.mensajeBienvenida}

👤 *Cliente:* ${nombreCliente}
📍 *Entrega en Tocaima:* ${direccionCliente}
💳 *Medio de Pago:* ${medioPagoText}

---------------------------------------
🛒 *PRODUCTOS SOLICITADOS:*${listadoProductos}
---------------------------------------

🚚 *Envío:* ${costoEnvio}
💰 *TOTAL A PAGAR:* *${formatearPrecio(totalFinal)}*

_Gracias por apoyar el comercio local en Tocaima. ¡Es un gusto atenderte!_`;

    const mensajeCodificado = encodeURIComponent(mensajeText);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${WHATSAPP_CONFIG.telefono}&text=${mensajeCodificado}`;

    // Abrir enlace en pestaña nueva y fallback si bloqueado
    const opened = window.open(urlWhatsApp, '_blank');
    if (!opened) {
        // Si el popup es bloqueado, redirigir la página actual
        window.location.href = urlWhatsApp;
    }
    
    // Vaciar carrito tras la confirmación e informar
    vaciarCarrito();
    mostrarToast("¡Pedido compilado! Serás redirigido a WhatsApp para finalizar.", "success");
    
    // Cerrar carrito si está abierto
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    inicializarCarrito();
});
