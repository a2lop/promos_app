import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import Txt from './Txt'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

class OfferSimple extends React.Component {
    render() {
        return (
            <View
                style={{
                    width: Dimensions.get('window').width / 2,
                    marginRight: 15
                }}>
                <TouchableOpacity style={{ width: '100%' }}>
                    <Image
                        source={require('../assets/c4Logo.png')}
                        resizeMode={'stretch'}
                        style={[gs.mb5, { width: '100%', height: 100 }]}
                    />

                    <Txt style={gs.dfSimpleTitle}>Lunes de 2x1 para chicas</Txt>
                    <Txt style={gs.dfSimpleSubtitle}>Martes</Txt>
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
)(OfferSimple)
