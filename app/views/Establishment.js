import React from 'react'
import {
    ScrollView,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'
// import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TagSimple from '../components/TagSimple'
import OfferSimple from '../components/OfferSimple'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { openUrl, shareContent, openExternalApp } from '../utils/utils'

import { fnGetEstablishmentOffers } from '../actions/actions'

class Establishment extends React.Component {
    componentDidMount() {
        this.props.fnGetEstablishmentOffers(this.props.establishment.id)
    }

    shareEstablishment() {
        const title = I18n.t('share.establishmentTitle', {
            establishmentName: this.props.establishment.name
        })
        const description = I18n.t('share.establishmentDescription', {
            description: this.props.establishment.description
        })
        const dialogTitle = I18n.t('share.dialogTitle')
        shareContent(title, description, null, dialogTitle)
    }

    render() {
        return (
            <ScrollView style={gs.dfPageContainer}>
                {/* <View style={gs.mainImageContainer}> */}
                <Image
                    source={{ uri: this.props.establishment.bannerImage }}
                    style={[gs.mainImage]}
                />
                <View style={gs.dfMainContainer}>
                    <Txt style={[gs.dfTitle, gs.mb5]}>
                        {this.props.establishment.name}
                    </Txt>
                    {/* <TouchableOpacity style={gs.mb15}>
                        <Txt style={gs.dfSubtitle}></Txt>
                    </TouchableOpacity> */}
                    {this.props.establishment.categories && (
                        <View
                            style={[
                                gs.fdRow,
                                {
                                    marginHorizontal: 15,
                                    justifyContent: 'center'
                                }
                            ]}>
                            {this.props.establishment.categories.map(c => {
                                return (
                                    <TagSimple
                                        item={c}
                                        key={c.id}
                                        isCategory={true}
                                        navigation={this.props.navigation}
                                    />
                                )
                            })}
                        </View>
                    )}
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        {this.props.establishment.description}
                    </Txt>
                </View>
                <View style={gs.dfGenericContainer}>
                    {this.props.establishment.phones &&
                        this.props.establishment.phones.length > 0 &&
                        this.props.establishment.phones.map(phone => {
                            return (
                                <View style={st.labelContainer} key={phone}>
                                    <TouchableOpacity
                                        style={gs.fdRow}
                                        onPress={() => {
                                            openUrl('tel:' + phone)
                                        }}>
                                        <View style={st.labelIcon}>
                                            <Icon size={25} name={'phone'} />
                                        </View>
                                        <View>
                                            <Txt style={st.labelText}>
                                                {phone}
                                            </Txt>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    {this.props.establishment.address && (
                        <TouchableOpacity style={st.labelContainer}>
                            <View style={st.labelIcon}>
                                <Icon size={25} name={'map-marker'} />
                            </View>
                            <Txt style={st.labelText}>
                                {this.props.establishment.address}
                            </Txt>
                        </TouchableOpacity>
                    )}

                    {/* <View style={st.labelContainer}> */}
                    <View style={st.socialIconsContainer}>
                        {this.props.establishment.facebook && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // openExternalApp(
                                        //     'fb://page/',
                                        //     this.props.establishment.facebook,
                                        //     'https://www.facebook.com/'
                                        // )
                                        openUrl(
                                            'https://www.facebook.com/' +
                                                this.props.establishment
                                                    .facebook
                                        )
                                    }}>
                                    <Icon size={30} name={'facebook-box'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.instagram && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity
                                    onPress={() => {
                                        openExternalApp(
                                            'instagram://user?username=',
                                            this.props.establishment.instagram,
                                            'https://www.instagram.com/'
                                        )
                                    }}>
                                    <Icon size={30} name={'instagram'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.email && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity
                                    onPress={() => {
                                        openUrl(
                                            'mailto:' +
                                                this.props.establishment.email
                                        )
                                    }}>
                                    <Icon size={30} name={'email'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.website && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity
                                    onPress={() => {
                                        openUrl(
                                            this.props.establishment.website
                                        )
                                    }}>
                                    <Icon size={30} name={'web'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        <View style={st.socialIconButton}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.shareEstablishment()
                                }}>
                                <Icon size={30} name={'share-variant'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                        {I18n.t('establishment.offers')}
                    </Txt>
                    <FlatList
                        data={this.props.establishmentOffers}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={d => {
                            return (
                                <OfferSimple
                                    key={d.index}
                                    item={d.item}
                                    navigation={this.props.navigation}
                                    notLoadEstablishment={true}
                                />
                            )
                        }}></FlatList>
                </View>

                {/* {this.props.establishment.locations &&
                    this.props.establishment.locations.length > 0 && (
                        <View style={{ height: 200 }}>
                            <MapView
                                style={{ height: '100%' }}>
                                {this.props.establishment.locations.map(
                                    marker => (
                                        <Marker
                                            key={marker.lat}
                                            coordinate={{
                                                latitude: marker.lat,
                                                longitude: marker.lng
                                            }}
                                            title={'test'}
                                            description={'test largo'}
                                        />
                                    )
                                )}
                            </MapView>
                        </View>
                    )} */}
            </ScrollView>
        )
    }
}

let st = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        marginBottom: 5
        // alignItems: 'center'
    },
    labelIcon: {
        // flex: 1,
        // alignItems: 'flex-end',
        marginRight: 5
    },
    labelText: {
        flex: 1,
        fontSize: 15
    },
    socialIconsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialIconButton: {
        flex: 1,
        alignItems: 'center'
    }
})

function mapStateToProps(state) {
    return {
        establishment: state.dataReducer.establishment,
        establishmentOffers: state.dataReducer.establishmentOffers
    }
}

const mapDispatchToProps = { fnGetEstablishmentOffers }

export default connect(mapStateToProps, mapDispatchToProps)(Establishment)
