let positionX = 0;
let positionY = 0;
const stepSize = 20;

function move(direction) {
    const kotak = document.getElementById('kotak');

    switch (direction) {
        case 'up':
            positionY -= stepSize;
            break;
        case 'down':
            positionY += stepSize;
            break;
        case 'left':
            positionX -= stepSize;
            break;
        case 'right':
            positionX += stepSize;
            break;
        default:
            break;
    }

    kotak.style.transform = `translate(${positionX}px, ${positionY}px)`;
}
