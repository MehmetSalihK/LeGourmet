// script.js
document.addEventListener('DOMContentLoaded', function () {
    const avisItems = document.querySelectorAll('.avis-item');
    let index = 0;

    // Fonction pour changer les positions des commentaires
    function updateCarousel() {
        avisItems.forEach((item, i) => {
            item.classList.remove('active', 'left', 'center', 'right');

            if (i === index) {
                item.classList.add('active', 'center');
            } else if (i === (index - 1 + avisItems.length) % avisItems.length) {
                item.classList.add('left');
            } else if (i === (index + 1) % avisItems.length) {
                item.classList.add('right');
            }
        });
    }

    // Initialisation
    updateCarousel();

    // Fonction pour passer au commentaire suivant
    function nextComment() {
        index = (index + 1) % avisItems.length;
        updateCarousel();
    }

    // Intervalle pour faire défiler les commentaires toutes les 3 secondes
    setInterval(nextComment, 3000);
});
