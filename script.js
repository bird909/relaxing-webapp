document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const link = item.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
