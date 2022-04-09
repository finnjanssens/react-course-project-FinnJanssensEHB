export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  subreddit: string;
  created: number;
  score: number;
}

export interface PostsState {
  loading: boolean;
  error: string;
  list: Post[];
}

export const initialState = {
  loading: false,
  error: "",
  list: [],
};