import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'
import { globalStyles as gs } from '../utils/styles'
import { colors, constants } from '../utils/constants'
import { StackActions, NavigationActions } from 'react-navigation'

import {} from '../actions/actions'
// import { wsDisconnectReader } from '../services/user'
import {} from '../utils/utils'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userPicture: '',
            username: '',
            usesNumber: 0
        }
    }

    componentDidMount() {}

    logout() {}

    shareApp() {}

    render() {
        return (
            <SafeAreaView style={[gs.safeArea, st.container]}>
                <View style={st.userContainer}>
                    <Icon name={'account'} size={80} color={colors.WHITE} />
                    <TouchableOpacity>
                        <Txt style={st.userName}>{I18n.t('sidebar.login')}</Txt>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({
                                    routeName: 'DrawerNavigator',
                                    action: NavigationActions.navigate({
                                        routeName: 'Main'
                                    })
                                })
                            ]
                        })
                        this.props.navigation.dispatch(resetAction)
                        // this.props.navigation.dispatch(resetAction)
                    }}>
                    <View style={st.labelContainer}>
                        <Icon name={'home'} size={22} style={st.labelIcon} />
                        <Txt style={st.labelText}>{I18n.t('sidebar.home')}</Txt>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({
                                    routeName: 'DrawerNavigator',
                                    action: NavigationActions.navigate({
                                        routeName: 'Main',
                                        action: NavigationActions.navigate({
                                            routeName: 'MyBooks'
                                        })
                                    })
                                })
                            ]
                        })
                        this.props.navigation.dispatch(resetAction)
                    }}>
                    <TouchableOpacity
                        style={st.labelContainer}
                        onPress={() => {
                            const resetAction = StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'DrawerNavigator',
                                        action: NavigationActions.navigate({
                                            routeName: 'Establishments'
                                        })
                                    })
                                ]
                            })
                            this.props.navigation.dispatch(resetAction)
                        }}>
                        <Icon name={'domain'} size={22} style={st.labelIcon} />
                        <Txt style={st.labelText}>
                            {I18n.t('sidebar.establishments')}
                        </Txt>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={st.labelContainer}
                        onPress={() => {
                            const resetAction = StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'DrawerNavigator',
                                        action: NavigationActions.navigate({
                                            routeName: 'Search'
                                        })
                                    })
                                ]
                            })
                            this.props.navigation.dispatch(resetAction)
                        }}>
                        <Icon name={'shape'} size={22} style={st.labelIcon} />
                        <Txt style={st.labelText}>
                            {I18n.t('sidebar.categories')}
                        </Txt>
                    </TouchableOpacity>
                    <View style={st.labelContainer}>
                        <Icon
                            name={'information-outline'}
                            size={22}
                            style={st.labelIcon}
                        />
                        <Txt style={st.labelText}>
                            {I18n.t('sidebar.about')}
                        </Txt>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

Sidebar.propTypes = {
    navigation: PropTypes.object
}

let st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.RED
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    labelIcon: {
        // width: 40,
        marginLeft: 15,
        marginRight: 10,
        color: colors.WHITE
    },
    labelText: {
        flex: 1,
        color: colors.WHITE,
        fontSize: 18
    },
    userContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    userName: { fontSize: 22, color: colors.WHITE }
})

// export default Sidebar

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
