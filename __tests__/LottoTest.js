import ERROR_MESSAGE from "../src/constants/errorMessages";
import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.NUMBERS_ARE_NOT_SIX);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.NUMBERS_ARE_REPEATED);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("발행된 로또 번호와 당첨 번호를 비교하여 일치하는 개수를 반환한다.", () => {
    const A = new Lotto([1, 2, 3, 4, 5, 6]);
    const B = new Lotto([1, 2, 3, 14, 15, 16]);
    expect(A.compare(B)).toEqual(3);
  });

  test("발행된 로또 번호가 보너스 번호를 포함하면 true를 반환한다.", () => {
    const A = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 6;
    expect(A.include(bonusNumber)).toEqual(true);
  });

  test("발행된 로또 번호가 보너스 번호를 포함하지 않으면 false를 반환한다.", () => {
    const A = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 30;
    expect(A.include(bonusNumber)).toEqual(false);
  });
});
