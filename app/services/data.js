import wsCall from '../utils/fetcher'

export function wsGetOffers() {
    // const data = { action: 'popular_books_week' }
    return wsCall('offers')
}

export function wsGetCategories() {
    // const data = { action: 'popular_books_week' }
    return wsCall('categories')
}
