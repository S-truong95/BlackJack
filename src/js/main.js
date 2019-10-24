import BlackJack from "blackjack-dealer-logic"

export default () => {
  const app = document.getElementById("app")
  const blackjack = new BlackJack(app)
  blackjack.start()
}