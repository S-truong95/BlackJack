import BlackJack from "blackjack-dealer-logic"

export default () => {
    alert("Lets play some blackjack");
    const game = BlackJack.singleDeckGame;
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const play = document.getElementById("play");
    const dealer = document.getElementById("dealer");
    const player = document.getElementById("player");
    const bust = document.getElementById("bust");
    const name = document.getElementById("name")
    const Result = BlackJack.Result;
    const history = document.getElementById("history")
    const outcome = document.getElementById("outcome")
    var gameHistory = []
    var playerName = window.prompt("enter name")
    const reset = document.getElementById("btn-reset")
    
  
    name.innerHTML = playerName;
    reset.onclick = function(){
        window.location.reload();
    }
    playButton.onclick = function(){
        bust.innerHTML = ``;
        outcome.innerHTML = ``;
        history.innerHTML = gameHistory;
        start.innerHTML = `Your current chip count is: ${game.getUserChips()}`;
        
        var wager = window.prompt("Ante");
        game.receiveAnte(wager);

        
        play.innerHTML = `Your bet is: ${wager}`;
        
        game.deal();
        
        dealer.innerHTML = `Dealer hand: ${game.getDealerCardUp()}`;
        player.innerHTML = `Your hand: ${game.getUserHandValue()}`;

        hitButton.onclick = function(){
            game.hitUser();
            game.evaluateUser();
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            // check if bust
            if (game.isUserBust()){
                bust.innerHTML = `You Busted!!!`
                hitButton.onclick = function(){}
                game.settleDealerHand();
                outcome.innerHTML =`"You lost...`
                gameHistory.push("lost")
                game.resetAnte();
        }
            game.settleDealerHand();
            game.resetPlayers();

        };

        standButton.onclick = function(){
            game.standUser();
            game.evaluateUser();
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            game.settleDealerHand();
            dealer.innerHTML = `Dealer hand: ${game.getDealerHandValue()}`;
            switch (game.outcome()){
                case Result.LOSS:
                    outcome.innerHTML =`"You lost...`
                    gameHistory.push("lost")
                    game.resetAnte();
                    break;
                  case Result.PUSH:
                    outcome.innerHTML= `Push... at least you get your money back!`
                    gameHistory.push("push")
                    game.pushHand();
                  case Result.WIN:
                    outcome.innerHTML =`Congrats!!! You win!!!`
                    gameHistory.push("win")
                    game.userWin();
              
                  default:
                    break;           
                }
            game.resetPlayers();

        };

        doubleButton.onclick = function(){
            game.doubleUser();
            game.evaluateUser();
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            // check if bust
            play.innerHTML = `Your bet is: ${game.getAnte()}`;
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            game.settleDealerHand();

            if (game.isUserBust()){
                bust.innerHTML = `You Busted!!!`
                hitButton.onclick = function(){}
                game.settleDealerHand();
                dealer.innerHTML = `Dealer hand: ${game.getDealerHandValue()}`;
                outcome.innerHTML =`"You lost...`
                gameHistory.push("lost")
                game.resetAnte();

            }
            game.resetPlayers();


        };
        

    }
}