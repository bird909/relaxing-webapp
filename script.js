document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const closeBtn = document.getElementById('close-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const homeBtn = document.getElementById('home-btn');

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
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
            overlay.classList.remove('fullscreen');
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            const requestFullscreen = overlay.requestFullscreen || overlay.webkitRequestFullscreen || overlay.mozRequestFullScreen || overlay.msRequestFullscreen;
            requestFullscreen.call(overlay);
            overlay.classList.add('fullscreen');
        } else {
            const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
            exitFullscreen.call(document);
            overlay.classList.remove('fullscreen');
        }
    });

    // 홈 버튼 클릭 이벤트 리스너 추가
    homeBtn.addEventListener('click', () => {
        window.location.href = 'https://bird909.github.io/relaxing-webapp/';
    });

    // 홈 버튼 터치 이벤트 리스너 추가 (iOS 장치용)
    homeBtn.addEventListener('touchstart', () => {
        window.location.href = 'https://bird909.github.io/relaxing-webapp/';
    });
});
