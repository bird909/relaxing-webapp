document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');
    const closeBtn = document.getElementById('close-btn');

    let currentTrackIndex = 0;
    let quotes = [];

    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            initializeItems();
        })
        .catch(error => console.error('Error loading quotes:', error));

    const initializeItems = () => {
        const tracks = Array.from(items).map((item, index) => {
            const quote = quotes[index % quotes.length];
            return {
                musicSrc: item.getAttribute('data-music'),
                imgSrc: item.querySelector('img').src,
                quote: quote.quote,
                translation: quote.translation,
                author: quote.author
            };
        });

        const loadTrack = (index) => {
            const track = tracks[index];
            overlayImage.src = track.imgSrc;
            overlayAudio.src = track.musicSrc;
            overlayAudio.play();
            overlayQuoteText.textContent = track.quote;
            overlayQuoteTranslation.textContent = track.translation;
            overlayQuoteAuthor.textContent = track.author;
        };

        const handleItemClick = (index) => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            overlay.style.display = 'flex';
        };

        items.forEach((item, index) => {
            item.addEventListener('click', () => handleItemClick(index));
            item.addEventListener('touchstart', () => handleItemClick(index));
        });

        overlayAudio.addEventListener('ended', () => {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            loadTrack(currentTrackIndex);
        });

        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            overlayAudio.pause();
            overlayAudio.currentTime = 0;
        });
    };
});
