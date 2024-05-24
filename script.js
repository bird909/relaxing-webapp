document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const overlayAudio = document.getElementById('overlay-audio');
    const overlayQuoteText = document.getElementById('overlay-quote-text');
    const overlayAuthorText = document.getElementById('overlay-author-text');
    const overlayTranslationText = document.getElementById('overlay-translation-text');
    const closeBtn = document.getElementById('close-btn');
    const items = document.querySelectorAll('.item');

    let quotes = [];

    // JSON 파일에서 명언 로드
    fetch('healing_quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            items.forEach((item, index) => {
                item.addEventListener('click', () => handleItemClick(item));
                item.addEventListener('touchstart', () => handleItemClick(item));
            });
        });

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;

        // 랜덤 명언 선택
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.style.display = 'block';
        overlayAudio.play();
        overlayQuoteText.textContent = quote.quote;
        overlayAuthorText.textContent = `- ${quote.author}`;
        overlayTranslationText.textContent = quote.translation;

        overlay.style.display = 'flex';
    };

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
