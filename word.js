var Letter = require("./letter");                       // requiring letter module

//Word constructor
function Word(newWord) {
    this.word = newWord.split("");                      // spliting a word into array of letters
    this.letters = [];                                  // array containing reference to letter objects

    // looping through each letter in word array and creating new letter objects and pushing it to new letters array 
    this.word.forEach(letter => {
        this.letters.push(new Letter(letter));
    });

    // this method matches letter guessed by user by calling matchCharacter function in each individual Letter object 
    this.doMatch = function(guessedLetter) {
        this.letters.forEach(letter => {
            letter.matchCharacter(guessedLetter.toUpperCase());
        });
    };

    // this method returns the Word by calling toString method of each individual Letter object
    this.toString = function() {
        var currentWord = "";                   // variable for storing returned word

        this.letters.forEach(letter => {
            currentWord += letter;
        });

        return currentWord;
    };
}

module.exports = Word;
