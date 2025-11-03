import { LOTTO } from "./constants.js";

class InputParser {
  static parsePurchaseAmount(input) {
    const trimmed = input.trim();

    if (trimmed === "") {
      throw new Error("[ERROR] 구입금액을 입력해주세요.");
    }

    const amount = Number(trimmed);
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 구입금액은 숫자만 입력 가능합니다.");
    }

    if (amount <= 0) {
      throw new Error("[ERROR] 구입금액은 양수만 입력 가능합니다.");
    }

    if (amount % LOTTO.PRICE !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해야합니다.");
    }

    return amount;
  }

  static parseWinningNumbers(input) {
    const trimmed = input.trim();

    if (trimmed === "") {
      throw new Error("[ERROR] 당첨 번호를 입력해주세요.");
    }

    if (!trimmed.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표(,)로 구분해주세요");
    }

    const tokens = trimmed.split(",").map((token) => token.trim());

    if (tokens.length !== LOTTO.COUNT) {
      throw new Error("[ERROR] 당첨 번호는 6개의 숫자로 이루어져야합니다");
    }

    const numbers = tokens.map((token) => {
      const num = Number(token);
      if (Number.isNaN(num)) {
        throw new Error("[ERROR] 당첨 번호는 숫자만 입력 가능합니다.");
      }
      return num;
    });

    numbers.forEach((number) => {
      if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
        throw new Error("[ERROR] 당첨 번호는 1~45 사이의 숫자로 입력해주세요");
      }
    });

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야합니다.");
    }

    return numbers;
  }

  static parseBonusNumber(input, winningNumbers) {
    const trimmed = input.trim();

    if (trimmed === "") {
      throw new Error("[ERROR] 보너스 번호를 입력해주세요.");
    }

    const bonusNumber = Number(trimmed);
    if (Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
    }

    if (bonusNumber < LOTTO.MIN_NUMBER || bonusNumber > LOTTO.MAX_NUMBER) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자로 입력해주세요");
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야합니다.");
    }

    return bonusNumber;
  }
}

export default InputParser;
