import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`);
  },
}

export default OutputView;
