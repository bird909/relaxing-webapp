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
    let tracks = [];

    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            const category = document.querySelector('body').dataset.category;
            const categoryData = data.find(cat => cat.category === category);
            tracks = categoryData ? categoryData.quotes : [];
        });

    const loadTrack = (index) => {
        const track = tracks[index];
        overlayImage.src = items[index].querySelector('img').src;
        overlayAudio.src = track.music;
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
});
