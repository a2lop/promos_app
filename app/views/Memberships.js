import React from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import MembershipSimple from '../components/MembershipSimple'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

import { globalStyles as gs } from '../utils/styles'
import { fnGetMemberships } from '../actions/actions'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

class Memberships extends React.Component {
    componentDidMount() {
        if (this.props.memberships.length == 0) {
            this.props.fnGetMemberships()
        }
    }

    render() {
        return (
            // <ScrollView
            //     style={[
            //         gs.dfPageContainer,
            //         { paddingVertical: 15, paddingHorizontal: 15 }
            //     ]}>
            <FlatList
                refreshControl={
                    <RefreshControl
                        style={{ backgroundColor: 'transparent' }}
                        refreshing={this.props.isRefreshing || false}
                        onRefresh={() => {
                            this.props.fnGetMemberships()
                        }}
                    />
                }
                data={this.props.memberships}
                keyExtractor={(d, i) => i.toString()}
                numColumns={2}
                style={{
                    flexDirection: 'column',
                    backgroundColor: colors.SILVER_LIGHT
                }}
                renderItem={d => {
                    return (
                        <View style={gs.f1}>
                            <MembershipSimple
                                item={d.item}
                                navigation={this.props.navigation}
                            />
                        </View>
                    )
                }}></FlatList>
            // </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return { memberships: state.dataReducer.memberships }
}

const mapDispatchToProps = { fnGetMemberships }

export default connect(mapStateToProps, mapDispatchToProps)(Memberships)
