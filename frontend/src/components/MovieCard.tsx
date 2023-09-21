import { useMovies } from '../contexts/MoviesContext'
import { MovieThumb } from '../types/movie'


type MovieCardProps = {
  movie: MovieThumb
  onOpen: () =>  void
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onOpen }) => {
  const { fetchMovie } = useMovies()

  const handleMovieSelection = async (id: string) => {
    fetchMovie(id)

    onOpen()
  }

  const { imdbID } = movie

	return (
    <div
      className="flex flex-col gap-4 bg-slate-100 cursor-pointer rounded-md"
      onClick={() => handleMovieSelection(imdbID)}
    >
      <img src={movie.Poster} alt={movie.Title} className='rounded-t-md' />
      <div className="flex flex-col gap-1 pt-2 pb-6 px-6">
        <h2 className="flex justify-start font-bold">
          {movie.Title}
        </h2>
        <p className="flex justify-start text-xs capitalize"> {movie.Type}</p>
        <p className="flex justify-start text-xs"> imdbID: {imdbID}</p>
        <p className="flex justify-start text-xs"> YEAR: {movie.Year}</p>
      </div>
    </div>
	)
}

export default MovieCard