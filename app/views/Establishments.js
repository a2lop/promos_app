import React from 'react'
import { ScrollView, View, Image, StyleSheet, FlatList } from 'react-native'
import LoadingItem from '../components/Loading'
import EstablishmentListItem from '../components/EstablishmentListItem'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'

import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import { wsGetEstablishments } from '../services/data'
// import OfferSimple from '../components/OfferSimple'

class Establishment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            establishments: []
        }
    }
    componentDidMount() {
        wsGetEstablishments().then(d => {
            this.setState({ establishments: d })
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.establishments}
                keyExtractor={(d, i) => i.toString()}
                renderItem={d => {
                    return (
                        <EstablishmentListItem
                            item={d.item}
                            navigation={this.props.navigation}
                        />
                    )
                }}></FlatList>
        )
        // <ScrollView style={gs.dfPageContainer}></ScrollView>
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
