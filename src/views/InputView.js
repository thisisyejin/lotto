import { MissionUtils } from "@woowacourse/mission-utils"
import Lotto from "../Lotto.js";
import ERROR_MESSAGE from "../constants/errorMessages.js";

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
    if (input.trim().length <= 0) throw Error(ERROR_MESSAGE.INPUT_IS_BLANK);
    if (isNaN(input)) throw Error(ERROR_MESSAGE.INPUT_IS_STRING);
    if (input.includes('.')) throw Error(ERROR_MESSAGE.INPUT_IS_DECIMAL);
  }
}

export default InputView;
