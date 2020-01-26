import React from 'react'
import { ScrollView, View, RefreshControl, FlatList } from 'react-native'
import MembershipSimple from '../components/MembershipSimple'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

import { globalStyles as gs } from '../utils/styles'
import { fnGetMemberships } from '../actions/actions'
import { colors } from '../utils/constants'

class Memberships extends React.Component {
    componentDidMount() {
        if (this.props.memberships.length == 0) {
            this.props.fnGetMemberships()
        }
    }

    render() {
        return (
            // <View style={gs.f1}>
            //     <ScrollView
            //         style={[
            //             gs.dfPageContainer,
            //             { paddingVertical: 15, paddingHorizontal: 15 }
            //         ]}>
            <FlatList
                data={this.props.memberships}
                keyExtractor={(d, i) => i.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'center' }}
                style={{
                    flexDirection: 'column',
                    backgroundColor: colors.SILVER_LIGHT,
                    alignContent: 'center',
                    paddingTop: 10,
                    zIndex: 10
                }}
                renderItem={d => {
                    return (
                        <MembershipSimple
                            item={d.item}
                            navigation={this.props.navigation}
                        />
                    )
                }}></FlatList>
            //     </ScrollView>
            // </View>
        )
    }
}

function mapStateToProps(state) {
    return { memberships: state.dataReducer.memberships }
}

const mapDispatchToProps = { fnGetMemberships }

export default connect(mapStateToProps, mapDispatchToProps)(Memberships)
