// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");

    // Vérifier si la navbar existe bien
    if (!navbar) {
        console.error("Navbar non trouvée !");
        return;
    }

    // Écouter le scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Si l'utilisateur descend, on cache la navbar
            navbar.classList.add("hidden");
        } else {
            // Si l'utilisateur monte, on affiche la navbar
            navbar.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});
