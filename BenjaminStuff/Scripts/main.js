const feedingBtn = document.getElementById('feedingBtn');
const bigGear = document.getElementById('bigGear');
const smallGear = document.getElementById('smallGear');

feedingBtn.addEventListener('click', () => {
    bigGear.classList.remove('hidden');
    smallGear.classList.remove('hidden');
    bigGear.style.animationName = 'rotate';
    smallGear.style.animationName = 'rotate';

    setTimeout(() => {
        bigGear.style.animationName = '';
        smallGear.style.animationName = '';
        bigGear.classList.add('hidden');
        smallGear.classList.add('hidden');
    }, 3000);
});





const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('active');
    body.classList.toggle('dark-mode');
});





const cardiogramCanvas = document.getElementById('cardiogramCanvas');
const ctx = cardiogramCanvas.getContext('2d');
const pulseValue = document.getElementById('pulseValue');

cardiogramCanvas.width = cardiogramCanvas.clientWidth;
cardiogramCanvas.height = cardiogramCanvas.clientHeight;

let cardiogramPoints = [];
let cardiogramSpeed = 1;
let frequency = 2;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let counter = 0;

function drawCardiogram() {
    ctx.clearRect(0, 0, cardiogramCanvas.width, cardiogramCanvas.height);

    counter++;

    if (counter % frequency === 0) {
        cardiogramPoints.push({
            x: cardiogramCanvas.width,
            y: cardiogramCanvas.height / 2 + getRandomInt(-30, 30),
        });
    }

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    for (let i = 1; i < cardiogramPoints.length; i++) {
        const point = cardiogramPoints[i];

        ctx.beginPath();
        ctx.moveTo(cardiogramPoints[i - 1].x, cardiogramPoints[i - 1].y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        point.x -= cardiogramSpeed;
    }

    cardiogramPoints = cardiogramPoints.filter((point) => point.x > 0);
}


function updatePulse() {
    const pulse = getRandomInt(60, 100);
    pulseValue.innerText = pulse;
}

updatePulse();
setInterval(drawCardiogram, 1000 / 60); // 60 FPS
setInterval(updatePulse, 2000); // Update pulse every 2 seconds