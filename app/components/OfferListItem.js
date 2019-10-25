import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { fnGetOffer, fnSetOffer } from '../actions/actions'

class OfferListItem extends React.Component {
    openOffer() {
        this.props.fnSetOffer(this.props.item)
        this.props.navigation.navigate('OfferDetail')
    }
    render() {
        return (
            <View style={gs.liContentContainer}>
                <TouchableOpacity
                    style={gs.liContainer}
                    onPress={() => {
                        this.openOffer()
                    }}>
                    <View style={gs.liSquareImageContainer}>
                        <Image
                            source={{ uri: this.props.item.logoList }}
                            style={gs.liSquareImage}
                        />
                    </View>
                    <View style={gs.f1}>
                        <Txt style={gs.liTitle}>{this.props.item.name}</Txt>
                        <Txt style={gs.liSubitle}>Establecimiento</Txt>
                        <Txt style={gs.liDescription} numberOfLines={3}>
                            {this.props.item.description}
                        </Txt>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = { fnGetOffer, fnSetOffer }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferListItem)
