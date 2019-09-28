import React from 'react'
import { ScrollView } from 'react-native'
import LoadingItem from '../components/Loading'

import { globalStyles as gs } from '../utils/styles'
import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

class SearchText extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <ScrollView style={gs.dfPageContainer}>
                <Txt>SearchText</Txt>
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
    mapDispatchToProps
)(SearchText)
