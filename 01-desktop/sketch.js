let img;

function setup() {
    createCanvas(500, 500);
    noStroke();
    img = loadImage("./assets/desktop.jpg");
}

function draw() {
    background(153, 133, 119);

    // ellipse
    fill(200, 75, 75);
    ellipse(0, 0, 400, 400);

    //triangle
    fill(215, 130, 45);
    triangle(300, 200, 500, 200, 500, 500);

    //quadrangle?
    fill(215, 185, 30);
    quad(200, 200, 0, 500, 400, 500, 200, 200);

    //rectangle with curved corners
    fill(65, 100, 70);
    rect(250, 45, 300, 100, 50);

    //bonus: beginShape
    fill(35, 35, 80);
    beginShape();
    vertex(0, 250);
    vertex(100, 250);
    vertex(0, 400);
    endShape();

    //border
    fill(153, 133, 119);
    rect(50, 75, 350, 350, 50);

    //bonus: img second attempt
    image(img, 100, 125, 250, 250);
}
