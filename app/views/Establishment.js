import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TagSimple from '../components/TagSimple'
import MapView, { Marker } from 'react-native-maps'
import OfferSimple from '../components/OfferSimple'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'

import { fnGetEstablishmentOffers } from '../actions/actions'

class Establishment extends React.Component {
    componentDidMount() {
        this.props.fnGetEstablishmentOffers(this.props.establishment.id)
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
                            {this.props.establishment.categories.map(c => (
                                <TagSimple item={c} key={c.id}></TagSimple>
                            ))}
                        </View>
                    )}
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        {this.props.establishment.description}
                    </Txt>
                </View>
                <View style={gs.dfGenericContainer}>
                    {/* <Txt style={[gs.dfSectionTitle, gs.mb5]}>Contactos</Txt> */}
                    {this.props.establishment.phone && (
                        <TouchableOpacity style={st.labelContainer}>
                            <View style={st.labelIcon}>
                                <Icon size={25} name={'cellphone-android'} />
                            </View>
                            <Txt style={st.labelText}>
                                {this.props.establishment.phone}
                            </Txt>
                        </TouchableOpacity>
                    )}
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
                                <TouchableOpacity>
                                    <Icon size={30} name={'facebook-box'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.instagram && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity>
                                    <Icon size={30} name={'instagram'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.email && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity>
                                    <Icon size={30} name={'email'} />
                                </TouchableOpacity>
                            </View>
                        )}
                        {this.props.establishment.website != '' && (
                            <View style={st.socialIconButton}>
                                <TouchableOpacity>
                                    <Icon size={30} name={'web'} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                        {I18n.t('establishment.offers', {
                            establishmentName: 'Campo4'
                        })}
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
                                />
                            )
                        }}></FlatList>
                </View>

                {this.props.establishment.locations &&
                    this.props.establishment.locations.length > 0 && (
                        <View style={{ height: 200 }}>
                            <MapView
                                // initialRegion={{
                                //     latitude: 37.78825,
                                //     longitude: -122.4324,
                                //     latitudeDelta: 0.0922,
                                //     longitudeDelta: 0.0421
                                // }}
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
                    )}
            </ScrollView>
        )
    }
}

let st = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    labelIcon: {
        // flex: 1,
        // alignItems: 'flex-end',
        marginRight: 5
    },
    labelText: {
        flex: 1,
        fontSize: 13
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
