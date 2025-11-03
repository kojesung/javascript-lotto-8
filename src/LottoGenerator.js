import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants.js";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static generate(count) {
    this.#validateCount(count);
    const lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.COUNT);
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }

  static #validateCount(count) {
    if (typeof count !== "number" || !Number.isInteger(count)) {
      throw new Error("[ERROR] 로또 개수는 정수여야 합니다.");
    }

    if (count <= 0) {
      throw new Error("[ERROR] 로또 개수는 양수여야 합니다.");
    }
  }
}

export default LottoGenerator;
