// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "수현";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "별이",
  color: "brown",
  breed: "시츄",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 (단언식)
// A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 한다.
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

// const 단언 : let을 const로 선언한 것과 같은 효과를 준다.
let num4 = 10 as const;

let cat = {
  name: "깜둥이",
  color: "black",
} as const;

// cat.name = "나비";

// Non Null 단언 (!)
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "수현",
};
const len: number = post.author!.length;
