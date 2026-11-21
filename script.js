const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(link =>
    link.addEventListener('click', () =>
        navLinks.classList.remove('open')
    )
);

const topButton = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    topButton.style.display =
    window.scrollY > 350 ? 'grid' : 'none';
});

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('year').textContent =
    new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = 'Portfolio Contact from ' + name;

    const body = `Hello Varshitha,

${message}

From: ${name}
Email: ${email}`;

    const mailURL = `mailto:suravarshitha5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailURL;

});
