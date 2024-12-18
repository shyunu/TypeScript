// any
// 특저 변수의 타입을 확실하게 모를 때 사용합니다.
// typescript가 가진 장점을 포기하는 타입 → 최대한 사용하지 말자!
let anyVar = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// anyVar.toUpperCase();
// anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown
// 모든 값을 저장할 수는 있지만 반대로는 불가능하다. (any보다는 안전함)
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar;
// unknownVar.toUpperCase();
// 타입을 확실히 밝혀주었을 때에만 사용 가능하다 → 타입 정제
if (typeof unknownVar === 'number') {
    num = unknownVar;
}
export {};
