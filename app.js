// import functions and grab DOM elements
const shellOneButton = document.getElementById('buttonOne');
const shellTwoButton = document.getElementById('buttonTwo');
const shellThreeButton = document.getElementById('buttonThree');

const shellOneContainer = document.getElementById('shell-1');
const shellTwoContainer = document.getElementById('shell-2');
const shellThreeContainer = document.getElementById('shell-3');

const winEl = document.getElementById('win');
const loseEl = document.getElementById('lose');
const totalEl = document.getElementById('total');

// let state
let win = 0;
let total = 0;
//trying to make this less redundant, and more readable.
//adding event listeners with this function! :)
shellOneButton.addEventListener('click', () => {
    clickShell(1);
});
shellTwoButton.addEventListener('click', () => {
    clickShell(2);
});
shellThreeButton.addEventListener('click', () => {
    clickShell(3);
});
function clickShell(shellNum) {
    console.log('click');
    // reset styles
    function reset() {
        shellOneContainer.classList.remove('ball');
        shellTwoContainer.classList.remove('ball');
        shellThreeContainer.classList.remove('ball');
    }
    reset();
    //increment total
    total++;
    totalEl.textContent = total;
    //put the ball somewhere
    const ballLocation = Math.ceil(Math.random() * 3);
    //console.log('click', ballLocation)
    //define what to do if the ball is on this click
    if (ballLocation === 1) {
        shellOneContainer.classList.add('ball');
    } else if (ballLocation === 2) {
        shellTwoContainer.classList.add('ball');
    } else {
        shellThreeContainer.classList.add('ball');
    }
    function displayResults() {
        if (ballLocation === shellNum) {
            win++;
            winEl.textContent = win;
        } else {
            loseEl.textContent = total - win;
        }
    }
    displayResults();
}
