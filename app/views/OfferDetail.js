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

class OfferDetail extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <ScrollView style={gs.dfPageContainer}>
                {/* <View style={gs.mainImageContainer}> */}
                <View style={gs.dfMainContainer}>
                    <Image
                        source={{ uri: this.props.offer.logoBanner }}
                        resizeMode={'stretch'}
                        style={[gs.mainImage, gs.mb15]}
                    />
                    <Txt style={[gs.dfTitle, gs.mb5]}>
                        {this.props.offer.name}
                    </Txt>
                    <TouchableOpacity style={gs.mb15}>
                        <Txt style={gs.dfSubtitle}>Campo 4</Txt>
                    </TouchableOpacity>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        {this.props.offer.description}
                    </Txt>

                    <View style={[gs.fdRow]}>
                        <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity>
                                <Icon
                                    size={30}
                                    name={'thumb-up-outline'}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity>
                                <Icon size={30} name={'star-outline'}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={st.socialIconButtonContainer}>
                            <TouchableOpacity>
                                <Icon size={30} name={'share-variant'}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                        {I18n.t('offerDetail.otherOffersOf', {
                            establishmentName: 'Campo4'
                        })}
                    </Txt>
                    <FlatList
                        data={[{ test: 1 }, { test: 2 }, { test: 3 }]}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={d => {
                            return <OfferSimple key={d.index}></OfferSimple>
                        }}></FlatList>
                </View>
            </ScrollView>
        )
    }
}

let st = StyleSheet.create({
    socialIconButtonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    socialIcon: {}
})

function mapStateToProps(state) {
    return { offer: state.dataReducer.offer }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferDetail)
