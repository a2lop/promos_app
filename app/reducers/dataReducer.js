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
    REMOVE_USER_MEMBERSHIP
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
    categoriesParents: [
        {
            id: '1OPczZm4PO6D4l0rLCBq',
            name: 'Compras',
            iconImage:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/categories%2F1OPczZm4PO6D4l0rLCBq?alt=media&token=9dc4472b-63be-4f79-bdbb-4516b142ebea',
            parent: -1,
            searchName: 'compras'
        },
        {
            id: 'Nu7ETyJEIDh184Dy705O',
            searchName: 'entretenimiento',
            name: 'Entretenimiento',
            iconImage:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/categories%2FNu7ETyJEIDh184Dy705O?alt=media&token=c38e49cd-cae3-4a29-906f-b7979c6bf2ad',
            parent: -1
        },
        {
            id: 'RRfDFGcNa7BeKlYOxGxJ',
            searchName: 'viajes',
            name: 'Viajes',
            iconImage:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/categories%2FRRfDFGcNa7BeKlYOxGxJ?alt=media&token=70281df9-71f3-4f0c-a348-9c84c4cc33a9',
            parent: -1
        },
        {
            id: 'gkoWxhgtAN7Ph636fuDp',
            iconImage:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/categories%2FgkoWxhgtAN7Ph636fuDp?alt=media&token=1ccb131b-6363-4749-b331-494a53609f49',
            parent: -1,
            searchName: 'deportes',
            name: 'Deportes'
        },
        {
            id: 'zsCubJ9UEq1TFYWGNARG',
            searchName: 'comida',
            name: 'Comida',
            iconImage:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/categories%2FzsCubJ9UEq1TFYWGNARG?alt=media&token=85ebbbaf-459e-4506-a072-67d20102e75e',
            parent: -1
        }
    ],
    establishment: {},
    establishmentOffers: [],
    discoverBannerOffers: [],
    discoverOffers: [],
    memberships: [
        // {
        //     id: '8CxUCGVkwyCnIfPLbNl1',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2F8CxUCGVkwyCnIfPLbNl1?alt=media&token=8b67d6f2-c1e3-49de-8af1-6b264418dbf2',
        //     searchName: 'supermaxi',
        //     name: 'Supermaxi'
        // },
        // {
        //     id: '9KR59VSq3jQT8MA2P2cd',
        //     name: 'Banco Pichincha',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2F9KR59VSq3jQT8MA2P2cd?alt=media&token=9216808e-d1b8-4c46-9d90-44fe3c747bed',
        //     searchName: 'banco pichincha'
        // },
        // {
        //     id: 'gigCZw7fo7tq2p7DFsrz',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2FgigCZw7fo7tq2p7DFsrz?alt=media&token=c8e7f0e4-a243-4ab8-bdbd-dc63ddd85d73',
        //     searchName: 'multicines ',
        //     name: 'Multicines '
        // },
        // {
        //     id: 'wY5maOuicbGXgQh8zkNz',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2FwY5maOuicbGXgQh8zkNz?alt=media&token=7d05bc3f-21d6-465e-9eb6-82e7154189e9',
        //     searchName: 'diners club',
        //     name: 'Diners Club'
        // },
        // {
        //     id: 'yL7MgvnnzzngUTZl8izz',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2FyL7MgvnnzzngUTZl8izz?alt=media&token=be77be4a-c1b1-45e3-9a10-2e9c399bb65a',
        //     searchName: 'produbanco',
        //     name: 'Produbanco'
        // },
        // {
        //     id: 'zxWaX8xCpsDMtamiRuAR',
        //     name: 'Banco del Pacifico',
        //     image:
        //         'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/memberships%2FzxWaX8xCpsDMtamiRuAR?alt=media&token=1be38449-e413-42ef-aeda-a2327b08f2ea',
        //     searchName: 'banco del pacifico'
        // }
    ]
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
                homeStillLoadingMore: action.payload.offers.length > 0
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

        default:
            return state
    }
}

export default dataReducer
