import InputView from "../InputView.js";

describe("로또 클래스 테스트", () => {
  test.each([
    ["입력이 공백이면 예외가 발생한다.", "        "],
    ["입력이 숫자가 아니면 예외가 발생한다.", "One"],
    ["입력이 소수이면 예외가 발생한다.", "1234.567"],
  ])("%s", (_, input) => {
    expect(() => {
      InputView.isInteger(input);
    }).toThrow("[ERROR]");
  });
});
