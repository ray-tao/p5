function setup() {
    createCanvas(300, 450);
    noStroke();
}

function draw() {
    background(18, 33, 36);

    fill(0);
    rect(0, 0, 300, 300, 200, 200, 0, 0);

    let hr = hour();
    let mappedHour = map(hr, 0, 60, 0, 300);
    fill(184, 138, 48);
    circle(mappedHour, 300, 100);

    let min = minute();
    let mappedMin = map(min, 0, 60, 0, 300);
    fill(84, 102, 43);
    circle(mappedMin, 300, 50);

    let sec = second();
    let mappedSec = map(sec, 0, 60, 0, 300);
    fill(150, 78, 2);
    circle(mappedSec, 300, 25);

    fill(0, 50, 50);
    rect(0, 300, 400, 200);
}
