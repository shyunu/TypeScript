// 접근 제어자(access modifier)
// public / private / protected
class Employee {
  // 필드
  // private name: string; // 클래스 외부에서는 접근을 못하게 막고 클래스 내 메서드에서만 값을 쓰고자 할 때에는 private을 설정한다.
  // protected age: number;
  // public position: string; // 기본값: public

  // 생성자 
  // 필드가 입력된 상태에서 생성자에 접근제어자를 또 표시하면 중복된다.
  // 1. 필드에만 접근제어자를 설정한다.
  // 2. 필드를 아예 없애고 생성자에 접근제어자를 붙여서 표시한다. (필드의 값 자동 초기화도 가능)
  constructor(private name: string, protected age: number, public position: string) { 
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name; // private인 변수는 파생클래스에서조차 접근할 수 없다.
    this.age; // 만약 파생클래스에서의 접근은 허용하고자 한다면 protected 접근제어자를 붙여주면 된다.
  }
}

const employee = new Employee("수현", 27, "developer");
// employee.name = "shyunu";
// employee.age = 30;
employee.position = "frontend developer";
console.log(employee);
