const container = document.getElementById('container');
const containerSize = container.offsetHeight;
const div = document.createElement('div');
let i = 0;
while (i <= 16) {
    container.appendChild(div);
    i++;
}
div.target.style.background = 'blue';
// container.prepend(div);