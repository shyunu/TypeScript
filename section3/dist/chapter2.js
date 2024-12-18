// unknown 타입 (전체집합)
function unknownExam() {
    // 모든 타입이 업캐스팅할 수 있기 때문에 모든 값을 저장할 수 있다.
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    // unknown타입의 변수는 어떤 타입에도 저장될 수 없다. (다운캐스팅 불가능)
    let unknownVar;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}
// never 타입 : 공집합
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    // never는 모든 타입의 서브타입이기 때문에 업캐스팅 가능하다.
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // 숫자, 문자열, 불리언은 never로 다운캐스팅 불가능하다.
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}
// void 타입
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined;
    }
    let voidVar = undefined;
}
// any 타입 : 타입계층도를 완전히 무시한다.
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    //다운캐스팅이지만 허용됨 (any한정)
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; //다운캐스팅이지만 불가능
}
export {};
