// 기본 타입간의 호환성
let num1 = 10;
let num2 = 10; //number리터럴 타입
num1 = num2;
let animal = {
    name: "호랑이",
    color: "orange",
};
let dog = {
    name: "별이",
    color: "brown",
    breed: "시츄",
};
animal = dog;
let book;
let programmingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "react.js",
};
book = programmingBook; // 업캐스팅
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js",
};
let book3 = programmingBook;
function func(book) { }
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js",
});
func(programmingBook);
export {};
