import * as React from 'react'
import { View, TouchableOpacity, Animated } from 'react-native'
import Txt from './Txt'
import { colors } from '../utils/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'
import { globalStyles as gs } from '../utils/styles'
import SafeAreaView from 'react-native-safe-area-view'

const DefaultFooterTabBar = props => {
    const { navigationState, navigation, getLabelText, iconName } = props

    let bgColor = new Animated.Value(0)
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.screen != prevProps.screen) {
            if (this.props.screen == 3) {
                bgColor = new Animated.Value(1)
                Animated.timing(this.state.bgColor, {
                    toValue: 100,
                    duration: 500
                }).start()
            } else {
                this.setState({ bgColor: new Animated.Value(0) }, () => {
                    Animated.timing(this.state.bgColor, {
                        toValue: 0,
                        duration: 500
                    }).start()
                })
            }
        }
    }

    return (
        <SafeAreaView style={gs.barSafeArea}>
            <View
                style={{
                    paddingTop: 5,
                    height: 50,
                    backgroundColor: bgColor.interpolate({
                        inputRange: [0, 100],
                        outputRange: [colors.YELLOW, colors.PURPLE]
                    }),
                    flexDirection: 'row'
                }}>
                {navigationState.routes.map((route, index) => {
                    const label = getLabelText({ route })
                    return (
                        <View
                            key={index}
                            style={{
                                alignItems: 'center',
                                flex: 1
                            }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center' }}
                                onPress={() =>
                                    navigation.navigate(route.routeName)
                                }>
                                <Icon
                                    name={
                                        label === 'Home'
                                            ? 'home'
                                            : label === 'Discover'
                                            ? 'compass'
                                            : 'account'
                                    }
                                    size={20}
                                    color={
                                        navigationState.index == index
                                            ? colors.PURPLE
                                            : colors.WHITE
                                    }
                                    style={gs.iconFooter}
                                />
                                <Txt
                                    style={{
                                        color:
                                            navigationState.index == index
                                                ? colors.PURPLE
                                                : colors.WHITE,
                                        fontSize: 14,
                                        fontWeight: 'bold'
                                    }}>
                                    {I18n.t(`common.tabs.footer${label}`)}
                                </Txt>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

// export default DefaultFooterTabBar

function mapStateToProps(state) {
    return {
        screen: state.dataReducer.mainScreen
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultFooterTabBar)
