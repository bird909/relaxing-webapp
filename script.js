document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');
    const closeBtn = document.getElementById('close-btn');

    let tracks = [];

    // JSON 파일에서 데이터 로드
    fetch('../quotes.json')
        .then(response => response.json())
        .then(data => {
            const category = document.querySelector('body').dataset.category;
            const categoryData = data.find(cat => cat.category === category);
            tracks = categoryData ? categoryData.quotes : [];
        })
        .catch(error => console.error('Error loading quotes:', error));

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * tracks.length);
        return tracks[randomIndex];
    };

    const loadTrack = (track) => {
        const item = items[currentTrackIndex];
        overlayImage.src = item.querySelector('img').src;
        overlayAudio.src = track.music;
        overlayAudio.play();
        overlayQuoteText.textContent = track.quote;
        overlayQuoteTranslation.textContent = track.translation;
        overlayQuoteAuthor.textContent = track.author;
    };

    const handleItemClick = (index) => {
        currentTrackIndex = index;
        const track = getRandomQuote();
        loadTrack(track);
        overlay.style.display = 'flex';
    };

    items.forEach((item, index) => {
        item.addEventListener('click', () => handleItemClick(index));
        item.addEventListener('touchstart', () => handleItemClick(index));
    });

    overlayAudio.addEventListener('ended', () => {
        const track = getRandomQuote();
        loadTrack(track);
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayAudio.pause();
        overlayAudio.currentTime = 0;
    });
});
