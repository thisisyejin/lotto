import Game from "../src/Game.js";

describe("로또 클래스 테스트", () => {
  test.each([
    ["금액이 천 원 미만이면 예외가 발생한다.", 900],
    ["금액이 천 원 단위가 아니면 예외가 발생한다.", 1500],
  ])("%s", (_, number) => {
    expect(() => {
      Game.isValidPayment(number);
    }).toThrow("[ERROR]");
  });
});
