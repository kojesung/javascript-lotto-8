import LottoResult from "../src/LottoResult.js";
import Lotto from "../src/Lotto.js";

describe("LottoResult 테스트", () => {
  describe("검증 테스트", () => {
    const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    test.each([[NaN], [-1000], [0], [1000.5]])("유효하지 않은 구입금액이면 예외가 발생한다: %s", (amount) => {
      expect(() => {
        new LottoResult(amount, lottos, winningLotto, bonusNumber);
      }).toThrow("[ERROR]");
    });

    test.each([[null], [[]]])("구매한 로또가 없으면 예외가 발생한다", (lottos) => {
      expect(() => {
        new LottoResult(8000, lottos, winningLotto, bonusNumber);
      }).toThrow("[ERROR]");
    });
  });

  describe("통계 계산 테스트", () => {
    test("당첨 통계를 올바르게 계산한다", () => {
      const lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]),
        new Lotto([1, 2, 3, 4, 5, 7]),
        new Lotto([1, 2, 3, 4, 5, 8]),
        new Lotto([1, 2, 3, 4, 8, 9]),
        new Lotto([1, 2, 3, 8, 9, 10]),
        new Lotto([8, 9, 10, 11, 12, 13]),
      ];
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;

      const result = new LottoResult(6000, lottos, winningLotto, bonusNumber);
      const statistics = result.getStatistics();

      expect(statistics.first).toBe(1);
      expect(statistics.second).toBe(1);
      expect(statistics.third).toBe(1);
      expect(statistics.fourth).toBe(1);
      expect(statistics.fifth).toBe(1);
    });
  });

  describe("수익률 계산 테스트", () => {
    test("수익률을 올바르게 계산한다", () => {
      const lottos = [new Lotto([1, 2, 3, 8, 9, 10])];
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;

      const result = new LottoResult(8000, lottos, winningLotto, bonusNumber);

      expect(result.getProfitRate()).toBe(62.5);
    });

    test("수익률을 소수점 둘째 자리에서 반올림한다", () => {
      const lottos = [new Lotto([1, 2, 3, 8, 9, 10]), new Lotto([1, 2, 3, 4, 8, 9])];
      const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const bonusNumber = 7;

      const result = new LottoResult(8000, lottos, winningLotto, bonusNumber);

      expect(result.getProfitRate()).toBe(687.5);
    });
  });
});
