document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const audioPlayer = document.getElementById('audio-player');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const musicSrc = item.getAttribute('data-music');
            audioPlayer.src = musicSrc;
            audioPlayer.style.display = 'block';
            audioPlayer.play();
        });
    });
});
