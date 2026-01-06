function burger() {
    // On récupère l'élément par son ID (pense à bien ajouter id="menuBurger" dans ton HTML)
    const menu = document.getElementById("menuBurger");
    
    // On change le transform
    // Si on veut pouvoir le fermer aussi, on vérifie la position actuelle
    if (menu.style.transform === "translate(0px, 0px)") {
        menu.style.transform = "translate(0px, -250px)";
    } else {
        menu.style.transform = "translate(0px, 0px)";
    }
}