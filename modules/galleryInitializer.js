// modules/galleryInitializer.js
import { handleItemClick } from './overlayHandler.js';

export const initializeGallery = () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('click', () => handleItemClick(item));
        item.addEventListener('touchstart', () => handleItemClick(item));
    });
};
