import { createStore } from "redux";
import { FILTERS, genres, items, YEARS } from "../data";
import { IFitler, IGenre, IItem } from "../types";

interface IInitialState {
  movie: IItem[];
  genres: IGenre[];
  filters: IFitler[];
  years: number[];
  currentYear: number;
}

const initialState: IInitialState = {
  movie: items,
  genres,
  filters: FILTERS,
  years: YEARS,
  currentYear: YEARS[0],
};

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
