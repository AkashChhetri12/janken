const game = () => {

    // Score variables
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };


    // play match

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation ="";
            })
        })
        // computer player
        const computerMove = ["rock", "paper", "scissors"];
        options.forEach(option=>{
            option.addEventListener("click", function() {
            // not using this because want to bind "this" with this function
            
            // computer choice
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerMove[computerNumber];
            // console.log("inside playmatch");

            // setting timeout of 2 sec
            setTimeout(()=>{
                // we call compare hands here
                compareHands(this.textContent, computerChoice);
                
                // update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000)

            // Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";



            });
        });


    };


    const compareHands = (playerChoice, computerChoice) => {

        //update .winner text
        const winner = document.querySelector(".winner");
        // checking for a tie
        if (playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        // check for rock
        if (playerChoice === "rock") {
            if( computerChoice === "scissors") {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // check for paper
        if (playerChoice === "paper") {
            if( computerChoice === "scissors") {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }

         // check for paper
         if (playerChoice === "scissors") {
            if( computerChoice === "rock") {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };



    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent =cScore;
    }



    // HERE WE CALL THE ALL INNER FUNCTION AND ENJOY THE GAME :) 
    startGame();
    playMatch();
    
};

// start the game by calling game()
game();