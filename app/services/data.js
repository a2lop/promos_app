import wsCall from '../utils/fetcher'

export function wsGetOffers() {
    // const data = { action: 'popular_books_week' }
    return wsCall('offers')
}

export function wsGetOffer(id) {
    // const data = { action: 'popular_books_week' }
    return wsCall('offers/' + id)
}

export function wsGetCategories() {
    // const data = { action: 'popular_books_week' }
    return wsCall('categories')
}

export function wsGetEstablishments() {
    return wsCall('establishments')
}

export function wsGetEstablishmentDetail(id) {
    return wsCall('establishments/' + id)
}

export function wsGetEstablishmentOffers(id) {
    return wsCall('/offers/establishmentOffers/' + id)
}

export function wsGetCategoryOffers(id) {
    return wsCall('/offers/categoryOffers/' + id)
}
