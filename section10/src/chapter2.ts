// Pick<T, K> : 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // => 'title' | content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "과거글",
  content: "과거 컨텐츠",
};

// Omit<T, K> : 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

// Post 타입으로부터 title 프로퍼티만 제거한 타입을 만든다.
// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {}
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<T, K> : 객체 타입을 만들어주는 유틸리티 타입
// 첫번째 타입 변수: 객체 프로퍼티의 키를 유니온으로 받는다.
// 두번째 타입 변수: 키의 value 값을 받는다.
// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

// K extends keyof any: 타입변수 K에 들어오는 타입은 어떤 객체 타입의 키를 추출해놓은 유니온 타입이라는 의미
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "smaill" | "watch", { url: string; size: number }>;
