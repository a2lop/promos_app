import React from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'

import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 1,
            txtEmail: '',
            txtPassword: '',
            txtRegisterEmail: '',
            txtRegisterPassword1: '',
            txtRegisterPassword2: ''
        }
    }
    componentDidMount() {
        // this.props.navigation.addListener('willFocus', route => {
        //     this.props.fnSetMainScreen(3)
        // })
        // this.props.navigation.addListener('willBlur', route => {
        //     this.props.fnSetMainScreen(2)
        // })
    }

    render() {
        return (
            <ScrollView
                style={{
                    height: '100%',
                    backgroundColor: colors.YELLOW
                }}
                // contentContainerStyle={{
                //     alignItems: 'center'
                // }}
            >
                {(this.state.view == 1 || this.state.view == 2) && (
                    <View>
                        <View
                            style={{
                                alignItems: 'center',
                                marginBottom: 30,
                                marginTop: 30
                            }}>
                            <Image
                                resizeMode="contain"
                                style={{
                                    height: 75
                                }}
                                source={require('../assets/logo_square.png')}
                            />
                        </View>
                        {this.state.view == 1 && (
                            <View
                                style={{
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                <View style={st.inputContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        style={st.input}
                                        placeholder={I18n.t('profile.phEmail')}
                                        placeholderTextColor={colors.WHITE}
                                        underlineColorAndroid="rgba(0,0,0,0)"
                                        value={this.state.txtEmail}
                                        onChangeText={txtEmail => {
                                            this.setState({ txtEmail })
                                        }}
                                    />
                                    <Icon
                                        name={'email'}
                                        size={22}
                                        color={colors.PURPLE}
                                        style={st.inputIcon}
                                    />
                                </View>
                                <View style={st.inputContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        style={st.input}
                                        placeholder={I18n.t(
                                            'profile.phPassword'
                                        )}
                                        placeholderTextColor={colors.WHITE}
                                        underlineColorAndroid="rgba(0,0,0,0)"
                                        value={this.state.txtPassword}
                                        onChangeText={txtPassword => {
                                            this.setState({ txtPassword })
                                        }}
                                    />
                                    <Icon
                                        name={'lock-question'}
                                        size={22}
                                        color={colors.PURPLE}
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
                                    <Txt style={st.defaultLabel}>
                                        {I18n.t('profile.noAccount')}
                                    </Txt>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ view: 2 })
                                        }}>
                                        <Txt
                                            style={{
                                                color: colors.PURPLE,
                                                fontWeight: 'bold'
                                            }}>
                                            {I18n.t('profile.register')}
                                        </Txt>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={[
                                        gs.fdRow,
                                        gs.mb15,
                                        {
                                            width: '65%',
                                            alignItems: 'center'
                                        }
                                    ]}>
                                    <View
                                        style={{
                                            borderBottomColor: colors.PURPLE,
                                            borderBottomWidth: 2,
                                            flex: 1
                                        }}></View>
                                    <Txt
                                        style={[
                                            st.defaultLabel,
                                            { fontWeight: 'bold' }
                                        ]}>
                                        {I18n.t('profile.or')}
                                    </Txt>
                                    <View
                                        style={{
                                            borderBottomColor: colors.PURPLE,
                                            borderBottomWidth: 2,
                                            flex: 1
                                        }}></View>
                                </View>
                                <View style={[gs.fdRow, gs.mb15]}>
                                    <Txt style={st.defaultLabel}>
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
                        )}
                        {this.state.view == 2 && (
                            <View
                                style={{
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                <View style={st.inputContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        style={st.input}
                                        placeholder={I18n.t(
                                            'profile.phRegisterEmail'
                                        )}
                                        placeholderTextColor={colors.WHITE}
                                        underlineColorAndroid="rgba(0,0,0,0)"
                                        value={this.state.txtRegisterEmail}
                                        onChangeText={txtRegisterEmail => {
                                            this.setState({ txtRegisterEmail })
                                        }}
                                    />
                                    <Icon
                                        name={'email'}
                                        size={22}
                                        color={colors.PURPLE}
                                        style={st.inputIcon}
                                    />
                                </View>
                                <View style={st.inputContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        style={st.input}
                                        placeholder={I18n.t(
                                            'profile.phRegisterPassword1'
                                        )}
                                        placeholderTextColor={colors.WHITE}
                                        underlineColorAndroid="rgba(0,0,0,0)"
                                        value={this.state.txtRegisterPassword1}
                                        onChangeText={txtRegisterPassword1 => {
                                            this.setState({
                                                txtRegisterPassword1
                                            })
                                        }}
                                    />
                                    <Icon
                                        name={'lock-question'}
                                        size={22}
                                        color={colors.PURPLE}
                                        style={st.inputIcon}
                                    />
                                </View>
                                <View style={st.inputContainer}>
                                    <TextInput
                                        autoCorrect={false}
                                        style={st.input}
                                        placeholder={I18n.t(
                                            'profile.phRegisterPassword2'
                                        )}
                                        placeholderTextColor={colors.WHITE}
                                        underlineColorAndroid="rgba(0,0,0,0)"
                                        value={this.state.txtRegisterPassword2}
                                        onChangeText={txtRegisterPassword2 => {
                                            this.setState({
                                                txtRegisterPassword2
                                            })
                                        }}
                                    />
                                    <Icon
                                        name={'lock-question'}
                                        size={22}
                                        color={colors.PURPLE}
                                        style={st.inputIcon}
                                    />
                                </View>

                                <View style={st.buttonContainer}>
                                    <TouchableOpacity style={st.mainButton}>
                                        <Txt style={st.buttonText}>
                                            {I18n.t('profile.register')}
                                        </Txt>
                                    </TouchableOpacity>
                                </View>
                                <View style={[gs.fdRow, { marginBottom: 15 }]}>
                                    <Txt style={st.defaultLabel}>
                                        {I18n.t('profile.alreadyAccount')}
                                    </Txt>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ view: 1 })
                                        }}>
                                        <Txt
                                            style={{
                                                color: colors.PURPLE,
                                                fontWeight: 'bold'
                                            }}>
                                            {I18n.t('profile.backToLogin')}
                                        </Txt>
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={[gs.fdRow, gs.mb15]}>
                                    <Txt style={st.defaultLabel}>
                                        {I18n.t('profile.loginWith')}
                                    </Txt>
                                </View> */}
                                <View style={st.buttonContainer}>
                                    <TouchableOpacity style={st.fbButton}>
                                        <Icon
                                            name={'facebook'}
                                            size={22}
                                            color={colors.WHITE}
                                            style={st.buttonIcon}
                                        />
                                        <Txt style={st.fbButtonText}>
                                            {I18n.t(
                                                'profile.registerWithFacebook'
                                            )}
                                        </Txt>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>
        )
    }
}

const st = StyleSheet.create({
    inputContainer: { width: '65%', marginBottom: 30 },
    inputIcon: { position: 'absolute', bottom: 5, left: 5 },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.PURPLE,
        paddingLeft: 35,
        paddingTop: 0,
        paddingBottom: 0,
        color: colors.PURPLE
    },
    buttonContainer: { marginBottom: 15 },
    mainButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.PURPLE,
        borderWidth: 1,
        borderColor: colors.PURPLE,
        borderRadius: 10
    },
    buttonText: { color: colors.WHITE },
    fbButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.BLUE_FB,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    fbButtonText: { color: colors.WHITE },
    defaultLabel: {
        color: colors.PURPLE
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
