// считывание имени из URL
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    const message = `<h1>С 8 Марта, ${name}!</h1>`;

    const nameContent = document.getElementById('card-name__content');
    nameContent.innerHTML = message;

    const currentYear = new Date().getFullYear();
    document.getElementById('card-current__year').textContent = currentYear;
});

// /index.html?name= "Валентина"