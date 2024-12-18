// 대수타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 - Union 타입
// | 를 이용해서 추가할 수 있는 타입의 개수는 무한대이다.
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// 타입 별칭으로도 유니온 타입을 만들 수 있다.
type Union1 = Dog | Person;

// Dog타입 프로퍼티
let union1: Union1 = {
  name: "",
  color: "",
};

// Person타입 프로퍼티
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog + Person 타입 합집합 프로퍼티
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// Dog + Person 타입 교집합 프로퍼티
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 - Intersection 타입
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
