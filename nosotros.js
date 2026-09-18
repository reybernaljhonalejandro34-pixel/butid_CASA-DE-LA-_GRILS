/* ==========================================
   INTERACTIVIDAD DE LA PÁGINA SOBRE NOSOTROS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Acordeón Interactivo de Preguntas Frecuentes (FAQs)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', (e) => {
            const currentItem = e.currentTarget.parentElement;
            const answer = currentItem.querySelector('.faq-answer');
            const icon = currentItem.querySelector('.faq-icon-toggle');
            
            // Cerrar otros acordeones abiertos (Opcional, para comportamiento limpio)
            const allItems = document.querySelectorAll('.faq-item');
            allItems.forEach(item => {
                if (item !== currentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                    item.querySelector('.faq-icon-toggle').textContent = '+';
                }
            });

            // Alternar estado activo del actual
            currentItem.classList.toggle('active');
            
            if (currentItem.classList.contains('active')) {
                // Expandir usando scrollHeight para animación suave en CSS
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (icon) icon.textContent = '−'; // Signo de menos
            } else {
                answer.style.maxHeight = null;
                if (icon) icon.textContent = '+'; // Signo de más
            }
        });
    });

    // 2. Procesamiento del Formulario de Contacto (Redirección Inteligente a WhatsApp)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim() || 'No proporcionado';
            const message = document.getElementById('contact-message').value.trim();
            
            if (name === "" || message === "") {
                mostrarToast("Por favor, rellena los campos requeridos.", "warning");
                return;
            }

            // Compilar consulta para WhatsApp Ventas
            const whatsappText = 
`💬 *CONSULTA DESDE EL SITIO WEB - BOUTIQUE LA CASA DE LAS GIRLS* 💬

👤 *Nombre:* ${name}
📧 *Email:* ${email}

---------------------------------------
📝 *MENSAJE / CONSULTA:*
"${message}"
---------------------------------------

_Por favor, asesórame en breve. ¡Muchas gracias!_`;

            const encodedText = encodeURIComponent(whatsappText);
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=573227170952&text=${encodedText}`;

            // Notificación e inicio de redirección
            mostrarToast("¡Formulario de contacto listo! Abriendo WhatsApp...", "success");
            
            setTimeout(() => {
                window.open(urlWhatsApp, '_blank');
                contactForm.reset();
            }, 800);
        });
    }
});
