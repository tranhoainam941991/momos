export type MovieSummary = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type MovieGenre = {
  id: number,
  name: string
}

export type MovieCollection = {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}

export type MovieProdCompany = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}
export type MovieProdCountry = {
  iso_3166_1: string,
  name: string,
}
export type MovieSpokenLanguage = {
  english_name: string,
  iso_639_1: string,
  name: string,
}

export type MovieDetail = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: MovieCollection,
  budget: number,
  genres: MovieGenre[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: MovieProdCompany[],
  production_countries: MovieProdCountry[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: MovieSpokenLanguage[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}