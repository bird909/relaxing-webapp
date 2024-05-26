export const handleItemClick = (item) => {
    console.log("handleItemClick called");

    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');

    const musicSrc = item.getAttribute('data-music');
    const imgSrc = item.querySelector('img').src;
    const quote = item.getAttribute('data-quote');
    const translation = item.getAttribute('data-translation');
    const author = item.getAttribute('data-author');

    console.log({ musicSrc, imgSrc, quote, translation, author });

    overlayImage.src = imgSrc;
    overlayAudio.src = musicSrc;
    overlayAudio.loop = true;
    overlayAudio.play();
    overlayQuoteText.textContent = quote;
    overlayQuoteTranslation.textContent = translation;
    overlayQuoteAuthor.textContent = author;

    overlay.style.display = 'flex';
};

export const closeOverlay = () => {
    console.log("closeOverlay called");

    const overlay = document.getElementById('overlay');
    const overlayAudio = document.getElementById('overlayAudio');

    overlay.style.display = 'none';
    overlayAudio.pause();
    overlayAudio.currentTime = 0;
};
