import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`);
  },

  printScore(quantity, score) {
    const list = score.list;
    MissionUtils.Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${list.three}개
4개 일치 (50,000원) - ${list.four}개
5개 일치 (1,500,000원) - ${list.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${list.fiveBonus}개
6개 일치 (2,000,000,000원) - ${list.six}개
총 수익률은 ${score.calculateProfitRate(quantity)}%입니다.`);
  },
}

export default OutputView;
