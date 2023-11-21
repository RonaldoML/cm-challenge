export type Date = {
  year: string,
  month: string,
  day: string,
}

type CoverImage = {
  large: string
}

export type Season = "WINTER" | "SUMMER" | "SPRING" | "FALL" | undefined;

export type Media = {
  id: number,
  title: {
    romaji: string,
  },
  type: string,
  genres: [string],
  startDate: Date,
  endDate: Date,
  season: Season,
  episodes: number | null,
  chapters: number | null,
  coverImage: CoverImage,
  bannerImage: string,
  description: string,
  favorite: boolean,
};

export type Favorites = Media & {
  favorite: boolean,
};

export type PageInfo = {
  currentPage: number,
  hasNextPage: boolean,
  lastPage: number,
  perPage: number,
  total: number,
};

export type MediaResponse = {
  pageInfo: PageInfo,
  media: [Media],
}

export type DataState = {
  page: number,
  favorites: [Media] | null,
  media: MediaResponse | null,
  isLoading: false,
  isError: false,
}