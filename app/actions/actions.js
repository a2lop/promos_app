import * as Actions from './actionTypes'
import { wsGetOffers, wsGetOffer, wsGetCategories } from '../services/data'

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
    }
}

export function fnGetOffer(id) {
    return dispatch => {
        wsGetOffer(id).then(d => {
            dispatch({
                type: Actions.SET_OFFER,
                payload: { offer: d[0] }
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

//#endregion
