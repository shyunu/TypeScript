// 타입 추론
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "수현",
    profile: {
        nickname: "shyunu",
    },
    urls: ["https://github.com/shyunu"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
function func(message = "hello") {
    return "hello";
}
// any타입의 진화 : 계속 바뀜
let d;
d = 10; // any → number
d.toFixed();
// d.toUpperCase();
d = "hello"; // any → string
d.toUpperCase();
// const는 상수이기 때문에 리터럴 타입으로 고정된다.
const num = 10;
const str = "hello";
let arr = [1, "string"];
export {};
