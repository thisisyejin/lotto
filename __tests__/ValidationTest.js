import InputView from "../src/views/InputView.js";
import ERROR_MESSAGE from "../src/constants/errorMessages.js";

describe("유효성 검사 테스트", () => {
  test.each([
    ["입력이 공백이면 예외가 발생한다.", "         ", ERROR_MESSAGE.INPUT_IS_BLANK],
    ["입력이 숫자가 아니면 예외가 발생한다.", "One", ERROR_MESSAGE.INPUT_IS_STRING],
    ["입력이 소수이면 예외가 발생한다.", "1234.56", ERROR_MESSAGE.INPUT_IS_DECIMAL],
  ])("%s", (_, input, errorMessage) => {
    expect(() => {
      InputView.isInteger(input);
    }).toThrow(errorMessage);
  });
});
