// Get references to DOM elements
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const deincrementButton = document.getElementById('deincrement');
const resetButton = document.getElementById('reset');

// Initialize the counter value
let counterValue = 0;

// Increment counter function
function incrementCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}

function deincrementCounter() {
    counterValue-=1;
    counterElement.textContent = counterValue;
}

// Reset counter function
function resetCounter() {
  counterValue = 0;
  counterElement.textContent = counterValue;
}

// Attach event listeners
incrementButton.addEventListener('click', incrementCounter);
deincrementButton.addEventListener('click', deincrementCounter);
resetButton.addEventListener('click', resetCounter);
