const noButton = document.getElementById('noButton');
    let clickCount = 0;
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal'); // Get the modal element

    noButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount > 20) {
            overlay.classList.remove('hidden');
            modal.classList.remove('hidden'); // Show the modal
            clickCount = 0; // Reset click count (optional)
        }
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
        clickCount++;

        
    });

