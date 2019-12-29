import { StyleSheet, Dimensions } from 'react-native'
import { colors } from './constants'

const globalStyles = StyleSheet.create({
    //COMMON
    jcCenter: { justifyContent: 'center' },
    fdRow: {
        flexDirection: 'row'
    },
    f1: {
        flex: 1
    },
    fw: { width: Dimensions.get('window').width },
    dfSafeArea: { flex: 1 },
    mb5: { marginBottom: 5 },
    mb10: { marginBottom: 10 },
    mb15: { marginBottom: 15 },
    mr5: { marginRight: 5 },
    mr10: { marginRight: 10 },
    mr15: { marginRight: 15 },
    //HEADER
    barSafeArea: { backgroundColor: colors.YELLOW },
    headerContainer: {
        backgroundColor: colors.YELLOW,
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
    headerTextContainer: { flex: 1, alignItems: 'center' },
    headerText: {
        color: colors.PURPLE,
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerFakeIcon: {
        width: 40
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
        borderWidth: 1,
        zIndex: 1
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
    },
    //VIEW
    mainImageContainer: {
        // alignItems: 'center',
        alignContent: 'flex-start',
        backgroundColor: 'red'
    },
    mainImage: {
        aspectRatio: 2,
        width: '100%',
        alignSelf: 'center'
    },
    dfTitle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dfSectionTitle: {
        fontSize: 18
    },

    dfSubtitle: { fontSize: 18, textAlign: 'center' },
    dfLongText: {
        fontSize: 16
    },
    dfPageContainer: {
        backgroundColor: colors.SILVER_LIGHT
        // paddingHorizontal: 15,
        // paddingVertical: 10
    },
    dfMainContainer: {
        // marginHorizontal: 15,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.WHITE,
        borderColor: colors.SILVER,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginBottom: 15
    },
    dfGenericContainer: {
        borderColor: colors.SILVER,
        backgroundColor: colors.WHITE,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    dfSimpleTitle: {
        fontSize: 17
    },
    dfSimpleSubtitle: {
        fontSize: 15
    },
    filterButtonContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        zIndex: 2
    },
    fullscreenContainer: {
        position: 'absolute',
        top: 0,
        // bottom: 0,
        height: '100%',
        left: 0,
        right: 0,
        backgroundColor: colors.PURPLE_TRANSPARENT,
        paddingHorizontal: 15,
        paddingVertical: 15,
        zIndex: 10
    }
})

export { globalStyles }
