import * as Actions from './actionTypes'
import { wsGetOffers } from '../services/data'

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

export function fnGetCategories() {
    return dispatch => {
        wsGetOffers().then(d => {
            dispatch({
                type: Actions.GET_CATEGORIES,
                payload: { categories: d }
            })
        })
    }
}

//#endregion
