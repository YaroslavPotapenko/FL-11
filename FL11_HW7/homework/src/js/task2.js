let game = confirm('Do you want to play a game?'); // Create a prompt window. Show the message inside the window ‘Do you want to play a game?’.
let attempts = 3; // User has 3 attempts to guess a number
let numBigger = 4;
let doublePrize = 2;
let counter = 2;
let pow = 2;
if(!game) { // In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown.
    alert('You did not become a billionaire, but can.');
} else {
    while(game) { // All these stuffs should be repeated until user lose or decide to quit
        let maxRange = 8;
        let totalPrize = 0;
        let prize = 100;
        let continueGame = true;
        while (continueGame) { // If user clicked ‘Ok’ – randomly choose an integer number in range [0; 8] (including 0 and 8)
            let randomNumber = Math.floor(Math.random() * (maxRange + 1));
            let isNumber = false;
            for (let i = 0; i < attempts; i++) { // User has 3 attempts to guess a number.
                // Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt
                let currentPossiblePrize = prize / Math.pow(pow, i);
                let userNumber = Number(prompt( // ask user to enter a number of pocket on which the ball could land 
                    `Choose a roulette pocket number from 0 to ${maxRange}
                        Attempts left:  ${attempts - i}
                        Total prize: ${totalPrize}$
                        Possible prize on current attempt: ${currentPossiblePrize}$`));
                if (isNaN(userNumber) || userNumber < 0 || userNumber > maxRange){
                    alert(`It is not a roulette pocket number from 0 to ${maxRange}`);
                } else if (randomNumber === userNumber) { // If user guessed the number, on 1-st attempt prize is 100$, 2-nd attempt – 50$, 3-rd attempt – 25$. 
                    totalPrize += currentPossiblePrize;
                    break;
                } else {
                    if (i === counter) {
                        isNumber = true;
                        break;
                    }
                }
            }
            if (isNumber) {
                break;
            }
            // If user did guess - Show the message ‘Congratulation, you won!   Your prize is: … $. Do you want to continue?’.
            continueGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if (continueGame) {
                maxRange += numBigger; // If user does want to continue, make number range bigger at 4 as the previous one
                prize *= doublePrize; // and two times bigger maximum prize
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`); //If user did not guess a number show the message ‘Thank you for your participation. Your prize is: … $’
        game = confirm('Do you want to play again?'); // ask if he wants to play again 
    }
}