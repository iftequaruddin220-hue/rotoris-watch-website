// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h4').textContent;
        const price = this.parentElement.querySelector('.price').textContent;
        
        // Store in localStorage
        let cart = JSON.parse(localStorage.getItem('rotorisCart')) || [];
        cart.push({
            name: productName,
            price: price,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('rotorisCart', JSON.stringify(cart));
        
        // Show confirmation
        alert(`${productName} added to cart!`);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            message: this.querySelector('textarea').value,
            timestamp: new Date().toISOString()
        };
        
        // Store message (in a real app, this would be sent to a server)
        let messages = JSON.parse(localStorage.getItem('rotorisMessages')) || [];
        messages.push(data);
        localStorage.setItem('rotorisMessages', JSON.stringify(messages));
        
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.collection-card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Navigation active state
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log('Rotoris Watch Website - Loaded Successfully');