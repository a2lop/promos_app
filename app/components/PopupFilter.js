import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native'
import Txt from './Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CategorySimple from './CategorySimple'

import { connect } from 'react-redux'
import { fnGetCategories } from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'
// import SplashScreen from 'react-native-splash-screen'

class PopupFilter extends React.Component {
    componentDidMount() {
        if (this.props.categories.length == 0) {
            this.props.fnGetCategories()
        }
    }

    loadOffers(day, reset) {
        this.props.fnGetOffersByDayNumber(day, reset)
    }

    render() {
        return (
            <View style={[gs.fullscreenContainer, { flex: 1 }]}>
                <View style={[gs.fdRow, { marginBottom: 15 }]}>
                    <Txt style={[gs.f1, st.mainText]}>
                        {I18n.t('popupFilter.chooseCategory')}
                    </Txt>
                    <View style={gs.filterButtonContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.closePopup()
                            }}>
                            <Icon
                                name={'close'}
                                size={25}
                                color={colors.WHITE}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[
                        st.categoryContainer,
                        {
                            width: '33%',
                            alignSelf: 'center'
                        }
                    ]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onCategorySelected({
                                name: 'all',
                                id: 'all'
                            })
                        }}>
                        <Image
                            source={require('../assets/logo_square.png')}
                            style={{
                                alignSelf: 'center',
                                width: 60,
                                height: 60,
                                marginBottom: 5
                            }}
                        />
                        <Txt style={st.categoryName} numberOfLines={1}>
                            {I18n.t('popupFilter.all')}
                        </Txt>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'center' }}
                        data={this.props.categories}
                        keyExtractor={(d, i) => i.toString()}
                        numColumns={3}
                        style={{
                            flexDirection: 'column'
                        }}
                        renderItem={d => {
                            return (
                                <View
                                    style={[
                                        st.categoryContainer,
                                        { flex: 1, zIndex: 2 }
                                    ]}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.onCategorySelected(
                                                d.item
                                            )
                                        }}>
                                        <Image
                                            source={{
                                                uri: d.item.iconImage,
                                                cache: 'only-if-cached'
                                            }}
                                            style={{
                                                aspectRatio: 1
                                            }}
                                        />
                                        <Txt
                                            style={st.categoryName}
                                            numberOfLines={1}>
                                            {d.item.name}
                                        </Txt>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}

const st = StyleSheet.create({
    mainText: {
        color: colors.WHITE,
        fontSize: 22
    },
    categoryContainer: {
        backgroundColor: colors.WHITE,
        // flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 4,
        marginBottom: 8,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        maxWidth: '35%'
        // minWidth: '31%'
    },
    categoryName: {
        textAlign: 'center'
    }
})

function mapStateToProps(state) {
    return {
        categories: state.dataReducer.categoriesParents,
        isLoading: state.dataReducer.isLoadingHomeOffers
    }
}

const mapDispatchToProps = { fnGetCategories }

export default connect(mapStateToProps, mapDispatchToProps)(PopupFilter)
