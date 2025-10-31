import InputView from "./InputView.js";

class App {
  async run() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    const winNumbers = await InputView.inputWinNumbers();
    const bonusNumber = await InputView.inputBonusNumber();
  }
}

export default App;
