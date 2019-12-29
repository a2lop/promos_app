import React from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PopupMemberships from '../components/PopupMemberships'
import PopupMyCategories from '../components/PopupMyCategories'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'
import { validateEmail, validatePassword } from '../utils/utils'
// import { concat } from 'lodash'

import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
import firebase from 'react-native-firebase'
import {
    fnSetUser,
    fnAddUserCategory,
    fnRemoveUserCategory,
    fnAddUserMembership,
    fnRemoveUserMembership
} from '../actions/actions'
// import {
//     wsGetUserInfo,
//     wsPutUserCategory,
//     wsDeleteUserCategory
// } from '../services/users'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: -1,
            view: 1,
            txtEmail: '',
            txtPassword: '',
            txtRegisterNames: '',
            txtRegisterEmail: '',
            txtRegisterPassword1: '',
            txtRegisterPassword2: '',
            isLoading: false,
            msgError: '',
            showPopupMemberships: false,
            showPopupCategories: false
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

    login() {
        this.setState({ msgError: '' }, () => {
            let msgError = ''
            if (this.state.txtEmail == '' || this.state.txtPassword == '') {
                msgError = I18n.t('profile.errorEmptyFields')
            } else if (!validateEmail(this.state.txtEmail)) {
                msgError = I18n.t('profile.errorInvalidEmail')
            } else if (!validatePassword(this.state.txtPassword)) {
                msgError = I18n.t('profile.errorInvalidPasswordRegex')
            }
            if (msgError != '') {
                this.setState({ msgError })
                return
            }

            this.setState({ isLoading: true }, () => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(
                        this.state.txtEmail,
                        this.state.txtPassword
                    )
                    .then(() => {})
                    .catch(error => {
                        this.setState({
                            msgError: I18n.t(
                                'profile.error' +
                                    (error.code == 'auth/user-not-found'
                                        ? 'InexistentUser'
                                        : error.code == 'auth/wrong-password'
                                        ? 'InvalidPassword'
                                        : 'General')
                            )
                        })
                    })
                    .finally(() => {
                        this.setState({ isLoading: false })
                    })
            })
        })
    }

    register() {
        this.setState({ msgError: '' }, () => {
            let msgError = ''
            if (
                this.state.txtRegisterNames == '' ||
                this.state.txtRegisterEmail == '' ||
                this.state.txtRegisterPassword1 == '' ||
                this.state.txtRegisterPassword2 == ''
            ) {
                msgError = I18n.t('profile.errorEmptyFields')
            } else if (!validateEmail(this.state.txtRegisterEmail)) {
                msgError = I18n.t('profile.errorInvalidEmail')
            } else if (
                !validatePassword(this.state.txtRegisterPassword1) ||
                !validatePassword(this.state.txtRegisterPassword2)
            ) {
                msgError = I18n.t('profile.errorInvalidPasswordRegex')
            } else if (
                this.state.txtRegisterPassword1 !=
                this.state.txtRegisterPassword2
            ) {
                msgError = I18n.t('profile.errorDifferentPasswords')
            }
            if (msgError != '') {
                this.setState({ msgError })
                return
            }
            this.setState({ isLoading: true }, () => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        this.state.txtRegisterEmail,
                        this.state.txtRegisterPassword1
                    )
                    .then(user => {
                        if (user) {
                            let newUser = {
                                name: this.state.txtRegisterNames,
                                email: user.user.email,
                                id: user.user.uid
                            }
                            this.props.fnSetUser(newUser)
                            user.user
                                .updateProfile({
                                    displayName: this.state.txtRegisterNames
                                })
                                .then(user => {})
                        }
                    })
                    .catch(error => {
                        this.setState({
                            msgError: I18n.t(
                                'profile.error' +
                                    (error.code == 'auth/email-already-in-use'
                                        ? 'UsedEmail'
                                        : 'General')
                            )
                        })
                    })
                    .finally(() => {
                        this.setState({ isLoading: false })
                    })
            })
        })
    }

    addCategory(category) {
        if (
            this.props.userCategories.filter(c => c.id == category.id).length ==
            0
        ) {
            this.props.fnAddUserCategory(this.props.user.id, category)
        }
    }

    removeCategory(category) {
        this.props.fnRemoveUserCategory(this.props.user.id, category)
    }

    addMembership(membership) {
        if (
            this.props.userMemberships.filter(m => m.id == membership.id)
                .length == 0
        ) {
            this.props.fnAddUserMembership(this.props.user.id, membership)
        }
    }

    removeMembership(membership) {
        this.props.fnRemoveUserMembership(this.props.user.id, membership)
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: this.props.user
                        ? colors.SILVER_LIGHT
                        : colors.YELLOW
                }}>
                <ScrollView>
                    {!this.props.user &&
                        (this.state.view == 1 || this.state.view == 2) && (
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

                                {this.state.msgError != '' && (
                                    <Txt
                                        style={{
                                            color: colors.PURPLE,
                                            marginBottom: 15,
                                            marginHorizontal: 15,
                                            textAlign: 'center',
                                            fontSize: 15
                                        }}>
                                        {this.state.msgError}
                                    </Txt>
                                )}

                                {this.state.view == 1 && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <View style={st.inputContainer}>
                                            <TextInput
                                                autoCompleteType={'email'}
                                                autoCapitalize={false}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phEmail'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
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
                                                secureTextEntry={true}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phPassword'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
                                                underlineColorAndroid="rgba(0,0,0,0)"
                                                value={this.state.txtPassword}
                                                onChangeText={txtPassword => {
                                                    this.setState({
                                                        txtPassword
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
                                            <TouchableOpacity
                                                style={st.mainButton}
                                                onPress={() => {
                                                    this.login()
                                                }}>
                                                <Txt style={st.buttonText}>
                                                    {I18n.t('profile.login')}
                                                </Txt>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={[
                                                gs.fdRow,
                                                { marginBottom: 15 }
                                            ]}>
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
                                        {/* <View
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
                                                borderBottomColor:
                                                    colors.PURPLE,
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
                                                borderBottomColor:
                                                    colors.PURPLE,
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
                                                {I18n.t(
                                                    'profile.loginFacebook'
                                                )}
                                            </Txt>
                                        </TouchableOpacity>
                                    </View> */}
                                    </View>
                                )}
                                {this.state.view == 2 && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <View style={st.inputContainerRegister}>
                                            <TextInput
                                                autoCompleteType={'email'}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phRegisterName'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
                                                underlineColorAndroid="rgba(0,0,0,0)"
                                                value={
                                                    this.state.txtRegisterNames
                                                }
                                                onChangeText={txtRegisterNames => {
                                                    this.setState({
                                                        txtRegisterNames
                                                    })
                                                }}
                                            />
                                            <Icon
                                                name={'account'}
                                                size={22}
                                                color={colors.PURPLE}
                                                style={st.inputIcon}
                                            />
                                        </View>

                                        <View style={st.inputContainerRegister}>
                                            <TextInput
                                                autoCompleteType={'email'}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phRegisterEmail'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
                                                underlineColorAndroid="rgba(0,0,0,0)"
                                                value={
                                                    this.state.txtRegisterEmail
                                                }
                                                onChangeText={txtRegisterEmail => {
                                                    this.setState({
                                                        txtRegisterEmail
                                                    })
                                                }}
                                            />
                                            <Icon
                                                name={'email'}
                                                size={22}
                                                color={colors.PURPLE}
                                                style={st.inputIcon}
                                            />
                                        </View>
                                        <View style={st.inputContainerRegister}>
                                            <TextInput
                                                secureTextEntry={true}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phRegisterPassword1'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
                                                underlineColorAndroid="rgba(0,0,0,0)"
                                                value={
                                                    this.state
                                                        .txtRegisterPassword1
                                                }
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
                                        <View style={st.inputContainerRegister}>
                                            <TextInput
                                                secureTextEntry={true}
                                                autoCorrect={false}
                                                style={st.input}
                                                placeholder={I18n.t(
                                                    'profile.phRegisterPassword2'
                                                )}
                                                placeholderTextColor={
                                                    colors.WHITE
                                                }
                                                underlineColorAndroid="rgba(0,0,0,0)"
                                                value={
                                                    this.state
                                                        .txtRegisterPassword2
                                                }
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
                                            <TouchableOpacity
                                                style={st.mainButton}
                                                onPress={() => {
                                                    this.register()
                                                }}>
                                                <Txt style={st.buttonText}>
                                                    {I18n.t('profile.register')}
                                                </Txt>
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={[
                                                gs.fdRow,
                                                { marginBottom: 15 }
                                            ]}>
                                            <Txt style={st.defaultLabel}>
                                                {I18n.t(
                                                    'profile.alreadyAccount'
                                                )}
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
                                                    {I18n.t(
                                                        'profile.backToLogin'
                                                    )}
                                                </Txt>
                                            </TouchableOpacity>
                                        </View>
                                        {/* <View style={[gs.fdRow, gs.mb15]}>
                                    <Txt style={st.defaultLabel}>
                                        {I18n.t('profile.loginWith')}
                                    </Txt>
                                </View> */}
                                        {/* <View style={st.buttonContainer}>
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
                                    </View> */}
                                    </View>
                                )}
                            </View>
                        )}

                    {this.props.user && (
                        <View style={st.sessionContainer}>
                            <View style={[gs.dfGenericContainer]}>
                                <Txt>
                                    {I18n.t('profile.welcome', {
                                        name: this.props.user.name || ''
                                    })}
                                </Txt>
                            </View>

                            <View style={gs.dfGenericContainer}>
                                <View style={gs.fdRow}>
                                    <Txt
                                        style={[
                                            gs.dfSectionTitle,
                                            gs.mb5,
                                            gs.f1
                                        ]}>
                                        {I18n.t('profile.yourCategories')}
                                    </Txt>
                                    <View
                                        style={{
                                            justifyContent: 'center'
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({
                                                    showPopupCategories: true
                                                })
                                            }}>
                                            <Icon
                                                name={'plus'}
                                                size={20}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    {this.props.userCategories.length == 0 && (
                                        <View style={{ alignItems: 'center' }}>
                                            <Image
                                                resizeMode="contain"
                                                style={{
                                                    height: 100
                                                }}
                                                source={require('../assets/emptyContent2.png')}
                                            />
                                            <Txt style={{ fontSize: 14 }}>
                                                {I18n.t(
                                                    'profile.emptyFavoriteCategories'
                                                )}
                                            </Txt>
                                        </View>
                                    )}

                                    <FlatList
                                        horizontal={true}
                                        data={this.props.userCategories}
                                        keyExtractor={(d, i) => i.toString()}
                                        renderItem={d => {
                                            return (
                                                <View
                                                    style={
                                                        st.categoryContainer
                                                    }>
                                                    <Image
                                                        source={{
                                                            uri:
                                                                d.item
                                                                    .iconImage,
                                                            cache:
                                                                'only-if-cached'
                                                        }}
                                                        style={{
                                                            aspectRatio: 1
                                                        }}
                                                    />
                                                    <Txt
                                                        style={{
                                                            textAlign: 'center'
                                                        }}
                                                        numberOfLines={1}>
                                                        {d.item.name}
                                                    </Txt>
                                                    <View
                                                        style={[
                                                            st.deleteIconContainer,
                                                            {
                                                                backgroundColor:
                                                                    colors.GRAY_LIGHT,
                                                                borderRadius: 10,
                                                                paddingHorizontal: 2,
                                                                paddingVertical: 2
                                                            }
                                                        ]}>
                                                        <TouchableOpacity
                                                            style={
                                                                st.deleteIcon
                                                            }
                                                            onPress={() => {
                                                                this.removeCategory(
                                                                    d.item
                                                                )
                                                            }}>
                                                            <Icon
                                                                name={'close'}
                                                                color={
                                                                    colors.WHITE
                                                                }
                                                                size={
                                                                    16
                                                                }></Icon>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            )
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={gs.dfGenericContainer}>
                                <View style={gs.fdRow}>
                                    <Txt
                                        style={[
                                            gs.dfSectionTitle,
                                            gs.mb5,
                                            gs.f1
                                        ]}>
                                        {I18n.t('profile.yourMemberships')}
                                    </Txt>
                                    <View
                                        style={{
                                            justifyContent: 'center'
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({
                                                    showPopupMemberships: true
                                                })
                                            }}>
                                            <Icon
                                                name={'plus'}
                                                size={20}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {this.props.userMemberships.length == 0 && (
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            resizeMode="contain"
                                            style={{
                                                height: 100
                                            }}
                                            source={require('../assets/emptyContent5.png')}
                                        />
                                        <Txt style={{ fontSize: 14 }}>
                                            {I18n.t('profile.emptyMemberships')}
                                        </Txt>
                                    </View>
                                )}

                                <FlatList
                                    horizontal={true}
                                    data={this.props.userMemberships}
                                    keyExtractor={(d, i) => i.toString()}
                                    renderItem={d => {
                                        return (
                                            <View style={st.categoryContainer}>
                                                <Image
                                                    source={{
                                                        uri: d.item.image,
                                                        cache: 'only-if-cached'
                                                    }}
                                                    style={{
                                                        // aspectRatio: 1
                                                        height: 45,
                                                        width: '100%'
                                                    }}
                                                />
                                                <Txt
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                    numberOfLines={1}>
                                                    {d.item.name}
                                                </Txt>
                                                <View
                                                    style={[
                                                        st.deleteIconContainer,
                                                        {
                                                            backgroundColor:
                                                                colors.GRAY_LIGHT,
                                                            borderRadius: 10,
                                                            paddingHorizontal: 2,
                                                            paddingVertical: 2
                                                        }
                                                    ]}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            this.removeMembership(
                                                                d.item
                                                            )
                                                        }}>
                                                        <Icon
                                                            name={'close'}
                                                            color={colors.WHITE}
                                                            size={16}></Icon>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                    )}
                    {this.state.isLoading && (
                        <View
                            style={{
                                justifyContent: 'center',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }}>
                            <ActivityIndicator
                                size="large"
                                color={colors.PURPLE}
                            />
                        </View>
                    )}
                </ScrollView>
                {this.state.showPopupMemberships && (
                    <PopupMemberships
                        closePopup={() => {
                            this.setState({ showPopupMemberships: false })
                        }}
                        addMembership={membership => {
                            this.addMembership(membership)
                        }}
                    />
                )}
                {this.state.showPopupCategories && (
                    <PopupMyCategories
                        closePopup={() => {
                            this.setState({ showPopupCategories: false })
                        }}
                        addCategory={category => {
                            this.addCategory(category)
                        }}
                    />
                )}
            </View>
        )
    }
}

const st = StyleSheet.create({
    inputContainer: { width: '65%', marginBottom: 30 },
    inputContainerRegister: { width: '65%', marginBottom: 20 },
    inputIcon: { position: 'absolute', bottom: 5, left: 5 },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.PURPLE,
        paddingLeft: 35,
        paddingTop: 0,
        paddingBottom: 0,
        color: colors.PURPLE,
        fontSize: 16
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
    categoryContainer: {
        backgroundColor: colors.WHITE,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 4,
        marginBottom: 8,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        width: 100
    },
    deleteIconContainer: {
        position: 'absolute',
        right: 0,
        top: 0
    }
})

function mapStateToProps(state) {
    return {
        user: state.dataReducer.user,
        userCategories: state.dataReducer.userCategories,
        userMemberships: state.dataReducer.userMemberships
    }
}

const mapDispatchToProps = {
    fnSetUser,
    fnAddUserCategory,
    fnRemoveUserCategory,
    fnAddUserMembership,
    fnRemoveUserMembership
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
