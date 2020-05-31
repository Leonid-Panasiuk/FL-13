function Vehicle(color, engine) {

    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.speed = 0;
    this.driveInterval = null;
    this.maxDrivedSpeed = 0;
    this.acceleration = 0;

    this.getInfo = function () {
        return this;
    };

    this.upgradeEngine = function (newEngine, maxSpeed) {
        if (this.acceleration === 0) {
            this.engine = newEngine;
            this.maxSpeed = maxSpeed;
        } else {
            console.log('You can upgrade engine only if car is stopped');
        }
    }

    this.stopped = function () {
        console.log('Vehicle is stopped. Maximum speed during the drive was ' + this.maxDrivedSpeed);
    }
}

Vehicle.prototype = {
    drive: function () {
        if (this.acceleration > 0) {
            console.log('Already driving');
            return;
        } else {
            this.acceleration = 20;
        }

        if (this.driveInterval) {
            clearInterval(this.driveInterval);
        }

        this.driveInterval = setInterval(() => {
            this.changeSpeed(this.acceleration);
            console.log(this.speed);
            if (this.speed > this.maxSpeed) {
                console.log('speed is too high, SLOW DOWN!');
            }
        }, 2000);
    },
    stop: function () {
        if (this.acceleration < 0) {
            console.log('Already slows down');
            return;
        } else {
            this.acceleration = -20;
        }

        if (this.driveInterval) {
            clearInterval(this.driveInterval);
        }

        if (this.speed > 0) {
            this.driveInterval = setInterval(() => {
                this.changeSpeed(this.acceleration);
                console.log(this.speed);
                if (this.speed === 0) {
                    clearInterval(this.driveInterval);
                    this.stopped();
                }
            }, 1500);
        }
    },
    changeSpeed: function (acceleration) {
        this.speed += acceleration;

        if (this.speed > this.maxDrivedSpeed) {
            this.maxDrivedSpeed = this.speed;
        }
    }
}

function Car(model, color, engine) {
    Vehicle.call(this, color, engine);

    this.maxSpeed = 80;
    this.model = model;

    this.drive = function () {
        Vehicle.prototype.drive.call(this);
    }

    this.stop = function () {
        Vehicle.prototype.stop.call(this);
    }

    this.changeSpeed = function (acceleration) {
        Vehicle.prototype.changeSpeed.call(this, acceleration);
    }

    this.stopped = function () {
        this.acceleration = 0;
        console.log('Car ' + this.model + ' is stopped. Maximum speed during the drive ' + this.maxDrivedSpeed);
    }

    this.changeColor = function (newColor) {
        if (newColor === this.color) {
            console.log('The selected color is the same as the previous, please choose another one');
        } else {
            this.color = newColor;
        }
    }
}

function Motorcycle(model, color, engine) {
    Vehicle.call(this, color, engine);

    this.maxSpeed = 90;
    this.model = model;

    this.drive = function () {
        console.log('Let’s drive');
        Vehicle.prototype.drive.call(this);
    }

    this.stop = function () {
        Vehicle.prototype.stop.call(this);
    }

    this.changeSpeed = function (acceleration) {

        if (acceleration > 0 && this.speed >= this.maxSpeed + 30) {
            console.log('Engine overheating');
            this.stop();
            return;
        }

        Vehicle.prototype.changeSpeed.call(this, acceleration);
    }

    this.stopped = function () {
        this.acceleration = 0;
        console.log('Motorcycle ' + this.model + ' is stopped. Good drive');
    }
}