import { constants } from '../utils/constants'
import { concat } from 'lodash'

import {
    GET_OFFERS,
    GET_OFFERS_SUCCESS,
    SET_OFFER,
    GET_OFFER,
    GET_CATEGORIES,
    SET_ESTABLISHMENT,
    GET_ESTABLISHMENT_OFFERS,
    GET_DISCOVER_OFFERS,
    GET_MEMBERSHIPS
} from '../actions/actionTypes'

let initialState = {
    isLoadingHomeOffers: false,
    homeOffers: [],
    offer: {},
    categories: [],
    categoriesParents: [],
    establishment: {},
    establishmentOffers: [],
    discoverBannerOffers: [],
    discoverOffers: [],
    memberships: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OFFERS:
            state = Object.assign({}, state, {
                homeOffers: action.payload.reset ? [] : state.homeOffers,
                isLoadingHomeOffers: true
            })
            return state
        case GET_OFFERS_SUCCESS:
            state = Object.assign({}, state, {
                homeOffers: action.payload.offers,
                isLoadingHomeOffers: false
            })
            return state
        case SET_OFFER:
            state = Object.assign({}, state, {
                offer: action.payload.offer
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
            const offers = action.payload.offers
            state = Object.assign({}, state, {
                discoverBannerOffers: offers.filter(o => o.isDiscoverBanner),
                discoverOffers: offers.filter(o => o.isDiscoverOffer)
            })
            return state
        case GET_MEMBERSHIPS:
            state = Object.assign({}, state, {
                memberships: action.payload.memberships
            })
            return state
        default:
            return state
    }
}

export default dataReducer
