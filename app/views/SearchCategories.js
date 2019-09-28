import React from 'react'
import { ScrollView } from 'react-native'
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
            <ScrollView style={gs.dfPageContainer}>
                <FlatList
                    data={this.props.categories}
                    renderItem={d => {
                        return (
                            <Txt
                                key={d.index}
                                style={{
                                    color: colors.GRAY,
                                    backgroundColor: 'red'
                                }}>
                                {d.item.name}1234
                            </Txt>
                        )
                    }}></FlatList>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return { categories: state.dataReducer.categories }
}

const mapDispatchToProps = { fnGetCategories }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCategories)
