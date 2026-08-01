document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".btn");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            console.log("Opening menu...");
        });
    }

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.style.transform = "scale(1.03)";

            setTimeout(function () {
                card.style.transform = "";
            }, 150);
        });
    });
});
