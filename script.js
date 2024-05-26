document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const closeBtn = document.getElementById('close-btn');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const translation = item.getAttribute('data-translation');

        overlayImage.src = imgSrc;
        overlayAudio.src = musicSrc;
        overlayAudio.loop = true; // 자동 반복 재생 설정
        overlayQuoteText.textContent = `${quote}\n${translation}`;
        
        overlay.style.display = 'flex';
        overlayAudio.play();
    };

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item)); // 모바일 터치 이벤트
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });

    // 재생이 종료될 때마다 자동 재생을 보장하기 위해 ended 이벤트 처리
    overlayAudio.addEventListener('ended', () => {
        overlayAudio.currentTime = 0;
        overlayAudio.play();
    });
});
