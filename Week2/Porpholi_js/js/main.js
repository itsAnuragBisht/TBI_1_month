
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const feedbackInput = document.querySelector('textarea[name="feedback"]');
    let isValid = true;

    // Validation for name
    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }

    // Validation for email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
    }

    // Validation for feedback
    if (!feedbackInput.value.trim()) {
        isValid = false;
        feedbackInput.classList.add('error');
    } else {
        feedbackInput.classList.remove('error');
    }

    if (!isValid) {
        e.preventDefault();
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
