// 대수타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.
// 1. 합집합 - Union 타입
// | 를 이용해서 추가할 수 있는 타입의 개수는 무한대이다.
let a;
a = 1;
a = "hello";
a = true;
let arr = [1, "hello", true];
// Dog타입 프로퍼티
let union1 = {
    name: "",
    color: "",
};
// Person타입 프로퍼티
let union2 = {
    name: "",
    language: "",
};
// Dog + Person 타입 합집합 프로퍼티
let union3 = {
    name: "",
    color: "",
    language: "",
};
// Dog + Person 타입 교집합 프로퍼티
// let union4: Union1 = {
//   name: "",
// };
// 2. 교집합 - Intersection 타입
let variable;
let intersection = {
    name: "",
    color: "",
    language: "",
};
export {};
