import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useMovies } from '../hooks/useMovies'
import { MOVIES } from '../data/movies'

describe('useMovies', () => {
  it('returns all movies by default', () => {
    const { result } = renderHook(() => useMovies())
    expect(result.current.movies).toHaveLength(MOVIES.length)
  })

  it('filters movies by title query', () => {
    const { result } = renderHook(() => useMovies())
    act(() => result.current.setQuery('inception'))
    expect(result.current.movies).toHaveLength(1)
    expect(result.current.movies[0].title).toBe('Inception')
  })

  it('filters movies by director', () => {
    const { result } = renderHook(() => useMovies())
    act(() => result.current.setQuery('Nolan'))
    expect(result.current.movies.every(m => m.director.includes('Nolan'))).toBe(true)
  })

  it('filters by genre', () => {
    const { result } = renderHook(() => useMovies())
    act(() => result.current.setGenre('Sci-Fi'))
    expect(result.current.movies.every(m => m.genre === 'Sci-Fi')).toBe(true)
  })

  it('returns empty array when no movies match', () => {
    const { result } = renderHook(() => useMovies())
    act(() => result.current.setQuery('xyzxyz_nonexistent'))
    expect(result.current.movies).toHaveLength(0)
  })

  it('sorts by rating descending by default', () => {
    const { result } = renderHook(() => useMovies())
    const ratings = result.current.movies.map(m => m.rating)
    expect(ratings).toEqual([...ratings].sort((a, b) => b - a))
  })

  it('toggles sort order when same key is selected again', () => {
    const { result } = renderHook(() => useMovies())
    act(() => result.current.setSortKey('rating')) // already 'rating', so toggles to asc
    expect(result.current.filters.sortOrder).toBe('asc')
  })

  it('resets all filters', () => {
    const { result } = renderHook(() => useMovies())
    act(() => {
      result.current.setQuery('inception')
      result.current.setGenre('Sci-Fi')
    })
    act(() => result.current.reset())
    expect(result.current.filters.query).toBe('')
    expect(result.current.filters.genre).toBe('All')
    expect(result.current.movies).toHaveLength(MOVIES.length)
  })
})
