const menuIcon = document.querySelector('.menu'); // The burger icon
const closeIcon = document.querySelector('.close'); // The close icon
const mobileItems = document.querySelector('.mobile-items'); // The menu items

const openMenu = () => {
    mobileItems.classList.add('open'); // Add the 'open' class to show the menu
};

const closeMenu = () => {
    mobileItems.classList.remove('open'); // Remove the 'open' class to hide the menu
};

// Attach event listeners
menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
