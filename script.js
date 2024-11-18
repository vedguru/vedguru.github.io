document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good morning! Start your day with inspiration!';
    } else if (hours < 18) {
        greeting.textContent = 'Good afternoon! Keep your spirit high!';
    } else {
        greeting.textContent = 'Good evening! Reflect and stay positive!';
    }
    document.querySelector('.hero').appendChild(greeting);
});
