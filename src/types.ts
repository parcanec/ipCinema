export interface IGenre {
  name: string;
  id: number;
}

export interface IItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFitler {
  value: number
  label: string
}

export interface IPagination {
  page: number
  pageCount: number
  setPage: (arg0: number) => void
}
