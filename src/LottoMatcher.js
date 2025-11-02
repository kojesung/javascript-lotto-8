class LottoMatcher {
  static #getMatchCount(purchasedLotto, winLotto) {
    const purchasedNumbers = purchasedLotto.getSortedNumbers();
    return purchasedNumbers.filter((number) => winLotto.includes(number)).length;
  }

  static #isBonusMatch(purchasedLotto, bonusNumber) {
    return purchasedLotto.getSortedNumbers().includes(bonusNumber);
  }
}

export default LottoMatcher;
