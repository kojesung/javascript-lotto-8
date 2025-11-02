import { PRIZE } from "./constants.js";

class OutputFormatter {
  static formatPurchaseCount(count) {
    return `\n${count}개를 구매했습니다.`;
  }

  static formatLottoNumbers(lotto) {
    const numbers = lotto.getNumbers();
    const sorted = [...numbers].sort((a, b) => a - b);
    return `[${sorted.join(", ")}]`;
  }

  static formatStatistics(statistics) {
    const statisticsResultFormat = [
      "\n당첨 통계",
      "---",
      `3개 일치 (${PRIZE.FIFTH.toLocaleString()}원) - ${statistics.fifth}개`,
      `4개 일치 (${PRIZE.FOURTH.toLocaleString()}원) - ${statistics.fourth}개`,
      `5개 일치 (${PRIZE.THIRD.toLocaleString()}원) - ${statistics.third}개`,
      `5개 일치, 보너스 볼 일치 (${PRIZE.SECOND.toLocaleString()}원) - ${statistics.second}개`,
      `6개 일치 (${PRIZE.FIRST.toLocaleString()}원) - ${statistics.first}개`,
    ];
    return statisticsResultFormat.join("\n");
  }

  static formatProfitRate(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  }
}

export default OutputFormatter;
