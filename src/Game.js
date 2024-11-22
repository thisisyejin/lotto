import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT, PRICE } from "./lottoRules.js";
import ERROR_MESSAGE from "./constants/errorMessages.js";
import InputView from "./views/InputView.js";
import Lotto from "./Lotto.js";

class Game {
  static async buyLotto() {
    try {
      const payment = await InputView.readNumber('\n구입 금액을 입력해 주세요.\n');
      this.isValidPayment(payment);
      return Array.from({ length: payment / PRICE }, () =>
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT).sort((a, b) => a - b)));

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.buyLotto();
    }
  }

  static isValidPayment(payment) {
    if (payment % PRICE !== 0) throw Error(ERROR_MESSAGE.PAYMENT_IS_NOT_PRICE_PER_UNIT);
    if (payment < PRICE) throw Error(ERROR_MESSAGE.PAYMENT_IS_UNDER_PRICE);
  }

  static async askWinningNumbers() {
    try {
      return await InputView.readLotto();

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askWinningNumbers();
    }
  }

  static async askBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readNumber('\n보너스 번호를 입력해 주세요.\n');
      if (winningNumbers.include(bonusNumber)) throw Error(ERROR_MESSAGE.BONUS_IS_REPEATED);
      if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) throw Error(ERROR_MESSAGE.NUMBER_IS_NOT_IN_RANGE);
      return bonusNumber;

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askBonusNumber(winningNumbers);
    }
  }
}

export default Game;
