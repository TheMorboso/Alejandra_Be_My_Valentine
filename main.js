const noButton = document.getElementById('noButton');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');
const changeMindButton = document.getElementById('changeMindButton');
const noValentinButton = document.getElementById('noValentinButton');
const modalText = document.getElementById('modalText'); // Get the modal text element
let clickCount = 0;

closeButton.addEventListener('click', closeModal); // Use the function for both buttons


changeMindButton.addEventListener('click', closeModal);

noButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount > 2) {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');

        // Add image to modal:
        const img = document.createElement('img');
        img.src = 'seacabo.jpg';
        img.alt = 'Se acabó'; // Add appropriate alt text
        img.classList.add('w-full', 'h-auto', 'mb-4'); // Add Tailwind classes for sizing/styling

        modalText.insertAdjacentElement('beforebegin', img); // Insert image before the <p> tag


        clickCount = 0;
    }

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});


noValentinButton.addEventListener('click', () => {
    modalText.textContent = "Lo sentimos pero aun despues de todo el No, no es una opcion asi que por favor vuelva al inicio";

    changeMindButton.classList.add('hidden');
    noValentinButton.classList.add('hidden');

    // Hide the image:
    const img = modal.querySelector('img'); // Find the image inside the modal
    if (img) {
        img.classList.add('hidden');
    }
});
    function closeModal() {                           //More efficient shared function
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
    