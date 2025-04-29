import api from '../axios'

// Movie type (customize as needed)
export type Movies = {
    _id: string
    title: string
    description?: string
    genre?: string[]
    rating?: number
    year?: number
    director?: string
    cast?: string[]
    // Add any additional fields from your schema
}

// Pagination input and response types
export type PaginationParams = {
    page: number
    limit: number
}

export type PaginatedResponse<T> = {
    data: T[]
    currentPage: number,
    totalPages: number,
    remainingPages: number,
    totalItems: number,
    itemsPerPage: number,
    hasMore: boolean,
    sort: boolean
}

// 1. Get all movies
export const getAllMovies = async (
    params: PaginationParams
): Promise<PaginatedResponse<Movies>> => {
    const res = await api.get('/movies', { params })
    return res.data
}

// 2. Filter movies by column + value (supports arrays, strings, numbers)
export const filterMovies = async (
    column: string,
    value: string,
    params: PaginationParams
): Promise<PaginatedResponse<Movies>> => {
    const res = await api.get('/movies/filter', {
        params: { column, value, ...params }
    })
    return res.data
}

// 3. Search movies by title
export const searchMovies = async (
    title: string,
    params: PaginationParams
): Promise<PaginatedResponse<Movies>> => {
    const res = await api.get('/movies/search', {
        params: { title, ...params }
    })
    return res.data
}

// 4. Get movies by year
export const getMoviesByYear = async (
    year: number,
    params: PaginationParams
): Promise<PaginatedResponse<Movies>> => {
    const res = await api.get(`/movies/year/${year}`, { params })
    return res.data
}

// 5. Get top-rated movies
export const getTopRatedMovies = async (
    params: PaginationParams
): Promise<PaginatedResponse<Movies>> => {
    const res = await api.get('/movies/top-rated', { params })
    return res.data
}
