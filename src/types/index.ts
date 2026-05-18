export type Genre = 'Drama' | 'Sci-Fi' | 'Thriller' | 'Comedy' | 'Action' | 'Romance'

export interface Movie {
  id: number
  title: string
  year: number
  director: string
  genre: Genre
  rating: number     // 0–10
  duration: number   // minutes
  synopsis: string
  poster: string     // emoji used as placeholder
}

export type SortKey = 'title' | 'year' | 'rating'
export type SortOrder = 'asc' | 'desc'

export interface FilterState {
  query: string
  genre: Genre | 'All'
  sortKey: SortKey
  sortOrder: SortOrder
}
