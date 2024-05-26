export const handleItemClick = (item) => {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');

    const musicSrc = item.getAttribute('data-music');
    const imgSrc = item.querySelector('img').src;
    const quote = item.getAttribute('data-quote');

    overlayImage.src = imgSrc;
    overlayAudio.src = musicSrc;
    overlayAudio.loop = true;
    overlayAudio.play();
    overlayQuoteText.textContent = quote;

    overlay.style.display = 'flex';
};

export const closeOverlay = () => {
    const overlay = document.getElementById('overlay');
    const overlayAudio = document.getElementById('overlayAudio');

    overlay.style.display = 'none';
    overlayAudio.pause();
    overlayAudio.currentTime = 0;
};
