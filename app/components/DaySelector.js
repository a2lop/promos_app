import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Txt from './Txt'

import I18n from '../utils/i18n'

import { connect } from 'react-redux'
// import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

const dayWidth = (Dimensions.get('window').width - 50) / 7

class DaySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { days: [] }
    }
    componentDidMount() {
        this.createDays()
    }
    createDays() {
        const todayTs = new Date().getTime()
        const todayDay = new Date().getDay() == 0 ? 7 : new Date().getDay()

        const days = []

        for (let i = 1; i < todayDay; i++) {
            days.push({
                date: new Date(todayTs - 86400000 * (todayDay - i)),
                id: i
            })
        }
        days.push({
            date: new Date(todayTs),
            id: todayDay,
            isSelected: true
        })
        for (let i = todayDay + 1; i <= 7; i++) {
            days.push({
                date: new Date(todayTs + 86400000 * (i - todayDay)),
                id: i
            })
        }

        this.setState({ days })
    }

    changeDay(d) {
        let days = this.state.days
        days.forEach(day => {
            day.isSelected = day.id == d.id
        })
        this.setState({ days })
        this.props.loadOffers(d.date.getDay(), true)
    }

    render() {
        return (
            <View style={st.container}>
                {this.state.days.map(day => {
                    return (
                        <View
                            style={[
                                st.dayContainer,
                                {
                                    backgroundColor: day.isSelected
                                        ? colors.YELLOW
                                        : colors.WHITE
                                }
                            ]}
                            key={day.date.getTime()}>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => {
                                    this.changeDay(day)
                                }}>
                                <Txt style={st.dayName}>
                                    {I18n.t(
                                        `components.daySelector.${day.date.getDay()}`
                                    )}
                                </Txt>
                            </TouchableOpacity>
                        </View>
                    )
                })}
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
        // borderRadius: dayWidth / 2,
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

export default connect(mapStateToProps, mapDispatchToProps)(DaySelector)
