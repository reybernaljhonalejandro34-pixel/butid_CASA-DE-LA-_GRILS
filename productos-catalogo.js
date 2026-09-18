/* ==========================================
   INTERACTIVIDAD DE LA PÁGINA DE CATÁLOGO
   ========================================== */

let categoriaActiva = "all";
let terminoBusqueda = "";

// Carga Inicial del Catálogo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Leer parámetros de categoría por URL (ej. ?categoria=cosmeticos)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('categoria');
    if (catParam) {
        categoriaActiva = catParam;
        
        // Actualizar la clase activa en los filtros HTML
        const pills = document.querySelectorAll('.filter-pill');
        pills.forEach(pill => {
            if (pill.getAttribute('data-filter') === catParam) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });
    }

    // Simulador de carga premium (Skeleton / Loader)
    const loader = document.getElementById('catalog-loader');
    const grid = document.getElementById('products-grid');
    
    setTimeout(() => {
        if (loader) loader.style.display = 'none';
        if (grid) {
            grid.style.display = 'grid';
            renderCatalogo();
        }
    }, 450); // Carga fluida de 450ms

    // 2. Controladores de Eventos de Filtros (Pills)
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            // Quitar clase activa previa
            filterPills.forEach(p => p.classList.remove('active'));
            // Añadir clase activa al presionado
            e.currentTarget.classList.add('active');
            
            categoriaActiva = e.currentTarget.getAttribute('data-filter');
            renderCatalogo();
        });
    });

    // 3. Controladores del Buscador
    const searchInput = document.getElementById('search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            terminoBusqueda = e.target.value.toLowerCase().trim();
            
            if (searchClearBtn) {
                if (terminoBusqueda !== "") {
                    searchClearBtn.style.display = 'block';
                } else {
                    searchClearBtn.style.display = 'none';
                }
            }
            renderCatalogo();
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            terminoBusqueda = "";
            searchClearBtn.style.display = 'none';
            renderCatalogo();
        });
    }

    // Botón de restaurar filtros cuando no hay resultados
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            terminoBusqueda = "";
            if (searchClearBtn) searchClearBtn.style.display = 'none';
            
            categoriaActiva = "all";
            filterPills.forEach(p => {
                if (p.getAttribute('data-filter') === 'all') p.classList.add('active');
                else p.classList.remove('active');
            });
            renderCatalogo();
        });
    }

    // Botón para cerrar el carrito desde el mensaje de vacío
    const emptyCloseBtn = document.getElementById('btn-cart-empty-close');
    if (emptyCloseBtn) {
        emptyCloseBtn.addEventListener('click', () => {
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartOverlay = document.getElementById('cart-overlay');
            if (cartSidebar) cartSidebar.classList.remove('open');
            if (cartOverlay) cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // 4. Controladores de Cierre del Modal
    const modalClose = document.getElementById('product-modal-close');
    const modalOverlay = document.getElementById('product-modal-overlay');
    
    if (modalClose) modalClose.addEventListener('click', cerrarModalProducto);
    if (modalOverlay) modalOverlay.addEventListener('click', cerrarModalProducto);
});

// Renderizar el catálogo filtrado
function renderCatalogo() {
    const productsGrid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    
    if (!productsGrid) return;

    // Filtrar la base de datos de PRODUCTOS
    const productosFiltrados = PRODUCTOS.filter(producto => {
        const coincideCategoria = (categoriaActiva === "all" || producto.categoria === categoriaActiva);
        const coincideBusqueda = (
            producto.nombre.toLowerCase().includes(terminoBusqueda) || 
            producto.descripcion.toLowerCase().includes(terminoBusqueda)
        );
        return coincideCategoria && coincideBusqueda;
    });

    // Validar si existen resultados
    if (productosFiltrados.length === 0) {
        productsGrid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';
    productsGrid.innerHTML = '';

    productosFiltrados.forEach(prod => {
        // Formatear la etiqueta de la categoría para mostrarla bonita
        let tagLabel = prod.categoria.toUpperCase();
        if (prod.categoria === "cosmeticos") tagLabel = "COSMÉTICOS";
        else if (prod.categoria === "capilares") tagLabel = "CAPILAR";
        else if (prod.categoria === "personal") tagLabel = "PERSONAL";
        else if (prod.categoria === "shein") tagLabel = "SHEIN FASHION";

        const cardHTML = `
            <div class="product-card" data-category="${prod.categoria}">
                <div class="prod-img-container">
                    <img loading="lazy" src="${prod.imagen}" alt="${prod.nombre}" class="prod-img" onerror="this.src='https://placehold.co/300x350/FAF6F0/2C221E?text=Aura+Belleza'">
                    <span class="prod-tag tag-${prod.categoria}">${tagLabel}</span>
                    <button onclick="abrirModalProducto('${prod.id}')" class="quick-view-btn" aria-label="Vista Rápida de ${prod.nombre}">
                        Vista Rápida 👁️
                    </button>
                </div>
                <div class="prod-info">
                    <h3 class="prod-title">${prod.nombre}</h3>
                    <p class="prod-desc">${prod.descripcion}</p>
                    <div class="prod-footer">
                        <span class="prod-price">${formatearPrecio(prod.precio)}</span>
                        <button onclick="agregarAlCarrito('${prod.id}')" class="btn-add-cart" aria-label="Añadir ${prod.nombre} al carrito">
                            Añadir 🛒
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Abrir Modal de Producto (Vista Rápida)
function abrirModalProducto(id) {
    const producto = PRODUCTOS.find(p => p.id === id);
    if (!producto) return;

    const modalBody = document.getElementById('product-modal-body');
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('product-modal-overlay');

    if (!modalBody || !modal || !overlay) return;

    let tagLabel = producto.categoria.toUpperCase();
    if (producto.categoria === "cosmeticos") tagLabel = "COSMÉTICOS";
    else if (producto.categoria === "capilares") tagLabel = "TRATAMIENTO CAPILAR";
    else if (producto.categoria === "personal") tagLabel = "cuidado_personal";
    else if (producto.categoria === "shein") tagLabel = "ropa_shein IMPORTADA";

    modalBody.innerHTML = `
        <div class="modal-product-grid">
            <div class="modal-product-img">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://placehold.co/400x450/FAF6F0/2C221E?text=Aura+Belleza'">
            </div>
            <div class="modal-product-info">
                <span class="modal-product-tag tag-${producto.categoria}">${tagLabel}</span>
                <h2 class="modal-product-title">${producto.nombre}</h2>
                <span class="modal-product-price">${formatearPrecio(producto.precio)}</span>
                
                <p class="modal-product-desc">${producto.descripcion}</p>
                
                <div class="modal-delivery-details">
                    <div class="delivery-badge">🚚 Domicilio Gratis en Tocaima</div>
                    <div class="delivery-badge">💳 Contraentrega / Nequi / Daviplata</div>
                </div>
                
                <div class="modal-actions-container">
                    <div class="qty-selector">
                        <button onclick="cambiarQtyModal(-1)" class="modal-qty-btn">-</button>
                        <span id="modal-qty-num" style="font-weight:700; width:30px; text-align:center;">1</span>
                        <button onclick="cambiarQtyModal(1)" class="modal-qty-btn">+</button>
                    </div>
                    <button onclick="agregarAlCarritoDesdeModal('${producto.id}')" class="btn btn-primary" style="flex:1;">
                        Añadir al Carrito 🛒
                    </button>
                </div>
                
                <a href="https://api.whatsapp.com/send?phone=573227170952&text=${encodeURIComponent('¡Hola! Me gustaría preguntar más sobre el producto: ' + producto.nombre)}" target="_blank" class="btn-whatsapp-query">
                    Preguntar por WhatsApp 📱
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Detiene el scroll principal
}

// Cambiar Cantidad en el selector del modal
function cambiarQtyModal(delta) {
    const qtySpan = document.getElementById('modal-qty-num');
    if (!qtySpan) return;

    let qty = parseInt(qtySpan.textContent);
    qty = qty + delta;
    
    if (qty < 1) qty = 1;
    qtySpan.textContent = qty;
}

// Agregar al Carrito desde el Modal
function agregarAlCarritoDesdeModal(id) {
    const qtySpan = document.getElementById('modal-qty-num');
    const cantidad = qtySpan ? parseInt(qtySpan.textContent) : 1;
    
    agregarAlCarrito(id, cantidad);
    cerrarModalProducto();
}

// Cerrar Modal
function cerrarModalProducto() {
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('product-modal-overlay');

    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura el scroll principal
}

