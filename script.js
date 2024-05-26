document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');
    const closeBtn = document.getElementById('close-btn');
    
    let quotes = [];

    fetch('../quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
        })
        .catch(error => console.error('Error loading quotes:', error));

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quoteIndex = item.getAttribute('data-quote-index');
        
        const quote = quotes[quoteIndex];

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayQuoteText.textContent = quote.quote;
        overlayQuoteTranslation.textContent = quote.translation;
        overlayQuoteAuthor.textContent = `- ${quote.author}`;
        
        overlay.style.display = 'block';
        overlayAudio.play();
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
