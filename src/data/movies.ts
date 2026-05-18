import type { Movie } from '../types'

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    rating: 8.8,
    duration: 148,
    synopsis:
      'A skilled thief is offered a chance to have his past crimes forgiven if he can successfully perform inception — planting an idea into a target\'s subconscious.',
    poster: '🌀',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    genre: 'Drama',
    rating: 9.3,
    duration: 142,
    synopsis:
      'Two imprisoned men bond over years, finding solace and eventual redemption through acts of decency in the oppressive Shawshank State Penitentiary.',
    poster: '🔑',
  },
  {
    id: 3,
    title: 'Parasite',
    year: 2019,
    director: 'Bong Joon-ho',
    genre: 'Thriller',
    rating: 8.5,
    duration: 132,
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    poster: '🏚️',
  },
  {
    id: 4,
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    rating: 8.6,
    duration: 169,
    synopsis:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival as Earth faces environmental collapse.',
    poster: '🪐',
  },
  {
    id: 5,
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    genre: 'Action',
    rating: 9.0,
    duration: 152,
    synopsis:
      'Batman raises the stakes in his war on crime and faces the Joker, a criminal mastermind who seeks to plunge Gotham City into anarchy.',
    poster: '🦇',
  },
]

export const ALL_GENRES = ['All', ...Array.from(new Set(MOVIES.map(m => m.genre)))] as const
