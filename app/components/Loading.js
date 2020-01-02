import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../utils/constants'

export default class LoadingItem extends React.Component {
    render() {
        return (
            <ActivityIndicator
                style={{ marginVertical: 15 }}
                size="large"
                color={colors.PURPLE}
            />
        )
    }
}
