import ERROR_MESSAGE from "./constants/errorMessages.js";
import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } from "./constants/lottoRules.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NUMBERS_ARE_NOT_SIX);
    }
    numbers.forEach(number => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) throw Error(ERROR_MESSAGE.NUMBER_IS_NOT_IN_RANGE);
      if (numbers.indexOf(number) !== numbers.lastIndexOf(number))
        throw new Error(ERROR_MESSAGE.NUMBERS_ARE_REPEATED);
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
