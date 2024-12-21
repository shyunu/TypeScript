// javascript의 클래스
let studentA = {
  name: "수현",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부하자!");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

// 클래스 이름은 앞글자를 대문자로 쓰는 파스칼 표기법을 사용한다.
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부하자!");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 하였습니다.`);
  }
}

const studentDeveloper = new StudentDeveloper("수현", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 : 인스턴스
// Student 인스턴스1
// let studentB = new Student("수현", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
