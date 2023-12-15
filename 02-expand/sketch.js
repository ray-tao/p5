let growSpeed = 10;
let diameters = [];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 255; i++) {
        diameters.push(10);
    }
}

function draw() {
    background(255);

    for (let i = 0; i < 255; i++) {
        fill(255 - i);
        ellipse(200, 200, diameters[i]);

        diameters[i] += (growSpeed * 5) / i;
    }
}
