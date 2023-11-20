type date = {
  year: string,
  month: string,
  day: string,
}

export type Media = {
  id: number,
  title: {
    romaji: string,
  },
  type: string,
  genres: [string],
  startDate: date,
  endDate: date,
  season: string,
  episodes: number | null,
  chapters: number | null,
  bannerImage: string,
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
  media: Media
}