import * as Actions from './actionTypes'
import {
    wsGetOffers,
    wsGetOffer,
    wsGetCategories,
    wsGetEstablishmentDetail,
    wsGetEstablishmentOffers,
    wsGetDiscoverOffers,
    wsGetMemberships,
    wsGetOffersByDayNumber,
    wsGetOffersByDayNumberAndCategory
} from '../services/data'

import {
    wsGetUserInfo,
    wsPutUserCategory,
    wsDeleteUserCategory,
    wsDeleteUserMembership,
    wsPutUserMembership
} from '../services/users'
import AsyncStorage from '@react-native-community/async-storage'

export function fnSetMainScreen(screen) {
    return dispatch => {
        dispatch({
            type: Actions.SET_MAIN_SCREEN,
            payload: { screen }
        })
    }
}

//#region DATA
export function fnGetOffers() {
    return dispatch => {
        wsGetOffers().then(d => {
            dispatch({
                type: Actions.GET_OFFERS,
                payload: { offers: d }
            })
        })
    }
}

export function fnGetOffersByDayNumber(day, reset) {
    return dispatch => {
        dispatch({
            type: Actions.GET_OFFERS,
            payload: {
                reset
            }
        })
        wsGetOffersByDayNumber(day).then(d => {
            dispatch({
                type: Actions.GET_OFFERS_SUCCESS,
                payload: { offers: d }
            })
        })
    }
}

export function fnGetOffersByDayNumberAndCategory(
    day,
    categoryId,
    lastId,
    reset
) {
    return dispatch => {
        dispatch({
            type: Actions.GET_OFFERS,
            payload: {
                lastId,
                reset
            }
        })
        wsGetOffersByDayNumberAndCategory(day, categoryId, lastId).then(d => {
            dispatch({
                type: Actions.GET_OFFERS_SUCCESS,
                payload: { offers: d }
            })
        })
    }
}

export function fnSetOffer(offer, notLoadEstablishment) {
    return dispatch => {
        dispatch({
            type: Actions.SET_OFFER,
            payload: { offer }
        })
        dispatch(fnGetOffer(offer.id))
        if (!notLoadEstablishment) {
            dispatch(
                fnSetEstablishment({
                    id: offer.establishmentId,
                    name: offer.establishmentName
                })
            )
        }
    }
}

export function fnGetOffer(id) {
    return dispatch => {
        wsGetOffer(id).then(d => {
            dispatch({
                type: Actions.SET_OFFER,
                payload: { offer: d }
            })
        })
    }
}

export function fnGetCategories() {
    return async dispatch => {
        const categories = await AsyncStorage.getItem('categories')
        if (categories) {
            dispatch({
                type: Actions.GET_CATEGORIES,
                payload: { categories: JSON.parse(categories) }
            })
        }

        wsGetCategories().then(d => {
            AsyncStorage.setItem('categories', JSON.stringify(d))
            dispatch({
                type: Actions.GET_CATEGORIES,
                payload: { categories: d }
            })
        })
    }
}

export function fnSetEstablishment(establishment, stopLoading) {
    return dispatch => {
        dispatch({
            type: Actions.SET_ESTABLISHMENT,
            payload: { establishment }
        })
        if (!stopLoading) {
            dispatch(fnGetEstablishment(establishment.id))
        }
    }
}

export function fnGetEstablishment(id) {
    return dispatch => {
        wsGetEstablishmentDetail(id).then(d => {
            dispatch({
                type: Actions.SET_ESTABLISHMENT,
                payload: { establishment: d }
            })
            // dispatch(fnGetEstablishmentOffers(id))
        })
    }
}

export function fnGetEstablishmentOffers(id) {
    return dispatch => {
        wsGetEstablishmentOffers(id).then(d => {
            dispatch({
                type: Actions.GET_ESTABLISHMENT_OFFERS,
                payload: { offers: d }
            })
        })
    }
}

export function fnGetDiscoverOffers() {
    return dispatch => {
        dispatch({
            type: Actions.GET_DISCOVER_OFFERS
        })
        wsGetDiscoverOffers().then(d => {
            dispatch({
                type: Actions.GET_DISCOVER_OFFERS_SUCCESS,
                payload: { offers: d }
            })
        })
    }
}

export function fnGetMemberships() {
    return async dispatch => {
        const memberships = await AsyncStorage.getItem('memberships')
        if (memberships) {
            dispatch({
                type: Actions.GET_MEMBERSHIPS,
                payload: { memberships: JSON.parse(memberships) }
            })
        }
        wsGetMemberships().then(d => {
            AsyncStorage.setItem('memberships', JSON.stringify(d))
            dispatch({
                type: Actions.GET_MEMBERSHIPS,
                payload: { memberships: d }
            })
        })
    }
}

//#endregion

//#region USER

//FROM FIREBASE
export function fnSetUser(user) {
    return dispatch => {
        dispatch({
            type: Actions.SET_USER,
            payload: { user }
        })
    }
}

//FROM DATABASE
export function fnGetUserInfo(userId) {
    return dispatch => {
        wsGetUserInfo(userId).then(response => {
            dispatch({
                type: Actions.GET_USER_INFO,
                payload: { userData: response }
            })
        })
    }
}

export function fnAddUserCategory(userId, category) {
    return dispatch => {
        wsPutUserCategory(userId, category.id).then(response => {
            dispatch({
                type: Actions.ADD_USER_CATEGORY,
                payload: { category }
            })
        })
    }
}

export function fnRemoveUserCategory(userId, category) {
    return dispatch => {
        wsDeleteUserCategory(userId, category.id).then(response => {
            dispatch({
                type: Actions.REMOVE_USER_CATEGORY,
                payload: { category }
            })
        })
    }
}

export function fnAddUserMembership(userId, membership) {
    return dispatch => {
        wsPutUserMembership(userId, membership.id).then(() => {
            dispatch({
                type: Actions.ADD_USER_MEMBERSHIP,
                payload: { membership }
            })
        })
    }
}

export function fnRemoveUserMembership(userId, membership) {
    return dispatch => {
        wsDeleteUserMembership(userId, membership.id).then(() => {
            dispatch({
                type: Actions.REMOVE_USER_MEMBERSHIP,
                payload: { membership }
            })
        })
    }
}
//#endregion
