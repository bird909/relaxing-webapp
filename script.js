document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');
    const closeBtn = document.getElementById('close-btn');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const translation = item.getAttribute('data-translation');
        const author = item.getAttribute('data-author');

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.play();
        overlayQuoteText.textContent = quote;
        overlayQuoteTranslation.textContent = translation;
        overlayQuoteAuthor.textContent = author;

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

    overlayAudio.addEventListener('ended', () => {
        overlayAudio.currentTime = 0;
        overlayAudio.play();
    });
});
