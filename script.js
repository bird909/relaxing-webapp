document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const authorText = document.getElementById('author-text');
    const translationText = document.getElementById('translation-text');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayAudio = document.getElementById('overlay-audio');
    const overlayQuoteText = document.getElementById('overlay-quote-text');
    const closeBtn = document.getElementById('close-btn');

    // JSON 파일에서 명언 로드
    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
            // 랜덤 명언 선택
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];

            // 명언 표시
            quoteText.textContent = quote.quote;
            authorText.textContent = `- ${quote.author}`;
            translationText.textContent = quote.translation;
        });

    const items = document.querySelectorAll('.item');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.style.display = 'block';
        overlayAudio.play();
        overlayQuoteText.textContent = quote;

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
