import React from 'react'
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class HeaderMain extends React.Component {
    render() {
        return (
            <SafeAreaView style={gs.barSafeArea}>
                <View style={gs.headerContainer}>
                    <TouchableOpacity
                        style={gs.headerIconContainer}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}>
                        <Icon name={'menu'} size={20} color={colors.WHITE} />
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

export default HeaderMain
