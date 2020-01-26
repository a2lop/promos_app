import React from 'react'
import { View, Image } from 'react-native'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { fnGetOffers } from '../actions/actions'
import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

import { wsGetCategoryOffers } from '../services/data'
import { concat } from 'lodash'
import { bottomReached } from '../utils/utils'

class CategoryOffers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { offers: [], isLoading: false, stillLoadingMore: true }
    }

    componentDidMount() {
        this.loadOffers(-1)
    }

    loadOffers(lastId, reset) {
        if (!this.state.isLoading) {
            this.setState(
                {
                    isLoading: true,
                    offers: reset ? [] : this.state.offers,
                    stillLoadingMore: true
                },
                () => {
                    wsGetCategoryOffers(
                        this.props.navigation.getParam('categoryId'),
                        lastId
                    ).then(offers => {
                        this.setState({
                            offers: concat(this.state.offers, offers),
                            isLoading: false,
                            stillLoadingMore: offers.length == 10
                        })
                    })
                }
            )
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                <ScrollView
                    onScroll={({ nativeEvent }) => {
                        if (this.state.stillLoadingMore) {
                            if (bottomReached(nativeEvent)) {
                                let lastId =
                                    this.state.offers.length == 0
                                        ? -1
                                        : this.state.offers[
                                              this.state.offers.length - 1
                                          ].id
                                this.loadOffers(lastId)
                            }
                        }
                    }}
                    scrollEventThrottle={20}>
                    {!this.state.isLoading && this.state.offers.length == 0 && (
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <Image
                                resizeMode="contain"
                                style={{
                                    height: 200,
                                    marginBottom: 25
                                }}
                                source={require('../assets/noCategoryOffers.png')}
                            />
                            <Txt style={{ fontSize: 20 }}>
                                {I18n.t('categoryOffers.noOffers')}
                            </Txt>
                        </View>
                    )}
                    <FlatList
                        data={this.state.offers}
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
                    {this.state.isLoading && <LoadingItem />}
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOffers)
