import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import Lotto from "./Lotto.js";

class Game {
  // quantity;
  // lottos;
  // winningNumbers;
  // bonusNumber;
  // result;

  static async askPayment() {
    // TODO: 예외 처리 필요
    try {
      const payment = await InputView.readNumber('구입 금액을 입력해 주세요.\n');
      this.isValidPayment(payment);
      return payment / 1000;

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askPayment();
    }
  }

  static isValidPayment(payment) {
    if (payment % 1000 !== 0) throw Error('[ERROR] 천 원 단위가 아님');
    if (payment < 1000) throw Error('[ERROR] 천 원 미만임');
  }

  static async askWinningNumbers() {
    try {
      const winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
      return new Lotto(winningNumbers.split(',').map(number => Number(number)));

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askWinningNumbers();
    }
  }

  static async askBonusNumber() {
    try {
      return await InputView.readNumber('\n보너스 번호를 입력해주세요.\n');

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askBonusNumber();
    }
  }
}

export default Game;
