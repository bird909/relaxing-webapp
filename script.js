document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const closeBtn = document.getElementById('close-btn');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const musicSrc = item.getAttribute('data-music');
            const imgSrc = item.querySelector('img').src;
            const quote = item.getAttribute('data-quote');

            overlayImage.src = imgSrc;
            overlayAudio.src = musicSrc;
            overlayQuoteText.textContent = quote;

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
