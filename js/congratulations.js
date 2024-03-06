// генерация случайного сообщения из massages.txt
document.addEventListener('DOMContentLoaded', function () {

    fetch('messages.txt')
        .then(response => response.text())
        .then(data => {

            const messages = data.split('\n').map(message => message.trim()).filter(Boolean);

            const randomIndex = Math.floor(Math.random() * messages.length);
            const randomMessage = messages[randomIndex];

            const mainContent = document.getElementById('card-main__content');
            const p = document.createElement('p');
            p.textContent = randomMessage;
            mainContent.appendChild(p);

            const currentYear = new Date().getFullYear();
            document.getElementById('card-current__year').textContent = currentYear;
        })
        .catch(error => console.error('Ошибка загрузки файла:', error));
});
