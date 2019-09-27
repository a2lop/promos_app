import React from 'react'
import { Text } from 'react-native'
import { colors } from '../utils/constants'

export default class Txt extends React.Component {
    render() {
        return (
            <Text
                numberOfLines={this.props.numberOfLines}
                style={[{ color: colors.DARK }, this.props.style]}
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}>
                {this.props.children}
            </Text>
        )
    }
}
