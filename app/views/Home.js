import React from 'react'
import {
    View,
    RefreshControl,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import DaySelector2 from '../components/DaySelector2'
import LoadingItem from '../components/Loading'
import PopupFilter from '../components/PopupFilter'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import {
    fnGetOffersByDayNumberAndCategory,
    fnSetUser,
    fnGetUserInfo,
    fnGetCategories,
    fnGetMemberships
} from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
import { bottomReached } from '../utils/utils'
import firebase from 'react-native-firebase'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPopupFilter: false,
            selectedDay: new Date().getDay(),
            selectedCategory: { id: 'all' }
        }
    }

    componentDidMount() {
        if (this.props.offers.length == 0) {
            this.loadOffers(new Date().getDay(), 'all', -1)
        }
        if (this.props.categories.length == 0) {
            this.props.fnGetCategories()
        }
        if (this.props.memberships.length == 0) {
            this.props.fnGetMemberships()
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.fnSetUser({
                    name: user._user.displayName,
                    email: user._user.email,
                    id: user._user.uid
                })
                this.props.fnGetUserInfo(user._user.uid)
            } else {
                this.props.fnSetUser(undefined)
            }
        })
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
                    <DaySelector2
                        style={{ flex: 1 }}
                        loadOffers={selectedDay => {
                            this.setState({ selectedDay }, () => {
                                this.loadOffers(
                                    selectedDay,
                                    this.state.selectedCategory.id,
                                    -1,
                                    true
                                )
                            })
                        }}
                    />
                    <View
                        style={[
                            gs.filterButtonContainer,
                            {
                                backgroundColor:
                                    this.state.selectedCategory.id == 'all'
                                        ? colors.WHITE
                                        : colors.PURPLE,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: colors.SILVER,
                                marginLeft: 5,
                                marginVertical: 2
                            }
                        ]}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ showPopupFilter: true })
                            }}>
                            <Icon
                                name={'filter-outline'}
                                size={30}
                                color={
                                    this.state.selectedCategory.id == 'all'
                                        ? colors.DARK
                                        : colors.WHITE
                                }></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.selectedCategory.id != 'all' && (
                    <View style={{ paddingHorizontal: 15, marginVertical: 5 }}>
                        <Txt
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                            {I18n.t('home.selectedCategory', {
                                categoryName: this.state.selectedCategory.name
                            })}
                        </Txt>
                    </View>
                )}

                {!this.props.isLoading && this.props.offers.length == 0 && (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                height: 200,
                                marginTop: 15,
                                marginBottom: 25
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
                                    this.state.selectedCategory.id,
                                    lastId
                                )
                            }
                        }
                    }}
                    scrollEventThrottle={20}
                    refreshControl={
                        <RefreshControl
                            style={{ backgroundColor: 'transparent' }}
                            refreshing={this.props.isRefreshing || false}
                            onRefresh={() => {
                                this.loadOffers(
                                    this.state.selectedDay,
                                    this.state.selectedCategory.id,
                                    -1,
                                    true
                                )
                            }}
                        />
                    }>
                    {this.props.offers.length > 0 && (
                        <FlatList
                            data={this.props.offers}
                            keyExtractor={(d, i) => i.toString()}
                            renderItem={d => {
                                return (
                                    <OfferListItem
                                        item={d.item}
                                        navigation={this.props.navigation}
                                        // showDays={true}
                                    />
                                )
                            }}
                        />
                    )}
                    {this.props.stillLoadingMore && <LoadingItem />}
                </ScrollView>
                {this.state.showPopupFilter && (
                    <PopupFilter
                        closePopup={() => {
                            this.setState({ showPopupFilter: false })
                        }}
                        onCategorySelected={selectedCategory => {
                            this.setState(
                                { selectedCategory, showPopupFilter: false },
                                () => {
                                    this.loadOffers(
                                        this.state.selectedDay,
                                        selectedCategory.id,
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
        stillLoadingMore: state.dataReducer.homeStillLoadingMore,
        categories: state.dataReducer.categoriesParents,
        memberships: state.dataReducer.memberships
    }
}

const mapDispatchToProps = {
    fnGetOffersByDayNumberAndCategory,
    fnSetUser,
    fnGetUserInfo,
    fnGetCategories,
    fnGetMemberships
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
