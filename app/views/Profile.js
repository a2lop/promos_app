import React from 'react'
import { ScrollView, View, StyleSheet, TextInput } from 'react-native'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Txt from '../components/Txt'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Profile extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <View
                style={[
                    // gs.f1,
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        backgroundColor: colors.RED
                    }
                ]}>
                <View style={st.inputContainer}>
                    <TextInput
                        style={st.input}
                        placeholder={I18n.t('profile.phEmail')}
                        placeholderTextColor={colors.WHITE}></TextInput>
                    <Icon
                        name={'email'}
                        size={22}
                        color={colors.YELLOW}
                        style={st.inputIcon}
                    />
                </View>
                <View style={st.inputContainer}>
                    <TextInput
                        style={st.input}
                        placeholder={I18n.t('profile.phPassword')}
                        placeholderTextColor={colors.WHITE}></TextInput>
                    <Icon
                        name={'lock-question'}
                        size={22}
                        color={colors.YELLOW}
                        style={st.inputIcon}
                    />
                </View>

                <View style={st.buttonContainer}>
                    <TouchableOpacity style={st.mainButton}>
                        <Txt style={st.buttonText}>
                            {I18n.t('profile.login')}
                        </Txt>
                    </TouchableOpacity>
                </View>
                <View style={[gs.fdRow, { marginBottom: 15 }]}>
                    <Txt style={{ color: colors.WHITE }}>
                        {I18n.t('profile.noAccount')}
                    </Txt>
                    <TouchableOpacity>
                        <Txt style={{ color: colors.YELLOW }}>
                            {I18n.t('profile.register')}
                        </Txt>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        gs.fdRow,
                        gs.mb15,
                        { width: '65%', alignItems: 'center' }
                    ]}>
                    <View
                        style={{
                            borderBottomColor: colors.WHITE,
                            borderBottomWidth: 1,
                            flex: 1
                        }}></View>
                    <Txt style={{ color: colors.WHITE }}>
                        {I18n.t('profile.or')}
                    </Txt>
                    <View
                        style={{
                            borderBottomColor: colors.WHITE,
                            borderBottomWidth: 1,
                            flex: 1
                        }}></View>
                </View>
                <View style={[gs.fdRow, gs.mb15]}>
                    <Txt style={{ color: colors.WHITE }}>
                        {I18n.t('profile.loginWith')}
                    </Txt>
                </View>
                <View style={st.buttonContainer}>
                    <TouchableOpacity style={st.fbButton}>
                        <Icon
                            name={'facebook'}
                            size={22}
                            color={colors.WHITE}
                            style={st.buttonIcon}
                        />
                        <Txt style={st.fbButtonText}>
                            {I18n.t('profile.login')}
                        </Txt>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const st = StyleSheet.create({
    inputContainer: { width: '65%', marginBottom: 30 },
    inputIcon: { position: 'absolute', top: -3, left: 5 },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.YELLOW,
        paddingLeft: 30,
        paddingBottom: 5,
        color: colors.YELLOW
    },
    buttonContainer: { marginBottom: 15 },
    mainButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.YELLOW,
        borderRadius: 10
    },
    buttonText: { color: colors.DARK },
    fbButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.BLUE_FB,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    fbButtonText: { color: colors.WHITE },
    buttonIcon: {
        // position: 'absolute',
        // // top: -3,
        // left: 5
    }
})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
