import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Txt from './Txt'

import { globalStyles as gs } from '../utils/styles'
import I18n from '../utils/i18n'

import { getDaysString } from '../utils/utils'
import { connect } from 'react-redux'
import { fnSetOffer } from '../actions/actions'

class OfferListItem extends React.Component {
    openOffer() {
        this.props.fnSetOffer(this.props.item)
        this.props.navigation.navigate('Offer', {
            viewTitle: this.props.item.name
        })
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
                            source={{
                                uri: this.props.item.establishmentLogo,
                                cache: 'only-if-cached'
                            }}
                            style={gs.liSquareImage}
                        />
                    </View>
                    <View style={gs.f1}>
                        <Txt style={gs.liTitle}>{this.props.item.name}</Txt>
                        <Txt>
                            {this.props.showDays && (
                                // <Txt style={gs.liSubitle}>
                                //     {this.props.item.daysString.toUpperCase() +
                                //         ' - '}
                                // </Txt>
                                <Txt style={gs.liSubitle}>
                                    {getDaysString(
                                        this.props.item.days
                                    ).toUpperCase() + ' - '}
                                </Txt>
                            )}
                            <Txt style={gs.liSubitle}>
                                {this.props.item.establishmentName}
                            </Txt>
                        </Txt>
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

const mapDispatchToProps = { fnSetOffer }

export default connect(mapStateToProps, mapDispatchToProps)(OfferListItem)
