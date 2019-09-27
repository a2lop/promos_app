import React from 'react'
import { ScrollView } from 'react-native'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

class Discover extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <ScrollView>
                <Txt>Discover</Txt>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Discover)
