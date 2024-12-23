// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;
// 조건부타입이 분산적으로 작동하지 않게 하기 위해서는 extends의 양쪽 타입에 대괄호[]를 씌워준다.
// 유니온타입을 전달해도 분산이 되지 않는다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;


let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<string>; // number

// StringNumberSwitch<number> | StringNumberSwitch<string>
// => string | number (같은결과)
let c: StringNumberSwitch<number | string>;

// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>
// number | string | number
// => number | string (중복값은 제거)
let d: StringNumberSwitch<boolean | number | string>;

// 실용적인 예제
// 1. 특정 유니온 타입으로부터 특정 타입만 제거한 유니온 타입을 추출하는 경우
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계)
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>
// 2단계)
// number | never | boolean
// 결과) 유니온 타입에 never 타입이 포함되어 있으면 never는 사라진다.
// number | boolean

// 2. 특정 유니온 타입으로부터 특정 타입만을 추출하는 경우
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계)
// Extract<number, string> | Extract<string, string> | Extract<boolean, string>
// 2단계)
// never | string | never
// 결과)
// string