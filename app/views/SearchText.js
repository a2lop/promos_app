import React from 'react'
import {
    ScrollView,
    View,
    Image,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native'
import LoadingItem from '../components/Loading'
import Txt from '../components/Txt'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import OfferListItem from '../components/OfferListItem'

import { globalStyles as gs } from '../utils/styles'
import { connect } from 'react-redux'
import I18n from '../utils/i18n'
import { colors } from '../utils/constants'
import { getDaysString } from '../utils/utils'

import { wsSearchByText } from '../services/data'

class SearchText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            offers: [],
            txtSearch: ''
        }
    }

    search = () => {
        this.setState({ isLoading: false }, () => {
            clearTimeout(this.to)
            this.to = setTimeout(() => {
                if (this.state.txtSearch.length > 2) {
                    this.setState({ isLoading: true }, () => {
                        wsSearchByText(this.state.txtSearch).then(response => {
                            this.setState({
                                offers: response,
                                isLoading: false
                            })
                        })
                    })
                }
            }, 300)
        })
    }

    render() {
        return (
            <ScrollView style={gs.dfPageContainer}>
                <View style={st.inputContainer}>
                    <TextInput
                        style={st.inputText}
                        placeholder={I18n.t('searchText.phSearch')}
                        autoCapitalize={'none'}
                        value={this.state.txtSearch}
                        onChangeText={txtSearch =>
                            this.setState({ txtSearch }, () => {
                                this.search()
                            })
                        }
                    />

                    <View style={st.inputIconContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ txtSearch: '', offers: [] })
                            }}>
                            <Icon
                                style={st.inputIcon}
                                name={
                                    this.state.txtSearch != ''
                                        ? 'close'
                                        : 'magnify'
                                }
                                size={25}
                                color={colors.DARK}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.isLoading && <LoadingItem />}

                {this.state.offers.length == 0 && !this.state.isLoading && (
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                height: 200,
                                marginBottom: 25
                            }}
                            source={require('../assets/noResults.png')}
                        />
                        <Txt style={{ fontSize: 20 }}>
                            {I18n.t('searchText.noResults')}
                        </Txt>
                    </View>
                )}

                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.offers}
                    keyExtractor={(d, i) => i.toString()}
                    renderItem={d => {
                        return (
                            <OfferListItem
                                item={d.item}
                                navigation={this.props.navigation}
                                showDays={true}
                            />
                        )
                    }}></FlatList>
            </ScrollView>
        )
    }
}

const st = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    inputText: {
        borderBottomColor: colors.DARK,
        borderBottomWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    inputIconContainer: {
        position: 'absolute',
        right: 15,
        top: 10
    }
})

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchText)
