import React from 'react'
import { Image } from 'react-native'

export default class LoadingItem extends React.Component {
    render() {
        return (
            <Image
                resizeMode="contain"
                style={{ height: 40, alignSelf: 'center', marginTop: 10 }}
                source={require('../assets/loading.gif')}
            />
        )
    }
}
