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
    this.#validate(purchaseAmount, purchasedLottos);
    this.#purchaseAmount = purchaseAmount;
    this.#calculateStatics(purchasedLottos, winLotto, bonusNumber);
  }
  #calculateStatics(purchasedLottos, winLotto, bonusNumber) {
    for (const purchasedLotto of purchasedLottos) {
      const rank = LottoMatcher.getRank(purchasedLotto, winLotto, bonusNumber);
      if (rank !== "NONE") this.#statistics[rank]++;
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

  #validate(purchaseAmount, purchasedLottos) {
    if (Number.isNaN(purchaseAmount)) throw new Error("[ERROR] 구입 금액은 유효한 숫자여야 합니다.");

    if (!Number.isInteger(purchaseAmount)) throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");

    if (purchaseAmount <= 0) throw new Error("[ERROR] 구입 금액은 양수여야 합니다.");

    if (!purchasedLottos || purchasedLottos.length === 0) throw new Error("[ERROR] 구매한 로또가 없습니다.");
  }
}
export default LottoResult;
