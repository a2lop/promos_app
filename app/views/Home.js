import React from 'react'
import {
    View,
    RefreshControl,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import DaySelector from '../components/DaySelector'
import LoadingItem from '../components/Loading'
import FilterPopup from '../components/FilterPopup'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import {
    fnGetOffers,
    fnGetOffersByDayNumberAndCategory
} from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
import { bottomReached } from '../utils/utils'
// import SplashScreen from 'react-native-splash-screen'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopupFilter: false,
            selectedDay: new Date().getDay(),
            selectedCategory: 'all'
        }
    }

    componentDidMount() {
        this.loadOffers(new Date().getDay(), 'all', -1)
    }

    loadOffers(day, categoryId, lastId, reset) {
        if (!this.props.isLoading) {
            this.props.fnGetOffersByDayNumberAndCategory(
                day,
                categoryId,
                lastId,
                reset
            )
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingHorizontal: 15
                    }}>
                    <DaySelector
                        style={{ flex: 1 }}
                        loadOffers={selectedDay => {
                            this.setState({ selectedDay }, () => {
                                this.loadOffers(
                                    selectedDay,
                                    this.state.selectedCategory,
                                    -1,
                                    true
                                )
                            })
                        }}
                    />
                    <View style={gs.filterButtonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ showPopupFilter: true })
                            }}>
                            <Icon name={'filter-outline'} size={25}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                {!this.props.isLoading && this.props.offers.length == 0 && (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                height: 200,
                                marginBottom: 25
                                // alignSelf: 'center'
                            }}
                            source={require('../assets/emptyContent.png')}
                        />
                        <Txt style={{ fontSize: 20 }}>
                            {I18n.t('home.noOffers')}
                        </Txt>
                    </View>
                )}
                <ScrollView
                    onScroll={({ nativeEvent }) => {
                        if (this.props.stillLoadingMore) {
                            if (bottomReached(nativeEvent)) {
                                let lastId =
                                    this.props.offers.length == 0
                                        ? -1
                                        : this.props.offers[
                                              this.props.offers.length - 1
                                          ].id
                                this.loadOffers(
                                    this.state.selectedDay,
                                    this.state.selectedCategory,
                                    lastId
                                )
                            }
                        }
                    }}
                    scrollEventThrottle={20}>
                    {this.props.offers.length > 0 && (
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    style={{ backgroundColor: 'transparent' }}
                                    refreshing={
                                        this.props.isRefreshing || false
                                    }
                                    onRefresh={() => {
                                        this.loadOffers(
                                            this.state.selectedDay,
                                            this.state.selectedCategory,
                                            -1,
                                            true
                                        )
                                    }}
                                />
                            }
                            data={this.props.offers}
                            keyExtractor={(d, i) => i.toString()}
                            renderItem={d => {
                                return (
                                    <OfferListItem
                                        item={d.item}
                                        navigation={this.props.navigation}
                                        showDays={true}
                                    />
                                )
                            }}
                        />
                    )}
                    {this.props.stillLoadingMore && <LoadingItem />}
                </ScrollView>
                {this.state.showPopupFilter && (
                    <FilterPopup
                        closePopup={() => {
                            this.setState({ showPopupFilter: false })
                        }}
                        onCategorySelected={selectedCategory => {
                            this.setState(
                                { selectedCategory, showPopupFilter: false },
                                () => {
                                    this.loadOffers(
                                        this.state.selectedDay,
                                        selectedCategory,
                                        -1,
                                        true
                                    )
                                }
                            )
                        }}
                    />
                )}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        offers: state.dataReducer.homeOffers,
        isLoading: state.dataReducer.isLoadingHomeOffers,
        stillLoadingMore: state.dataReducer.homeStillLoadingMore
    }
}

const mapDispatchToProps = { fnGetOffers, fnGetOffersByDayNumberAndCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
