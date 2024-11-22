import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT, PRICE } from "./lottoRules.js";

const ERROR_MESSAGE = Object.freeze({
  INPUT_IS_STRING: '[ERROR] 문자는 입력할 수 없습니다.',
  INPUT_IS_BLANK: '[ERROR] 공백은 입력할 수 없습니다.',
  INPUT_IS_DECIMAL: '[ERROR] 소수는 입력할 수 없습니다.',

  PAYMENT_IS_UNDER_PRICE: `[ERROR] 구입 금액은 ${PRICE}원 이상 입력해 주세요.`,
  PAYMENT_IS_NOT_PRICE_PER_UNIT: `[ERROR] 구입 금액은 ${PRICE}원 단위로 입력해 주세요.`,

  NUMBERS_ARE_NOT_SIX: `[ERROR] 로또 번호는 ${NUMBER_COUNT}개여야 합니다.`,
  NUMBERS_ARE_REPEATED: `[ERROR] 로또 번호는 중복되지 않은 숫자 ${NUMBER_COUNT}개여야 합니다.`,
  NUMBER_IS_NOT_IN_RANGE: `[ERROR] 로또 번호는 ${MIN_NUMBER}에서 ${MAX_NUMBER} 사이의 숫자여야 합니다.`,
  BONUS_IS_REPEATED: '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해 주세요.',

});

export default ERROR_MESSAGE;
