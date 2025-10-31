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

  static printResultStatistics(statistics) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${statistics.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics.first}개`);
  }

  static printRateOfReturn(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default OutputView;
