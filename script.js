document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayAudio = document.getElementById('overlay-audio');
    const closeBtn = document.getElementById('close-btn');
    const quoteText = document.getElementById('quote-text');

    const quotes = [
        "The best way to predict the future is to create it.",
        "Do what you can, with what you have, where you are.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there."
    ];

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            const musicSrc = item.getAttribute('data-music');
            const imgSrc = item.querySelector('img').src;
            overlayImage.src = imgSrc;
            overlayAudio.src = musicSrc;
            quoteText.textContent = quotes[index];
            overlay.style.display = 'flex';
            overlayAudio.play();
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
