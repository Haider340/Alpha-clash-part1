// function play(){
//     // hidden the home screen ...

//     const homeSection = document.getElementById('home-screen');

//     homeSection.classList.add('hidden');

//     // show the play ground....

//     const playGroundSection = document.getElementById('play-ground');

//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeys(event) {
    const playerPressed = event.key;
    console.log('player pressed:', playerPressed);

    // get the expected key..

    const currentAlphabet = document.getElementById('current-alphabet');

    const UserAlphabet = currentAlphabet.innerText;

    const expectedAlphabet = UserAlphabet.toLowerCase();

    console.log(playerPressed, expectedAlphabet);

    //    check matched..
    if (playerPressed === expectedAlphabet) {
        console.log('You grt a point');

        const currentScoreElement = document.getElementById('current-score');

        const currentScoreText = currentScoreElement.innerText;

        const currentScore = parseInt(currentScoreText);

        console.log(currentScore);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        console.log('you press the right key', expectedAlphabet);

        removeBgColorById(expectedAlphabet);

        continueGame();

    } else {
        console.log('You missed and lost a life.');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
         const newLife = currentLife - 1;
         currentLifeElement.innerText =newLife;

    }
}
// captured keyboard  key press by call back function...

document.addEventListener('keyup', handleKeyboardKeys);


function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    // set or display a function...
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElemntById('play-ground');
    continueGame();
}






