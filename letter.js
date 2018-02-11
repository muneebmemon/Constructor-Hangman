// Letter constructor
function Letter(ulet) {
    this.u_letter = ulet;                       // stores underlying letter
    this.u_guessed = false;                     // stores whether letter was guessed or not

    // this function returns underlying letter if it was already guessed or '_' if its not.
    this.toString = function() {
        if (this.u_guessed) {
            return `${this.u_letter} `;
        } else {
            return `_ `;
        }
    };

    // this function matches underlying letter with user's guessed letter and sets u_guessed to true 
    // if it was guessed correctly
    this.matchCharacter = function(userGuessedLetter) {
        if (this.u_letter == userGuessedLetter) {
            this.u_guessed = true;
        }
    };
}

module.exports = Letter;