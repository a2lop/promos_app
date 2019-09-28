import * as React from 'react'
import { View } from 'react-native'
import Txt from './Txt'
import { colors, fonts } from '../utils/constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

import I18n from '../utils/i18n'

const TabBarDefault = props => {
    const { navigationState, navigation, position, getLabelText } = props
    return (
        <View
            style={{
                paddingTop: 2,
                height: 27,
                backgroundColor: colors.RED,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderBottomWidth: 0
            }}>
            {navigationState.routes.map((route, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            borderBottomWidth: 5,
                            borderBottomColor:
                                navigationState.index == index
                                    ? colors.GRAY
                                    : colors.RED,
                            alignItems: 'center',
                            flex: 1
                        }}>
                        <TouchableOpacity
                            style={{ paddingBottom: 6 }}
                            onPress={() =>
                                navigation.navigate(route.routeName)
                            }>
                            <Txt
                                style={{ color: colors.WHITE, fontSize: 13 }}
                                numberOfLines={1}>
                                {I18n.t(getLabelText({ route })).toUpperCase()}
                            </Txt>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

export default TabBarDefault
