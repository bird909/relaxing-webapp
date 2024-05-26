import { initializeGallery } from './modules/galleryInitializer.js';
import { closeOverlay } from './modules/overlayHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    document.getElementById('close-btn').addEventListener('click', closeOverlay);
});
