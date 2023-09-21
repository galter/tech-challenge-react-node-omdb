import { ReactNode, createContext, useContext, useState } from 'react'

import { api } from '../services/api'

import MoviesList, { Movie } from '../types/movie'
import { AxiosError } from 'axios'

type MovieContextData = {
  fetchMovies: (title:string, type: string, year: string) => Promise<void>
  fetchMovie: (id:string) => Promise<void>
  movies: MoviesList | null
  movie: Movie | undefined
  isLoading: boolean
  isLoadingModal: boolean
}

type MovieProviderProps = {
  children: ReactNode
}

export const MoviesContext = createContext({} as MovieContextData)

export function MoviesProvider({children}: MovieProviderProps) {
  const [movies, setMovies] = useState<MoviesList | null>(null)
  const [movie, setMovie] = useState<Movie>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false)

  async function fetchMovies(title:string, resultType: string, year: string) {
    setIsLoading(true)

    try {
      const response = await api.get('movies', {
        params: {
          title,
          year,
          resultType
        }
      })

      setMovies(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.message)
      } 
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchMovie(id: string) {
    setIsLoadingModal(true)

    try {
      const response = await api.get(`movies/${id}`)

      setMovie(response.data)
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.message)
      } 
    } finally {
      setIsLoadingModal(false)
    }
  }

  return (
    <MoviesContext.Provider value={{ movies, movie, fetchMovies, fetchMovie, isLoading, isLoadingModal }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => useContext(MoviesContext)