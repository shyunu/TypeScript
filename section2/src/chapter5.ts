// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입(타입스크립트에서만 사용)
// 컴파일 결과 enum은 사라지지 않고 자바스크립트의 객체가 된다.
enum Role {
  // 숫자형 enum
  // ADMIN = 0,
  // USER = 1,
  // GUEST = 2,

  //지정안하면 0부터 자동 할당됨
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  Korean = "ko",
  English = "en",
}

const user1 = {
  name: "수현",
  role: Role.ADMIN, // 0은 관리자
  language: Language.Korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1은 일반유저
  language: Language.English,
};

const user3 = {
  name: "강해린",
  role: Role.GUEST, // 2는 게스트
};

console.log(user1, user2, user3);
