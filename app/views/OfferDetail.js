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
                        source={require('../assets/c4Logo.png')}
                        style={[gs.mainImage, gs.mb15]}
                    />
                    <Txt style={[gs.dfTitle, gs.mb5]}>
                        Lunes de 2x1 para chicas
                    </Txt>
                    <TouchableOpacity style={gs.mb15}>
                        <Txt style={gs.dfSubtitle}>Campo 4</Txt>
                    </TouchableOpacity>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum
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
    return {}
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferDetail)
