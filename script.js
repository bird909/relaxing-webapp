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

    // 슬라이드쇼 기능 추가
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.querySelectorAll(".mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 4000); // 4초마다 이미지 전환
    }
});
