import React from 'react'
import {
    View,
    StyleSheet,
    Animated,
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { fnGetOffers } from '../actions/actions'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'
// import SafeAreaView from 'react-native-safe-area-view'

import { globalStyles as gs } from '../utils/styles'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // formShowed: 1,
            // op1: new Animated.Value(1),
            // op2: new Animated.Value(0),
            // op3: new Animated.Value(0),
            // fbData: -1,
            // isLoading: false,
            views: [
                { id: 1, img: 'logo.png' },
                { id: 2, img: 'emptyContent2.png' },
                { id: 3, img: 'emptyContent4.png' }
            ],
            currentStep: 1
        }
    }

    componentDidMount() {}

    goToNextStep() {
        this.flatListRef.scrollToIndex({
            animated: true,
            index: this.state.currentStep
        })
        this.setState({ currentStep: this.state.currentStep + 1 })

        // if (this.state.currentStep == 1) {
        //     Animated.timing(this.state.op1, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() => {})

        //     Animated.timing(this.state.op2, {
        //         toValue: 1,
        //         duration: 1000
        //     }).start(() => {})
        // } else if (this.state.currentStep == 2) {
        //     Animated.timing(this.state.op2, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() => {})

        //     Animated.timing(this.state.op3, {
        //         toValue: 1,
        //         duration: 1000
        //     }).start(() => {})
        // } else if (this.state.currentStep == 3) {
        //     Animated.timing(this.state.op3, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() => {})

        //     Animated.timing(this.state.op1, {
        //         toValue: 1,
        //         duration: 1000
        //     }).start(() => {})
        // }
        // this.setState({
        //     currentStep:
        //         this.state.currentStep == 3 ? 1 : this.state.currentStep + 1
        // })
    }
    loadOffers() {}

    render() {
        return (
            <SafeAreaView
                style={[gs.dfSafeArea, { backgroundColor: colors.YELLOW }]}>
                {/* <View style={gs.f1}> */}
                <FlatList
                    ref={ref => {
                        this.flatListRef = ref
                    }}
                    style={[gs.f1]}
                    horizontal
                    data={this.state.views}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                // gs.f1,
                                {
                                    width: Dimensions.get('window').width
                                }
                            ]}>
                            <View style={st.imageContainer}>
                                <Image
                                    resizeMode={'contain'}
                                    source={require('../assets/logo.png')}
                                    style={st.logo}
                                />
                            </View>
                            <View style={gs.f1}>{/* <Txt>Hola</Txt> */}</View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                {/* </View> */}
                <View style={st.footerSection}>
                    <View style={gs.f1}>
                        <TouchableOpacity style={st.btn}>
                            <Txt style={st.txtButton}>Omitir</Txt>
                        </TouchableOpacity>
                    </View>
                    <View style={st.dotsContainer}>
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 1
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.DARK}
                        />
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 2
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.DARK}
                        />
                        <Icon
                            style={gs.f1}
                            name={
                                this.state.currentStep == 3
                                    ? 'checkbox-blank-circle'
                                    : 'checkbox-blank-circle-outline'
                            }
                            size={20}
                            color={colors.DARK}
                        />
                    </View>
                    <View style={gs.f1}>
                        <TouchableOpacity
                            style={st.btn}
                            onPress={() => {
                                this.goToNextStep()
                            }}>
                            <Txt style={st.txtButton}>Siguiente</Txt>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const st = StyleSheet.create({
    imageContainer: {
        width: '60%',
        alignSelf: 'center'
    },
    logo: { width: '100%' },
    footerSection: {
        flexDirection: 'row'
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    txtButton: {
        fontSize: 18,
        color: colors.DARK,
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

const mapDispatchToProps = { fnGetOffers }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
