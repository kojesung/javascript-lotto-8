import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async inputPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.");
  }

  static async inputWinNumbers() {
    return await Console.readLineAsync("당첨 번호를 입력해 주세요.");
  }

  static async inputBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.");
  }
}

export default InputView;
