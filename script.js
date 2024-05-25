document.addEventListener('DOMContentLoaded', () => {
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
        overlayQuoteAuthor.textContent = author;
        overlayQuoteTranslation.textContent = translation;
        
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
