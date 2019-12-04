import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'
import { SafeAreaView } from 'react-navigation'

// import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class HeaderGeneric extends React.Component {
    componentDidMount() {
        console.log('here', this.props.navigation.getParam('viewTitle'))
    }
    render() {
        return (
            <SafeAreaView
                style={gs.barSafeArea}
                forceInset={{ top: 'always', bottom: 'never' }}>
                <View style={gs.headerContainer}>
                    <TouchableOpacity
                        style={gs.headerIconContainer}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <Icon
                            name={'chevron-left'}
                            size={30}
                            color={colors.WHITE}
                        />
                    </TouchableOpacity>
                    <View style={gs.headerTextContainer}>
                        <Txt style={gs.headerText} numberOfLines={1}>
                            {this.props.navigation.getParam('viewTitle')}
                        </Txt>
                    </View>
                    <View style={gs.headerFakeIcon} />
                </View>
            </SafeAreaView>
        )
    }
}

export default HeaderGeneric
