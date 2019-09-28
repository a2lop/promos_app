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
        return (
            <ScrollView style={gs.dfPageContainer}>
                {/* <View style={gs.mainImageContainer}> */}
                <View style={gs.dfMainContainer}>
                    <Image
                        source={require('../assets/c4Logo.png')}
                        style={[gs.mainImage, gs.mb15]}
                    />
                    <Txt style={[gs.dfTitle, gs.mb5]}>Campo 4</Txt>
                    {/* <TouchableOpacity style={gs.mb15}>
                        <Txt style={gs.dfSubtitle}></Txt>
                    </TouchableOpacity> */}
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfLongText, gs.mb10]}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia,
                    </Txt>

                    {/* <View style={st.labelContainer}> */}
                    <TouchableOpacity style={st.labelContainer}>
                        <View style={st.labelIcon}>
                            <Icon size={30} name={'facebook-box'} />
                        </View>
                        <Txt style={st.labelText}>campo4quito</Txt>
                    </TouchableOpacity>
                    <TouchableOpacity style={st.labelContainer}>
                        <View style={st.labelIcon}>
                            <Icon size={30} name={'instagram'} />
                        </View>
                        <Txt style={st.labelText}>campo4quito</Txt>
                    </TouchableOpacity>
                    <TouchableOpacity style={st.labelContainer}>
                        <View style={st.labelIcon}>
                            <Icon size={30} name={'phone-in-talk'} />
                        </View>
                        <Txt style={st.labelText}>02224355533</Txt>
                    </TouchableOpacity>
                    <TouchableOpacity style={st.labelContainer}>
                        <View style={st.labelIcon}>
                            <Icon size={30} name={'map-marker'} />
                        </View>
                        <Txt style={st.labelText}>
                            Baron de Carondelet OE-338 y veracruz
                        </Txt>
                    </TouchableOpacity>
                </View>
                <View style={gs.dfGenericContainer}>
                    <Txt style={[gs.dfSectionTitle, gs.mb5]}>
                        {I18n.t('establishment.offers', {
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
    labelContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center'
    },
    labelIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
    labelText: {
        flex: 2
    },
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
)(Establishment)
