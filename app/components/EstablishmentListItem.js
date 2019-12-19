import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { fnSetEstablishment } from '../actions/actions'

class EsteblishmentListItem extends React.Component {
    openEstablishment() {
        this.props.fnSetEstablishment(this.props.item)
        this.props.navigation.navigate('EstablishmentDetail')
    }
    render() {
        return (
            <View style={gs.liContentContainer}>
                <TouchableOpacity
                    style={gs.liContainer}
                    onPress={() => {
                        this.openEstablishment()
                    }}>
                    <View style={gs.liSquareImageContainer}>
                        <Image
                            source={{
                                uri: this.props.item.squareImage,
                                cache: 'only-if-cached'
                            }}
                            style={[
                                gs.liSquareImage,
                                { borderTopLeftRadius: 5 }
                            ]}
                        />
                    </View>
                    <View style={gs.f1}>
                        <Txt style={gs.liTitle}>{this.props.item.name}</Txt>
                        <Txt style={gs.liDescription} numberOfLines={4}>
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

const mapDispatchToProps = { fnSetEstablishment }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EsteblishmentListItem)
