 $(document).ready(function() {
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;          
 var guessesNow = [];
 var computerChoices = ["a”, “b”, “c”, “d”, “e”, “f”, “g”, “h”, “i”, “j”, “k”, “l”, “m”, “n”, “o”, “p”, “q”, “r", "s", "t", "u", "v", "w", "x", "y", "z"];


 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
            document.onkeyup = function(event) {
                var userGuess = event.key;
                guessesNow.push(userGuess);

               
                if (userGuess === computerGuess) {
                    wins++;
                    guessesLeft = 9;
                    guessesNow = [];
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                } else {
                    guessesLeft--;
                }
                if (guessesLeft === 0) {
                    losses++;
                    guessesLeft = 9;
                    guessesNow = [];
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                }
                var html =
                    "<h1> The Psychic Game! </h1>" +
                    "<p>Guess what letter I'm thinking of</p>" +
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses +
                    "<p>Guesses Left: " + guessesLeft + 
                    "<p>Your Guesses so far: " + guessesNow + "</p>";
                document.querySelector("#game").innerHTML = html;
            }

             })
             
                   