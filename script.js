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
/* Quote Box Styling */
#quote-box {
    display: flex;
    justify-content: center;
    padding: 40px;
}

.quote-card {
    background: #fff;
    border: 2px solid #007bff;
    border-radius: 10px;
    padding: 20px;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
}

#quote-text {
    font-size: 1.2em;
    font-style: italic;
    color: #333;
    margin-bottom: 20px;
}

.copy-btn {
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s;
}

.copy-btn:hover {
    background: #0056b3;
}
