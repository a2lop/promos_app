import * as Actions from './actionTypes'
import {
    wsGetOffers,
    wsGetOffer,
    wsGetCategories,
    wsGetEstablishmentDetail,
    wsGetEstablishmentOffers,
    wsGetDiscoverOffers
} from '../services/data'

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

export function fnSetOffer(offer) {
    return dispatch => {
        dispatch({
            type: Actions.SET_OFFER,
            payload: { offer }
        })
        dispatch(fnGetOffer(offer.id))
        dispatch(
            fnSetEstablishment({
                id: offer.establishmentId,
                name: offer.establishmentName
            })
        )
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
    return dispatch => {
        wsGetCategories().then(d => {
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

export function fnGetDiscoverOffers(d) {
    return dispatch => {
        wsGetDiscoverOffers().then(d => {
            dispatch({
                type: Actions.GET_DISCOVER_OFFERS,
                payload: { offers: d }
            })
        })
    }
}

//#endregion
