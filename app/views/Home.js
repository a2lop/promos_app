import React from 'react'
import { View, RefreshControl, Image } from 'react-native'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import DaySelector from '../components/DaySelector'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { fnGetOffers, fnGetOffersByDayNumber } from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'

class Home extends React.Component {
    componentDidMount() {
        this.loadOffers(new Date().getDay())
    }

    loadOffers(day, reset) {
        this.props.fnGetOffersByDayNumber(day, reset)
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                <DaySelector
                    loadOffers={day => {
                        this.loadOffers(day, true)
                    }}
                />

                {this.props.isLoading && <LoadingItem />}
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
                <FlatList
                    refreshControl={
                        <RefreshControl
                            style={{ backgroundColor: 'transparent' }}
                            refreshing={this.props.isRefreshing || false}
                            onRefresh={() => {
                                this.loadOffers()
                            }}
                        />
                    }
                    style={{ flex: 1 }}
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
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        offers: state.dataReducer.homeOffers,
        isLoading: state.dataReducer.isLoadingHomeOffers
    }
}

const mapDispatchToProps = { fnGetOffers, fnGetOffersByDayNumber }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
