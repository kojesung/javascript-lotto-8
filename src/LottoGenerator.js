import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants.js";
import Lotto from "./Lotto.js";

class LottoGenerator {
  static generate(count) {
    const lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.COUNT);
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }
}

export default LottoGenerator;
