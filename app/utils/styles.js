import { StyleSheet } from 'react-native'
import { colors } from './constants'

const globalStyles = StyleSheet.create({
    //COMMON
    fdRow: {
        flexDirection: 'row'
    },
    f1: {
        flex: 1
    },
    dfSafeArea: { flex: 1 },
    //HEADER
    barSafeArea: { backgroundColor: colors.RED },
    headerContainer: {
        backgroundColor: colors.RED,
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 15
    },
    headerMainContainer: {
        alignItems: 'center',
        flex: 1
    },
    headerImage: {
        height: 40,
        resizeMode: 'contain'
    },

    //LIST ITEMS
    liContentContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: colors.SILVER_LIGHT
    },
    liContainer: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: colors.SILVER,
        borderWidth: 1
        // shadowOffset: { height: 1 },
        // shadowColor: colors.DARK,
        // shadowOpacity: 1,
        // elevation: 1
    },
    liSquareImageContainer: {
        marginRight: 10,
        width: 70,
        height: 70
    },
    liSquareImage: {
        width: 70,
        resizeMode: 'contain',
        height: 70
    },
    liTitle: {
        fontSize: 22,
        fontWeight: '600'
    },
    liSubitle: {
        fontSize: 15,
        fontStyle: 'italic'
    },
    liDescription: {
        fontSize: 15
    }
})

export { globalStyles }
