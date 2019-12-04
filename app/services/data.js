import wsCall from '../utils/fetcher'

export function wsGetOffers() {
    return wsCall('offers')
}

export function wsGetOffersByDayNumber(dayNumber) {
    return wsCall('offers/offersByDayNumber/' + dayNumber)
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
    return wsCall('offers/establishmentOffers/' + id)
}

export function wsGetCategoryOffers(id) {
    return wsCall('offers/categoryOffers/' + id)
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
