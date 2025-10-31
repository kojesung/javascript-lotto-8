class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 검증 구현(숫자 범위, 중복)

  getNumbers() {
    return this.#numbers;
  }

  getSortedNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
