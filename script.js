const container = document.getElementById('container');
const containerSize = container.offsetHeight;
const pixel = document.createElement('div');
pixel.classList.add('pixel');
const colors = ['blue', 'red', 'green', 'purple', 'grey', 'white', 'black', 'pink', 'yellow', 'brown', 'aqua', 'lime'];
let i = 0;
while (i <= 16) {
    container.appendChild(div);
    i++;
}
div.target.style.background = 'blue';
// container.prepend(div);