var Word = require("./word");
var inquirer = require("inquirer");

var totalGuessRemaining;                        // this stores total number of guesses
var randomIndex;                                // this stores index of current word in wordsCollection

// Array of collection of words
var wordsCollection = [
    "COMPUTER", "CHICAGO", "TACOS", "SCHOOL", "HOSPITAL", "JAVASCRIPT", "BURGER", "SUSHI",
    "WINDOWS", "IPHONE", "ANDROID", "HOUSE", "INSURANCE", "CANADA", "ENGLISH", "COMPUTER",
    "FOLDER", "PERSON", "DATABASE", "LANGUAGE", "MEDICATION", "STEAK", "SOCCER", "TENNIS"
];

// calling function to select new word
selectNewWord();

//this function randomly selects new words and then calls continueGame function to start game
function selectNewWord() {

    // selecting random word from the array wordsCollection
    randomIndex = Math.floor(Math.random() * wordsCollection.length);
    var currentWord = new Word(wordsCollection[randomIndex]);

    // setting totalGuessRemaning to 10 and then starting game
    totalGuessRemaining = 10;
    console.log("\nGuess the following word!");
    continueGame(currentWord);
}

//this function prompts user to guess word, checks against underlying letter and then continues accordingly
function continueGame(word) {

    // if total guesses remaining are greater then 0 then if part executes
    if (totalGuessRemaining > 0) {
        currentWord = "" + word;
        console.log(` ${word}\n`);
        inquirer
             .prompt([{
                 type: "input",
                 message: "Guess a letter ! ",
                 name: "guessedLetter"
             }])
             .then(answer => {

                //calling doMatch method to match guessed letter
                 word.doMatch(answer.guessedLetter);
                 
                // if the user's guess is not correct then if part executes which decrements totalGuessRemaning variable
                 if (currentWord == word.toString()) {
                    totalGuessRemaining--;
                    console.log("\nIncorrect guess!!");
                    console.log(`Guess remaning.... ${totalGuessRemaining}\n`);
                
                // if the user's guess is correct then else part executes which also restarts game if the whole word
                // was guessed correctly
                 } else {
                     console.log("\nCorrect guess!!");

                     // checks whether whole word is guessed correctly. If so then restarts game with a new word.
                     if (word.toString().replace(/\s+/g, '') == wordsCollection[randomIndex]) {
                        console.log("\nGreat! You guessed the word correctly.");
                        console.log("Next word is !");
                        selectNewWord();
                        return;
                     }
                 }
                 continueGame(word);                
             });
    
    // else if total guesses remaining is 0 then else part executes and restarts game by calling selectNewWord function
    } else {
            console.log("\nSorry you were unable to guess in 10 guesses.");
            console.log(`Correct word was ... ${wordsCollection[randomIndex]}`);
            console.log("Next word is !");
            selectNewWord();
      }
}