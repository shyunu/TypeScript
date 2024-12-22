// 제네릭

// 제네릭 함수 : 타입 변수와 함께 여러 타입의 값을 인수로 받아서 범용적으로 사용할 수 있는 함수
// 타입 변수에 할당되는 타입은 함수를 호출할 때 인수에 따라서 결정된다.

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}
let bool = func(true);
let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
