import { constants } from '../utils/constants'

export default (wsCall = async (service, data, options = {}) => {
    let wsUrl = constants.wsUrl + service

    return fetch(wsUrl, {
        method: options.method || 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            if (!global.isAlertShow) {
                global.isAlertShow = true
            }
            throw error
        })
})
