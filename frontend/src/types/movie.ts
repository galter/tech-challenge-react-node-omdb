export type Movie = {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Ratings[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD:string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: boolean
}

type Ratings = {
  Source: string,
  Value: string
}

export type MovieThumb = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

type MoviesList = {
  Search: MovieThumb[] 
  totalResults: string
  Response: boolean
}

export default MoviesList