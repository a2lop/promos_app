import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

export default class TagSimple extends React.PureComponent {
    openContent() {
        // this.props.navigation.navigate('CategoryOffers', {
        //     categoryId: this.props.item.id
        // })
    }

    render() {
        return (
            <TouchableOpacity
                style={st.container}
                onPress={() => {
                    this.openContent()
                }}>
                <Txt style={[gs.dfSimpleTitle, { textAlign: 'center' }]}>
                    {this.props.item.name}
                </Txt>
            </TouchableOpacity>
        )
    }
}

const st = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 10
    }
})
