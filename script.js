document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const closeBtn = document.getElementById('close-btn');

    let currentTrackIndex = 0;
    let playlist = [];

    const handleItemClick = (item) => {
        const musicFiles = item.getAttribute('data-music').split(',');
        const imgSrc = item.querySelector('img').src;
        const quote = item.getAttribute('data-quote');
        const translation = item.getAttribute('data-translation');

        playlist = musicFiles;
        currentTrackIndex = 0;

        overlayImage.src = imgSrc;
        overlayQuoteText.innerHTML = `<p>${quote}</p><p>${translation}</p>`;
        overlay.style.display = 'flex';

        playCurrentTrack();
    };

    const playCurrentTrack = () => {
        overlayAudio.src = playlist[currentTrackIndex];
        overlayAudio.loop = false; // 개별 트랙의 반복을 방지하기 위해 loop를 false로 설정
        overlayAudio.play();
    };

    overlayAudio.addEventListener('ended', () => {
        currentTrackIndex++;
        if (currentTrackIndex < playlist.length) {
            playCurrentTrack();
        } else {
            currentTrackIndex = 0; // 마지막 곡이 끝나면 첫 곡으로 돌아가기
            playCurrentTrack();
        }
    });

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
