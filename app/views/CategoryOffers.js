import React from 'react'
import { View } from 'react-native'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { fnGetOffers } from '../actions/actions'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

import { wsGetCategoryOffers } from '../services/data'

class CategoryOffers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { offers: [] }
    }

    componentDidMount() {
        this.loadOffers()
    }

    loadOffers() {
        wsGetCategoryOffers(this.props.navigation.getParam('categoryId')).then(
            offers => {
                this.setState({ offers })
            }
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                <FlatList
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
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryOffers)
