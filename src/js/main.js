import BlackJack from "blackjack-dealer-logic"


export default () => {
  alert("Lets play some blackjack")
  const game = BlackJack.singleDeckGame
  const playButton = document.getElementById("btn-play")
  const hitButton = document.getElementById("btn-hit")
  const standButton = document.getElementById("btn-stand")
  const doubleButton = document.getElementById("btn-double")
  

 
    
  
    playButton.onclick = function(){
        
            document.getElementById("start")
            start.innerHTML = `Your current chip count is: ${game.getUserChips()}`
            
            const wager = window.prompt("Ante");
            game.receiveAnte(wager);

            document.getElementById("play")
            play.innerHTML = `Your bet is: ${wager}`
            
            game.deal();
            
            document.getElementById("dealer")
            dealer.innerHTML = `Dealer hand: ${game.getDealerCardUp()}`
            
            document.getElementById("player")
            player.innerHTML = `Your hand: ${game.getUserHandValue()}`


        
            dealButton.onclick = function(){
                table.deal()
            }
            hitButton.onclick = function(){
                table.hitUser()
            }
            standButton.onclick = function(){
                table.standUser()
            }
            doubleButton.onclick = function(){
                table.doubleUser()
            }
    }


    




 
}