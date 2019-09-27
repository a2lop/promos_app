import * as Actions from './actionTypes'
import { wsGetOffers } from '../services/data'

//#region DATA
export function fnGetOffers() {
    return dispatch => {
        wsGetOffers().then(d => {
            console.log(d)
            dispatch({
                type: Actions.GET_OFFERS,
                payload: { offers: d }
            })
        })
    }
}

//#endregion
