let posX1 = 100;
let posX2 = 100;
let xDirection1 = 4;
let xDirection2 = 6;

function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    background(0);

    for (let i = 0; i < 17; i++) {
        let posY = 10;
        let distBetweenEllipses = dist(
            posX1,
            posY + i * 30,
            posX2,
            posY + i * 30
        );
        let c = map(distBetweenEllipses, 25, 500, 0, 255);

        fill(c);
        ellipse(posX1, posY + i * 30, 25, 25);
        ellipse(posX2, posY + i * 30, 25, 25);

        //color change when the circles touch each other
        if (dist(posX1, posY, posX2, posY) < 25) {
            fill(255, 0, 0);
            ellipse(posX1, posY + i * 30, 25, 25);
            ellipse(posX2, posY + i * 30, 25, 25);
        }
    }

    posX1 += xDirection1;
    posX2 += xDirection2;

    if (posX1 > width - 15 || posX1 < 15) {
        xDirection1 *= -1;
    }

    if (posX2 > width - 15 || posX2 < 15) {
        xDirection2 *= -1;
    }
}
