import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Game from "./Game.js";

class App {
  async run() {
    const quantity = await Game.askPayment();

    // 로또 번호 발행
    const lottos = Array.from({ length: quantity }, () =>
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)));

    // 로또 번호 출력
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
    lottos.forEach(lotto => lotto.print());

    const winningNumbers = await Game.askWinningNumbers();
    const bonusNumber = await Game.askBonusNumber();

    // 점수 비교
    let benefit = 0;
    let score = {
      six: 0, five: 0, fiveBonus: 0, four: 0, three: 0,
    }
    for (let i = 0; i < quantity; i++) { // 로또 수량만큼 비교
      // 이 안에 정답 요소가 몇 개나 있는지?
      const cnt = lottos[i].compare(winningNumbers);
      const isBonus = lottos[i].include(bonusNumber);

      if (cnt == 6) score.six++;
      else if (cnt == 5 && isBonus == true) score.fiveBonus++;
      else if (cnt == 5) score.five++;
      else if (cnt == 4) score.four++;
      else if (cnt == 3) score.three++;
    }

    // 상금 계산
    benefit = score.six * 2000000000 + score.fiveBonus * 30000000 + score.five * 1500000 + score.four * 50000 + score.three * 5000;
    const benefitRate = (benefit / (quantity * 1000) * 100).toFixed(1);
    MissionUtils.Console.print(`당첨 통계
---
3개 일치 (5,000원) - ${score.three}개
4개 일치 (50,000원) - ${score.four}개
5개 일치 (1,500,000원) - ${score.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${score.fiveBonus}개
6개 일치 (2,000,000,000원) - ${score.six}개
총 수익률은 ${benefitRate}%입니다.`)

  }
}

export default App;
