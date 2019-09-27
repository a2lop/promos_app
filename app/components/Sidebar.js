import React, { Component } from 'react'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
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
            usesNumber: 0,
        }
    }

    componentDidMount() {}

    logout() {}

    shareApp() {}

    render() {
        return (
            <SafeAreaView style={[gs.safeArea, st.container]}>
                <ScrollView style={{ height: '100%', marginBottom: 20 }}>
                    <View style={st.headerContainer}>
                        <TouchableOpacity
                            style={st.headerCloseButtonContainer}
                            onPress={() => {
                                this.props.navigation.toggleDrawer()
                            }}>
                            <Icon
                                name={'close'}
                                size={25}
                                color={colors.ORANGE}
                            />
                        </TouchableOpacity>
                        <View style={st.headerTitleContainer}>
                            <Txt style={st.sidebarTitle}>
                                {I18n.t('sidebar.sidebarTitle')}
                            </Txt>
                        </View>
                    </View>
                    <View style={gs.mb15}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Home')
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({
                                            routeName: 'DrawerNavigator',
                                            action: NavigationActions.navigate({
                                                routeName: 'Main',
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                                // this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'home'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.home')}
                                </Txt>
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
                                                action: NavigationActions.navigate(
                                                    { routeName: 'MyBooks' },
                                                ),
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'book-multiple'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.myBooks')}
                                </Txt>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.fnGetBooks(
                                    false,
                                    1,
                                    'wishlist',
                                    '',
                                    'last_added',
                                    'desc',
                                    true,
                                )
                                // this.props.navigation.navigate('MyBooks')
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({
                                            routeName: 'DrawerNavigator',
                                            action: NavigationActions.navigate({
                                                routeName: 'Main',
                                                action: NavigationActions.navigate(
                                                    { routeName: 'MyBooks' },
                                                ),
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'pin'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.wishlist')}
                                </Txt>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate('MyProfile')
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({
                                            routeName: 'DrawerNavigator',
                                            action: NavigationActions.navigate({
                                                routeName: 'Main',
                                                action: NavigationActions.navigate(
                                                    { routeName: 'MyProfile' },
                                                ),
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'account-circle'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.profile')}
                                </Txt>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate('MyProfile')
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({
                                            routeName: 'DrawerNavigator',
                                            action: NavigationActions.navigate({
                                                routeName: 'Main',
                                                action: NavigationActions.navigate(
                                                    {
                                                        routeName:
                                                            'MyProfileFriends',
                                                    },
                                                ),
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'account-multiple'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.friends')}
                                </Txt>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // this.props.navigation.navigate('Conversations')
                                const resetAction = StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({
                                            routeName: 'DrawerNavigator',
                                            action: NavigationActions.navigate({
                                                routeName: 'Main',
                                                action: NavigationActions.navigate(
                                                    {
                                                        routeName:
                                                            'Conversations',
                                                    },
                                                ),
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'message-reply'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.messages')}
                                </Txt>
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
                                                routeName: 'Discover',
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'compass'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.discover')}
                                </Txt>
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
                                                routeName: 'RecommendedBooks',
                                            }),
                                        }),
                                    ],
                                })
                                this.props.navigation.dispatch(resetAction)
                            }}>
                            <View style={st.labelContainer}>
                                <Icon
                                    name={'book-open-page-variant'}
                                    size={22}
                                    style={st.labelIcon}
                                />
                                <Txt style={st.labelText}>
                                    {I18n.t('sidebar.recommendedBooks')}
                                </Txt>
                            </View>
                        </TouchableOpacity>
                        {I18n.locale == 'fr' && (
                            <TouchableOpacity
                                onPress={() => {
                                    openUrl(
                                        'https://www.babelio.com/prix-babelio',
                                    )
                                }}>
                                <View style={st.labelContainer}>
                                    <Icon
                                        name={'trophy'}
                                        size={22}
                                        style={st.labelIcon}
                                    />
                                    <Txt style={st.labelText}>
                                        {I18n.t('sidebar.linkPrix')}
                                    </Txt>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

Sidebar.propTypes = {
    navigation: PropTypes.object,
}

let st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
    },
    profileContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    profileImage: {
        marginHorizontal: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileName: {
        fontSize: 16,
        color: colors.ORANGE,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    labelIcon: {
        // width: 40,
        marginLeft: 15,
        marginRight: 10,
        color: colors.WHITE,
    },
    labelText: {
        flex: 1,
        color: colors.WHITE,
        fontSize: 18,
    },
    labelTextGray: {
        flex: 1,
        color: colors.GRAY,
        fontSize: 16,
        marginLeft: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    headerCloseButtonContainer: {
        flex: 1,
    },
    headerTitleContainer: {
        flex: 1,
    },
    sidebarTitle: {
        alignSelf: 'flex-end',
        color: colors.ORANGE,
        fontSize: 17,
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 15,
        width: '100%',
        paddingLeft: 10,
    },
    logoutButtonContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelLogout: {
        fontSize: 17,
        color: colors.WHITE,
        marginRight: 5,
    },
    txtVersion: {
        color: colors.GRAY,
        marginLeft: 15,
        alignSelf: 'flex-end',
    },
})

// export default Sidebar

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar)
