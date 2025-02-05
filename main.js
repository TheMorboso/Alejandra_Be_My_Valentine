const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        carousel.children[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        carousel.children[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    });