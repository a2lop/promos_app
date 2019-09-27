import React from 'react'
import { ScrollView } from 'react-native'

import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

class Profile extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <ScrollView>
                <Txt>Profile</Txt>
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
)(Profile)
