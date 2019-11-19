import React from 'react'
import {
    ScrollView,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native'
import Txt from '../components/Txt'
// import LoadingItem from '../components/Loading'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import OfferListItem from '../components/OfferListItem'

import { globalStyles as gs } from '../utils/styles'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'
import { fnGetDiscoverOffers, fnSetOffer } from '../actions/actions'
import { colors } from '../utils/constants'

class Discover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCarousel: 0
        }
    }
    componentDidMount() {
        this.props.fnGetDiscoverOffers()
    }

    openOffer(offer) {
        this.props.fnSetOffer(offer)
        this.props.navigation.navigate('OfferDetail')
    }

    render() {
        return (
            <ScrollView
                style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                {/* <View ></View> */}
                <Carousel
                    autoplay={true}
                    autoplayDelay={3000}
                    loop={true}
                    data={this.props.bannerOffers}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onSnapToItem={index =>
                        this.setState({ currentCarousel: index })
                    }
                    renderItem={d => (
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.openOffer(d.item)
                                }}>
                                <Image
                                    source={{
                                        uri: d.item.logoBanner
                                    }}
                                    resizeMode={'stretch'}
                                    style={[gs.mainImage]}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <Pagination
                    dotsLength={this.props.bannerOffers.length}
                    activeDotIndex={this.state.currentCarousel}
                    containerStyle={{ paddingTop: 15, paddingVertical: 15 }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: colors.SILVER
                    }}
                    inactiveDotStyle={{
                        backgroundColor: colors.DARK
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                {/* <View style={gs.dfGenericContainer}> */}
                {/* <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                    {I18n.t('discover.outstandingOffers')}
                </Txt> */}
                <FlatList
                    data={this.props.offers}
                    keyExtractor={(d, i) => i.toString()}
                    renderItem={d => {
                        return (
                            <OfferListItem
                                item={d.item}
                                navigation={this.props.navigation}
                            />
                        )
                    }}></FlatList>
                {/* </View> */}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.dataReducer.bannerOffers)
    return {
        bannerOffers: state.dataReducer.discoverBannerOffers,
        offers: state.dataReducer.discoverOffers
    }
}

const mapDispatchToProps = { fnGetDiscoverOffers, fnSetOffer }

export default connect(mapStateToProps, mapDispatchToProps)(Discover)
