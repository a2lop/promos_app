import React from 'react'
import { ScrollView, View, Image, TouchableOpacity } from 'react-native'
// import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import TagSimple from '../components/TagSimple'
// import MapView, { Marker } from 'react-native-maps'
// import OfferSimple from '../components/OfferSimple'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { openUrl } from '../utils/utils'
import { colors } from '../utils/constants'

export default class OnPromos extends React.Component {
    render() {
        return (
            <ScrollView
                style={[gs.dfPageContainer, gs.f1, { paddingHorizontal: 15 }]}>
                <View style={{ alignItems: 'center', marginVertical: 15 }}>
                    <Image
                        resizeMode="contain"
                        style={{
                            height: 150
                        }}
                        source={require('../assets/onPromos.png')}
                    />
                </View>

                {/* <View> */}
                <Txt
                    style={{
                        fontSize: 22,
                        textAlign: 'center',
                        marginBottom: 10
                    }}>
                    {I18n.t('onPromos.title')}
                </Txt>
                <Txt style={{ fontSize: 17, marginBottom: 15 }}>
                    {I18n.t('onPromos.description')}
                </Txt>
                {/* </View> */}

                <TouchableOpacity
                    style={[
                        gs.fdRow,
                        {
                            alignItems: 'center',
                            marginBottom: 5
                        }
                    ]}
                    onPress={() => {
                        openUrl('mailto:promos.contactos@gmail.com')
                    }}>
                    <Icon size={25} name={'email'} color={colors.PURPLE} />
                    <Txt style={{ marginLeft: 10 }}>
                        promos.contactos@gmail.com
                    </Txt>
                </TouchableOpacity>
                <View style={gs.fdRow}>
                    <View style={gs.f1}>
                        <TouchableOpacity
                            style={[
                                gs.fdRow,
                                {
                                    alignItems: 'center',
                                    marginBottom: 10
                                }
                            ]}
                            onPress={() => {
                                openUrl('tel:+593987084103')
                            }}>
                            <Icon
                                size={25}
                                name={'phone'}
                                color={colors.PURPLE}
                            />
                            <Txt style={{ marginLeft: 10 }}>0987084103</Txt>
                        </TouchableOpacity>
                    </View>
                    <View style={gs.f1}>
                        <TouchableOpacity
                            style={[
                                gs.fdRow,
                                {
                                    alignItems: 'center',
                                    marginBottom: 10
                                }
                            ]}
                            onPress={() => {
                                openUrl('tel:+593984999880')
                            }}>
                            <Icon
                                size={25}
                                name={'phone'}
                                color={colors.PURPLE}
                            />
                            <Txt style={{ marginLeft: 10 }}>0984999880</Txt>
                        </TouchableOpacity>
                    </View>
                </View>
                <Txt style={{ fontSize: 17, marginBottom: 10 }}>
                    {I18n.t('onPromos.socialText')}
                </Txt>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        // paddingHorizontal: 15,
                        marginBottom: 15
                    }}>
                    <View style={{ marginRight: 15 }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                openUrl('https://www.facebook.com/promos.ecu')
                            }}>
                            <Icon
                                size={40}
                                name={'facebook-box'}
                                color={colors.PURPLE}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                openUrl('https://www.instagram.com/promos.ec/')
                            }}>
                            <Icon
                                size={40}
                                name={'instagram'}
                                color={colors.PURPLE}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
