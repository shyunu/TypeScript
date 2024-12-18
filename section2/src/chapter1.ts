// number (숫자 타입)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string (문자열 타입)
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1.toUpperCase(); // 대문자 변환
str2.toLowerCase(); // 소문자 변환
str3.trim(); // 공백 제거
str4.includes(str3); // 특정 문자열 포함 여부 확인

// boolean (불리언 타입)
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; //strictNullChecks옵션 false하면 가능

// 리터럴 타입
// 리터럴: 값
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
