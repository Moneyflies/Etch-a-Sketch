const container = document.getElementById('container');
const containerSize = container.offsetHeight;
const colors = ['blue', 'red', 'green', 'purple', 'grey', 'white', 'black', 'pink', 'yellow', 'brown', 'aqua', 'lime'];
for (let i = 0; i <= 16; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
        setColor(pixel);
    });
}

function setColor(el) {
    const color = getRandomColor();
    el.style.background = color;
}

function random(min, max) {
    return min + Math.random() * (max - min);
  }

function getRandomColor () {
    return colors.random(0, colors.length - 1);
}