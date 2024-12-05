const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Create the counter value
let counterValue = 0;

// Increment counter function
function incrementCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  counterElement.textContent = counterValue;

}
// Reset counter function
function resetCounter() {
  counterValue = 0;
  counterElement.textContent = counterValue;
}

// Attach event listeners
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
