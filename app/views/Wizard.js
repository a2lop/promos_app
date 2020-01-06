import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from '../components/Txt'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'

import { connect } from 'react-redux'
import { fnSetOffer, fnSetEstablishment } from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import AsyncStorage from '@react-native-community/async-storage'
import { globalStyles as gs } from '../utils/styles'
import PushNotification from 'react-native-push-notification'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            views: [
                {
                    id: 1,
                    title: I18n.t('wizard.title1'),
                    description: I18n.t('wizard.message1')
                },
                {
                    id: 2,
                    title: I18n.t('wizard.title2'),
                    description: I18n.t('wizard.message2')
                },
                {
                    id: 3,
                    title: I18n.t('wizard.title3'),
                    description: I18n.t('wizard.message3')
                }
            ],
            currentStep: 0
        }
    }
    async componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                if (!notification.foreground && notification.notificationType) {
                    if (notification.notificationType == 'establishment') {
                        this.props.fnSetEstablishment({
                            id: notification.notificationValue
                        })
                        setTimeout(() => {
                            this.props.navigation.navigate(
                                'EstablishmentDetail',
                                { viewTitle: notification.notificationTitle }
                            )
                        }, 1000)
                    } else if (notification.notificationType == 'offer') {
                        this.props.fnSetOffer({
                            id: notification.notificationValue,
                            establishmentId:
                                notification.notificationEstablishmentId
                        })

                        setTimeout(() => {
                            this.props.navigation.navigate('Offer', {
                                viewTitle:
                                    notification.notificationTitle || 'Oferta'
                            })
                        }, 1000)
                    }
                }
                setTimeout(() => {
                    SplashScreen.hide()
                }, 1000)
            }.bind(this),
            senderID: '380238783677'
        })

        setTimeout(() => {
            SplashScreen.hide()
        }, 1000)
        const hideWizard = await AsyncStorage.getItem('hideWizard')
        if (hideWizard && hideWizard == '1') {
            this.goToHome()
        }
    }

    goToHome() {
        AsyncStorage.setItem('hideWizard', '1')
        this.props.navigation.navigate('Home')
    }

    goToNextStep() {
        if (this.state.currentStep == 2) {
            this.goToHome()
        } else {
            this.setState(
                {
                    currentStep:
                        this.state.currentStep + 1 == 3
                            ? 0
                            : this.state.currentStep + 1
                },
                () => {
                    this.flatListRef.scrollToIndex({
                        animated: true,
                        index: this.state.currentStep
                    })
                }
            )
        }
    }
    loadOffers() {}

    render() {
        return (
            <SafeAreaView
                style={[gs.dfSafeArea, { backgroundColor: colors.YELLOW }]}>
                <FlatList
                    ref={ref => {
                        this.flatListRef = ref
                    }}
                    scrollEnabled={false}
                    style={gs.f1}
                    horizontal
                    data={this.state.views}
                    keyExtractor={item => item.id + ''}
                    renderItem={({ item, index }) => (
                        <View style={gs.fw}>
                            <View style={st.imageContainer}>
                                {item.id == 1 && (
                                    <Image
                                        resizeMode={'contain'}
                                        source={require('../assets/logo.png')}
                                        style={st.logo}
                                    />
                                )}
                                {item.id == 2 && (
                                    <Image
                                        resizeMode={'contain'}
                                        source={require('../assets/wizard2.png')}
                                        style={st.logo}
                                    />
                                )}
                                {item.id == 3 && (
                                    <Image
                                        resizeMode={'contain'}
                                        source={require('../assets/wizard1.png')}
                                        style={st.logo}
                                    />
                                )}
                            </View>
                            <View
                                style={[
                                    // gs.f1,
                                    {
                                        paddingHorizontal: 15,
                                        alignItems: 'center'
                                    }
                                ]}>
                                <Txt
                                    style={{
                                        color: colors.PURPLE,
                                        fontSize: 25,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        marginBottom: 15
                                    }}>
                                    {item.title}
                                </Txt>
                                <Txt
                                    style={{
                                        color: colors.PURPLE,
                                        fontSize: 18,
                                        textAlign: 'center'
                                    }}>
                                    {item.description}
                                </Txt>
                            </View>
                        </View>
                    )}
                />
                <View style={st.footerSection}>
                    <View style={gs.f1}>
                        <TouchableOpacity
                            style={st.btn}
                            onPress={() => {
                                this.goToHome()
                            }}>
                            <Txt style={st.txtButton}>
                                {I18n.t('wizard.skip')}
                            </Txt>
                        </TouchableOpacity>
                    </View>
                    <View style={st.dotsContainer}>
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 0
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.PURPLE}
                        />
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 1
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.PURPLE}
                        />
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 2
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.PURPLE}
                        />
                    </View>
                    <View style={gs.f1}>
                        <TouchableOpacity
                            style={st.btn}
                            onPress={() => {
                                this.goToNextStep()
                            }}>
                            <Txt style={st.txtButton}>
                                {I18n.t(
                                    'wizard.' +
                                        (this.state.currentStep == 2
                                            ? 'begin'
                                            : 'next')
                                )}
                            </Txt>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const st = StyleSheet.create({
    imageContainer: {
        height: '60%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    logo: { height: '80%', maxWidth: '60%' },
    footerSection: {
        flexDirection: 'row'
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    txtButton: {
        fontSize: 18,
        color: colors.PURPLE,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dotsContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function mapStateToProps(state) {
    return { offers: state.dataReducer.homeOffers }
}

const mapDispatchToProps = { fnSetOffer, fnSetEstablishment }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
