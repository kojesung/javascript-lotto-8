import LottoMatcher from "../src/LottoMatcher.js";
import Lotto from "../src/Lotto.js";

describe("LottoMatcher 테스트", () => {
  const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  const bonusNumber = 7;

  test("6개 일치하면 1등이다", () => {
    const purchasedLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("FIRST");
  });

  test("5개 일치 + 보너스 일치하면 2등이다", () => {
    const purchasedLotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("SECOND");
  });

  test("5개 일치하면 3등이다", () => {
    const purchasedLotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("THIRD");
  });

  test("4개 일치하면 4등이다", () => {
    const purchasedLotto = new Lotto([1, 2, 3, 4, 8, 9]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("FOURTH");
  });

  test("3개 일치하면 5등이다", () => {
    const purchasedLotto = new Lotto([1, 2, 3, 8, 9, 10]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("FIFTH");
  });

  test("2개 이하 일치하면 당첨되지 않는다", () => {
    const purchasedLotto = new Lotto([1, 2, 8, 9, 10, 11]);
    expect(LottoMatcher.getRank(purchasedLotto, winningLotto, bonusNumber)).toBe("NONE");
  });
});
