import React from 'react'
import { View, Image, Dimensions, TouchableOpacity } from 'react-native'
import Txt from './Txt'

import { connect } from 'react-redux'
import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'

class CategoriySimple extends React.Component {
    openCategory() {
        this.props.navigation.navigate('CategoryOffers', {
            categoryId: this.props.item.id,
            viewTitle: this.props.item.name
        })
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.WHITE,
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    borderWidth: 1,
                    paddingea: 10,
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    borderColor: colors.SILVER,
                    maxWidth: Dimensions.get('window').width / 2 - 30
                }}>
                <TouchableOpacity
                    onPress={() => {
                        this.openCategory()
                    }}>
                    <Image
                        source={{ uri: this.props.item.iconImage }}
                        resizeMode={'stretch'}
                        style={[gs.mb5, { width: '100%', aspectRatio: 1 }]}
                    />

                    <Txt
                        style={[
                            gs.dfSimpleTitle,
                            {
                                textAlign: 'center',
                                fontSize: this.props.isFilterScreen ? 13 : 17
                            }
                        ]}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriySimple)
