import { constants } from '../utils/constants'
import { concat } from 'lodash'

import {
    SET_MAIN_SCREEN,
    GET_OFFERS,
    GET_OFFERS_SUCCESS,
    SET_OFFER,
    GET_OFFER,
    GET_CATEGORIES,
    SET_ESTABLISHMENT,
    GET_ESTABLISHMENT_OFFERS,
    GET_DISCOVER_OFFERS,
    GET_DISCOVER_OFFERS_SUCCESS,
    GET_MEMBERSHIPS,
    SET_USER,
    GET_USER_INFO,
    ADD_USER_CATEGORY,
    REMOVE_USER_CATEGORY,
    ADD_USER_MEMBERSHIP,
    REMOVE_USER_MEMBERSHIP,
    GET_LAST_ADDED_ESTABLISHMENTS
} from '../actions/actionTypes'

let initialState = {
    user: undefined,
    userInfo: undefined,
    userCategories: [],
    userMemberships: [],

    mainScreen: 1,

    isLoadingHomeOffers: false,
    homeOffers: [],
    homeStillLoadingMore: true,

    offer: {},
    categories: [],
    categoriesParents: [],
    establishment: {},
    establishmentOffers: [],
    discoverBannerOffers: [],
    discoverOffers: [],
    memberships: [],

    lastAddedEstablishments: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            state = Object.assign({}, state, {
                user: action.payload.user
            })
            return state

        case SET_MAIN_SCREEN:
            state = Object.assign({}, state, {
                mainScreen: action.payload.screen
            })
            return state
        case GET_OFFERS:
            state = Object.assign({}, state, {
                homeOffers: action.payload.reset ? [] : state.homeOffers,
                isLoadingHomeOffers: true,
                homeStillLoadingMore: true
            })
            return state
        case GET_OFFERS_SUCCESS:
            state = Object.assign({}, state, {
                homeOffers: concat(state.homeOffers, action.payload.offers),
                isLoadingHomeOffers: false,
                homeStillLoadingMore: action.payload.offers.length == 10
            })
            return state
        case SET_OFFER:
            let offer = action.payload.offer
            const categoryIds = offer.categories || []
            let categories = []
            categoryIds.forEach(c => {
                let filteredCategories = state.categories.filter(
                    cat => cat.id == c
                )
                if (filteredCategories.length > 0) {
                    categories.push(filteredCategories[0])
                }
            })
            offer.categories = categories
            state = Object.assign({}, state, {
                offer
            })
            return state
        case GET_CATEGORIES:
            state = Object.assign({}, state, {
                categories: action.payload.categories,
                categoriesParents: action.payload.categories.filter(
                    d => d.parent == -1
                )
            })
            return state
        case SET_ESTABLISHMENT:
            let establishment = action.payload.establishment
            let locations = []
            try {
                if (establishment.location && establishment.location != '') {
                    const coordinates = establishment.location.split('/')
                    coordinates.forEach(coordinate => {
                        locations.push({
                            lat: parseFloat(coordinate.split(',')[0]),
                            lng: parseFloat(coordinate.split(',')[1])
                        })
                    })
                }
            } catch (error) {}
            establishment.locations = locations

            let phones = []
            if (establishment.phone) {
                phones = establishment.phone.split(',')
            }
            establishment.phones = phones

            establishment.address =
                establishment.address == '' ? undefined : establishment.address

            establishment.email =
                establishment.email == '' ? undefined : establishment.email

            establishment.location =
                establishment.location == ''
                    ? undefined
                    : establishment.location

            establishment.website =
                establishment.website == '' ? undefined : establishment.website

            establishment.instagram =
                establishment.instagram == ''
                    ? undefined
                    : establishment.instagram

            establishment.facebook =
                establishment.facebook == ''
                    ? undefined
                    : establishment.facebook

            state = Object.assign({}, state, {
                establishment: action.payload.establishment,
                establishmentOffers: []
            })
            return state
        case GET_ESTABLISHMENT_OFFERS:
            state = Object.assign({}, state, {
                establishmentOffers: action.payload.offers
            })
            return state
        case GET_DISCOVER_OFFERS:
            state = Object.assign({}, state, {
                isLoadingDiscover: true
            })
            return state
        case GET_DISCOVER_OFFERS_SUCCESS:
            const offers = action.payload.offers
            state = Object.assign({}, state, {
                discoverBannerOffers: offers.filter(o => o.isDiscoverBanner),
                discoverOffers: offers.filter(o => o.isDiscoverOffer),
                isLoadingDiscover: false
            })
            return state
        case GET_MEMBERSHIPS:
            state = Object.assign({}, state, {
                memberships: action.payload.memberships
            })
            return state
        case GET_USER_INFO:
            if (action.payload.userData.length > 0) {
                const userData = action.payload.userData[0]

                const categoryIds = userData.categories || []
                let userCategories = []
                categoryIds.forEach(c => {
                    let filteredCategories = state.categories.filter(
                        cat => cat.id == c
                    )
                    if (filteredCategories.length > 0) {
                        userCategories.push(filteredCategories[0])
                    }
                })

                const membershipIds = userData.memberships || []
                let userMemberships = []
                membershipIds.forEach(c => {
                    let filteredMemberships = state.memberships.filter(
                        cat => cat.id == c
                    )
                    if (filteredMemberships.length > 0) {
                        userMemberships.push(filteredMemberships[0])
                    }
                })

                state = Object.assign({}, state, {
                    userInfo: action.payload.memberships,
                    userCategories,
                    userMemberships
                })
            }
            return state
        case ADD_USER_CATEGORY:
            state = Object.assign({}, state, {
                userCategories: concat(
                    state.userCategories,
                    action.payload.category
                )
            })
            return state
        case REMOVE_USER_CATEGORY:
            state = Object.assign({}, state, {
                userCategories: state.userCategories.filter(
                    c => c.id != action.payload.category.id
                )
            })
            return state
        case ADD_USER_MEMBERSHIP:
            state = Object.assign({}, state, {
                userMemberships: concat(
                    state.userMemberships,
                    action.payload.membership
                )
            })
            return state
        case REMOVE_USER_MEMBERSHIP:
            state = Object.assign({}, state, {
                userMemberships: state.userMemberships.filter(
                    c => c.id != action.payload.membership.id
                )
            })
            return state
        case GET_LAST_ADDED_ESTABLISHMENTS:
            state = Object.assign({}, state, {
                lastAddedEstablishments: action.payload.establishments
            })
            return state
        default:
            return state
    }
}

export default dataReducer
