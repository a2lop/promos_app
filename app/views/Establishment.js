import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TagSimple from '../components/TagSimple'
import MapView from 'react-native-maps'
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

                    {/* <View style={st.labelContainer}> */}
                    {this.props.establishment.facebook && (
                        <TouchableOpacity style={st.labelContainer}>
                            <View style={st.labelIcon}>
                                <Icon size={30} name={'facebook-box'} />
                            </View>
                            <Txt style={st.labelText}>
                                {this.props.establishment.facebook}
                            </Txt>
                        </TouchableOpacity>
                    )}
                    {this.props.establishment.instagram && (
                        <TouchableOpacity style={st.labelContainer}>
                            <View style={st.labelIcon}>
                                <Icon size={30} name={'instagram'} />
                            </View>
                            <Txt style={st.labelText}>
                                {this.props.establishment.instagram}
                            </Txt>
                        </TouchableOpacity>
                    )}
                    {this.props.establishment.phone && (
                        <TouchableOpacity style={st.labelContainer}>
                            <View style={st.labelIcon}>
                                <Icon size={30} name={'phone-in-talk'} />
                            </View>
                            <Txt style={st.labelText}>
                                {this.props.establishment.phone}
                            </Txt>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={st.labelContainer}>
                        <View style={st.labelIcon}>
                            <Icon size={30} name={'map-marker'} />
                        </View>
                        <Txt style={st.labelText}>
                            {this.props.establishment.address}
                        </Txt>
                    </TouchableOpacity>
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
                                    item={d.item}></OfferSimple>
                            )
                        }}></FlatList>
                </View>

                <View style={{ height: 200 }}>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        style={{ height: '100%' }}
                    />
                </View>
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
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
    labelText: {
        flex: 2
    },
    socialIconButtonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    socialIcon: {}
})

function mapStateToProps(state) {
    return {
        establishment: state.dataReducer.establishment,
        establishmentOffers: state.dataReducer.establishmentOffers
    }
}

const mapDispatchToProps = { fnGetEstablishmentOffers }

export default connect(mapStateToProps, mapDispatchToProps)(Establishment)
