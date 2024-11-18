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
// Copy Quote Text to Clipboard
document.getElementById('copy-btn').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text').innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

