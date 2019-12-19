import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
// import { colors } from '../utils/constants'

export default class TagSimple extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    openContent() {
        if (this.props.isCategory) {
            this.props.navigation.navigate('CategoryOffers', {
                categoryId: this.props.item.id,
                viewTitle: this.props.item.name
            })
        }
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
