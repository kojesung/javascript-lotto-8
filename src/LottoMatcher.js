import { LOTTO, MATCH_COUNT } from "./constants.js";

class LottoMatcher {
  static getRank(purchasedLotto, winLotto, bonusNumber) {
    this.#validate(purchasedLotto, winLotto, bonusNumber);
    const matchCount = this.#getMatchCount(purchasedLotto, winLotto);
    const hasBonus = this.#isBonusMatch(purchasedLotto, bonusNumber);
    return this.#determineRank(matchCount, hasBonus);
  }

  static #getMatchCount(purchasedLotto, winLotto) {
    const purchasedNumbers = purchasedLotto.getNumbers();
    return purchasedNumbers.filter((number) => winLotto.getNumbers().includes(number)).length;
  }

  static #isBonusMatch(purchasedLotto, bonusNumber) {
    return purchasedLotto.getNumbers().includes(bonusNumber);
  }

  static #determineRank(matchCount, hasBonus) {
    if (matchCount === MATCH_COUNT.FIRST) return "FIRST";
    if (matchCount === MATCH_COUNT.SECOND && hasBonus) return "SECOND";
    if (matchCount === MATCH_COUNT.THIRD) return "THIRD";
    if (matchCount === MATCH_COUNT.FOURTH) return "FOURTH";
    if (matchCount === MATCH_COUNT.FIFTH) return "FIFTH";
    return "NONE";
  }

  static #validate(purchasedLotto, winLotto, bonusNumber) {
    if (!purchasedLotto || typeof purchasedLotto.getNumbers !== "function")
      throw new Error("[ERROR] 올바른 구매 로또가 아닙니다.(정상적인 Lotto 객체가 아님)");

    if (!winLotto || typeof winLotto.getNumbers !== "function")
      throw new Error("[ERROR] 올바른 당첨 로또가 아닙니다.(정상적인 Lotto 객체가 아님)");

    if (typeof bonusNumber !== "number" || bonusNumber < LOTTO.MIN_NUMBER || bonusNumber > LOTTO.MAX_NUMBER)
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
  }
}

export default LottoMatcher;
