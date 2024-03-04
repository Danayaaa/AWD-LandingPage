const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) => {
    letter.addEventListener('click', () => {
        letter.classList.toggle('active');
    });
});

document.querySelectorAll('.heart, .heart-left, .heart-right').forEach(function(heart) {
    heart.addEventListener('click', function() {
        this.classList.toggle('heart-beat');
    });
});