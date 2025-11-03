import LottoMatcher from "./LottoMatcher.js";
import { PRIZE } from "./constants.js";

class LottoResult {
  #statistics = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };
  #purchaseAmount;
  constructor(purchaseAmount, purchasedLottos, winLotto, bonusNumber) {
    this.#purchaseAmount = purchaseAmount;
    this.#calculateStatics(purchasedLottos, winLotto, bonusNumber);
  }
  #calculateStatics(purchasedLottos, winLotto, bonusNumber) {
    for (const purchasedLotto of purchasedLottos) {
      const rank = LottoMatcher.getRank(purchasedLotto, winLotto, bonusNumber);
      if (rank !== "NONE") {
        this.#statistics[rank]++;
      }
    }
  }

  #getTotalPrize() {
    return (
      this.#statistics.FIRST * PRIZE.FIRST +
      this.#statistics.SECOND * PRIZE.SECOND +
      this.#statistics.THIRD * PRIZE.THIRD +
      this.#statistics.FOURTH * PRIZE.FOURTH +
      this.#statistics.FIFTH * PRIZE.FIFTH
    );
  }

  getProfitRate() {
    const totalPrize = this.#getTotalPrize();
    const rate = (totalPrize / this.#purchaseAmount) * 100;
    return Math.round(rate * 10) / 10;
  }

  getStatistics() {
    return {
      first: this.#statistics.FIRST,
      second: this.#statistics.SECOND,
      third: this.#statistics.THIRD,
      fourth: this.#statistics.FOURTH,
      fifth: this.#statistics.FIFTH,
    };
  }
}
export default LottoResult;
