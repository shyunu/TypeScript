// object
// {} : 객체 리터럴 타입, 구조적 타입 시스템(Property Based TS)
// ?: 있어도 되고 없어도 된다는 선택적 Property(Optional Property)
let user = {
    id: 1,
    name: "shyunu",
};
/*
let dog: {
  name: string;
  color: string;
} = {
  name: "별이",
  color: "brown",
};
*/
/*
user = {
  name: "홍길동",
}
*/
// 값이 절대 수정되어서는 안되는 변수가 있다면 readonly(읽기전용)를 붙혀준다.
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked";
