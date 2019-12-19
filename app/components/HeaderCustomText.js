import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'
import { SafeAreaView } from 'react-navigation'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class HeaderCustomText extends React.Component {
    render() {
        return (
            <SafeAreaView
                style={gs.barSafeArea}
                forceInset={{ top: 'always', bottom: 'never' }}>
                <View style={gs.headerContainer}>
                    <TouchableOpacity
                        style={{ width: 40 }}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <Icon
                            name={'chevron-left'}
                            size={30}
                            color={colors.WHITE}
                        />
                    </TouchableOpacity>
                    <View style={[gs.headerTextContainer, { zIndex: 1 }]}>
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

export default HeaderCustomText
