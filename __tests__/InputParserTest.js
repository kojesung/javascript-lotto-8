import InputParser from "../src/InputParser.js";

describe("InputParser - 구입금액 파싱 테스트", () => {
  test.each([[""], ["   "]])("빈 문자열이면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parsePurchaseAmount(input);
    }).toThrow("[ERROR]");
  });

  test.each([["abc"], ["12a3"], ["1,000"]])("숫자가 아니면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parsePurchaseAmount(input);
    }).toThrow("[ERROR]");
  });

  test.each([["-1000"], ["0"]])("양수가 아니면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parsePurchaseAmount(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1500"], ["2300"], ["999"]])("1,000원 단위가 아니면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parsePurchaseAmount(input);
    }).toThrow("[ERROR]");
  });

  test("유효한 구입금액을 파싱할 수 있다", () => {
    expect(InputParser.parsePurchaseAmount("8000")).toBe(8000);
  });
});

describe("InputParser - 당첨번호 파싱 테스트", () => {
  test.each([[""], ["   "]])("빈 문자열이면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([["123456"], ["1 2 3 4 5 6"]])("쉼표로 구분되지 않으면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1,2,3,4,5"], ["1,2,3,4,5,6,7"]])("6개가 아니면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([["1,2,3,a,5,6"], ["1,2,3,,5,6"]])("숫자가 아닌 값이 있으면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([["0,1,2,3,4,5"], ["1,2,3,4,5,46"]])("1~45 범위를 벗어나면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test("중복된 숫자가 있으면 예외가 발생한다", () => {
    expect(() => {
      InputParser.parseWinningNumbers("1,1,2,3,4,5");
    }).toThrow("[ERROR]");
  });

  test("유효한 당첨번호를 파싱할 수 있다", () => {
    expect(InputParser.parseWinningNumbers("1,2,3,4,5,6")).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("공백이 있어도 파싱할 수 있다", () => {
    expect(InputParser.parseWinningNumbers(" 1, 2, 3, 4, 5, 6 ")).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("InputParser - 보너스번호 파싱 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test.each([[""], ["   "]])("빈 문자열이면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseBonusNumber(input, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test.each([["a"], ["7b"]])("숫자가 아니면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseBonusNumber(input, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test.each([["0"], ["46"], ["-1"]])("1~45 범위를 벗어나면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseBonusNumber(input, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test.each([["1"], ["2"], ["6"]])("당첨번호와 중복되면 예외가 발생한다: '%s'", (input) => {
    expect(() => {
      InputParser.parseBonusNumber(input, winningNumbers);
    }).toThrow("[ERROR]");
  });

  test("유효한 보너스번호를 파싱할 수 있다", () => {
    expect(InputParser.parseBonusNumber("7", winningNumbers)).toBe(7);
  });
});
