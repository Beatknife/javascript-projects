const minNum = 1;
const maxNum = 100;
let answer = Math.round(Math.random() * (maxNum - minNum)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running) {

    if (attempts > 9){
        alert('YOU USED ALL OF YOUR GUESSES. GAME OVER!');
        running = true;
        attempts = 0;
        answer = Math.round(Math.random() * (maxNum - minNum)) + minNum;
        continue;
    }
    
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}, attempts left: ${4 -attempts + 1}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        alert(`Please enter a valid number`);
    }
    else if (guess < minNum || guess > maxNum) {
        alert(`Please enter a valid number`);
    }
    else {
        attempts++;
        
        if (guess < answer) {
            alert(`TOO LOW! TRY AGAIN!`)
        }
        else if (guess > answer) {
            alert(`TOO HIGH! TRY AGAIN!`)
        }
        else {
            alert(`CORRECT! The answer is ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }

    }

}