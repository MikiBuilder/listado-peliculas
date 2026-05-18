import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MovieCard } from '../components/MovieCard'
import { MOVIES } from '../data/movies'

const inception = MOVIES.find(m => m.title === 'Inception')!

describe('MovieCard', () => {
  it('renders the movie title', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByText('Inception')).toBeInTheDocument()
  })

  it('renders director name', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByText(/Christopher Nolan/)).toBeInTheDocument()
  })

  it('renders the genre badge', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByText('Sci-Fi')).toBeInTheDocument()
  })

  it('renders the rating', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByText('8.8 / 10')).toBeInTheDocument()
  })

  it('renders synopsis text', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByText(/planting an idea/i)).toBeInTheDocument()
  })

  it('has accessible rating label', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByLabelText(/Rating: 8.8 out of 10/i)).toBeInTheDocument()
  })

  it('renders article element with correct test id', () => {
    render(<MovieCard movie={inception} />)
    expect(screen.getByTestId('movie-card').tagName).toBe('ARTICLE')
  })
})
