document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const audioPlayer = document.getElementById('audio-player');
    const quoteText = document.getElementById('quote-text');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const quote = item.getAttribute('data-quote');

        audioPlayer.src = musicSrc;
        audioPlayer.style.display = 'block';
        audioPlayer.play();

        quoteText.textContent = quote;
    };

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });

    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const overlayAudio = document.getElementById('overlay-audio');
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
