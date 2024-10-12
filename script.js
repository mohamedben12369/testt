let randomNumber = Math.floor(Math.random() *6) + 1;
let attempts = 0;

document.getElementById("submit").addEventListener("click", function () {
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    let message = "";

    if (isNaN(guess)) {
        message = "Veuillez entrer un nombre valide!";
    } else if (guess < 1 || guess >6) {
        message = "Le nombre doit être entre 1 et 6!";
    } else if (guess === randomNumber) {
        message = `Bravo! Vous avez deviné le nombre en ${attempts} essais.`;
        document.getElementById("restart").style.display = "block";
    } else if (guess < randomNumber) {
        message = "Trop bas! Essayez encore.";
    } else {
        message = "Trop haut! Essayez encore.";
    }

    document.getElementById("message").textContent = message;
});

document.getElementById("restart").addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
    this.style.display = "none";
});