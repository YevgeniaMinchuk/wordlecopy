# wordlecopy

A simple web-based game inspired by the popular Wordle game. The objective is to guess a 6-letter word within seven attempts. After each guess, the game provides feedback on which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are not in the word at all.

## Table of Contents

- [Features](#features)
- [Play](#play)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features
- User friendly-interface with responsive design
- Displays feedback after each guess
- Allows users to pay multiple rounds with the option to restart the game after winning or losing

## Play
Visit the website at https://wordle-yevgeniam.netlify.app

## Installation
1. Close the repository:
   ```bash
   git clone https://github.com/yourusername/wordle-copycat.git
2. Navigate to the project directory

cd wordle-copycat

## Usage
1. Open the 'index.html' file in your web browser:

open index.html

3. Enter a 6-letter guess and press 'Enter' or click the 'Submit' button
4. Continue guessing based on the feedback until you guess the word or run out of attempts
5. Click 'Play Again' to start a new game

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
wordle-copycat/

│

├── index.html

├── script.js

├── style.css

└── words.txt

### Game Logic
- **submitGuess()**: Function to handle user guesses, providing feedback on letter positions.
- **endGame()**: Function to display the game result and provide an option to play again.
- **resetGame()**: Function to reset the game state and generate a new word for the next round.
