function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu when clicking the close button (X)
const closeButton = document.getElementById("closeButton");
if (closeButton) {
    closeButton.addEventListener("click", function () {
        var navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active");
    });
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    var navLinks = document.getElementById("navLinks");
    var navbar = document.querySelector("nav");

    // Replace with the correct selector for your navbar if different

    // Check if the click is outside the navLinks or the menu button
    if (!navLinks.contains(event.target) && !navbar.contains(event.target)) {
        navLinks.classList.remove("active"); // Hide the menu
    }
});

// Prevent menu from closing when clicking inside the navbar
document.querySelector("nav").addEventListener("click", function (event) {
    event.stopPropagation();
});
