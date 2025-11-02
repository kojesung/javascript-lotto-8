// TODO 유효성 검사 추가
class InputParser {
  static parsePurchaseAmount(input) {
    return Number(input);
  }

  static parseWinningNumbers(input) {
    const numbers = input
      .split(",")
      .map((str) => str.trim())
      .map(Number);
    return numbers;
  }

  static parseBonusNumbers(input) {
    return Number(input);
  }
}

export default InputParser;
