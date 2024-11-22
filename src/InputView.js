import { MissionUtils } from "@woowacourse/mission-utils"

const InputView = {
  async readNumber(askMessage) {
    const input = await MissionUtils.Console.readLineAsync(askMessage);
    this.isInteger(input);
    return Number(input);
  },

  isInteger(input) {
    if (input.trim().length <= 0) throw Error('[ERROR] 공백임');
    if (isNaN(input)) throw Error('[ERROR] 문자임');
    if (input.includes('.')) throw Error('[ERROR] 소수임');
  }
}

export default InputView;
