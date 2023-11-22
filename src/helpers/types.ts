export type Date = {
  year: string,
  month: string,
  day: string,
}

type CoverImage = {
  large: string
}

export type Season = "WINTER" | "SUMMER" | "SPRING" | "FALL" | undefined;
export type Type = "MANGA" | "ANIME";

export type Media = {
  id: number,
  title: {
    romaji: string,
  },
  type: Type,
  genres: [string],
  startDate: Date,
  endDate: Date,
  season: Season,
  episodes: number | null,
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
  favorites: [Media] | null,
  response: MediaResponse | null,
}