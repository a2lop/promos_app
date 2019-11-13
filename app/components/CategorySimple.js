import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Txt from './Txt'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

class CategoriySimple extends React.Component {
    openCategory() {
        this.props.navigation.navigate('CategoryOffers', {
            categoryId: this.props.item.id
        })
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: colors.WHITE,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    borderWidth: 1,
                    paddingea: 10,
                    borderColor: colors.SILVER
                }}>
                <TouchableOpacity
                    onPress={() => {
                        this.openCategory()
                    }}>
                    <Image
                        source={{ uri: this.props.item.iconImage }}
                        resizeMode={'stretch'}
                        style={[gs.mb5, { width: '100%', aspectRatio: 1 }]}
                    />

                    <Txt style={[gs.dfSimpleTitle, { textAlign: 'center' }]}>
                        {this.props.item.name}
                    </Txt>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriySimple)
