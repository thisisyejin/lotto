import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let money = await MissionUtils.Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    // 1000으로 나누어 떨어지지 않을 때, 1000 미만일 때 예외 처리
    let count = Number(money) / 1000;
    // count개 만큼 로또 발매

    // 로또 번호 발행
    let lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }

    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach(lotto => MissionUtils.Console.print(`[${lotto.join(', ')}]`));

    let winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
    winningNumbers = winningNumbers.split(',').map(number => Number(number));
    // 6개가 아닐 때, 로또 숫자가 아닐 때, 중복될 때 예외 처리

    let bonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
    bonusNumber = Number(bonusNumber);

    // 점수 비교
    let benefit = 0;
    let score = {
      six: 0, five: 0, fiveBonus: 0, four: 0, three: 0,
    }
    for (let i = 0; i < count; i++) { // 로또 수량만큼 비교
      // 이 안에 정답 요소가 몇 개나 있는지?
      let cnt = 0;
      let isBonus = false;
      for (let j = 0; j < 6; j++) {
        if (lottos[i].includes(winningNumbers[j])) cnt++;
      }
      if (lottos[i].includes(bonusNumber)) isBonus = true;

      if (cnt == 6) score.six++;
      else if (cnt == 5 && isBonus == true) score.fiveBonus++;
      else if (cnt == 5) score.five++;
      else if (cnt == 4) score.four++;
      else if (cnt == 3) score.three++;
    }

    // 상금 계산
    benefit = score.six * 2000000000 + score.fiveBonus * 30000000 + score.five * 1500000 + score.four * 50000 + score.three * 5000;
    const benefitRate = (benefit / money * 100).toFixed(1);
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
