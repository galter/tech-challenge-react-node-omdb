import { useState } from 'react'
import { useMovies } from '../contexts/MoviesContext'

import MovieCard from './MovieCard'
import MovieModal from './MovieModal'

import { MovieThumb } from '../types/movie'

const MoviesList = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const { movies, isLoading } = useMovies()
  
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(prev => !prev)
  }

  if (!movies || !movies.Search) {
    return <div className="flex p-10 justify-center items-center">No movies data available.</div>
  }

  if (isLoading) {
    return <div className="flex p-10 justify-center items-center">Loading movies...</div>
  }

  if (movies) {
    const allMovies = Object.values(movies.Search)

    // Sort by Title
    const sortedMovies = allMovies.sort((a: MovieThumb, b: MovieThumb) => {
      return a.Title.localeCompare(b.Title)
    })

    return (
      <div className="flex p-10 items-center justify-center">
        <div className="grid grid-cols-3 gap-8">
          {sortedMovies.map((movie: MovieThumb) => (
            <MovieCard key={movie.imdbID} movie={movie} onOpen={openModal} />
          ))}
        </div>

        <MovieModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  }
}

export default MoviesList