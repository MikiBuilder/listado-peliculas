import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { MOVIES } from '../data/movies'

describe('App integration', () => {
  it('renders the site title', () => {
    render(<App />)
    expect(screen.getByText('CineList')).toBeInTheDocument()
  })

  it('renders all movies on load', () => {
    render(<App />)
    expect(screen.getAllByTestId('movie-card')).toHaveLength(MOVIES.length)
  })

  it('filters movies when user types in search', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/search by title or director/i)
    await user.type(input, 'Parasite')
    expect(screen.getAllByTestId('movie-card')).toHaveLength(1)
    expect(screen.getByText('Parasite')).toBeInTheDocument()
  })

  it('shows empty state when no results found', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/search by title or director/i)
    await user.type(input, 'zzznomatch')
    expect(screen.queryAllByTestId('movie-card')).toHaveLength(0)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('clears filters on reset button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText(/search by title or director/i)
    await user.type(input, 'Inception')
    expect(screen.getAllByTestId('movie-card')).toHaveLength(1)
    await user.click(screen.getByRole('button', { name: /reset filters/i }))
    expect(screen.getAllByTestId('movie-card')).toHaveLength(MOVIES.length)
  })
})
