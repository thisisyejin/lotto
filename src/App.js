import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Game from "./Game.js";
import Score from "./Score.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    const lottos = await Game.askPayment();

    // 로또 번호 출력
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => OutputView.printLotto(lotto));

    const winningNumbers = await Game.askWinningNumbers();
    const bonusNumber = await Game.askBonusNumber(winningNumbers);

    // 점수 비교
    const score = new Score(lottos, winningNumbers, bonusNumber);
    score.calculateProfit();

    // 상금 계산
    OutputView.printScore(lottos.length, score);
  }
}

export default App;
