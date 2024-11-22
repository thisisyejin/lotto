import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import Lotto from "./Lotto.js";

class Game {
  static async buyLotto() {
    // TODO: 예외 처리 필요
    try {
      const payment = await InputView.readNumber('\n구입 금액을 입력해 주세요.\n');
      this.isValidPayment(payment);
      return Array.from({ length: payment / 1000 }, () =>
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)));

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.buyLotto();
    }
  }

  static isValidPayment(payment) {
    if (payment % 1000 !== 0) throw Error('[ERROR] 구입 금액은 천 원 단위로 입력해 주세요.');
    if (payment < 1000) throw Error('[ERROR] 구입 금액은 천 원 이상 입력해 주세요.');
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
      if (winningNumbers.include(bonusNumber)) throw Error('[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해 주세요.');
      if (bonusNumber < 1 || bonusNumber > 45) throw Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
      return bonusNumber;

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return this.askBonusNumber(winningNumbers);
    }
  }
}

export default Game;
