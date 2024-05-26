document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const translation = item.getAttribute('data-translation');
        const author = item.getAttribute('data-author');

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.style.display = 'block';
        overlayAudio.play();
        overlayQuoteText.innerHTML = `<p>${quote}</p><p>${translation}</p><p><em>- ${author}</em></p>`;

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
