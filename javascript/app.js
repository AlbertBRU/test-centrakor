var app = {
    init: function () {
        console.log('init');

        // Gestion du formulaire
        const form = document.getElementById('searchForm');
        const messageDiv = document.getElementById('message');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('submit');
            const ville = form.elements.ville.value;
            console.log('ville', ville);
            messageDiv.style.display = 'flex';
        });

        // Gestion du carousel by SLICK (https://kenwheeler.github.io/slick/)
        $('.slider').slick({
            dots: true,
        }
        );
    },
}

document.addEventListener('DOMContentLoaded', app.init);
