export interface Movie {
  country: string
  director: string
  duration: number
  year: string
  description: string
  image: string
  trailerLink: string
  thumbnail: string
  movieId: number
  nameRU: string
  nameEN: string
  owner?: string
}

export interface MovieBeatFilm {
  id: number
  nameRU: string
  nameEN: string
  director: string
  country: string
  year: string
  duration: number
  description: string
  trailerLink: string
  created_at: string
  updated_at: string
  image: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      thumbnail: {
        hash: string
        ext: string
        mime: string
        width: number
        height: number
        size: number
        path: null
        url: string
      }
      small: {
        hash: string
        ext: string
        mime: string
        width: number
        height: number
        size: number
        path: null
        url: string
      }
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: null
    created_at: string
    updated_at: string
  }
}
