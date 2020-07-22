import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { fnSetEstablishment } from '../actions/actions'
import { colors } from '../utils/constants'

class EstablishmentSimple extends React.Component {
    openEstablishment() {
        this.props.fnSetEstablishment(this.props.item)
        this.props.navigation.navigate('EstablishmentDetail', {
            viewTitle: this.props.item.name
        })
    }
    render() {
        return (
            <View
                style={[
                    gs.liContentContainer,
                    {
                        width: 110,
                        backgroundColor: colors.WHITE,
                        paddingHorizontal: 0,
                        justifyContent: 'center',
                        marginRight: 10
                    }
                ]}>
                <TouchableOpacity
                    style={[
                        gs.liContainer,
                        { flexDirection: 'column', alignItems: 'center' }
                    ]}
                    onPress={() => {
                        this.openEstablishment()
                    }}>
                    <View
                        style={[gs.liSquareImageContainer, { marginRight: 0 }]}>
                        <Image
                            source={{
                                uri: this.props.item.squareImage,
                                cache: 'force-cache'
                            }}
                            style={[
                                gs.liSquareImage,
                                { borderTopLeftRadius: 5 }
                            ]}
                        />
                    </View>
                    <Txt
                        style={{ fontSize: 18, textAlign: 'center' }}
                        numberOfLines={2}>
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

const mapDispatchToProps = { fnSetEstablishment }

export default connect(mapStateToProps, mapDispatchToProps)(EstablishmentSimple)
