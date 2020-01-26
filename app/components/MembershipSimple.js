import React from 'react'
import { View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Txt from './Txt'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class MembershipSimple extends React.Component {
    openMembershipOffers() {
        this.props.navigation.navigate('MembershipOffers', {
            membershipId: this.props.item.id,
            viewTitle: this.props.item.name
        })
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: colors.WHITE,
                    marginBottom: 10,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    maxWidth: Dimensions.get('window').width / 2 - 30,
                    zIndex: 9999
                    // borderColor: colors.SILVER
                }}>
                <TouchableOpacity
                    onPress={() => {
                        this.openMembershipOffers()
                    }}>
                    <Image
                        source={{ uri: this.props.item.image }}
                        resizeMode={'stretch'}
                        style={[gs.mb5, { width: '100%', aspectRatio: 2 }]}
                    />

                    <Txt
                        style={[gs.dfSimpleTitle, { textAlign: 'center' }]}
                        numberOfLines={1}>
                        {this.props.item.name}
                    </Txt>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipSimple)
