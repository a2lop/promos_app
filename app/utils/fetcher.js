import { Alert } from 'react-native'
import { constants } from '../utils/constants'

import { StackActions, NavigationActions } from 'react-navigation'

let isAlertShow = false
// const controller = new AbortController()
// const signal = controller.signal

export default wsCall = async (service, data, options = {}) => {
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
            // Sentry.captureException(error)
            if (!global.isAlertShow) {
                global.isAlertShow = true
                // Alert.alert(
                //   I18n.t("messages.titleErrorWs"),
                //   I18n.t("messages.messageErrorWs"),
                //   [{ text: "OK", onPress: () => { } }]
                // );
            }
            // resolve(null)
            throw error
        })
}
