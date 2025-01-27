function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.style.display = menuItems.style.display === 'flex' ? 'none' : 'flex';
});
