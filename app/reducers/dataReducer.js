import { constants } from '../utils/constants'
import { concat } from 'lodash'

import {
    GET_OFFERS,
    SET_OFFER,
    GET_OFFER,
    GET_CATEGORIES,
    SET_ESTABLISHMENT,
    GET_ESTABLISHMENT_OFFERS
} from '../actions/actionTypes'

let initialState = {
    homeOffers: [],
    offer: {},
    categories: [],
    categoriesParents: [],
    establishment: {},
    establishmentOffers: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OFFERS:
            state = Object.assign({}, state, {
                homeOffers: action.payload.offers
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
            state = Object.assign({}, state, {
                establishment: action.payload.establishment
            })
            return state
        case GET_ESTABLISHMENT_OFFERS:
            state = Object.assign({}, state, {
                establishmentOffers: action.payload.offers
            })
            return state
        default:
            return state
    }
}

export default dataReducer
