import { MissionUtils } from "@woowacourse/mission-utils"
import Lotto from "./Lotto.js";

const InputView = {
  async readNumber(askMessage) {
    const input = await MissionUtils.Console.readLineAsync(askMessage);
    this.isInteger(input);
    return Number(input);
  },

  async readLotto() {
    const input = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return new Lotto(input.split(',').map(number => {
      this.isInteger(number);
      return Number(number);
    }));
  },

  isInteger(input) {
    if (input.trim().length <= 0) throw Error('[ERROR] 공백은 입력할 수 없습니다.');
    if (isNaN(input)) throw Error('[ERROR] 문자는 입력할 수 없습니다.');
    if (input.includes('.')) throw Error('[ERROR] 소수는 입력할 수 없습니다.');
  }
}

export default InputView;
