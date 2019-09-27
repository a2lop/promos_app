import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Txt from './Txt'

import I18n from '../utils/i18n'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'

class IconFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Icon
                    name={this.props.name}
                    size={20}
                    color={this.props.color}
                    style={gs.iconFooter}
                />
                <Txt style={{ color: this.props.color, fontSize: 12 }}>
                    {I18n.t(this.props.label)}
                </Txt>
            </View>
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
)(IconFooter)
