import React from 'react'
import { View } from 'react-native'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { fnGetOffers } from '../actions/actions'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'

class Home extends React.Component {
    componentDidMount() {
        this.loadOffers()
    }

    loadOffers() {
        // this.props.fnGetOffers()
    }

    render() {
        return (
            <View>
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
            </View>
        )
    }
}

function mapStateToProps(state) {
    return { offers: state.dataReducer.homeOffers }
}

const mapDispatchToProps = { fnGetOffers }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
