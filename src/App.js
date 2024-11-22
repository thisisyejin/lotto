import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Game from "./Game.js";
import Score from "./Score.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    const quantity = await Game.askPayment();

    // 로또 번호 발행
    const lottos = Array.from({ length: quantity }, () =>
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)));

    // 로또 번호 출력
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
    lottos.forEach(lotto => OutputView.printLotto(lotto));

    const winningNumbers = await Game.askWinningNumbers();
    const bonusNumber = await Game.askBonusNumber(winningNumbers);

    // 점수 비교
    const score = new Score(lottos, winningNumbers, bonusNumber);
    score.calculateProfit();

    // 상금 계산
    OutputView.printScore(quantity, score);
  }
}

export default App;
