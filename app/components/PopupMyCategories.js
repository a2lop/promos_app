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

import { connect } from 'react-redux'
import { fnGetCategories } from '../actions/actions'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { globalStyles as gs } from '../utils/styles'

class PopupMyCategories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        if (this.props.categories.length == 0) {
            this.props.fnGetCategories()
        }
        this.loadCategories()
    }

    loadCategories() {
        let categories = JSON.parse(JSON.stringify(this.props.categories))
        if (this.props.userCategories.length > 0) {
            categories.forEach(c => {
                c.isSelected =
                    this.props.userCategories.filter(cat => cat.id == c.id)
                        .length > 0
                // categories.push(c)
            })
        }
        // else {
        //     categories = JSON.parse(JSON.stringify(this.props.categories))
        // }
        this.setState({ categories })
    }

    markAsSelected(category) {
        let categories = this.state.categories
        categories.forEach(c => {
            if (c.id == category.id) {
                c.isSelected = true
            }
        })
        this.setState({ categories })
    }

    render() {
        return (
            <View style={[gs.fullscreenContainer, { flex: 1 }]}>
                <View style={[gs.fdRow, { marginBottom: 15 }]}>
                    <Txt style={[gs.f1, st.mainText]}>
                        {I18n.t('popupMyCategories.chooseCategory')}
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

                <View style={{ flex: 1 }}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'center' }}
                        data={this.state.categories}
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
                                            this.markAsSelected(d.item)
                                            this.props.addCategory(d.item)
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
                                    {d.item.isSelected && (
                                        <View style={st.cornerContainer}>
                                            <Icon
                                                name={'check-bold'}
                                                color={colors.PURPLE}
                                                size={20}></Icon>
                                        </View>
                                    )}
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
        fontSize: 18
    },
    categoryContainer: {
        backgroundColor: colors.WHITE,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 4,
        marginBottom: 8,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        maxWidth: '35%'
    },
    categoryName: {
        textAlign: 'center'
    },
    cornerContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: colors.YELLOW,
        borderRadius: 15,
        paddingHorizontal: 4,
        paddingVertical: 4,
        marginRight: 2,
        marginTop: 2
    }
})

function mapStateToProps(state) {
    return {
        categories: state.dataReducer.categoriesParents,
        userCategories: state.dataReducer.userCategories
    }
}

const mapDispatchToProps = { fnGetCategories }

export default connect(mapStateToProps, mapDispatchToProps)(PopupMyCategories)
