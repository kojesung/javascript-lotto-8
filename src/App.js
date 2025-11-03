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
    const purchaseAmountInput = await InputView.inputPurchaseAmount();
    const purchaseAmount = InputParser.parsePurchaseAmount(purchaseAmountInput);
    const count = purchaseAmount / LOTTO.PRICE;

    const purchasedLottos = LottoGenerator.generate(count);

    OutputView.printPurchasedNumber(count);

    const formattedLottos = purchasedLottos.map((lotto) => OutputFormatter.formatLottoNumbers(lotto));
    OutputView.printFormattedLottoList(formattedLottos);

    const winNumbersInput = await InputView.inputWinNumbers();
    const winningNumbers = InputParser.parseWinningNumbers(winNumbersInput);
    const winningLotto = new Lotto(winningNumbers);

    const bonusNumberInput = await InputView.inputBonusNumber();
    const bonusNumber = InputParser.parseBonusNumber(bonusNumberInput, winningNumbers);

    const result = new LottoResult(purchaseAmount, purchasedLottos, winningLotto, bonusNumber);

    const statistics = result.getStatistics();
    const profitRate = result.getProfitRate();

    OutputView.printResultStatistics(statistics);
    OutputView.printRateOfReturn(profitRate);
  }
}

export default App;
