// filepath: d:\FSD\PeerConnect\src\register.js
document.addEventListener('DOMContentLoaded', function() {
    const createAccountLink = document.querySelector('a[href="#"].font-medium.text-green-600');
    const registerForm = document.getElementById('register-form');
    const closeRegister = document.getElementById('close-register');

    // Show register form
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Hide register form
    closeRegister.addEventListener('click', function() {
        registerForm.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close on outside click
    registerForm.addEventListener('click', function(e) {
        if (e.target === registerForm) {
            registerForm.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Form validation
    const registrationForm = registerForm.querySelector('form');
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Add your registration logic here
        console.log('Form submitted successfully');
        // You can add AJAX call to your backend here
    });
});