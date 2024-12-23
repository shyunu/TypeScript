// 1명의 유저 정보를 불러오는 기능
function fetchUser() {
    return {
        id: 1,
        name: "shyunu",
        age: 27,
    };
}
const user = fetchUser();
// user.id = 1;
// 1명의 유저 정보를 수정하는 기능
function updateUser(user) {
    // 수정기능
}
updateUser({
    // id: 1,
    // name: "shyunu",
    age: 25,
});
export {};
