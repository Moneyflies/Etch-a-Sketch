const container = document.getElementById('container');
const containerSize = container.offsetHeight;
const colors = ['blue', 'red', 'green', 'purple', 'grey', 'white', 'black', 'pink', 'yellow', 'brown', 'aqua', 'lime'];
for (let i = 0; i <= 16; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}