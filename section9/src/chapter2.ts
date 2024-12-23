// infer: 조건부 타입 내에서 특정 타입만 추론할 수 있는 기능
// inference(추론하다)의 약자
type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // 추론 불가능 → never

// 예제
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값을 반환해야한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PRomiseB = PromiseUnpack<Promise<string>>; // string
