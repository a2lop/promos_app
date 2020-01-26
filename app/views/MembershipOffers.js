import React from 'react'
import { View, Image } from 'react-native'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { wsGetMembershipOffers } from '../services/data'
import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

class MembershipOffers extends React.Component {
    constructor(props) {
        super(props)
        this.state = { offers: [], isLoading: false }
    }

    componentDidMount() {
        this.loadOffers()
    }

    loadOffers() {
        this.setState({ isLoading: true }, () => {
            wsGetMembershipOffers(
                this.props.navigation.getParam('membershipId')
            ).then(offers => {
                this.setState({ offers, isLoading: false })
            })
        })
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.SILVER_LIGHT, flex: 1 }}>
                {this.state.isLoading && <LoadingItem />}
                {!this.state.isLoading && this.state.offers.length == 0 && (
                    <View
                        style={{ alignItems: 'center', paddingHorizontal: 15 }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                height: 200,
                                marginTop: 15,
                                marginBottom: 25
                            }}
                            source={require('../assets/emptyContent6.png')}
                        />
                        <Txt style={{ fontSize: 20, textAlign: 'center' }}>
                            {I18n.t('membershipOffers.noOffers', {
                                membership: this.props.navigation.getParam(
                                    'viewTitle'
                                )
                            })}
                        </Txt>
                    </View>
                )}
                <FlatList
                    // refreshControl={
                    //     <RefreshControl
                    //         style={{ backgroundColor: 'transparent' }}
                    //         refreshing={this.props.isRefreshing || false}
                    //         onRefresh={() => {
                    //             this.loadOffers()
                    //         }}
                    //     />
                    // }
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

export default connect(mapStateToProps, mapDispatchToProps)(MembershipOffers)
