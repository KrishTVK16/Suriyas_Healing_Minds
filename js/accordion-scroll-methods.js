// ===== ALTERNATIVE ACCORDION METHODS =====
// The main implementation uses smart scrolling. Here are alternative approaches:

/* 
 * METHOD 1: NO SCROLL - Just expand in place (Current improved version)
 * - Only scrolls if card top is hidden behind navbar
 * - Waits for animation to complete (300ms)
 * - Uses 'start' positioning for minimal movement
 */

/* 
 * METHOD 2: COMPLETELY DISABLE SCROLLING
 * Replace the setTimeout block in toggleAccordion() with:
 * 
 *     // No scrolling - just expand in place
 *     // (Comment out or remove the setTimeout scroll block)
 */

/* 
 * METHOD 3: MODAL POPUP APPROACH (No scrolling needed)
 * Add this CSS and update HTML to use modals instead:

.service-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 9999;
    padding: 2rem;
    overflow-y: auto;
}

.service-modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    border-radius: 20px;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 3rem;
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: var(--accent);
}

// JavaScript for modal:
function openServiceModal(serviceId) {
    const modal = document.getElementById(serviceId + '-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal(serviceId) {
    const modal = document.getElementById(serviceId + '-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.service-modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// Close on backdrop click
document.querySelectorAll('.service-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

*/

/* 
 * METHOD 4: COMPACT ACCORDION (Limit height)
 * Add max-height to accordion content:

.service-details.active {
    max-height: 600px; // Instead of 3000px
    overflow-y: auto;
}

This keeps expanded content compact and reduces scrolling.
*/

/* 
 * METHOD 5: SCROLL TO BUTTON INSTEAD OF CARD TOP
 * Replace the scroll block with:

setTimeout(() => {
    button.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' // Centers the button in viewport
    });
}, 300);

This keeps the button you clicked in the middle of the screen.
*/

/* 
 * METHOD 6: SMOOTH OFFSET SCROLL (Account for navbar precisely)
 * 
const scrollToWithOffset = (element, offset) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

// Then in toggleAccordion:
setTimeout(() => {
    const card = detailsElement.closest('.service-card');
    if (card) {
        scrollToWithOffset(card, 100); // 100px offset from top
    }
}, 300);
*/

/* 
 * RECOMMENDED: The current implementation (METHOD 1) is best because:
 * - Only scrolls when necessary (card hidden by navbar)
 * - Minimal movement with 'start' positioning
 * - Waits for animation to complete (300ms)
 * - Keeps user's viewport stable when possible
 * 
 * If you want NO scrolling at all, just comment out the setTimeout block entirely.
 */
