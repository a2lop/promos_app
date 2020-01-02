import React from 'react'
import { View, RefreshControl } from 'react-native'
// import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { wsGetBirthdayOffers } from '../services/data'
// import I18n from '../utils/i18n'
// import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import LoadingItem from '../components/Loading'

import { colors } from '../utils/constants'

class BirthdayOffers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { offers: [], isLoading: true }
    }

    componentDidMount() {
        this.loadOffers()
    }

    loadOffers() {
        this.setState({ isLoading: true }, () => {
            wsGetBirthdayOffers().then(offers => {
                this.setState({ offers, isLoading: false })
            })
        })
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                {this.state.isLoading && <LoadingItem />}
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
                    data={this.state.offers}
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
    return { offers: state.dataReducer.homeOffers }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayOffers)
