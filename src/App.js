import { Console, Random } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    const winNumbers = await InputView.inputWinNumbers();
    const bonusNumber = await InputView.inputBonusNumber();
    const lotto = new Lotto([1, 2123, 555, 4, 5, 6]);
    const a = Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log(a);
  }
}

export default App;
