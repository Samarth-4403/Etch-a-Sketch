const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
  container.innerHTML = ''; // Clear the previous grid

  // Calculate the number of squares based on size
  const numSquares = size * size;

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }

  // Set grid size in CSS variables
  container.style.setProperty('--grid-size', size);
}

function handleResetClick() {
  let newSize = prompt('Enter the number of squares per side (max 100):');

  // Validate user input and set a default size if invalid
  if (!newSize || isNaN(newSize) || newSize < 1 || newSize > 100) {
    newSize = 16; // Default size
  }

  createGrid(newSize);
}

resetButton.addEventListener('click', handleResetClick);

// Initial grid creation
createGrid(16);
