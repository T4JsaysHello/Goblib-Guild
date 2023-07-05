// Variables
var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

//For printing the board
let rows = 20;
let columns = 20;
let fieldLength = 20;
let fieldSize = canvas.width / fieldLength;


//The goblin bag array
var goldBag = [];
//The Points
let goldTrail = 0;
//Game Status options
let playGame = false;
let gameOver = false;
let startMenu = true;

//goblin bag Body
class moneyBagZ {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.selfCollide = false;
    }
}

//Location of starting point within the board.
let StartX = 14;
let StartY = 14;
//apple placement
let goldX = 12;
let goldY = 12;
//The movement of the player
let userXSpeed = 0;
let userYSpeed = 0;



//Key events for the game
addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(event) {
    if (event.keyCode == 87) { // W - up key
        userXSpeed = 0;
        userYSpeed = -1;
    }
    if (event.keyCode == 83) {
        userXSpeed = 0;
        userYSpeed = 1;
    }
    if (event.keyCode == 65) { // D - Left Key
        userXSpeed = -1;
        userYSpeed = 0;
    }
    if (event.keyCode == 68) { // A - right Key
        userXSpeed = 1;
        userYSpeed = 0;
    }
    if (event.keyCode == 13) { // Enter - Game Key


        playGame = true;
        startMenu = false;

    }
}



//Score Tracker
function scoreTrack() {
    context.font = "50px Texturina";
    context.fillStyle = "GoldenRod";
    context.fillText(goldTrail, 30, 50);
}
//Places the first gold
function placeGold() {
    context.fillStyle = "yellow";
    context.fillRect(goldX * rows, goldY * columns, fieldSize, fieldSize)
}
//Changes location of the gold when the previous one is picked up by a player.
function goldRepostion() {
    if (StartX === goldX && StartY === goldY) {
        let idx = Math.floor(Math.random() * fieldLength);
        let ida = Math.floor(Math.random() * fieldLength);
        goldX = idx;
        goldY = ida;
        goldTrail++;
        console.log(goldTrail);

    }
}
//Draws the player onto the field
function drawPlayer() {

    context.fillStyle = "#68F411";
    context.fillRect(StartX * rows, StartY * columns, fieldSize, fieldSize);


}
//Adding the length of the bag
function addingTrail() {


    context.fillStyle = "brown";
    for (let i = 0; i < goldBag.length; i++) {

        context.fillRect(goldBag[i].x * rows, goldBag[i].y * columns, fieldSize, fieldSize);
    }
    goldBag.push(new moneyBagZ(StartX, StartY));
    if (goldBag.length > goldTrail) {
        goldBag.shift();
    }
}

//reprints the board

function newFrame() {
    context.fillStyle = "#506B61";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

//using key events and newFrame() the snake will be redrawn, without the newFrame() the snake would 
//leave a trail that cant be removed.

function changePosUser() {
    StartX += userXSpeed;
    StartY += userYSpeed;
    if (StartY === -1) {
        StartY = fieldSize - 1;
    }
    if (StartY === fieldSize + 1) {
        StartY = 0;
    }
    if (StartX === -1) {
        StartX = fieldSize - 1;
    }
    if (StartX === fieldSize + 1) {
        StartX = 0;
    }
}
//Check to see if the player has collided into themselves.
function selfCollision() {
    for (let c = 0; c < goldBag.length; c++) {
        if (StartX === goldBag[c].x && StartY === goldBag[c].y) {
            goldBag[c].selfCollide = true;
        }
    }
}
//Condition for the lost.
function youLose() {
    for (let c = 0; c < goldBag.length; c++) {
        if (goldBag[c].selfCollide === true) {
            playGame = false;
            gameOver = true;
        }
    }
}
//Menu Screen function
function menuLoop() {
    context.fillStyle = "#b4874b";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.font = '50px Texturina';
    context.textAlign = 'center';
    context.fillText("Goblin Camp", canvas.width / 2, canvas.height / 2);
    context.fillStyle = "crimson";
    context.font = '30px Texturina';
    context.fillText("[Click Enter to Start Game]", canvas.width / 2, (canvas.height / 2) + 60);
}
//Game over function
function gameOverLoop() {
    let scoreText = "Final Score: " + goldTrail;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    context.font = '40px Texturina';
    context.textAlign = 'center';
    context.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    context.fillText(scoreText, canvas.width / 2, (canvas.height / 2) + 40);

    //If user gets a new high score this changes the local storage to register the new change.
    let currentUsr = sessionStorage.loggedInUsrName;
    let usrObj = JSON.parse(localStorage[currentUsr]);
    if (goldTrail > usrObj.highScore) {
        appendHighScore(goldTrail);
    }
}


//Adds the score given to be the new value of highscore in local storage.
function appendHighScore(x) {
    let currentUsr = sessionStorage.loggedInUsrName;
    let appendScore = localStorage.getItem(currentUsr);

    let usrObj = JSON.parse(appendScore);

    usrObj.highScore = x;
    localStorage[currentUsr] = JSON.stringify(usrObj);

}

//Function for the game screen.

function gameLoop() {
    newFrame();
    placeGold();
    drawPlayer();
    addingTrail();
    changePosUser();
    goldRepostion();
    selfCollision();
    youLose();
    scoreTrack();

}

//how the system determins what screen the user should get displayed
setInterval(() => {
    if (startMenu) {
        menuLoop();
    } else if (playGame) {
        gameLoop();
    } else if (gameOver) {
        gameOverLoop();

    }


}, 100);// the interval in which the code is being run, a higher interval would increase snake speed.
