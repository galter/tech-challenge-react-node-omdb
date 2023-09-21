import { useMovies } from '../contexts/MoviesContext'

type MovieModalProps = {
  isOpen: boolean
  onClose: () => void
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onClose }) => {
  const { movie, isLoadingModal } = useMovies()

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={onClose}
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom min-w-max bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {isLoadingModal && <div className="flex p-10 justify-center items-center">Loading movie...</div>}

              {!isLoadingModal && <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 min-w-max">
                <h2 className="text-lg leading-6 font-medium text-gray-900 mb-3 capitalize" id="modal-headline">
                  {movie?.Type}
                </h2>


                <div className='flex min-w-max'>
                  <div className='min-h-max min-w-max'>
                    <img src={movie?.Poster} alt={movie?.Title} className='rounded-t-md min-h-max min-w-max' />
                  </div>

                  <div className="flex flex-col gap-1 pt-2 pb-6 px-6">
                    <h2 className="flex justify-start font-bold">
                      {movie?.Title}
                    </h2>
                    <p className="flex justify-start text-xs capitalize"> {movie?.Type}</p>
                    <p className="flex justify-start text-xs"> Year: {movie?.Year}</p>
                    <p className="flex justify-start text-xs"> Rated: {movie?.Rated}</p>
                    <p className="flex justify-start text-xs"> Released: {movie?.Released}</p>
                    <p className="flex justify-start text-xs"> Runtime: {movie?.Runtime}</p>
                    <p className="flex justify-start text-xs"> Genre: {movie?.Genre}</p>
                    <p className="flex justify-start text-xs"> Director: {movie?.Director}</p>
                    <p className="flex justify-start text-xs"> Writer: {movie?.Writer}</p>
                    <p className="flex justify-start text-xs"> Actors: {movie?.Actors}</p>
                    <p className="flex justify-start text-xs"> Plot: {movie?.Plot}</p>
                    <p className="flex justify-start text-xs"> Language: {movie?.Language}</p>
                    <p className="flex justify-start text-xs"> Country: {movie?.Country}</p>
                    <p className="flex justify-start text-xs"> Awards: {movie?.Awards}</p>
                    {movie?.Ratings.map((rate, index) => (
                      <div key={index}>
                        <p className="flex justify-start text-xs"> Source: {rate.Source}</p>
                        <p className="flex justify-start text-xs"> Value: {rate.Value}</p>
                      </div>
                    ))}
                    <p className="flex justify-start text-xs"> Metascore: {movie?.Metascore}</p>
                    <p className="flex justify-start text-xs"> imdbRating: {movie?.imdbRating}</p>
                    <p className="flex justify-start text-xs"> imdbVotes: {movie?.imdbVotes}</p>
                    <p className="flex justify-start text-xs"> imdbID: {movie?.imdbID}</p>
                    <p className="flex justify-start text-xs"> Type: {movie?.Type}</p>
                    <p className="flex justify-start text-xs"> DVD: {movie?.DVD}</p>
                    <p className="flex justify-start text-xs"> BoxOffice: {movie?.BoxOffice}</p>
                    <p className="flex justify-start text-xs"> Production: {movie?.Production}</p>
                    <p className="flex justify-start text-xs"> Website: {movie?.Website}</p>
                  </div>
                </div>
              </div>}

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieModal