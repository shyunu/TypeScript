// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10; //number리터럴 타입

num1 = num2;

// 객체 타입간의 호환성
// 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮을까?
// 추가프로퍼티가 없고 조건이 더 적은 타입 : 슈퍼타입
// 추가프로퍼티가 있고 조건이 더 많은 타입 : 서브타입

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "호랑이",
  color: "orange",
};

let dog: Dog = {
  name: "별이",
  color: "brown",
  breed: "시츄",
};

animal = dog;
// dog = animal;

// type Book = {
//   name: string;
//   price: number;
// };

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

book = programmingBook; // 업캐스팅
// programmingBook = book;

// 초과프로퍼티 검사 : 객체 타입에 정의된 프로퍼티만 넣을 수 있도록 한다. (초과프로퍼티가 작성되지 않도록 검사함)

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "react.js",
});
func(programmingBook);
