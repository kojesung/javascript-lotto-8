import LottoGenerator from "../src/LottoGenerator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("LottoGenerator 테스트", () => {
  test.each([[0], [-1], [1.5]])("유효하지 않은 개수면 예외가 발생한다: %i", (count) => {
    expect(() => {
      LottoGenerator.generate(count);
    }).toThrow("[ERROR]");
  });

  test("지정한 개수만큼 로또를 생성한다", () => {
    const mockRandoms = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];

    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    mockRandoms.forEach((numbers) => {
      MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce(numbers);
    });

    const lottos = LottoGenerator.generate(3);

    expect(lottos).toHaveLength(3);
    expect(lottos[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottos[1].getNumbers()).toEqual([7, 8, 9, 10, 11, 12]);
    expect(lottos[2].getNumbers()).toEqual([13, 14, 15, 16, 17, 18]);
  });
});
