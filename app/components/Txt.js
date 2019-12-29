import React from 'react'
import { Text } from 'react-native'
import { colors, fonts } from '../utils/constants'

export default class Txt extends React.Component {
    render() {
        return (
            <Text
                numberOfLines={this.props.numberOfLines}
                style={[
                    { color: colors.DARK, fontFamily: fonts.M_REGULAR },
                    this.props.style
                ]}
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}>
                {this.props.children}
            </Text>
        )
    }
}
