# 🎰 로또
우테코 프리코스 - 로또 발매기 구현 연습

## 객체 정의
### *Lotto*
로또 번호를 관리한다.   
   
**메서드 |**   
로또 번호가 유효한지 확인하고 발행한다. `validate()`, `constructor()`   
두 로또 번호가 서로 일치하는지 비교한다. `compare()`   
로또 번호에 보너스 번호가 포함되는지 확인한다. `include()`   

**속성 |**   
1부터 45 사이의 숫자 6개 `numbers`   

---
### *Game*
사용자로부터 요청을 받아 로또 게임의 한 회차를 진행한다.   
   
**메서드 |**   
입력받은 금액에 해당하는 수량만큼 로또를 발행한다. `buyLotto()`   
입력 받은 당첨 번호와 보너스 번호의 유효성을 검사하고, 유효하지 않을 시 재입력을 요청한다. `askWinningNumber()`, `askBonusNumber()`

---
### *Score*
로또 당첨 내역을 관리한다.

**메서드 |**   
로또 번호와 보너스 번호를 비교한 결과를 당첨 내역에 합산한다. `constructor()`   
수익과 수익률을 계산한다. `calculateProfitRate()`   

**속성 |**   
당첨 내역 `list`   
수익 `profit`

<br>

## 로또 발매기 프로세스
### 1. 사용자로부터 로또를 구입할 금액을 입력받는다.

금액은 로또의 가격인 `1000`원 단위여야 하며, 1개 이상 구입해야 한다.

유효한 금액이 아닌 경우, 예외 처리 후 다시 입력받는다.


### 2. 입력받은 금액에 해당하는 로또 수량만큼 로또를 발행한다.
로또 한 개는 `1`에서 `45` 사이의 중복되지 않은 정수 `6`개로 구성된다.   
발행한 로또는 오름차순으로 정렬한다.

### 3. 발행한 수량과 로또 번호를 출력한다.

### 4. 사용자로부터 당첨 번호와 보너스 번호를 입력받는다.

당첨 번호로 `1`에서 `45` 사이의 서로 중복되지 않은 숫자 6개를 입력받는다.   
유효한 입력이 아닌 경우, 예외 처리 후 다시 입력받는다.

### 5. 사용자가 구매한 로또와 당첨 번호를 비교한다.
당첨 기준에 따라, 각 로또가 3, 4, 5, 6개의 당첨 번호와 보너스 번호를 맞췄는지 확인한다.

### 6. 로또가 당첨 번호를 맞춘 만큼 상금과 이에 대한 수익률을 계산한다.
수익률은 `(당첨 금액) / (구입 금액)`이다.
수익률은 소수점 둘째 자리에서 반올림한다.

### 7. 당첨 내역과 수익률을 출력한다.
수익률은 천 단위를 콤마`,`로 구분한다.

<br>

## 예외 처리
### `구입 금액` 입력
- 정수가 아닌 값
- `1000` 미만의 수
- `1000`으로 나누어 떨어지지 않는 수

### `로또 번호` 입력
- 정수가 아닌 값
- `1`부터 `45` 범위 안에 있지 않은 숫자
- `6`개 / `1`개의 숫자가 입력되지 않았을 경우
- 한 로또 안에서 번호가 중복되는 경우
- 당첨 번호와 보너스 번호가 중복되는 경우