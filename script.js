const container = document.querySelector('.container');
const colors = ['blue', 'red', 'green', 'purple', 'grey', 'white', 'pink', 'yellow', 'brown', 'aqua', 'lime'];
let pixelCount = +prompt('Choose size grid: ', '16');
const resetButton = document.querySelector('.reset');
const blackBrushButton = document.querySelector('.blackBrush');
const multicoloredBrushButton = document.querySelector('.multicoloredBrush');

container.style.gridTemplateColumns = `repeat(${pixelCount}, 1fr)`;
container.style.gridTemplateRows = `repeat(${pixelCount}, 1fr)`;

resetButton.addEventListener('click', () => {
    window.location.href = window.location.href;
});

for (let i = 0; i < pixelCount; i++) {
    for (let j = 0; j < pixelCount; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
        multicoloredBrushButton.addEventListener('click', () => {
            pixel.addEventListener("mouseover", () => {
                setColor(pixel);
            })
        });
        blackBrushButton.addEventListener('click', () => {
            pixel.addEventListener("mouseover", () => {
                pixel.style.background = '#181a1b';
            })
        });
    }
}

function setColor(el) {
    const color = colors[Math.floor(Math.random() * colors.length - 1)];
    el.style.background = color;
}
