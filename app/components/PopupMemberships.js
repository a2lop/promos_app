import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native'
import Txt from './Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { fnGetMemberships } from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
// import SplashScreen from 'react-native-splash-screen'

class PopupMemberships extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memberships: []
        }
    }
    componentDidMount() {
        if (this.props.memberships.length == 0) {
            this.props.fnGetMemberships()
        }
        this.loadMemberships()
    }

    loadMemberships() {
        let memberships = JSON.parse(JSON.stringify(this.props.memberships))
        if (this.props.userMemberships.length > 0) {
            memberships.forEach(c => {
                c.isSelected =
                    this.props.userMemberships.filter(cat => cat.id == c.id)
                        .length > 0
                // memberships.push(c)
            })
        }
        // else {
        //     memberships = JSON.parse(JSON.stringify(this.props.memberships))
        // }
        this.setState({ memberships })
    }

    markAsSelected(membership) {
        let memberships = this.state.memberships
        memberships.forEach(c => {
            if (c.id == membership.id) {
                c.isSelected = true
            }
        })
        this.setState({ memberships })
    }

    render() {
        return (
            <View style={[gs.fullscreenContainer, { flex: 1 }]}>
                <View style={[gs.fdRow, { marginBottom: 15 }]}>
                    <Txt style={[gs.f1, st.mainText]}>
                        {I18n.t('popupMemberships.chooseMembership')}
                    </Txt>
                    <View style={gs.filterButtonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.closePopup()
                            }}>
                            <Icon
                                name={'close'}
                                size={25}
                                color={colors.WHITE}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'center' }}
                        data={this.state.memberships}
                        keyExtractor={(d, i) => i.toString()}
                        numColumns={3}
                        style={{
                            flexDirection: 'column'
                        }}
                        renderItem={d => {
                            return (
                                <View
                                    style={[
                                        st.categoryContainer,
                                        { flex: 1, zIndex: 2 }
                                    ]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.markAsSelected(d.item)
                                            this.props.addMembership(d.item)
                                        }}>
                                        <Image
                                            source={{
                                                uri: d.item.image,
                                                cache: 'only-if-cached'
                                            }}
                                            style={{
                                                // aspectRatio: 1
                                                height: 45
                                            }}
                                        />
                                        <Txt
                                            style={st.categoryName}
                                            numberOfLines={1}>
                                            {d.item.name}
                                        </Txt>
                                    </TouchableOpacity>
                                    {d.item.isSelected && (
                                        <View style={st.cornerContainer}>
                                            <Icon
                                                name={'check-bold'}
                                                color={colors.PURPLE}
                                                size={20}></Icon>
                                        </View>
                                    )}
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}

const st = StyleSheet.create({
    mainText: {
        color: colors.WHITE,
        fontSize: 18
    },
    categoryContainer: {
        backgroundColor: colors.WHITE,
        // flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 4,
        marginBottom: 8,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        maxWidth: '35%'
        // minWidth: '31%'
    },
    categoryName: {
        textAlign: 'center'
    },

    cornerContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: colors.YELLOW,
        borderRadius: 15,
        paddingHorizontal: 4,
        paddingVertical: 4,
        marginRight: 2,
        marginTop: 2
    }
})

function mapStateToProps(state) {
    return {
        memberships: state.dataReducer.memberships,
        userMemberships: state.dataReducer.userMemberships
    }
}

const mapDispatchToProps = { fnGetMemberships }

export default connect(mapStateToProps, mapDispatchToProps)(PopupMemberships)
