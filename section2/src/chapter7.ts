// void
// 아무것도 없음을 의미하는 타입

// 반환값 지정
function func1(): string {
  return "hello";
}

// 반환값 없을 때 void 사용 (undefined, null로 타입을 지정하면 안됨)
function func2(): void {
  console.log("hello");
}

// void로 지정된 값에는 undefined만 저장할 수 있다.
let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;
// a = null; //strictNullChecks가 false이면 null도 담을 수 있다.

// never
// 존재하지 않는 불가능한 타입 (반환값이 있는 것 자체가 모순일 때)
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let ab: never;


// never타입은 그 어떤 것도 담을 수 없다/
// ab = 1;
// ab = "hello";
// ab = {};
// ab = undefined;
// ab = null; 
// ab = anyVar;