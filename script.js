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

    // Load quotes from the JSON file
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
        
        // Find the current category based on the document title
        const category = document.title.split(' - ')[1].toLowerCase().replace(' ', '');

        // Find the correct quote based on the category and quoteIndex
        const categoryQuotes = quotes.find(q => q.category === category).quotes;
        const quote = categoryQuotes[quoteIndex];

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayQuoteText.textContent = quote.quote;
        overlayQuoteTranslation.textContent = quote.translation;
        overlayQuoteAuthor.textContent = `- ${quote.author}`;
        
        overlay.style.display = 'flex';
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
