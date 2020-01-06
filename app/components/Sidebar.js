import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { openUrl } from '../utils/utils'
import I18n from '../utils/i18n'
import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import firebase from 'react-native-firebase'
import { fnSetUser } from '../actions/actions'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userPicture: '',
            username: '',
            usesNumber: 0,
            version: '0.0.6'
        }
    }

    componentDidMount() {}

    logout() {
        firebase.auth().signOut()
        this.props.fnSetUser()
    }

    shareApp() {}

    render() {
        return (
            <SafeAreaView style={[gs.safeArea, st.container]}>
                <View
                    style={{
                        alignItems: 'center',
                        // marginBottom: 15,
                        marginTop: 15
                    }}>
                    <Image
                        resizeMode="contain"
                        style={{
                            height: 150
                        }}
                        source={require('../assets/sidebar.png')}
                    />
                </View>

                <View style={st.userContainer}>
                    {this.props.user && (
                        <TouchableOpacity>
                            <Txt style={st.userName}>
                                {this.props.user.name}
                            </Txt>
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Main')
                    }}>
                    <View style={st.labelContainer}>
                        <Icon name={'home'} size={22} style={st.labelIcon} />
                        <Txt style={st.labelText}>{I18n.t('sidebar.home')}</Txt>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('Establishments')
                    }}>
                    <Icon name={'domain'} size={22} style={st.labelIcon} />
                    <Txt style={st.labelText}>
                        {I18n.t('sidebar.establishments')}
                    </Txt>
                </TouchableOpacity>
                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('SearchCategories')
                    }}>
                    <Icon name={'shape'} size={22} style={st.labelIcon} />
                    <Txt style={st.labelText}>
                        {I18n.t('sidebar.categories')}
                    </Txt>
                </TouchableOpacity>
                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('Memberships')
                    }}>
                    <Icon name={'credit-card'} size={22} style={st.labelIcon} />
                    <Txt style={st.labelText}>
                        {I18n.t('sidebar.memberships')}
                    </Txt>
                </TouchableOpacity>
                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('BirthdayOffers')
                    }}>
                    <Icon
                        name={'cake-variant'}
                        size={22}
                        style={st.labelIcon}
                    />
                    <Txt style={st.labelText}>{I18n.t('sidebar.birthday')}</Txt>
                </TouchableOpacity>
                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}>
                    <Icon name={'account'} size={22} style={st.labelIcon} />
                    <Txt style={st.labelText}>
                        {I18n.t(
                            `sidebar.${this.props.user ? 'profile' : 'login'}`
                        )}
                    </Txt>
                </TouchableOpacity>
                <TouchableOpacity
                    style={st.labelContainer}
                    onPress={() => {
                        this.props.navigation.navigate('OnPromos')
                    }}>
                    <Icon name={'sale'} size={22} style={st.labelIcon} />
                    <Txt style={st.labelText}>{I18n.t('sidebar.want')}</Txt>
                </TouchableOpacity>
                {this.props.user && (
                    <TouchableOpacity
                        style={st.labelContainer}
                        onPress={() => {
                            this.logout()
                        }}>
                        <Icon name={'logout'} size={22} style={st.labelIcon} />
                        <Txt style={st.labelText}>
                            {I18n.t('sidebar.logout')}
                        </Txt>
                    </TouchableOpacity>
                )}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 15,
                        paddingHorizontal: 15
                    }}>
                    <TouchableOpacity
                        style={st.socialButton}
                        onPress={() => {
                            openUrl('https://www.facebook.com/promos.ecu')
                        }}>
                        <Icon
                            size={40}
                            name={'facebook-box'}
                            color={colors.YELLOW}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={st.socialButton}
                        onPress={() => {
                            openUrl('https://www.instagram.com/promos.ec/')
                        }}>
                        <Icon
                            size={40}
                            name={'instagram'}
                            color={colors.YELLOW}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 5
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            AsyncStorage.removeItem('hideWizard')
                            AsyncStorage.removeItem('pushToken')
                        }}>
                        <Txt
                            style={{
                                color: colors.WHITE
                            }}>
                            {this.state.version}
                        </Txt>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

Sidebar.propTypes = {
    navigation: PropTypes.object
}

let st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PURPLE
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    labelIcon: {
        // width: 40,
        marginLeft: 15,
        marginRight: 10,
        color: colors.YELLOW
    },
    labelText: {
        flex: 1,
        color: colors.WHITE,
        fontSize: 18
    },
    userContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    userName: { fontSize: 22, color: colors.WHITE },
    socialButton: {
        flex: 1,
        alignItems: 'center'
    }
})

// export default Sidebar

function mapStateToProps(state) {
    return { user: state.dataReducer.user }
}

const mapDispatchToProps = { fnSetUser }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
