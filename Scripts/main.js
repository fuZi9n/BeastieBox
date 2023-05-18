// Feeding button animation
const feedingBtn = document.getElementById('feedingBtn');
const feedingBigGear = document.getElementById('feedingBigGear');
const feedingSmallGear = document.getElementById('feedingSmallGear');

const waterBtn = document.getElementById('waterBtn');
const waterBigGear = document.getElementById('waterBigGear');
const waterSmallGear = document.getElementById('waterSmallGear');

feedingBtn.addEventListener('click', () => {
    feedingBigGear.classList.remove('hidden');
    feedingSmallGear.classList.remove('hidden');
    feedingBigGear.style.animationName = 'rotate';
    feedingSmallGear.style.animationName = 'rotate';

    setTimeout(() => {
        feedingBigGear.style.animationName = '';
        feedingSmallGear.style.animationName = '';
        feedingBigGear.classList.add('hidden');
        feedingSmallGear.classList.add('hidden');
    }, 3000);
});

waterBtn.addEventListener('click', () => {
    waterBigGear.classList.remove('hidden');
    waterSmallGear.classList.remove('hidden');
    waterBigGear.style.animationName = 'rotate';
    waterSmallGear.style.animationName = 'rotate';

    setTimeout(() => {
        waterBigGear.style.animationName = '';
        waterSmallGear.style.animationName = '';
        waterBigGear.classList.add('hidden');
        waterSmallGear.classList.add('hidden');
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
// Function to create multiple heartbeat sensor elements
function createSensorElement(sensorName) {
    const sensorElem = document.createElement('div');
    sensorElem.className = 'sensor-element';
    sensorElem.innerHTML = `
        <div class="header-container">
            <h5>${sensorName}:</h5>
            <div class="pulse-container">
                <p id="pulse"><span id="pulseValue">--</span> BPM</p>
            </div>
        </div>
        <div class="cardiogram-container">
            <canvas class="cardiogram-canvas cardiogram"></canvas>
        </div>
        <div class="pulse-stats d-flex justify-content-between">
            <div class="pulse-stat">Avg: <span class="avg-pulse">--</span></div>
            <div class="pulse-stat">Min: <span class="min-pulse">--</span></div>
            <div class="pulse-stat">Max: <span class="max-pulse">--</span></div>
        </div>
    `;
    return sensorElem;
}

const sensorContainer = document.getElementById('sensorContainer');
const sensorNames = ['Poppy 1', 'Poppy 2', 'Poppy 3']; // Add more names as needed

sensorNames.forEach((sensorName) => {
    const sensorElem = createSensorElement(sensorName);
    sensorContainer.appendChild(sensorElem);
});

const sensorElements = document.getElementsByClassName('sensor-element');

for (const sensorElem of sensorElements) {
    const avgPulse = sensorElem.querySelector('.avg-pulse');
    const minPulse = sensorElem.querySelector('.min-pulse');
    const maxPulse = sensorElem.querySelector('.max-pulse');

    const cardiogramCanvas = sensorElem.querySelector('.cardiogram-canvas');
    const ctx = cardiogramCanvas.getContext('2d');
    const pulseValue = sensorElem.querySelector('#pulseValue'); // Updated selector

    cardiogramCanvas.width = cardiogramCanvas.clientWidth;
    cardiogramCanvas.height = cardiogramCanvas.clientHeight;

    var pulseValues = [];
    var minPulseValue = Number.MAX_VALUE;
    var maxPulseValue = Number.MIN_VALUE;
    var sumPulseValues = 0;
    var pulseCount = 0;

    var cardiogramPoints = [];
    var cardiogramSpeed = 0.2;
    var frequency = 6;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var counter = 0;

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

        for (var i = 1; i < cardiogramPoints.length; i++) {
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
        const pulse = getRandomInt(50, 100);
        pulseValue.innerText = pulse;

        // Update pulse statistics
        if (pulseValues.length >= 100) {
            const oldestPulse = pulseValues.shift();
            sumPulseValues -= oldestPulse;
        }
        pulseValues.push(pulse);
        pulseCount++;
        minPulseValue = Math.min(minPulseValue, pulse);
        maxPulseValue = Math.max(maxPulseValue, pulse);
        sumPulseValues += pulse;

        // Display updated pulse statistics
        avgPulse.innerText = (sumPulseValues / pulseValues.length).toFixed(1);
        minPulse.innerText = minPulseValue;
        maxPulse.innerText = maxPulseValue;
    }

    updatePulse();
    drawCardiogram(); // Initial call
    setInterval(updatePulse, 2000); // Update pulse every 2 seconds
}

// Food chart
const foodChartElement = document.getElementById('foodChart');
var foodData = Array(3).fill(0);
var waterData = Array(3).fill(0);

function createFoodChart() {
    return new Chart(foodChartElement, {
        type: 'bar',
        data: {
            labels: ['Feeder 1', 'Feeder 2', 'Feeder 3',]
            , datasets: [
                {
                    label: 'Food Level',
                    data: foodData,
                    backgroundColor: 'rgba(255, 183, 0, 0.2)',
                    borderColor: 'rgba(255, 183, 0, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Water Level',
                    data: waterData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
            ],
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

// Random value between min and max
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Food
feedingBtn.addEventListener('click', () => {
    for (var i = 0; i < foodData.length; i++) {
        foodData[i] += 10;
        if (foodData[i] > 100) {
            foodData[i] = 100;
        }
    }
    foodChart.update();
});

function decreaseFoodData() {
    const index = getRandomValue(0, foodData.length - 1);
    const decreaseValue = getRandomValue(1, 10);
    foodData[index] -= decreaseValue;
    if (foodData[index] < 0) {
        foodData[index] = 0;
    }
    foodChart.update();
}

// Water
waterBtn.addEventListener('click', () => {
    for (var i = 0; i < waterData.length; i++) {
        waterData[i] += 10;
        if (waterData[i] > 100) {
            waterData[i] = 100;
        }
    }
    foodChart.update();
});

function decreaseWaterData() {
    const index = getRandomValue(0, waterData.length - 1);
    const decreaseValue = getRandomValue(1, 5);
    waterData[index] -= decreaseValue;
    if (waterData[index] < 0) {
        waterData[index] = 0;
    }
    foodChart.update();
}

setInterval(decreaseWaterData, 2000);
setInterval(decreaseFoodData, 2000);



document.addEventListener("DOMContentLoaded", function () {
    // Get all the necessary elements
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector(".navbar-collapse");
    const menuLines = document.querySelectorAll(".navbar-toggler .line");

    navbarToggler.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
        for (var i = 0; i < menuLines.length; i++) {
            menuLines[i].classList.toggle('active');
        }
    });

    // Close the menu when a link is clicked
    navbarMenu.addEventListener("click", function (event) {
        if (event.target.classList.contains("nav-link")) {
            navbarMenu.classList.remove("show");
        }
    });
});