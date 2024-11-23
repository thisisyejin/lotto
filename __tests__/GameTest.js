import ERROR_MESSAGE from "../src/constants/errorMessages.js";
import Game from "../src/Game.js";

describe("게임 클래스 테스트", () => {
  test.each([
    ["금액이 천 원 미만이면 예외가 발생한다.", 900, ERROR_MESSAGE.PAYMENT_IS_UNDER_PRICE],
    ["금액이 천 원 단위가 아니면 예외가 발생한다.", 1500, ERROR_MESSAGE.PAYMENT_IS_NOT_PRICE_PER_UNIT],
  ])("%s", (_, number, errorMessage) => {
    expect(() => {
      Game.isValidPayment(number);
    }).toThrow(errorMessage);
  });
});
