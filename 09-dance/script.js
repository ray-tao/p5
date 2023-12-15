let input = document.getElementById("song-upload");
input.onchange = function (event) {
    let input = event.target;
    let file = input.files[0];

    loadSound(file, function (sound) {
        song = sound;
        song.play();
    });
};

let playButton = document.getElementById("play-button");
playButton.onclick = function (event) {
    if (!song.isPlaying()) {
        song.play();
    }
};

let pauseButton = document.getElementById("pause-button");
pauseButton.onclick = function (event) {
    song.pause();
};

let palette = document.querySelectorAll("#color-palette > button");
palette.forEach(function (color) {
    let colors = color.classList;
    color.style.backgroundColor = colors[0];
    color.style.borderColor = colors[1];

    color.onclick = function (event) {
        let button = event.target;
        let backgroundColor = button.classList[0];
        let textColor = button.classList[1];
        canvasBackground = backgroundColor;
        waveColor = textColor;

        let allElements = document.querySelectorAll(
            "*:not(#color-palette > button)"
        );
        allElements.forEach(function (element) {
            element.style.backgroundColor = backgroundColor;
            element.style.color = textColor;
            element.style.borderColor = textColor;
        });
    };
});
