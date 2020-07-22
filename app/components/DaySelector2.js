import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Txt from './Txt'

import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { colors } from '../utils/constants'

const dayWidth = (Dimensions.get('window').width - 50) / 7

class DaySelector2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToday: true }
    }

    changeDay(d) {
        this.setState({ isToday: !this.state.isToday })
        this.props.loadOffers(d.getDay(), true)
    }

    render() {
        return (
            <View style={st.container}>
                <View
                    style={[
                        st.dayContainer,
                        {
                            backgroundColor: this.state.isToday
                                ? colors.YELLOW
                                : colors.WHITE
                        }
                    ]}>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: '100%',
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            this.changeDay(new Date())
                        }}>
                        <Txt style={st.dayName}>
                            {I18n.t(`components.daySelector.today`)}
                        </Txt>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        st.dayContainer,
                        {
                            backgroundColor: !this.state.isToday
                                ? colors.YELLOW
                                : colors.WHITE
                        }
                    ]}>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: '100%',
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            this.changeDay(
                                new Date(new Date().getTime() + 86400000)
                            )
                        }}>
                        <Txt style={st.dayName}>
                            {I18n.t(`components.daySelector.tomorrow`)}
                        </Txt>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.TRANSPARENT,
        flexDirection: 'row'
    },
    dayContainer: {
        height: dayWidth,
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.SILVER,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    },
    dayName: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.DARK
    },
    dayDate: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.DARK
    }
})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DaySelector2)
