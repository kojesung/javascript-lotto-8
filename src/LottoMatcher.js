import { MATCH_COUNT } from "./constants";

class LottoMatcher {
  static getRank(purchasedLotto, winLotto, bonusNumber) {
    const matchCount = this.#getMatchCount(purchasedLotto, winLotto);
    const hasBonus = this.#isBonusMatch(purchasedLotto, bonusNumber);
    return this.#determineRank(matchCount, hasBonus);
  }

  static #getMatchCount(purchasedLotto, winLotto) {
    const purchasedNumbers = purchasedLotto.getSortedNumbers();
    return purchasedNumbers.filter((number) => winLotto.includes(number)).length;
  }

  static #isBonusMatch(purchasedLotto, bonusNumber) {
    return purchasedLotto.includes(bonusNumber);
  }

  static #determineRank(matchCount, hasBonus) {
    if (matchCount === MATCH_COUNT.FIRST) return "FIRST";
    if (matchCount === MATCH_COUNT.SECOND && hasBonus) return "SECOND";
    if (matchCount === MATCH_COUNT.THIRD) return "THIRD";
    if (matchCount === MATCH_COUNT.FOURTH) return "FOURTH";
    if (matchCount === MATCH_COUNT.FIFTH) return "FIFTH";
    return "NONE";
  }
}

export default LottoMatcher;
