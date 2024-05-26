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
        overlayAudio.play();
    };

    overlayAudio.addEventListener('ended', () => {
        currentTrackIndex++;
        if (currentTrackIndex < playlist.length) {
            playCurrentTrack();
        } else {
            overlayAudio.currentTime = 0;
        }
    });

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
