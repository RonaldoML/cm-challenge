export type Date = {
  year: string,
  month: string,
  day: string,
}

type CoverImage = {
  large: string
}

export type Media = {
  id: number,
  title: {
    romaji: string,
  },
  type: string,
  genres: [string],
  startDate: Date,
  endDate: Date,
  season: string,
  episodes: number | null,
  chapters: number | null,
  coverImage: CoverImage,
  description: string,
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