document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const createAccountLink = document.querySelector('a[href="#"].font-medium.text-green-600');
    const registerForm = document.getElementById('register-form');
    const closeButtons = document.querySelectorAll('#close-register');
    const modalOverlay = document.querySelector('#register-form .absolute');

    // Show register form
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Hide register form - for both close button and overlay
    function hideRegisterForm() {
        registerForm.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Add click handlers for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', hideRegisterForm);
    });

    // Close on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            hideRegisterForm();
        }
    });

    // Handle registration form submission
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Add your registration logic here
        console.log('Registration successful!');
        hideRegisterForm();
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && registerForm.style.display === 'flex') {
            hideRegisterForm();
        }
    });
});