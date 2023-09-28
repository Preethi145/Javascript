


const image = document.getElementById('image');
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');

        const changeImageSize = (amount) => {
            const currentSize = parseFloat(getComputedStyle(image).width);
            const newSize = currentSize + amount;
            image.style.width = newSize + 'px';
        };

        increaseButton.addEventListener('click', () => {
            changeImageSize(10);
        });

        decreaseButton.addEventListener('click', () => {
            changeImageSize(-10);
        });