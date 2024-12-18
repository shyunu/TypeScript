// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "shyunu"];

let boolArr: Array<boolean> = [true, false, true]; //제네릭문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플타입(타입스크립트에서만 사용)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["김수현", 1],
  ["김하나", 2],
  ["김둘", 3],
  ["김셋", 4],
  // [5, "김다섯"]
];
