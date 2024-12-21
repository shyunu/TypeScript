// 인터페이스
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "shyunu",
  // age: 27,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "shyunu";
person.sayHi();
person.sayHi(1, 2);
