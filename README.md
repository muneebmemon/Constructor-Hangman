# Constructor-Hangman
  * Hangman command-line game using constructor functions. This project has three javascript files:
  
* Letter.js: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. The constructor defines:
  - A string value to store the underlying character for the letter
  - A boolean value that stores whether that letter has been guessed yet
  - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  - A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The constructor defines:
  - An array of new Letter objects representing the letters of the underlying word
  - A function that returns a string representing the word. It calls the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
  - A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

* index.js: The file containing the logic for the course of the game, which depends on Word.js and:
  - Randomly selects a word and uses the Word constructor to store it
  - Prompts the user for each guess and keeps track of the user's remaining guesses
  
 ## Technologies used
  - Node.js
  - Javascript
  - Inquirer NPM Package
  
  ![alt text](https://github.com/muneebmemon/Bootstrap-Portfolio/blob/master/assets/images/conshangman.png "Screenshot One")

