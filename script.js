let solution;

function generateWord() {
    fetch('words.txt')
        .then(response => response.text())
        .then(text => {
            const words = text.split('\n').filter(word => word);
            solution = words[Math.floor(Math.random() * words.length)].trim();
        })
        .catch(error => console.error('Error fetching words', error));
}

function resetGame() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.textContent = '';
        tile.classList.remove('correct', 'present', 'incorrect');
    });
    currentRow = 0;
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('guess').value = '';
}

function playAgain() {
    resetGame();
    generateWord();
}

function endGame(message) {
    alert(message);
    document.getElementById('play-again').style.display = 'block';
}

generateWord();
let currentRow = 0;

// Add event listener
document.getElementById('guess').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        submitGuess();
    }
});

// Function to submit the user's guess
function submitGuess() {
    const input = document.getElementById('guess');
    const guess = input.value.toLowerCase();

    if (guess.length !== 6) {
        alert('Guess must be 6 letters');
        return;
    }

    // Update status of each tile
    const row = document.querySelectorAll('.row')[currentRow];
    for (let i = 0; i < 6; i++) {
        const tile = row.children[i];
        const letter = guess[i];

        tile.textContent = letter;

        if (solution[i] === letter) {
            tile.classList.add('correct');
        } else if (solution.includes(letter)) {
            tile.classList.add('present');
        } else {
            tile.classList.add('incorrect');
        }
    }

    currentRow++;
    input.value = '';

    if (guess === solution) {
        endGame('You guessed the word!');
    } else if (currentRow === 6) {
        endGame('Game over! The word was ' + solution);
    }
}