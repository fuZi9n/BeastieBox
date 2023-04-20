// Feeding button animation
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





// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('active');
    body.classList.toggle('dark-mode');
});






// Cardiogram animation
const cardiogramCanvas = document.getElementById('cardiogramCanvas');
const ctx = cardiogramCanvas.getContext('2d');
const pulseValue = document.getElementById('pulseValue');

cardiogramCanvas.width = cardiogramCanvas.clientWidth;
cardiogramCanvas.height = cardiogramCanvas.clientHeight;

let cardiogramPoints = [];
let cardiogramSpeed = 0.2;
let frequency = 6;

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
    ctx.beginPath();

    for (let i = 1; i < cardiogramPoints.length; i++) {
        const point = cardiogramPoints[i];

        point.x -= cardiogramSpeed;

        if (i !== 1) {
            ctx.moveTo(cardiogramPoints[i - 1].x, cardiogramPoints[i - 1].y);
            ctx.lineTo(point.x, point.y);
        }
    }

    ctx.stroke();
    cardiogramPoints = cardiogramPoints.filter((point) => point.x > 0);

    requestAnimationFrame(drawCardiogram);
}

function updatePulse() {
    const pulse = getRandomInt(60, 100);
    pulseValue.innerText = pulse;
}

updatePulse();
drawCardiogram(); // Initial call
setInterval(updatePulse, 2000); // Update pulse every 2 seconds





// Food chart
const foodChartElement = document.getElementById('foodChart');
let foodData = Array(3).fill(0);

function createFoodChart() {
    return new Chart(foodChartElement, {
        type: 'bar',
        data: {
            labels: ['Feeder 1', 'Feeder 2', 'Feeder 3',]
            , datasets: [
                {
                    label: 'Food Level',
                    data: foodData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

const foodChart = createFoodChart();

feedingBtn.addEventListener('click', () => {
    for (let i = 0; i < foodData.length; i++) {
        foodData[i] += 10;
        if (foodData[i] > 100) {
            foodData[i] = 100;
        }
    }
    foodChart.update();
});

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decreaseFoodData() {
    const index = getRandomValue(0, foodData.length - 1);
    const decreaseValue = getRandomValue(1, 10);
    foodData[index] -= decreaseValue;
    if (foodData[index] < 0) {
        foodData[index] = 0;
    }
    foodChart.update();
}

setInterval(decreaseFoodData, 2000);