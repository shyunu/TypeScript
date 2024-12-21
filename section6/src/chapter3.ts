// interface & class
interface CharacterInterface {
  // interface는 무조건 public 필드만 정의할 수 있다.
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // name: string;
  // moveSpeed: number;

  constructor(public name: string, public moveSpeed: number, private extra: string) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
