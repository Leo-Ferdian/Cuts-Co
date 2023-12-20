// Update Background NavBar
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    // Fungsi untuk mengupdate warna background navbar berdasarkan posisi scroll
    function updateNavbarBackground() {
        var scrollPosition = window.scrollY;
        var offset = 30;

        if (scrollPosition > offset) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    }
    updateNavbarBackground();

    window.addEventListener("scroll", function () {
        updateNavbarBackground();
    });
});