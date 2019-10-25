import { constants } from '../utils/constants'
import { concat } from 'lodash'

import {
    GET_OFFERS,
    SET_OFFER,
    GET_OFFER,
    GET_CATEGORIES
} from '../actions/actionTypes'

let initialState = {
    homeOffers: [
        // {
        //     id: '3azXhVnKv4WKQlAfp5b9',
        //     title: '2x1',
        //     days: {
        //         th: false,
        //         mo: true,
        //         su: true,
        //         sa: false,
        //         tu: false,
        //         we: true,
        //         fr: true
        //     },
        //     memberships: ['wY5maOuicbGXgQh8zkNz'],
        //     establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
        //     logoBanner:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_3azXhVnKv4WKQlAfp5b9?alt=media&token=0ec4c86a-6010-49eb-9ecf-ce32b46ae44f',
        //     description: 'Description test',
        //     logoList:
        //         'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_56897883-e1539293036268.jpeg?auto=format&q=60&fit=max&w=930',
        //     categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH']
        // }
    ],
    offer: {},
    categories: []
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
                categories: action.payload.categories
            })
            return state
        default:
            return state
    }
}

export default dataReducer
