import React from 'react'
import { View, StyleSheet, ImageBackground, Image } from 'react-native'
import { BlurView, VibrancyView } from '@react-native-community/blur'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
import { fnGetOffers } from '../actions/actions'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import OfferListItem from '../components/OfferListItem'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'
import SafeAreaView from 'react-native-safe-area-view'

import { globalStyles as gs } from '../utils/styles'

class Home extends React.Component {
    componentDidMount() {}

    loadOffers() {}

    render() {
        return (
            <ImageBackground
                source={require('../assets/wizardBack1.jpg')}
                style={st.backImage}>
                <SafeAreaView style={gs.dfSafeArea}>
                    <View style={st.container}>
                        <BlurView
                            style={st.content}
                            blurType="light"
                            blurAmount={10}>
                            <View style={st.logoContainer}>
                                <Image
                                    resizeMode={'contain'}
                                    source={require('../assets/logo.png')}
                                    style={st.logo}
                                />
                            </View>
                            <View style={gs.f1}>
                                <Txt>Hola</Txt>
                            </View>
                            <View style={st.footerSection}>
                                <Txt>Hola</Txt>
                            </View>
                        </BlurView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const st = StyleSheet.create({
    backImage: {
        flex: 1
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 80,
        flex: 1
    },
    content: {
        flex: 1,
        shadowOffset: { height: 1 },
        shadowColor: colors.DARK,
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 20,
        alignItems: 'center'
    },
    logoContainer: {
        width: '60%'
    },
    logo: { width: '100%' }
})

function mapStateToProps(state) {
    return { offers: state.dataReducer.homeOffers }
}

const mapDispatchToProps = { fnGetOffers }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
