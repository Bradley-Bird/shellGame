// import functions and grab DOM elements
const shellOneButton = document.getElementById('buttonOne');
const shellTwoButton = document.getElementById('buttonTwo');
const shellThreeButton = document.getElementById('buttonThree');

const shellOneContainer = document.getElementById('shell-1');
const shellTwoContainer = document.getElementById('shell-2');
const shellThreeContainer = document.getElementById('shell-3');

const winEL = document.getElementById('win');
const loseEl = document.getElementById('lose');
const totalEl = document.getElementById('total');


// let state
let win = 0;
let total = 0;

// set event listeners
shellOneButton.addEventListener('click', () => {
  //reset styles
  shellOneContainer.classList.remove('ball')
  shellTwoContainer.classList.remove('ball')
  shellThreeContainer.classList.remove('ball')
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
});
// get user input
// use user input to update state
// update DOM to reflect the new state
