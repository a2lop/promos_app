import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Txt from './Txt'

import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
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
        const days = []
        days.push({ date: new Date(todayTs - 86400000 * 3), id: 1 })
        days.push({ date: new Date(todayTs - 86400000 * 2), id: 2 })
        days.push({ date: new Date(todayTs - 86400000 * 1), id: 3 })
        days.push({ date: new Date(todayTs), id: 4, isSelected: true })
        days.push({ date: new Date(todayTs + 86400000 * 1), id: 5 })
        days.push({ date: new Date(todayTs + 86400000 * 2), id: 6 })
        days.push({ date: new Date(todayTs + 86400000 * 3), id: 7 })
        this.setState({ days })
    }

    changeDay(id) {
        let days = this.state.days
        days.forEach(day => {
            day.isSelected = day.id == id
        })
        this.setState({ days })
    }

    render() {
        return (
            <View style={st.container}>
                {/* <View style={st.dayContainer}>
                    <TouchableOpacity>
                        <Txt style={st.dayName}>
                            {I18n.t('components.daySelector.monday')}
                        </Txt>
                        <Txt style={st.dayDate}>18</Txt>
                    </TouchableOpacity>
                </View> */}
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
                                onPress={() => {
                                    this.changeDay(day.id)
                                }}>
                                <Txt style={st.dayName}>
                                    {I18n.t(
                                        `components.daySelector.${day.date.getDay()}`
                                    )}
                                </Txt>
                                <Txt style={st.dayDate}>
                                    {day.date.getDate()}
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
        justifyContent: 'center',
        backgroundColor: colors.TRANSPARENT,
        paddingVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    dayContainer: {
        height: dayWidth,
        width: dayWidth,
        borderRadius: dayWidth / 2,
        borderWidth: 1,
        borderColor: colors.GRAY,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    },
    dayName: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dayDate: {
        fontSize: 12,
        textAlign: 'center'
    }
})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DaySelector)
