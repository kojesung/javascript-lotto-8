import { Console } from "@woowacourse/mission-utils";
import InputParser from "./InputParser.js";
import InputView from "./InputView.js";
import Lotto from "./Lotto.js";
import LottoGenerator from "./LottoGenerator.js";
import LottoResult from "./LottoResult.js";
import OutputFormatter from "./OutputFormatter.js";
import OutputView from "./OutputView.js";
import { LOTTO } from "./constants.js";

class App {
  async run() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const count = purchaseAmount / LOTTO.PRICE;

    const purchasedLottos = LottoGenerator.generate(count);
    OutputView.printPurchasedNumber(count);

    const formattedLottos = purchasedLottos.map((lotto) => OutputFormatter.formatLottoNumbers(lotto));
    OutputView.printFormattedLottoList(formattedLottos);

    const winningNumbers = await this.#getWinningNumbers();
    const winningLotto = new Lotto(winningNumbers);

    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    const result = new LottoResult(purchaseAmount, purchasedLottos, winningLotto, bonusNumber);

    const statistics = result.getStatistics();
    const profitRate = result.getProfitRate();

    OutputView.printResultStatistics(statistics);
    OutputView.printRateOfReturn(profitRate);
  }

  async #getPurchaseAmount() {
    while (true) {
      try {
        const input = await InputView.inputPurchaseAmount();
        return InputParser.parsePurchaseAmount(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const input = await InputView.inputWinNumbers();
        return InputParser.parseWinningNumbers(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await InputView.inputBonusNumber();
        return InputParser.parseBonusNumber(input, winningNumbers);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
