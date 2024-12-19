// 타입 별칭(타입 코드 중복)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// function func() {
//   type User = {};
// }

let user1: User = {
  id: 1,
  name: "수현",
  nickname: "shyunu",
  birth: "1998.09.30",
  bio: "김수현입니다!",
  location: "동대문구",
};

let user2: User = {
  id: 2,
  name: "해린",
  nickname: "haerin",
  birth: "2006.05.15",
  bio: "강해린입니다!",
  location: "동작구",
};

// 인덱스 시그니처 - 타입을 위반하지만 않으면 값이 없어도 괜찮다
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처를 사용하는 객체 타입에서 추가적인 property를 지정한다면
// 추가적인 property의 value타입이 반드시 인덱스 시그니처의 value의 타입과 동일하거나 호환되어야한다.
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; //Korea가 반드시 가지도록 객체 타입을 정의했음
  // Korea: string;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKingdom: 826,
};
