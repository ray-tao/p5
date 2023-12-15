let bg;
let starYPos = [0, 0, 0, 0, 0];
let poopYPos = [0];
let poopXPos = [100];
let speedArray = [];
let handXPos;
let score = 0;
let gameState = "start";
let level = 1;
let timeLimit = 0;
let timeLeft = 30;
let goal = 50;

function preload() {
    bg = loadImage("starrysky.png");
    star = loadImage("star.png");
    hands = loadImage("hands.png");
    poop = loadImage("poop.png");
}

function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
}

function draw() {
    background(bg);
    timeLeft = floor(30 - millis() / 1000);

    if (timeLeft < timeLimit) {
        if (level === 1 && score >= goal) {
            level++;
            timeLimit = -30;
            timeLeft = floor(30 + 30 - millis() / 1000);
            score = 0;
            goal = 75;
        } else if (level === 2 && score >= goal) {
            level++;
            timeLimit = -60;
            timeLeft = floor(30 + 30 + 30 - millis() / 1000);
            score = 0;
            goal = 100;
        } else if (level === 3 && score >= goal) {
            gameState = "stop";
            timeLeft = 0;
            timeLimit = 0;
            speedArray = [0, 0, 0, 0, 0];
            fill(0);
            rect(0, 0, width, height);
            fill(255);
            text("you win", 235, height / 2);
        } else {
            gameState = "stop";
            timeLeft = 0;
            speedArray = [0, 0, 0, 0, 0];
            fill(0);
            rect(0, 0, width, height);
            fill(255);
            text("game over", 225, height / 2);
        }
    }

    if (gameState === "start") {
        if (level === 2 && timeLeft > -5) {
            fill(255);
            text("yay good job", 235, height / 2);
            text(">> level 2", 235, height / 2 + 30);
        } else if (level === 3 && timeLeft > -35) {
            fill(255);
            text("yay good job", 235, height / 2);
            text(">> level 3", 235, height / 2 + 30);
        }
    }

    if (gameState === "start") {
        if (level === 1) {
            speedArray = [3.5, 3.5, 3.5, 3.5, 3.5];
        } else if (level === 2) {
            speedArray = [6.5, 6.5, 6.5, 6.5, 6.5];
        } else if (level === 3) {
            speedArray = [9, 9, 9, 9, 9];
        }
    }

    for (let i = 0; i < 5; i++) {
        starYPos[i] += speedArray[i];
        image(star, i * 100 + 50, starYPos[i], 20, 20);

        poopYPos[i] += speedArray[i];
        image(poop, poopXPos[i], poopYPos[i], 20, 20);

        //if stars touch hands, then point +1 & stars dissappears
        if (dist(i * 100, starYPos[i], mouseX - 25, 450) < 50) {
            score++;
            starYPos[i] = -10;
        }

        //if poop touch hands, then point -1 & poop dissappears
        if (dist(poopXPos[i], poopYPos[i], mouseX + 25, 450) < 50) {
            score = score - level;
            poopYPos[i] = -10;
        }

        //when hitting the bottom, stars will start back at top
        if (starYPos[i] > 500 || starYPos[i] < 0) {
            starYPos[i] = 0;
        }

        //when hitting the bottom, poop will start back at top
        if (poopYPos[i] > 500 || poopYPos[i] < 0) {
            poopYPos[i] = 0;
            poopXPos[i] = random(0, 500);
        }

        //score (number of stars collected)
        fill(255);
        text("score", 30, 40);
        text(score, 70, 40);
        text("goal", 30, 60);
        text(goal, 60, 60);

        //level 1-3
        fill(255);
        text("level", 435, 40);
        text(level, 470, 40);

        //time left
        fill(255);
        text("time left", 220, 40);
        text(timeLeft + (level - 1) * 30, 270, 40);
    }

    //cupped hands at bottom moved by arrow keys
    if (gameState === "start") {
        handXPos = mouseX;
    }
    image(hands, handXPos, 420, 75, 75);
}
