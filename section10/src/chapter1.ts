// Partial<T> : 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목은 미정",
  content: "초안...",
};

// Required<T> : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
// thumbnailURL 같은 선택적 프로퍼티도 필수 프로퍼티로 바꿔준다.
// -?를 붙여준다.
type Required<T> = {
  [key in keyof T]-?: T[key];
};
const withThumbnailPost: Required<Post> = {
  title: "타입스크립트 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// Readonly<T> : 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = ""; // 수정불가
