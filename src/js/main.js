import BlackJack from "blackjack-dealer-logic"

export default () => {
  alert("Lets play some blackjack")
  const app = document.getElementById("app")
  const user = new BlackJack.User()
  const dealer = new BlackJack.Dealer()
  const table = new BlackJack.Table(user, dealer)
  const blackjack = new BlackJack(app)
  const hitButton = document.getElementById("btn-hit")
  const standButton = document.getElementById("btn-stand")
  const doubleButton = document.getElementById("btn-double")


    hitButton.onclick = function(){}
    standButton.onclick = function(){}
    doubleButton.onclick = function(){}
    




  blackjack.start()
}