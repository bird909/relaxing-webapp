document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayAudio = document.getElementById('overlay-audio');
    const overlayQuoteText = document.getElementById('overlay-quote-text');
    const overlayAuthorText = document.getElementById('overlay-author-text');
    const overlayTranslationText = document.getElementById('overlay-translation-text');
    const closeBtn = document.getElementById('close-btn');
    const items = document.querySelectorAll('.item');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const author = item.getAttribute('data-author');
        const translation = item.getAttribute('data-translation');

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.style.display = 'block';
        overlayAudio.play();
        overlayQuoteText.textContent = quote;
        overlayAuthorText.textContent = `- ${author}`;
        overlayTranslationText.textContent = translation;

        overlay.style.display = 'flex';
    };

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
