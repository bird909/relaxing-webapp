document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const audioPlayer = document.getElementById('audio-player');
    const quoteText = document.getElementById('quote-text');

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            const musicSrc = item.getAttribute('data-music');
            const quote = item.getAttribute('data-quote');

            audioPlayer.src = musicSrc;
            audioPlayer.style.display = 'block';
            audioPlayer.play();

            quoteText.textContent = quote;
        });

        // 터치 이벤트 추가
        item.addEventListener('touchstart', () => {
            const musicSrc = item.getAttribute('data-music');
            const quote = item.getAttribute('data-quote');

            audioPlayer.src = musicSrc;
            audioPlayer.style.display = 'block';
            audioPlayer.play();

            quoteText.textContent = quote;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const audioPlayer = document.getElementById('audio-player');
    const quoteText = document.getElementById('quote-text');

    items.forEach((item, index) => {
        const handleClick = () => {
            const musicSrc = item.getAttribute('data-music');
            const quote = item.getAttribute('data-quote');

            audioPlayer.src = musicSrc;
            audioPlayer.style.display = 'block';
            audioPlayer.play();

            quoteText.textContent = quote;
        };

        item.addEventListener('click', handleClick);
        item.addEventListener('touchstart', handleClick); // 터치 이벤트 추가
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const audioPlayer = document.getElementById('audio-player');
    const quoteText = document.getElementById('quote-text');

    const handleItemClick = (item) => {
        const musicSrc = item.getAttribute('data-music');
        const quote = item.getAttribute('data-quote');

        audioPlayer.src = musicSrc;
        audioPlayer.style.display = 'block';
        audioPlayer.play();

        quoteText.textContent = quote;
    };

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });

    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const overlayAudio = document.getElementById('overlay-audio');
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
