/**
 * @format
 */

import { AppRegistry } from 'react-native'
// import App from './App';
import App from './app/navigator/navigator'
import { name as appName } from './app.json'
import * as Sentry from '@sentry/react-native'

Sentry.init({
    dsn: 'https://23ae13de57fe40dcb7692d4cbd7af7a6@sentry.io/1868989'
})

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        assert: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {},
        time: () => {},
        timeEnd: () => {}
    }
}

AppRegistry.registerComponent(appName, () => App)
