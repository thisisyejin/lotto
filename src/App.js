import Game from "./Game.js";
import Score from "./Score.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    // 로또 구입
    const lottos = await Game.buyLotto()
    // 로또 출력
    OutputView.printLotto(lottos);

    // 당첨 & 보너스 번호 입력
    const winningNumbers = await Game.askWinningNumbers();
    const bonusNumber = await Game.askBonusNumber(winningNumbers);

    // 당첨 내역 확인
    const score = new Score(lottos, winningNumbers, bonusNumber);
    score.calculateProfit();

    // 당첨 내역 출력
    OutputView.printScore(lottos.length, score);
  }
}

export default App;
