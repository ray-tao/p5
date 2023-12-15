let vid;

function setup() {
    createCanvas(325, 525);

    vid = createVideo(["./assets/scooter_ride.mp4"], vidLoad);

    vid.size(400, 600);
}

function vidLoad() {
    vid.volume(0);
    vid.loop();
    vid.hide();
}

function draw() {
    vid.loadPixels();

    let numPixels = 4 * vid.width * vid.height;

    for (let i = 0; i < numPixels; i += 4) {
        vid.pixels[i] = vid.pixels[i] * 1.5;
        vid.pixels[i + 1] = vid.pixels[i + 1] * 1.2;
        vid.pixels[i + 2] = vid.pixels[i + 2] * 2;
        vid.pixels[i + 3] = 10;
    }

    vid.updatePixels();

    image(vid, 0, 0, width, (width * vid.height) / vid.width);
}
