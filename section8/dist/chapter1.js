// const key = "author";
// Post["author"]["id"]
function printAuthorInfo(author) {
    // index에는 타입만 들어올 수 있다. (존재하지 않는 프로퍼티도 안됨)
    console.log(`${author.name}-${author.id}`);
}
// const num = 0;
const post = {
    title: "게시글 제목",
    content: "게시글 본문 ",
    author: {
        id: 1,
        name: "수현",
        age: 27,
    },
};
printAuthorInfo(post.author);
export {};
