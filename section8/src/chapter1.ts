// 인덱스드 엑세스 타입
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    // location: string;
  };
}[];

// const key = "author";

// Post["author"]["id"]
function printAuthorInfo(author: PostList[number]["author"]) {
  // index에는 타입만 들어올 수 있다. (존재하지 않는 프로퍼티도 안됨)
  console.log(`${author.name}-${author.id}`);
}

// const num = 0;

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문 ",
  author: {
    id: 1,
    name: "수현",
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // 존재하지 않는 인덱스의 타입을 추출하려고 하면 오류가 발생한다.
type TupNum = Tup[number]; // 세 타입의 유니온 타입으로 추출한다.
