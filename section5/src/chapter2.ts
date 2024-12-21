// 선언 합치기
// 동일한 이름으로 정의한 인터페이스들은 결국 합쳐진다.
interface Person {
  name: string;
}

interface Person {
  // name: number; // 타입 충돌 : 타입 다르게 정의
  // name: "hello"; // 타입합치기의 경우에는 서브타입도 안되고 완전히 동일해야 선언 가능하다.
  age: number;
}

interface Developer extends Person {
  // 확장을 할 떄 타입이 서브타입이어도 선언 가능하다.
  name: "hello";
}

const person: Person = {
  name: "shyunu",
  age: 27,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
