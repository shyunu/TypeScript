// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
// }
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "shyunu",
    age: 27,
};
getPropertyKey(person, "name"); // shyunu
export {};
