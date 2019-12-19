import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class HeaderMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = { bgColor: new Animated.Value(0) }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.screen != prevProps.screen) {
            if (this.props.screen == 3) {
                this.setState({ bgColor: new Animated.Value(1) }, () => {
                    Animated.timing(this.state.bgColor, {
                        toValue: 100,
                        duration: 500
                    }).start()
                })
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

    render() {
        return (
            // <SafeAreaView style={gs.barSafeArea}>
            <SafeAreaView
                style={{
                    backgroundColor: colors.YELLOW
                }}>
                <View
                    style={[
                        gs.headerContainer,
                        { backgroundColor: colors.YELLOW }
                    ]}>
                    <TouchableOpacity
                        style={{ zIndex: 1 }}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}>
                        <Icon name={'menu'} size={25} color={colors.WHITE} />
                    </TouchableOpacity>
                    <View style={gs.headerMainContainer}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={gs.headerImage}
                        />
                    </View>
                    <TouchableOpacity
                        // style={gs.headerIconContainer}
                        onPress={() => {
                            this.props.navigation.navigate('SearchText')
                        }}>
                        <Icon name={'magnify'} size={25} color={colors.WHITE} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

// export default HeaderMain

function mapStateToProps(state) {
    return {
        screen: state.dataReducer.mainScreen
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain)
