document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const translation = item.getAttribute('data-translation');
        const author = item.getAttribute('data-author');

        document.getElementById('overlayImage').src = imgSrc;
        document.getElementById('overlayAudio').src = musicSrc;
        document.getElementById('overlayQuoteText').textContent = quote;
        document.getElementById('overlayQuoteTranslation').textContent = translation;
        document.getElementById('overlayQuoteAuthor').textContent = author;
        
        document.getElementById('overlay').style.display = 'flex';

        const audioElement = document.getElementById('overlayAudio');
        audioElement.play();
        audioElement.loop = true;
    };

    items.forEach(item => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });

    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('overlay').style.display = 'none';
        const audioElement = document.getElementById('overlayAudio');
        audioElement.pause();
        audioElement.currentTime = 0;
    });
});
