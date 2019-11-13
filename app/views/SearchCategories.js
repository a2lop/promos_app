import React from 'react'
import { ScrollView, View } from 'react-native'
import CategorySimple from '../components/CategorySimple'
import LoadingItem from '../components/Loading'

import { connect } from 'react-redux'
// import I18n from '../utils/i18n'
import Txt from '../components/Txt'

import { globalStyles as gs } from '../utils/styles'
import { fnGetCategories } from '../actions/actions'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../utils/constants'

class SearchCategories extends React.Component {
    componentDidMount() {
        this.props.fnGetCategories()
    }

    render() {
        return (
            <ScrollView
                style={[
                    gs.dfPageContainer,
                    { paddingVertical: 15, paddingHorizontal: 15 }
                ]}>
                <FlatList
                    data={this.props.categories}
                    keyExtractor={(d, i) => i.toString()}
                    numColumns={2}
                    style={{ flexDirection: 'column' }}
                    renderItem={d => {
                        return (
                            <View style={gs.f1}>
                                <CategorySimple
                                    item={d.item}
                                    navigation={
                                        this.props.navigation
                                    }></CategorySimple>
                            </View>
                        )
                    }}></FlatList>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return { categories: state.dataReducer.categoriesParents }
}

const mapDispatchToProps = { fnGetCategories }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCategories)
