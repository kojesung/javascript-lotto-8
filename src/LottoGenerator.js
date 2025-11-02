import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants";
import Lotto from "./Lotto";

class LottoGenerator {
  static #generate(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.COUNT);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  static generateByAmount(amount) {
    const count = amount / LOTTO.PRICE;
    return this.#generate(count);
  }
}

export default LottoGenerator;
