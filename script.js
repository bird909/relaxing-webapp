const fetchQuotes = async (category) => {
    const response = await fetch(`https://zenquotes.io/api/quotes?category=${category}`);
    const data = await response.json();
    return data.map(quote => ({
        music: "",  // 음악 파일 경로를 추가해야 합니다
        quote: quote.q,
        translation: "",  // 한국어 번역을 추가해야 합니다
        author: quote.a
    }));
};

document.addEventListener('DOMContentLoaded', async () => {
    const items = document.querySelectorAll('.item');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayAudio = document.getElementById('overlayAudio');
    const overlayQuoteText = document.getElementById('overlayQuoteText');
    const overlayQuoteTranslation = document.getElementById('overlayQuoteTranslation');
    const overlayQuoteAuthor = document.getElementById('overlayQuoteAuthor');
    const closeBtn = document.getElementById('close-btn');

    let currentTrackIndex = 0;
    const category = document.body.dataset.category;
    let tracks = await fetchQuotes(category);

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
