import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printPurchasedNumber(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  static printFormattedLottoList(formattedLottos) {
    formattedLottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }
}

export default OutputView;
