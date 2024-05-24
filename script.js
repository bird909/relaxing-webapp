document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const authorText = document.getElementById('author-text');
    const translationText = document.getElementById('translation-text');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayAudio = document.getElementById('overlay-audio');
    const overlayQuoteText = document.getElementById('overlay-quote-text');
    const closeBtn = document.getElementById('close-btn');
    const items = document.querySelectorAll('.item');

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

            // 아이템 클릭 시 명언도 변경
            items.forEach((item, index) => {
                item.addEventListener('click', () => handleItemClick(item, quotes[index % quotes.length]));
                item.addEventListener('touchstart', () => handleItemClick(item, quotes[index % quotes.length]));
            });
        });

    const handleItemClick = (item, quote) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.style.display = 'block';
        overlayAudio.play();
        overlayQuoteText.textContent = quote.quote;

        overlay.style.display = 'flex';
    };

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
