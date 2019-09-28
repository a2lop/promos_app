import React, { Component } from 'react'
import { View, YellowBox, Platform } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import SplashScreen from 'react-native-splash-screen'

YellowBox.ignoreWarnings(['ViewPagerAndroid: ...'])

import { createAppContainer } from 'react-navigation'

import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import I18n from '../utils/i18n'

import HeaderLogo from '../components/HeaderLogo'
import dataReducer from '../reducers/dataReducer'

import Sidebar from '../components/Sidebar'

import Wizard from '../views/Wizard'

import Home from '../views/Home'
import Discover from '../views/Discover'
import Profile from '../views/Profile'

import OfferDetail from '../views/OfferDetail'
import Establishment from '../views/Establishment'

import SearchText from '../views/SearchText'
import SearchCategories from '../views/SearchCategories'

import { colors } from '../utils/constants'
import DefaultFooterTabBar from '../components/DefaultFooterTabBar'
import HeaderGeneric from '../components/HeaderGeneric'
import TabBarDefault from '../components/TabBarDefault'
// import Txt from '../components/Txt'
// import TabBarDefault from '../components/TabBarDefault'

const reducer = combineReducers({
    dataReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

const MainStack = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarPosition: 'bottom',
                title: 'Home'
            }
        },
        Discover: {
            screen: Discover,
            navigationOptions: {
                tabBarPosition: 'bottom',
                title: 'Discover'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarPosition: 'bottom',
                title: 'Profile'
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: DefaultFooterTabBar,
        tabBarOptions: {
            tabStyle: {
                height: 40
            }
        },
        navigationOptions: {
            swipeEnabled: true,
            header: <HeaderLogo />
        }
    }
)

const OfferStack = createMaterialTopTabNavigator(
    {
        OfferDetail: {
            screen: OfferDetail,
            navigationOptions: {
                title: 'offerDetail.viewTitle'
            }
        },
        Establishment: {
            screen: Establishment,
            navigationOptions: {
                title: 'establishment.viewTitle'
            }
        }
    },
    {
        initialRouteName: 'OfferDetail',
        tabBarComponent: TabBarDefault
    }
)

const SearchStack = createMaterialTopTabNavigator(
    {
        SearchText: {
            screen: SearchText,
            navigationOptions: {
                title: 'searchText.viewTitle'
            }
        },
        SearchCategories: {
            screen: SearchCategories,
            navigationOptions: {
                title: 'searchCategories.viewTitle'
            }
        }
    },
    {
        initialRouteName: 'SearchCategories',
        tabBarComponent: TabBarDefault
    }
)

const SessionStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        },
        Offer: {
            screen: OfferStack,
            navigationOptions: ({ navigation }) => ({
                header: (
                    <HeaderGeneric
                        navigation={navigation}
                        viewTitle={'offerDetail.viewTitle'}
                    />
                ),
                gesturesEnabled: false
            })
        },
        Search: {
            screen: SearchStack,
            navigationOptions: ({ navigation }) => ({
                header: (
                    <HeaderGeneric
                        navigation={navigation}
                        viewTitle={'offerDetail.viewTitle'}
                    />
                ),
                gesturesEnabled: false
            })
        },
        Wizard: {
            screen: Wizard,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Search'
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
        Session: {
            screen: SessionStack
        }
    },
    {
        initialRouteName: 'Session',
        swipeEnabled: true,
        contentComponent: Sidebar,
        navigationOptions: {
            gesturesEnabled: false
        }
    }
)

const RootStack = (hasSession = false) => {
    return createStackNavigator(
        {
            // Login: {
            //     screen: LoginView,
            //     navigationOptions: {
            //         header: null,
            //         gesturesEnabled: false,
            //     },
            // },
            DrawerNavigator: {
                screen: DrawerNavigator,
                navigationOptions: {
                    header: null,
                    gesturesEnabled: false
                }
            }
        },
        {
            // initialRouteName: hasSession == '1' ? 'DrawerNavigator' : 'Login',
            initialRouteName: 'DrawerNavigator',
            navigationOptions: {
                header: { headerMode: 'screen', visible: false }
            }
        }
    )
}

// const AppContainer = createAppContainer(RootStack(true))

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: true
        }
    }

    componentDidMount() {
        // SplashScreen.hide()
    }

    render() {
        if (this.state.isLoaded) {
            const AppContainer = createAppContainer(RootStack(false))
            return (
                <Provider store={store}>
                    <View style={{ flex: 1 }}>
                        <AppContainer />
                    </View>
                </Provider>
            )
        } else {
            return <View></View>
        }
    }
}
