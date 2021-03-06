import wsCall from '../utils/fetcher'

export function wsGetOffers() {
    return wsCall('offers')
}

export function wsGetOffersByDayNumber(dayNumber) {
    return wsCall('offers/offersByDayNumber/' + dayNumber)
}
export function wsGetOffersByDayNumberAndCategory(
    dayNumber,
    categoryId,
    lastId
) {
    return wsCall(
        `offers/day/${dayNumber}/category/${categoryId}/startAt/${lastId}`
    )
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

export function wsGetEstablishmentsByCategory(categoryId, lastId) {
    return wsCall(`establishments/byCategory/${categoryId}/startAt/${lastId}`)
}

export function wsGetEstablishmentDetail(id) {
    return wsCall('establishments/' + id)
}

export function wsGetEstablishmentOffers(id) {
    return wsCall('offers/establishmentOffers/' + id)
}

export function wsGetCategoryOffers(id, lastId) {
    return wsCall(`offers/categoryOffers/${id}/startAt/${lastId}`)
}

export function wsGetDiscoverOffers(id) {
    return wsCall('discoverOffers')
}

export function wsGetMemberships() {
    return wsCall('memberships')
}

export function wsGetMembershipOffers(id) {
    return wsCall('offers/membershipOffers/' + id)
}

export function wsSearchByText(keyword) {
    return wsCall('offers/searchByText/' + keyword)
}

export function wsGetBirthdayOffers() {
    return wsCall('birthdayOffers')
}

export function wsGetLastAddedEstablishments(id) {
    return wsCall('establishments/lastAdded/all')
}
