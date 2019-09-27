import wsCall from '../utils/fetcher'

export function wsGetPopularWeekBooks() {
    const data = { action: 'popular_books_week' }
    return wsCall(data)
}
