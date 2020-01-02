import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import OfferSimple from '../components/OfferSimple'
import TagSimple from '../components/TagSimple'
import { shareContent } from '../utils/utils'

class OfferDetail extends React.Component {
    componentDidMount() {}

    shareOffer() {
        const title = I18n.t('share.offerTitle', {
            offerTitle: this.props.offer.name,
            establishmentName: this.props.establishment.name
        })
        const description = I18n.t('share.offerDescription', {
            establishmentName: this.props.establishment.name,
            description: this.props.offer.description
        })
        const dialogTitle = I18n.t('share.dialogTitle')
        shareContent(title, description, null, dialogTitle)
    }

    render() {
        return (
            <ScrollView style={gs.dfPageContainer} ref="_scrollView">
                <Image
                    source={{ uri: this.props.offer.logoBanner }}
                    resizeMode={'stretch'}
                    style={[gs.mainImage]}
                />
                <View style={gs.dfMainContainer}>
                    <Txt style={[gs.dfTitle, gs.mb5]}>
                        {this.props.offer.name}
                    </Txt>
                    <TouchableOpacity
                        style={gs.mb15}
                        onPress={() => {
                            this.props.navigation.navigate('EstablishmentOffer')
                        }}>
                        <Txt style={gs.dfSubtitle}>
                            {this.props.establishment.name}
                        </Txt>
                    </TouchableOpacity>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        {this.props.offer.description}
                    </Txt>

                    <View
                        style={[
                            gs.fdRow,
                            { marginHorizontal: 15, justifyContent: 'center' }
                        ]}>
                        {this.props.offer.categories.map(c => (
                            <TagSimple
                                item={c}
                                key={c.id}
                                navigation={this.props.navigation}
                                isCategory={true}
                            />
                        ))}
                    </View>
                    <View style={[gs.fdRow, { marginTop: 10 }]}>
                        {/* <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity>
                                <Icon
                                    size={30}
                                    name={'thumb-up-outline'}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity>
                                <Icon size={30} name={'star-outline'}></Icon>
                            </TouchableOpacity>
                        </View> */}
                        <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.shareOffer()
                                }}>
                                <Icon size={30} name={'share-variant'}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                        {I18n.t('offerDetail.otherOffersOf', {
                            establishmentName: this.props.establishment.name
                        })}
                    </Txt>
                    <FlatList
                        data={this.props.establishmentOffers.filter(
                            eo => eo.id != this.props.offer.id
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={d => {
                            return (
                                <OfferSimple
                                    key={d.index}
                                    item={d.item}
                                    navigation={this.props.navigation}
                                    notLoadEstablishment={true}
                                    scrollToTop={true}
                                    onPressed={() => {
                                        this.refs._scrollView.scrollTo({
                                            y: 0,
                                            animated: true
                                        })
                                    }}
                                />
                            )
                        }}></FlatList>
                </View>
            </ScrollView>
        )
    }
}

let st = StyleSheet.create({
    socialIconButtonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    socialIcon: {}
})

function mapStateToProps(state) {
    return {
        offer: state.dataReducer.offer,
        establishment: state.dataReducer.establishment,
        establishmentOffers: state.dataReducer.establishmentOffers
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail)
