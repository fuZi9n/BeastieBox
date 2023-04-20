class HeartbeatSensor {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createCardiogram();
        this.createPulse();
        this.cardiogramPoints = [];
        this.counter = 0;
        this.frequency = 10;
        this.cardiogramSpeed = 5;
        this.drawCardiogram();
        setInterval(() => this.updatePulse(), 2000);
    }

    createCardiogram() {
        this.cardiogramCanvas = document.createElement('canvas');
        this.cardiogramCanvas.classList.add('cardiogram');
        this.cardiogramCanvas.width = this.container.offsetWidth;
        this.cardiogramCanvas.height = 200;
        this.container.appendChild(this.cardiogramCanvas);
        this.ctx = this.cardiogramCanvas.getContext('2d');
    }

    createPulse() {
        this.pulseContainer = document.createElement('div');
        this.pulseContainer.classList.add('pulse-container');
        this.pulseValue = document.createElement('span');
        this.pulseValue.classList.add('pulse-value');
        this.pulseValue.textContent = '--';
        this.pulseContainer.appendChild(this.pulseValue);
        this.pulseContainer.innerHTML += ' BPM';
        this.container.appendChild(this.pulseContainer);
    }

    drawCardiogram() {
        this.ctx.clearRect(0, 0, this.cardiogramCanvas.width, this.cardiogramCanvas.height);

        this.counter++;

        if (this.counter % this.frequency === 0) {
            this.cardiogramPoints.push({
                x: this.cardiogramCanvas.width,
                y: this.cardiogramCanvas.height / 2 + getRandomInt(-30, 30),
            });
        }

        this.ctx.strokeStyle = 'red';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        for (let i = 1; i < this.cardiogramPoints.length; i++) {
            const point = this.cardiogramPoints[i];

            point.x -= this.cardiogramSpeed;

            if (i !== 1) {
                this.ctx.moveTo(this.cardiogramPoints[i - 1].x, this.cardiogramPoints[i - 1].y);
                this.ctx.lineTo(point.x, point.y);
            }
        }

        this.ctx.stroke();
        this.cardiogramPoints = this.cardiogramPoints.filter((point) => point.x > 0);

        requestAnimationFrame(() => this.drawCardiogram());
    }

    updatePulse() {
        const pulse = this.getRandomInt(60, 100);
        this.pulseValue.innerText = pulse;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}