import React from 'react'
import {
    ScrollView,
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'
import LoadingItem from '../components/Loading'
import EstablishmentListItem from '../components/EstablishmentListItem'
import Txt from '../components/Txt'
import FilterPopup from '../components/PopupFilter'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import I18n from '../utils/i18n'

import { globalStyles as gs } from '../utils/styles'
import { colors } from '../utils/constants'
import { wsGetEstablishmentsByCategory } from '../services/data'
import { concat } from 'lodash'
import { bottomReached } from '../utils/utils'

class Establishment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            establishments: [],
            selectedCategory: 'all',
            showPopupFilter: false,
            isLoading: false,
            stillLoadingMore: true
        }
    }

    componentDidMount() {
        this.loadEstablishments('all', '-1')
    }

    loadEstablishments(categoryId, lastId, reset) {
        this.setState(
            {
                isLoading: true,
                establishments: reset ? [] : this.state.establishments
            },
            () => {
                wsGetEstablishmentsByCategory(categoryId, lastId).then(d => {
                    this.setState({
                        establishments: concat(this.state.establishments, d),
                        isLoading: false,
                        stillLoadingMore: d.length > 0
                    })
                })
            }
        )
    }

    render() {
        return (
            <View style={[gs.f1, { backgroundColor: colors.SILVER_LIGHT }]}>
                {this.state.showPopupFilter && (
                    <FilterPopup
                        closePopup={() => {
                            this.setState({ showPopupFilter: false })
                        }}
                        onCategorySelected={selectedCategory => {
                            this.setState(
                                { showPopupFilter: false, selectedCategory },
                                () => {
                                    this.loadEstablishments(
                                        selectedCategory,
                                        '-1',
                                        true
                                    )
                                }
                            )
                        }}
                    />
                )}
                <ScrollView
                    onScroll={({ nativeEvent }) => {
                        if (this.state.stillLoadingMore) {
                            if (bottomReached(nativeEvent)) {
                                let lastId =
                                    this.state.establishments.length == 0
                                        ? -1
                                        : this.state.establishments[
                                              this.state.establishments.length -
                                                  1
                                          ].id
                                this.loadEstablishments(
                                    this.state.selectedCategory,
                                    lastId
                                )
                            }
                        }
                    }}
                    scrollEventThrottle={20}>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: 10,
                            paddingHorizontal: 15,
                            justifyContent: 'flex-end'
                        }}>
                        <View style={[gs.filterButtonContainer, {}]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ showPopupFilter: true })
                                }}>
                                <Icon name={'filter-outline'} size={25}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {!this.state.isLoading &&
                        this.state.establishments.length == 0 && (
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        height: 200,
                                        marginBottom: 25
                                    }}
                                    source={require('../assets/noEstablishments.png')}
                                />
                                <Txt style={{ fontSize: 20 }}>
                                    {I18n.t('establishments.noEstablishments')}
                                </Txt>
                            </View>
                        )}
                    {this.state.establishments.length > 0 && (
                        <FlatList
                            data={this.state.establishments}
                            keyExtractor={(d, i) => i.toString()}
                            renderItem={d => {
                                return (
                                    <EstablishmentListItem
                                        item={d.item}
                                        navigation={this.props.navigation}
                                    />
                                )
                            }}
                        />
                    )}

                    {this.state.stillLoadingMore && <LoadingItem />}
                </ScrollView>
            </View>
        )
    }
}

let st = StyleSheet.create({})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Establishment)
