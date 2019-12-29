import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../utils/constants'

export default class LoadingItem extends React.Component {
    render() {
        return <ActivityIndicator size="large" color={colors.PURPLE} />
    }
}
