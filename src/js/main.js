import BlackJack from "blackjack-dealer-logic"

export default () => {
    alert("Lets play some blackjack");
    const game = BlackJack.singleDeckGame;
    const playButton = document.getElementById("btn-play");
    const hitButton = document.getElementById("btn-hit");
    const standButton = document.getElementById("btn-stand");
    const doubleButton = document.getElementById("btn-double");
    const start = document.getElementById("start");
    const play = document.getElementById("play");
    const dealer = document.getElementById("dealer");
    const player = document.getElementById("player");
    const bust = document.getElementById("bust");
    const result = game.outcome();

  
    playButton.onclick = function(){
        bust.innerHTML = ``;
        start.innerHTML = `Your current chip count is: ${game.getUserChips()}`;
        
        const wager = window.prompt("Ante");
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
            }
            game.resetPlayers();

        };

        standButton.onclick = function(){
            game.standUser();
            game.evaluateUser();
            game.settleDealerHand();
            game.resetPlayers();

        };

        doubleButton.onclick = function(){
            player.doubleUser();
            game.evaluateUser();
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            // update wager
            // check if bust
            play.innerHTML = `Your bet is: ${wager}`;
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`;
            game.settleDealerHand();

            if (game.isUserBust()){
                bust.innerHTML = `You Busted!!!`
                hitButton.onclick = function(){}
                game.settleDealerHand();

            }
            game.resetPlayers();


        };
        
        

    }
}