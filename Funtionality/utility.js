function hideSection(elementId){
    const elemnt = document.getElementById(elementId);
    elemnt.classList.add('hidden')
}

function showSection(elementId){
    const elemnt = document.getElementById(elementId);
    elemnt.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    // console.log(alphabet);

    // step 2 get a random number 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet  = alphabets[index] 
    // console.log(alphabet);
    return alphabet;
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-purple-950')
}
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-purple-950')
}

function setElement(elementId, value){
    const nowScore = document.getElementById(elementId);
    nowScore.innerText = value;
    return nowScore;
}

function resetScore(elementId, value){
    const nowScore = document.getElementById(elementId);
    nowScore.innerText = value;
    return nowScore;
}