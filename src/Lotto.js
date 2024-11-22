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
    numbers.forEach(number => {
      if (number < 1 || number > 45) throw Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
      if (numbers.indexOf(number) !== numbers.lastIndexOf(number))
        throw new Error('[ERROR] 로또 번호는 중복되지 않은 숫자 6개여야 합니다.');
    });
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }

  compare(winningLotto) {
    return this.#numbers.filter(number =>
      winningLotto.#numbers.includes(number)).length;
  }

  include(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
