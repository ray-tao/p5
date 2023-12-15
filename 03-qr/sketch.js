function setup() {
    noStroke();
    createCanvas(456, 456);
    noStroke();

    // noFill();
    // fill(255, 0, 0);
    // stroke(255);
    // strokeWeight(1);
    // rect(44, 44, 456);

    for (let x = 0; x < 38; x++) {
        for (let y = 0; y < 38; y++) {
            let r = int(random(1, 10));
            if ((x + 1) % r == 0 || (y + 1) % r == 0) {
                fill(135, 55, 55);
            } else {
                fill(46, 5, 5);
            }
            rect(x * 12, y * 12, 12);
        }
    }

    // top left

    fill(46, 5, 5);
    rect(0, 0, 96);

    fill(135, 55, 55);
    rect(0, 0, 82);

    fill(46, 5, 5);
    rect(10, 10, 60);

    fill(135, 55, 55);
    rect(20, 20, 40);

    // top right

    fill(46, 5, 5);
    rect(360, 0, 96);

    fill(135, 55, 55);
    rect(374, 0, 82);

    fill(46, 5, 5);
    rect(385, 10, 60);

    fill(135, 55, 55);
    rect(395, 20, 40);

    // bottom left

    fill(46, 5, 5);
    rect(0, 360, 96);

    fill(135, 55, 55);
    rect(0, 374, 82);

    fill(46, 5, 5);
    rect(10, 385, 60);

    fill(135, 55, 55);
    rect(20, 395, 40);
}
