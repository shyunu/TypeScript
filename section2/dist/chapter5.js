// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입(타입스크립트에서만 사용)
// 컴파일 결과 enum은 사라지지 않고 자바스크립트의 객체가 된다.
var Role;
(function (Role) {
    // 숫자형 enum
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2,
    //지정안하면 0부터 자동 할당됨
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
})(Language || (Language = {}));
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
export {};
