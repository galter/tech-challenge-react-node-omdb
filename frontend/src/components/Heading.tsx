import { useState } from 'react'

import { useMovies } from '../contexts/MoviesContext'

const MOVIE_TYPES = ['movie', 'series', 'episode']

const Heading = () => {
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [year, setYear] = useState<string>('')

  const { fetchMovies, isLoading } = useMovies()

  const handleFecthMovie = () => {
    if (title || type || year) {
      fetchMovies(title, type, year)
    } else {
      alert('Select at least one option to search movies or series!')
    }
  }

	return (
    <div className="w-full p-10 bg-slate-900 h-50">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-100">Tech challenge</h1>
        <p className="text-lg text-slate-100">Cicero Oliveira - OMDB API Task ReactJS+NodeJS+Redis</p>

        <div className="w-1/2 mt-4 flex flex-row items-center justify-center">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Search here your title'
            className='m-2 w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option key={-1}>Select a Type</option>
            {MOVIE_TYPES.map((el, index) => (
              <option key={index}>{el}</option>
              ))}
          </select>

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max="2099"
            step="1"
            placeholder="2023"
            className='m-2 min-w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <button 
          className="mt-4 px-6 py-2 text-center text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-800"
          onClick={handleFecthMovie}
        >
          {isLoading ? "Loading..." : "Search movie"}
        </button>
      </div>
    </div>
	)
}

export default Heading