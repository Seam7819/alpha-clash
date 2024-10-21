// function play(){
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

function keyBoardButtonpress(event){
    const keyPressedBtn = event.key;
    console.log(keyPressedBtn);

    // get element which is randomly i see

    const randomAlpha = document.getElementById('random-alphabet');
    const randomlyPressed = randomAlpha.innerText;
    const expectedAlphabet = randomlyPressed.toLowerCase()
    console.log(expectedAlphabet);

    // check point 
    if(keyPressedBtn === expectedAlphabet){
        console.log("You Got A Point");
        // current score
        const currentScore = document.getElementById('current-score');
        const getScore = currentScore.innerText;
        const Score = parseInt(getScore);
        // console.log(Score);

        const newScore = Score + 1;
        currentScore.innerText = newScore;

        removeBackgroundById(expectedAlphabet)
        continueTheGame()
    }else {
        // console.log("You lost your life");
        const currentLife = document.getElementById('current-life');
        const setLife = currentLife.innerText;
        const gameLife = parseInt(setLife)

        const UpdatedLife = gameLife - 1;
        currentLife.innerText = UpdatedLife;
        
        if(UpdatedLife === 0){
            showSection('scoore-section');
            hideSection('play-ground')

            
            const currentScore = document.getElementById('current-score');
        const getScore = currentScore.innerText;
        const Score = parseInt(getScore);
        // console.log(Score);

        const newScore = Score + 1;
        currentScore.innerText = newScore;
            const finalScore = document.getElementById('final-score');
            finalScore.innerText = newScore - 1;
        }else{

        }
    }
}

document.addEventListener('keyup', keyBoardButtonpress)

function continueTheGame(){
    // step1 generate Alphabet
    const alphabet = getARandomAlphabet()
    // console.log(alphabet);
    const randomAlpha = document.getElementById('random-alphabet');
    randomAlpha.innerText = alphabet.toUpperCase();
    

    setBackgroundColor(alphabet)
}

function play(){
    hideSection('home-section')
    showSection('play-ground')
    continueTheGame()
}
function playAgain(){
    hideSection('scoore-section');
    showSection('play-ground');
    setElement('current-life', 5);
    resetScore('current-score', 0);
    setBackgroundColor()
    continueTheGame()
}