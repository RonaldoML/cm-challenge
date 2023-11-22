export const mediaQuery = `
query ($page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
      id
      title {
        romaji
        romaji
        native
      }
      type
      genres
      startDate {
        year,
        month,
        day,
      }
      endDate {
        year,
        month,
        day,
      }
      season
      episodes
      chapters
      coverImage {
        large
        color
      }
      bannerImage
      description 
    }
  }
}
`;