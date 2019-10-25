import React from 'react'
import { ScrollView, View, Image, StyleSheet } from 'react-native'
import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import OfferSimple from '../components/OfferSimple'

class Establishment extends React.Component {
    componentDidMount() {}

    render() {
        return <ScrollView style={gs.dfPageContainer}></ScrollView>
    }
}

let st = StyleSheet.create({})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Establishment)
