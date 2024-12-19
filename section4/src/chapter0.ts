// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명한다. (자바스크립트)
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지 설명한다. (타입스크립트)
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
// 선택적 매개변수(?이 붙음) 뒤에 필수 매개변수가 오게 되면 에러가 발생한다.
// 모든 필수 매개변수는 선택적 매개변수 앞에 위치한다.
function introduce(name: "수현", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}
introduce("수현", 27, 173);
introduce("수현", 27);

function getSum(...rest: number[]) {
  //배열의 길이를 3으로 정하고 싶다면 [number, number, number]
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
