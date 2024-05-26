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
import { handleItemClick } from './overlayHandler.js';

export const initializeGallery = () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });
};
import { initializeGallery } from './modules/galleryInitializer.js';
import { closeOverlay } from './modules/overlayHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    document.getElementById('close-btn').addEventListener('click', closeOverlay);
});
import { initializeGallery } from './modules/galleryInitializer.js';
import { closeOverlay } from './modules/overlayHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    document.getElementById('close-btn').addEventListener('click', closeOverlay);
});
