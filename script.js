function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    var navLinks = document.getElementById("navLinks");
    var navbar = document.querySelector("nav"); // Replace with the correct selector for your navbar if different

    // Check if the click is outside the navLinks or the menu button
    if (!navLinks.contains(event.target) && !navbar.contains(event.target)) {
        navLinks.classList.remove("active"); // Hide the menu
    }
});