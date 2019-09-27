import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'

class OfferListItem extends React.Component {
    render() {
        return (
            <View style={gs.liContentContainer}>
                <TouchableOpacity style={gs.liContainer}>
                    <View style={gs.liSquareImageContainer}>
                        <Image
                            source={{ uri: this.props.item.logoList }}
                            style={gs.liSquareImage}
                        />
                    </View>
                    <View style={gs.f1}>
                        <Txt style={gs.liTitle}>{this.props.item.title}</Txt>
                        <Txt style={gs.liSubitle}>Campo4</Txt>
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

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferListItem)
