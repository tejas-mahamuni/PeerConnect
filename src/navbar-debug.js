document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  console.log('Navbar-debug.js loaded');
  if (!menuButton || !menu) {
    console.log('Menu button or menu not found');
    return;
  }

  // Toggle menu visibility and aria-expanded attribute
  function toggleMenu() {
    const isHidden = menu.classList.toggle('hidden');
    menuButton.setAttribute('aria-expanded', !isHidden);
    console.log('Menu toggled, hidden:', isHidden);
  }

  menuButton.addEventListener('click', () => {
    console.log('Menu button clicked');
    toggleMenu();
  });

  // Keyboard accessibility: toggle menu on Enter or Space key
  menuButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      console.log('Menu button keydown:', event.key);
      toggleMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', false);
        console.log('Menu closed by outside click');
      }
    }
  });

  // Close menu on window resize if menu is open
  window.addEventListener('resize', () => {
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', false);
      console.log('Menu closed by window resize');
    }
  });
});
